import type { Request, Response, NextFunction } from "express"
import { logger } from "../utils/logger"
import { AppError } from "../utils/app-error"
import type { ApiResponse } from "../types/common.types"

export const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction): void => {
  logger.error("Error occurred:", {
    message: error.message,
    stack: error.stack,
    url: req.url,
    method: req.method,
  })

  if (error instanceof AppError) {
    const response: ApiResponse = {
      success: false,
      message: error.message,
      errors: error.errors,
    }
    res.status(error.statusCode).json(response)
    return
  }

  const response: ApiResponse = {
    success: false,
    message: "Internal server error",
    errors: ["An unexpected error occurred"],
  }
  res.status(500).json(response)
}
