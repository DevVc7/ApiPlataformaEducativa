import type { UserRole, CourseType, QuestionType, QuestionDifficulty } from "./common.types"

export interface User {
  id: string
  email: string
  password: string
  firstName: string
  lastName: string
  role: UserRole
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

export interface Student {
  id: string
  userId: string
  studentCode: string
  gradeId: string
  sectionId: string
  enrollmentDate: Date
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

export interface Grade {
  id: string
  name: string
  level: number
  description?: string
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

export interface Section {
  id: string
  name: string
  gradeId: string
  capacity: number
  currentStudents: number
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

export interface Course {
  id: string
  name: string
  code: string
  type: CourseType
  description?: string
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

export interface SubjectArea {
  id: string
  name: string
  courseId: string
  description?: string
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

export interface Question {
  id: string
  title: string
  content: string
  type: QuestionType
  difficulty: QuestionDifficulty
  subjectAreaId: string
  options?: QuestionOption[]
  correctAnswer: string
  explanation?: string
  points: number
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

export interface QuestionOption {
  id: string
  questionId: string
  text: string
  isCorrect: boolean
  order: number
}

export interface Staff {
  id: string
  userId: string
  employeeCode: string
  department: string
  position: string
  hireDate: Date
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}
