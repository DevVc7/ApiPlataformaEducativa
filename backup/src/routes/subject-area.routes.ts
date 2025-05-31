import { Router } from "express"
import { SubjectAreaController } from "../controllers/subject-area.controller"
import { authenticate, authorize } from "../middleware/auth.middleware"
import { UserRole } from "../types/common.types"

const router = Router()
const subjectAreaController = new SubjectAreaController()

router.use(authenticate)

router.get("/", subjectAreaController.getAll)
router.get("/:id", subjectAreaController.getById)
router.get("/course/:courseId", subjectAreaController.getByCourse)
router.post("/", authorize(UserRole.ADMIN, UserRole.TEACHER), subjectAreaController.create)
router.put("/:id", authorize(UserRole.ADMIN, UserRole.TEACHER), subjectAreaController.update)
router.delete("/:id", authorize(UserRole.ADMIN), subjectAreaController.delete)

export { router as subjectAreaRoutes }
