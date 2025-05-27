import type { Response, NextFunction } from "express"
import { ResponseHelper } from "../utils/response.helper"
import type { AuthenticatedRequest } from "../middleware/auth.middleware"

export class SubjectAreaController {
  getAll = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
      // TODO: Implement subject area service
      ResponseHelper.success(res, "Subject areas retrieved successfully", [])
    } catch (error) {
      next(error)
    }
  }

  getById = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params
      // TODO: Implement subject area service
      ResponseHelper.success(res, "Subject area retrieved successfully", { id })
    } catch (error) {
      next(error)
    }
  }

  getByCourse = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { courseId } = req.params
      // TODO: Implement subject area service
      ResponseHelper.success(res, "Subject areas by course retrieved successfully", { courseId })
    } catch (error) {
      next(error)
    }
  }

  create = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
      // TODO: Implement subject area service
      ResponseHelper.created(res, "Subject area created successfully", req.body)
    } catch (error) {
      next(error)
    }
  }

  update = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params
      // TODO: Implement subject area service
      ResponseHelper.success(res, "Subject area updated successfully", { id, ...req.body })
    } catch (error) {
      next(error)
    }
  }

  delete = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
      // TODO: Implement subject area service
      ResponseHelper.noContent(res)
    } catch (error) {
      next(error)
    }
  }
}
