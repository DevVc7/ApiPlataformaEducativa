import type { Response, NextFunction } from "express"
import { ResponseHelper } from "../utils/response.helper"
import type { AuthenticatedRequest } from "../middleware/auth.middleware"

export class GradeController {
  getAll = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
      // TODO: Implement grade service
      ResponseHelper.success(res, "Grades retrieved successfully", [])
    } catch (error) {
      next(error)
    }
  }

  getById = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params
      // TODO: Implement grade service
      ResponseHelper.success(res, "Grade retrieved successfully", { id })
    } catch (error) {
      next(error)
    }
  }

  create = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
      // TODO: Implement grade service
      ResponseHelper.created(res, "Grade created successfully", req.body)
    } catch (error) {
      next(error)
    }
  }

  update = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params
      // TODO: Implement grade service
      ResponseHelper.success(res, "Grade updated successfully", { id, ...req.body })
    } catch (error) {
      next(error)
    }
  }

  delete = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
      // TODO: Implement grade service
      ResponseHelper.noContent(res)
    } catch (error) {
      next(error)
    }
  }
}
