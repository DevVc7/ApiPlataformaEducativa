import { Router } from "express"
import { ResponseHelper } from "../utils/response.helper"

const router = Router()

router.get("/", (req, res) => {
  ResponseHelper.success(res, "Grades endpoint working", [])
})

export { router as gradeRoutes }
