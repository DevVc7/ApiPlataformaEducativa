import type { Response, NextFunction } from "express"
import { ResponseHelper } from "../utils/response.helper"
import type { AuthenticatedRequest } from "../middleware/auth.middleware"

export class CourseController {
  getAll = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
      // TODO: Implement course service
      ResponseHelper.success(res, "Courses retrieved successfully", [])
    } catch (error) {
      next(error)
    }
  }

  getById = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params
      // TODO: Implement course service
      ResponseHelper.success(res, "Course retrieved successfully", { id })
    } catch (error) {
      next(error)
    }
  }

  create = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
      // TODO: Implement course service
      ResponseHelper.created(res, "Course created successfully", req.body)
    } catch (error) {
      next(error)
    }
  }

  update = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params
      // TODO: Implement course service
      ResponseHelper.success(res, "Course updated successfully", { id, ...req.body })
    } catch (error) {
      next(error)
    }
  }

  delete = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
      // TODO: Implement course service
      ResponseHelper.noContent(res)
    } catch (error) {
      next(error)
    }
  }
}
