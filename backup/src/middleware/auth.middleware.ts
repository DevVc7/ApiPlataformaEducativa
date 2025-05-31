import type { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
import { config } from "../config/environment"
import type { UserRole } from "../types/common.types"
import { AppError } from "../utils/app-error"

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string
    email: string
    role: UserRole
  }
}

export const authenticate = (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "")

    if (!token) {
      throw new AppError("Access token is required", 401)
    }

    const decoded = jwt.verify(token, config.JWT_SECRET) as any
    req.user = decoded
    next()
  } catch (error) {
    next(new AppError("Invalid or expired token", 401))
  }
}

export const authorize = (...roles: UserRole[]) => {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
    if (!req.user) {
      return next(new AppError("Authentication required", 401))
    }

    if (!roles.includes(req.user.role)) {
      return next(new AppError("Insufficient permissions", 403))
    }

    next()
  }
}
