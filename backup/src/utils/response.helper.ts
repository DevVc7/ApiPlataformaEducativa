import type { Response } from "express"
import type { ApiResponse } from "../types/common.types"

export class ResponseHelper {
  static success<T>(res: Response, message: string, data?: T, statusCode = 200): void {
    const response: ApiResponse<T> = { success: true, message, data }
    res.status(statusCode).json(response)
  }

  static error(res: Response, message: string, errors: string[] = [], statusCode = 400): void {
    const response: ApiResponse = {
      success: false,
      message,
      errors: errors.length > 0 ? errors : [message],
    }
    res.status(statusCode).json(response)
  }

  static created<T>(res: Response, message: string, data?: T): void {
    this.success(res, message, data, 201)
  }
}
