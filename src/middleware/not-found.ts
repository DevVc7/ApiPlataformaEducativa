import type { Request, Response } from "express"
import type { ApiResponse } from "../types/common.types"

export const notFoundHandler = (req: Request, res: Response): void => {
  const response: ApiResponse = {
    success: false,
    message: "Resource not found",
    errors: [`Route ${req.method} ${req.path} not found`],
  }
  res.status(404).json(response)
}
