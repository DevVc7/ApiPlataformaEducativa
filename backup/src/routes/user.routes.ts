import { Router } from "express"
import { UserController } from "../controllers/user.controller"
import { authenticate, authorize } from "../middleware/auth.middleware"
import { UserRole } from "../types/common.types"

const router = Router()
const userController = new UserController()

router.use(authenticate)

router.get("/", authorize(UserRole.ADMIN), userController.getAll)
router.get("/:id", authorize(UserRole.ADMIN, UserRole.TEACHER), userController.getById)
router.put("/:id", authorize(UserRole.ADMIN), userController.update)
router.delete("/:id", authorize(UserRole.ADMIN), userController.delete)

export { router as userRoutes }
