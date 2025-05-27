# 🚀 Quick Start Guide

## Comandos para levantar la API

### 1. Setup completo (una sola vez)
\`\`\`bash
npm run setup
\`\`\`
Este comando hace todo: instala dependencias, genera Prisma, crea la base de datos y agrega datos de prueba.

### 2. Levantar en desarrollo
\`\`\`bash
npm run dev
\`\`\`

### 3. Ver la base de datos (opcional)
\`\`\`bash
npm run studio
\`\`\`

## 🎯 URLs importantes

- **Health Check**: http://localhost:3000/health
- **API Base**: http://localhost:3000/api/v1
- **Prisma Studio**: http://localhost:5555 (después de \`npm run studio\`)

## 🔐 Usuarios de prueba

- **Admin**: admin@educational.com / admin123
- **Teacher**: teacher@educational.com / teacher123

## 📝 Probar la API

### 1. Registrar usuario
\`\`\`bash
curl -X POST http://localhost:3000/api/v1/auth/register \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "test@test.com",
    "password": "password123",
    "firstName": "Test",
    "lastName": "User",
    "role": "TEACHER"
  }'
\`\`\`

### 2. Login
\`\`\`bash
curl -X POST http://localhost:3000/api/v1/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "admin@educational.com",
    "password": "admin123"
  }'
\`\`\`

### 3. Obtener estudiantes (necesita token)
\`\`\`bash
curl -X GET http://localhost:3000/api/v1/students \\
  -H "Authorization: Bearer TU_TOKEN_AQUI"
\`\`\`

## ✅ Todo está listo para usar!
