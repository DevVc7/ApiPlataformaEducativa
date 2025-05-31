import { PrismaClient } from "@prisma/client"
import type { Student } from "../types/entities.types"
import { AppError } from "../utils/app-error"
import { BaseService } from "./base.service"

const prisma = new PrismaClient()

interface CreateStudentData {
  userId: string
  studentCode: string
  gradeId: string
  sectionId: string
  enrollmentDate: Date
}

interface UpdateStudentData {
  gradeId?: string
  sectionId?: string
  isActive?: boolean
}

interface GetAllParams {
  page: number
  limit: number
  skip: number
  sortBy: string
  sortOrder: string
  search?: string
}

export class StudentService extends BaseService {
  async getAll(params: GetAllParams): Promise<{ students: Student[]; total: number }> {
    try {
      const [students, total] = await Promise.all([
        prisma.student.findMany({
          skip: params.skip,
          take: params.limit,
          orderBy: { [params.sortBy]: params.sortOrder },
          where: params.search
            ? {
                OR: [
                  { studentCode: { contains: params.search, mode: "insensitive" } },
                  { user: { firstName: { contains: params.search, mode: "insensitive" } } },
                  { user: { lastName: { contains: params.search, mode: "insensitive" } } },
                ],
              }
            : {},
          include: {
            user: { select: { firstName: true, lastName: true, email: true } },
            grade: { select: { name: true, level: true } },
            section: { select: { name: true } },
          },
        }),
        prisma.student.count({
          where: params.search
            ? {
                OR: [
                  { studentCode: { contains: params.search, mode: "insensitive" } },
                  { user: { firstName: { contains: params.search, mode: "insensitive" } } },
                  { user: { lastName: { contains: params.search, mode: "insensitive" } } },
                ],
              }
            : {},
        }),
      ])

      return {
        students,
        total,
      }
    } catch (error) {
      this.handleError(error, "StudentService.getAll")
    }
  }

  async getById(id: string): Promise<Student> {
    try {
      this.validateId(id, "student")

      const student = await prisma.student.findUnique({
        where: { id },
        include: {
          user: { select: { firstName: true, lastName: true, email: true } },
          grade: { select: { name: true, level: true } },
          section: { select: { name: true } },
        },
      })

      if (!student) {
        throw new AppError("Student not found", 404)
      }

      return student as Student
    } catch (error) {
      this.handleError(error, "StudentService.getById")
    }
  }

  async create(data: CreateStudentData): Promise<Student> {
    try {
      // TODO: Validate that user exists and is not already a student
      // TODO: Validate that grade and section exist
      // TODO: Check section capacity

      const student = await prisma.student.create({
        data: {
          ...data,
          enrollmentDate: new Date(data.enrollmentDate),
        },
        include: {
          user: { select: { firstName: true, lastName: true, email: true } },
          grade: { select: { name: true, level: true } },
          section: { select: { name: true } },
        },
      })

      return student as Student
    } catch (error) {
      this.handleError(error, "StudentService.create")
    }
  }

  async update(id: string, data: UpdateStudentData): Promise<Student> {
    try {
      this.validateId(id, "student")

      // TODO: Validate that student exists
      // TODO: If changing section, check capacity

      const student = await prisma.student.update({
        where: { id },
        data: {
          ...data,
          updatedAt: new Date(),
        },
        include: {
          user: { select: { firstName: true, lastName: true, email: true } },
          grade: { select: { name: true, level: true } },
          section: { select: { name: true } },
        },
      })

      return student as Student
    } catch (error) {
      this.handleError(error, "StudentService.update")
    }
  }

  async delete(id: string): Promise<void> {
    try {
      this.validateId(id, "student")

      // TODO: Soft delete or hard delete based on business rules
      await prisma.student.delete({ where: { id } })
    } catch (error) {
      this.handleError(error, "StudentService.delete")
    }
  }
}
