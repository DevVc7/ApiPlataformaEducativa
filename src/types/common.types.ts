export interface ApiResponse<T = any> {
  success: boolean
  message: string
  data?: T
  errors?: string[]
}

export enum UserRole {
  ADMIN = "ADMIN",
  TEACHER = "TEACHER",
  STUDENT = "STUDENT",
  COORDINATOR = "COORDINATOR",
}

export enum CourseType {
  MATHEMATICS = "MATHEMATICS",
  COMMUNICATION = "COMMUNICATION",
}

export enum QuestionType {
  MULTIPLE_CHOICE = "MULTIPLE_CHOICE",
  TRUE_FALSE = "TRUE_FALSE",
  OPEN_ENDED = "OPEN_ENDED",
  FILL_BLANK = "FILL_BLANK",
}

export enum QuestionDifficulty {
  EASY = "EASY",
  MEDIUM = "MEDIUM",
  HARD = "HARD",
}
