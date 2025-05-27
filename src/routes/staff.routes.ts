import { Router } from "express"
import { StaffController } from "../controllers/staff.controller"
import { authenticate, authorize } from "../middleware/auth.middleware"
import { UserRole } from "../types/common.types"

const router = Router()
const staffController = new StaffController()

router.use(authenticate)

router.get("/", authorize(UserRole.ADMIN, UserRole.COORDINATOR), staffController.getAll)
router.get("/:id", authorize(UserRole.ADMIN, UserRole.COORDINATOR), staffController.getById)
router.post("/", authorize(UserRole.ADMIN), staffController.create)
router.put("/:id", authorize(UserRole.ADMIN), staffController.update)
router.delete("/:id", authorize(UserRole.ADMIN), staffController.delete)

export { router as staffRoutes }
