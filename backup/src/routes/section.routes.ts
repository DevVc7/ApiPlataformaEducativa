import { Router } from "express"
import { SectionController } from "../controllers/section.controller"
import { authenticate, authorize } from "../middleware/auth.middleware"
import { UserRole } from "../types/common.types"

const router = Router()
const sectionController = new SectionController()

router.use(authenticate)

router.get("/", sectionController.getAll)
router.get("/:id", sectionController.getById)
router.post("/", authorize(UserRole.ADMIN, UserRole.COORDINATOR), sectionController.create)
router.put("/:id", authorize(UserRole.ADMIN, UserRole.COORDINATOR), sectionController.update)
router.delete("/:id", authorize(UserRole.ADMIN), sectionController.delete)

export { router as sectionRoutes }
