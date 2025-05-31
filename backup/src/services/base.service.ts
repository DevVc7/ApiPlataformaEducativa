export abstract class BaseService {
  protected handleError(error: any, operation: string): never {
    console.error(`Error in ${operation}:`, error)
    throw error
  }

  protected validateId(id: string, entityName: string): void {
    if (!id || typeof id !== "string") {
      throw new Error(`Invalid ${entityName} ID`)
    }
  }
}
