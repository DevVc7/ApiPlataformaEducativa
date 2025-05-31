import type { Request, Response, NextFunction } from "express"
import { validationResult, type ValidationChain } from "express-validator"
import { AppError } from "../utils/app-error"

export const validate = (validations: ValidationChain[]) => {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    await Promise.all(validations.map((validation) => validation.run(req)))

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      const errorMessages = errors.array().map((error) => error.msg)
      return next(new AppError("Validation failed", 400, errorMessages))
    }

    next()
  }
}
