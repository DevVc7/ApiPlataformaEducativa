import type { Response, NextFunction } from "express"
import { ResponseHelper } from "../utils/response.helper"
import type { AuthenticatedRequest } from "../middleware/auth.middleware"

export class UserController {
  getAll = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
      // TODO: Implement user service
      ResponseHelper.success(res, "Users retrieved successfully", [])
    } catch (error) {
      next(error)
    }
  }

  getById = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params
      // TODO: Implement user service
      ResponseHelper.success(res, "User retrieved successfully", { id })
    } catch (error) {
      next(error)
    }
  }

  update = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params
      // TODO: Implement user service
      ResponseHelper.success(res, "User updated successfully", { id })
    } catch (error) {
      next(error)
    }
  }

  delete = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params
      // TODO: Implement user service
      ResponseHelper.noContent(res)
    } catch (error) {
      next(error)
    }
  }
}
