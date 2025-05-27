import { Router } from "express"
import { ResponseHelper } from "../utils/response.helper"

const router = Router()

router.get("/", (req, res) => {
  ResponseHelper.success(res, "Courses endpoint working", [])
})

export { router as courseRoutes }
