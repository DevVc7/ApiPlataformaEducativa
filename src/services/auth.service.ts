import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { PrismaClient } from "@prisma/client"
import { config } from "../config/environment"
import { AppError } from "../utils/app-error"
import type { UserRole } from "../types/common.types"

const prisma = new PrismaClient()

interface LoginResult {
  user: {
    id: string
    email: string
    firstName: string
    lastName: string
    role: UserRole
  }
  accessToken: string
  refreshToken: string
}

interface RegisterData {
  email: string
  password: string
  firstName: string
  lastName: string
  role: UserRole
}

export class AuthService {
  async login(email: string, password: string): Promise<LoginResult> {
    const user = await prisma.user.findUnique({ where: { email } })

    if (!user || !user.isActive) {
      throw new AppError("Invalid credentials", 401)
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      throw new AppError("Invalid credentials", 401)
    }

    const accessToken = this.generateAccessToken(user)
    const refreshToken = this.generateRefreshToken(user)

    return {
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role as UserRole,
      },
      accessToken,
      refreshToken,
    }
  }

  async register(userData: RegisterData): Promise<LoginResult> {
    const existingUser = await prisma.user.findUnique({ where: { email: userData.email } })
    if (existingUser) {
      throw new AppError("User already exists", 400)
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10)

    const user = await prisma.user.create({
      data: {
        ...userData,
        password: hashedPassword,
      },
    })

    const accessToken = this.generateAccessToken(user)
    const refreshToken = this.generateRefreshToken(user)

    return {
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role as UserRole,
      },
      accessToken,
      refreshToken,
    }
  }

  private generateAccessToken(user: any): string {
    return jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: user.role,
      },
      config.JWT_SECRET,
      { expiresIn: config.JWT_EXPIRES_IN },
    )
  }

  private generateRefreshToken(user: any): string {
    return jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: user.role,
      },
      config.JWT_REFRESH_SECRET,
      { expiresIn: config.JWT_REFRESH_EXPIRES_IN },
    )
  }
}
