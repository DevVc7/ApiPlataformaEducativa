import type { Response, NextFunction } from "express"
import { ResponseHelper } from "../utils/response.helper"
import type { AuthenticatedRequest } from "../middleware/auth.middleware"

export class QuestionController {
  getAll = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
      // TODO: Implement question service
      ResponseHelper.success(res, "Questions retrieved successfully", [])
    } catch (error) {
      next(error)
    }
  }

  getById = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params
      // TODO: Implement question service
      ResponseHelper.success(res, "Question retrieved successfully", { id })
    } catch (error) {
      next(error)
    }
  }

  getBySubjectArea = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { subjectAreaId } = req.params
      // TODO: Implement question service
      ResponseHelper.success(res, "Questions by subject area retrieved successfully", { subjectAreaId })
    } catch (error) {
      next(error)
    }
  }

  create = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
      // TODO: Implement question service
      ResponseHelper.created(res, "Question created successfully", req.body)
    } catch (error) {
      next(error)
    }
  }

  update = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params
      // TODO: Implement question service
      ResponseHelper.success(res, "Question updated successfully", { id, ...req.body })
    } catch (error) {
      next(error)
    }
  }

  delete = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
      // TODO: Implement question service
      ResponseHelper.noContent(res)
    } catch (error) {
      next(error)
    }
  }
}
