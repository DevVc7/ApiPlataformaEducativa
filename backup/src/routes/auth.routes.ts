import { Router } from "express"
import { AuthController } from "../controllers/auth.controller"

const router = Router()
const authController = new AuthController()

router.post("/login", authController.login)
router.post("/register", authController.register)

export { router as authRoutes }
