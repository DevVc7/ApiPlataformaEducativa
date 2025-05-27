import { Router } from "express"
import { ResponseHelper } from "../utils/response.helper"

const router = Router()

router.get("/", (req, res) => {
  ResponseHelper.success(res, "Questions endpoint working", [])
})

export { router as questionRoutes }
