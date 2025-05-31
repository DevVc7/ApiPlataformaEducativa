import dotenv from "dotenv"

dotenv.config()

export const config = {
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: Number.parseInt(process.env.PORT || "3000", 10),
  JWT_SECRET: process.env.JWT_SECRET || "your-super-secret-jwt-key",
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || "24h",
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET || "your-refresh-secret",
  JWT_REFRESH_EXPIRES_IN: process.env.JWT_REFRESH_EXPIRES_IN || "7d",
  CORS_ORIGIN: process.env.CORS_ORIGIN || "http://localhost:3000",
  LOG_LEVEL: process.env.LOG_LEVEL || "info",
}
