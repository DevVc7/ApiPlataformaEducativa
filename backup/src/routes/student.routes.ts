import { Router } from "express"
import { StudentController } from "../controllers/student.controller"
import { authenticate, authorize } from "../middleware/auth.middleware"
import { UserRole } from "../types/common.types"

const router = Router()
const studentController = new StudentController()

router.use(authenticate)

router.get("/", authorize(UserRole.ADMIN, UserRole.TEACHER), studentController.getAll)
router.get("/:id", authorize(UserRole.ADMIN, UserRole.TEACHER), studentController.getById)
router.post("/", authorize(UserRole.ADMIN), studentController.create)

export { router as studentRoutes }
