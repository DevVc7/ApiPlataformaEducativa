import type { PaginationQuery, PaginationInfo } from "../types/common.types"

export class PaginationHelper {
  static getPaginationParams(query: PaginationQuery) {
    const page = Math.max(1, query.page || 1)
    const limit = Math.min(100, Math.max(1, query.limit || 10))
    const skip = (page - 1) * limit
    const sortBy = query.sortBy || "createdAt"
    const sortOrder = query.sortOrder || "desc"

    return {
      page,
      limit,
      skip,
      sortBy,
      sortOrder,
      search: query.search,
    }
  }

  static createPaginationInfo(page: number, limit: number, total: number): PaginationInfo {
    const totalPages = Math.ceil(total / limit)

    return {
      page,
      limit,
      total,
      totalPages,
      hasNext: page < totalPages,
      hasPrev: page > 1,
    }
  }
}
