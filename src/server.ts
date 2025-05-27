import express from "express"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"
import compression from "compression"
import rateLimit from "express-rate-limit"
import { config } from "./config/environment"
import { logger } from "./utils/logger"
import { errorHandler } from "./middleware/error-handler"
import { notFoundHandler } from "./middleware/not-found"
import { authRoutes } from "./routes/auth.routes"
import { studentRoutes } from "./routes/student.routes"
import { gradeRoutes } from "./routes/grade.routes"
import { courseRoutes } from "./routes/course.routes"
import { questionRoutes } from "./routes/question.routes"

class Server {
  private app: express.Application
  private port: number

  constructor() {
    this.app = express()
    this.port = config.PORT
    this.initializeMiddlewares()
    this.initializeRoutes()
    this.initializeErrorHandling()
  }

  private initializeMiddlewares(): void {
    this.app.use(helmet())
    this.app.use(cors({ origin: config.CORS_ORIGIN, credentials: true }))

    const limiter = rateLimit({
      windowMs: 15 * 60 * 1000,
      max: 100,
      message: "Too many requests from this IP",
    })
    this.app.use("/api/", limiter)

    this.app.use(compression())
    this.app.use(morgan("combined"))
    this.app.use(express.json({ limit: "10mb" }))
    this.app.use(express.urlencoded({ extended: true, limit: "10mb" }))

    this.app.get("/health", (req, res) => {
      res.status(200).json({
        status: "OK",
        timestamp: new Date().toISOString(),
        message: "Educational Platform API is running!",
      })
    })
  }

  private initializeRoutes(): void {
    const apiPrefix = "/api/v1"

    this.app.use(`${apiPrefix}/auth`, authRoutes)
    this.app.use(`${apiPrefix}/students`, studentRoutes)
    this.app.use(`${apiPrefix}/grades`, gradeRoutes)
    this.app.use(`${apiPrefix}/courses`, courseRoutes)
    this.app.use(`${apiPrefix}/questions`, questionRoutes)
  }

  private initializeErrorHandling(): void {
    this.app.use(notFoundHandler)
    this.app.use(errorHandler)
  }

  public start(): void {
    this.app.listen(this.port, () => {
      logger.info(`🚀 Server running on port ${this.port}`)
      logger.info(`📚 Educational Platform API v1.0.0`)
      logger.info(`🌍 Environment: ${config.NODE_ENV}`)
      logger.info(`🔗 Health check: http://localhost:${this.port}/health`)
      logger.info(`📖 API Base: http://localhost:${this.port}/api/v1`)
    })
  }
}

const server = new Server()
server.start()
