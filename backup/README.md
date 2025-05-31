# Educational Platform API

Una API REST profesional para plataforma educativa desarrollada con Node.js, TypeScript y Express.

## 🚀 Características

- **Arquitectura Modular**: Estructura organizada por capas (Controllers, Services, Routes, Middleware)
- **TypeScript**: Tipado estático para mayor robustez
- **Autenticación JWT**: Sistema de autenticación seguro con refresh tokens
- **Autorización por Roles**: Control de acceso basado en roles (ADMIN, TEACHER, STUDENT, COORDINATOR)
- **Validación de Datos**: Validación robusta con express-validator
- **Manejo de Errores**: Sistema centralizado de manejo de errores
- **Logging**: Sistema de logs con Winston
- **Paginación**: Paginación automática en endpoints de listado
- **Seguridad**: Implementación de mejores prácticas de seguridad
- **Base de Datos**: Preparado para Prisma ORM con PostgreSQL
- **Preparado para ML**: Estructura lista para integración con servicios de Machine Learning

## 📁 Estructura del Proyecto

\`\`\`
src/
├── config/           # Configuración de la aplicación
├── controllers/      # Controladores de rutas
├── middleware/       # Middleware personalizado
├── routes/          # Definición de rutas
├── services/        # Lógica de negocio
├── types/           # Definiciones de tipos TypeScript
├── utils/           # Utilidades y helpers
└── server.ts        # Punto de entrada de la aplicación
\`\`\`

## 🛠️ Instalación

1. **Clonar el repositorio**
\`\`\`bash
git clone <repository-url>
cd educational-platform-api
\`\`\`

2. **Instalar dependencias**
\`\`\`bash
npm install
\`\`\`

3. **Configurar variables de entorno**
\`\`\`bash
cp .env.example .env
# Editar .env con tus configuraciones
\`\`\`

4. **Configurar base de datos**
\`\`\`bash
# Generar cliente Prisma
npm run generate

# Ejecutar migraciones
npm run migrate
\`\`\`

5. **Iniciar en desarrollo**
\`\`\`bash
npm run dev
\`\`\`

## 🗄️ Entidades del Sistema

### Usuarios y Autenticación
- **Users**: Gestión de usuarios del sistema
- **Authentication**: Login, registro, refresh tokens

### Gestión Académica
- **Students**: Gestión de estudiantes
- **Grades**: Gestión de grados/niveles
- **Sections**: Gestión de secciones por grado
- **Staff**: Gestión de personal docente y administrativo

### Contenido Educativo
- **Courses**: Cursos (Matemáticas, Comunicación)
- **SubjectAreas**: Subáreas por curso (Geometría, Trigonometría, etc.)
- **Questions**: Gestión de preguntas por subárea

## 🔐 Sistema de Autenticación

### Roles de Usuario
- **ADMIN**: Acceso completo al sistema
- **TEACHER**: Gestión de contenido educativo
- **STUDENT**: Acceso limitado a contenido
- **COORDINATOR**: Gestión académica

### Endpoints de Autenticación
\`\`\`
POST /api/v1/auth/login
POST /api/v1/auth/register
POST /api/v1/auth/refresh
POST /api/v1/auth/logout
\`\`\`

## 📚 API Endpoints

### Estudiantes
\`\`\`
GET    /api/v1/students          # Listar estudiantes (paginado)
GET    /api/v1/students/:id      # Obtener estudiante por ID
POST   /api/v1/students          # Crear estudiante
PUT    /api/v1/students/:id      # Actualizar estudiante
DELETE /api/v1/students/:id      # Eliminar estudiante
\`\`\`

### Grados
\`\`\`
GET    /api/v1/grades            # Listar grados
GET    /api/v1/grades/:id        # Obtener grado por ID
POST   /api/v1/grades            # Crear grado
PUT    /api/v1/grades/:id        # Actualizar grado
DELETE /api/v1/grades/:id        # Eliminar grado
\`\`\`

### Cursos y Subáreas
\`\`\`
GET    /api/v1/courses                           # Listar cursos
GET    /api/v1/subject-areas/course/:courseId    # Subáreas por curso
POST   /api/v1/subject-areas                     # Crear subárea
\`\`\`

### Preguntas
\`\`\`
GET    /api/v1/questions                              # Listar preguntas
GET    /api/v1/questions/subject-area/:subjectAreaId # Preguntas por subárea
POST   /api/v1/questions                              # Crear pregunta
\`\`\`

## 🔧 Scripts Disponibles

\`\`\`bash
npm run dev          # Desarrollo con hot reload
npm run build        # Compilar TypeScript
npm start            # Iniciar en producción
npm test             # Ejecutar tests
npm run lint         # Linter
npm run migrate      # Ejecutar migraciones de DB
npm run generate     # Generar cliente Prisma
\`\`\`

## 🐳 Docker

### Desarrollo
\`\`\`bash
docker-compose up -d
\`\`\`

### Producción
\`\`\`bash
docker build -t educational-api .
docker run -p 3000:3000 educational-api
\`\`\`

## 🤖 Integración con Machine Learning

La API está preparada para integración con servicios de ML:

- **Configuración**: Variables de entorno para servicio ML
- **Estructura**: Endpoints preparados para comunicación con Python/ML
- **Tipos**: Interfaces definidas para intercambio de datos

### Configuración ML
\`\`\`env
ML_SERVICE_URL=http://localhost:8000
ML_API_KEY=your-ml-service-api-key
\`\`\`

## 📊 Monitoreo y Logs

- **Health Check**: `GET /health`
- **Logs**: Almacenados en `/logs`
- **Métricas**: Preparado para integración con herramientas de monitoreo

## 🔒 Seguridad

- **Helmet**: Headers de seguridad
- **CORS**: Configuración de CORS
- **Rate Limiting**: Limitación de requests
- **Validación**: Validación estricta de inputs
- **JWT**: Tokens seguros con expiración

## 🚀 Despliegue

### Variables de Entorno Requeridas
\`\`\`env
NODE_ENV=production
DATABASE_URL=postgresql://...
JWT_SECRET=your-secret
CORS_ORIGIN=https://your-frontend.com
\`\`\`

### Consideraciones de Producción
- Configurar HTTPS
- Configurar base de datos en la nube
- Configurar logs centralizados
- Configurar monitoreo
- Configurar backups automáticos

## 📝 Próximos Pasos

1. **Implementar Servicios**: Completar la implementación de todos los servicios
2. **Tests**: Agregar tests unitarios e integración
3. **Documentación API**: Implementar Swagger/OpenAPI
4. **Cache**: Implementar Redis para cache
5. **ML Integration**: Desarrollar endpoints específicos para ML
6. **File Upload**: Implementar subida de archivos
7. **Notifications**: Sistema de notificaciones
8. **Audit Logs**: Logs de auditoría para acciones críticas

## 🤝 Contribución

1. Fork el proyecto
2. Crear rama feature (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.
