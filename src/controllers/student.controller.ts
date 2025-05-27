import type { Response, NextFunction } from "express"
import { StudentService } from "../services/student.service"
import { ResponseHelper } from "../utils/response.helper"
import type { AuthenticatedRequest } from "../middleware/auth.middleware"

export class StudentController {
  private studentService: StudentService

  constructor() {
    this.studentService = new StudentService()
  }

  getAll = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
      const students = await this.studentService.getAll()
      ResponseHelper.success(res, "Students retrieved successfully", students)
    } catch (error) {
      next(error)
    }
  }

  getById = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params
      const student = await this.studentService.getById(id)
      ResponseHelper.success(res, "Student retrieved successfully", student)
    } catch (error) {
      next(error)
    }
  }

  create = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
      const studentData = req.body
      const student = await this.studentService.create(studentData)
      ResponseHelper.created(res, "Student created successfully", student)
    } catch (error) {
      next(error)
    }
  }
}
