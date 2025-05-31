export class AppError extends Error {
  public readonly statusCode: number
  public readonly errors: string[]

  constructor(message: string, statusCode = 500, errors: string[] = []) {
    super(message)
    this.statusCode = statusCode
    this.errors = errors.length > 0 ? errors : [message]
    Error.captureStackTrace(this, this.constructor)
  }
}
