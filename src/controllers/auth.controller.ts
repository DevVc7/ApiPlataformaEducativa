import type { Request, Response, NextFunction } from "express"
import { AuthService } from "../services/auth.service"
import { ResponseHelper } from "../utils/response.helper"

export class AuthController {
  private authService: AuthService

  constructor() {
    this.authService = new AuthService()
  }

  login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { email, password } = req.body
      const result = await this.authService.login(email, password)
      ResponseHelper.success(res, "Login successful", result)
    } catch (error) {
      next(error)
    }
  }

  register = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userData = req.body
      const result = await this.authService.register(userData)
      ResponseHelper.created(res, "User registered successfully", result)
    } catch (error) {
      next(error)
    }
  }
}
