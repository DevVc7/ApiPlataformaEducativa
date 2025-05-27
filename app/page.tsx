"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Users, GraduationCap, Shield, Database, Cpu, Server, Code, FileText, Settings } from "lucide-react"

export default function EducationalPlatformAPI() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <GraduationCap className="h-12 w-12 text-blue-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">Educational Platform API</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            API REST profesional para plataforma educativa desarrollada con Node.js, TypeScript y Express
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <Badge variant="secondary">Node.js</Badge>
            <Badge variant="secondary">TypeScript</Badge>
            <Badge variant="secondary">Express</Badge>
            <Badge variant="secondary">Prisma</Badge>
            <Badge variant="secondary">JWT</Badge>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 mr-2 text-green-600" />
                Autenticación Segura
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Sistema JWT con refresh tokens y autorización por roles</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-blue-600" />
                Gestión de Usuarios
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">CRUD completo para estudiantes, profesores y personal</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="h-5 w-5 mr-2 text-purple-600" />
                Contenido Educativo
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Gestión de cursos, subáreas y preguntas organizadas</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Database className="h-5 w-5 mr-2 text-orange-600" />
                Base de Datos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Esquema Prisma con PostgreSQL y relaciones optimizadas</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Cpu className="h-5 w-5 mr-2 text-red-600" />
                ML Ready
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Preparado para integración con servicios de Machine Learning</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Server className="h-5 w-5 mr-2 text-indigo-600" />
                Arquitectura Modular
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Estructura organizada por capas y mejores prácticas</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Resumen</TabsTrigger>
            <TabsTrigger value="endpoints">Endpoints</TabsTrigger>
            <TabsTrigger value="structure">Estructura</TabsTrigger>
            <TabsTrigger value="setup">Instalación</TabsTrigger>
            <TabsTrigger value="deployment">Deploy</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>🎯 Características Principales</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center">
                    <Code className="h-4 w-4 mr-2 text-blue-500" />
                    <span>TypeScript con tipado estricto</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="h-4 w-4 mr-2 text-green-500" />
                    <span>Autenticación JWT + Refresh Tokens</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2 text-purple-500" />
                    <span>Sistema de roles y permisos</span>
                  </div>
                  <div className="flex items-center">
                    <Database className="h-4 w-4 mr-2 text-orange-500" />
                    <span>Prisma ORM con PostgreSQL</span>
                  </div>
                  <div className="flex items-center">
                    <FileText className="h-4 w-4 mr-2 text-red-500" />
                    <span>Validación robusta de datos</span>
                  </div>
                  <div className="flex items-center">
                    <Settings className="h-4 w-4 mr-2 text-gray-500" />
                    <span>Logging y manejo de errores</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>🏗️ Entidades del Sistema</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge variant="outline">Users - Usuarios del sistema</Badge>
                  <Badge variant="outline">Students - Gestión de estudiantes</Badge>
                  <Badge variant="outline">Staff - Personal docente</Badge>
                  <Badge variant="outline">Grades - Grados académicos</Badge>
                  <Badge variant="outline">Sections - Secciones por grado</Badge>
                  <Badge variant="outline">Courses - Cursos (Mate/Comunicación)</Badge>
                  <Badge variant="outline">SubjectAreas - Subáreas temáticas</Badge>
                  <Badge variant="outline">Questions - Banco de preguntas</Badge>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>🔐 Roles de Usuario</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <Badge className="bg-red-600">ADMIN</Badge>
                    <p className="text-sm mt-2">Acceso completo al sistema</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Badge className="bg-blue-600">TEACHER</Badge>
                    <p className="text-sm mt-2">Gestión de contenido educativo</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <Badge className="bg-green-600">STUDENT</Badge>
                    <p className="text-sm mt-2">Acceso limitado a contenido</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <Badge className="bg-purple-600">COORDINATOR</Badge>
                    <p className="text-sm mt-2">Gestión académica</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="endpoints" className="space-y-6">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>🔑 Autenticación</CardTitle>
                  <CardDescription>Endpoints para manejo de sesiones</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 font-mono text-sm">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded">
                      <span>
                        <Badge className="bg-green-600 mr-2">POST</Badge>/api/v1/auth/login
                      </span>
                      <span className="text-gray-600">Iniciar sesión</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded">
                      <span>
                        <Badge className="bg-blue-600 mr-2">POST</Badge>/api/v1/auth/register
                      </span>
                      <span className="text-gray-600">Registrar usuario</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-purple-50 rounded">
                      <span>
                        <Badge className="bg-purple-600 mr-2">POST</Badge>/api/v1/auth/refresh
                      </span>
                      <span className="text-gray-600">Renovar token</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-red-50 rounded">
                      <span>
                        <Badge className="bg-red-600 mr-2">POST</Badge>/api/v1/auth/logout
                      </span>
                      <span className="text-gray-600">Cerrar sesión</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>👥 Gestión de Estudiantes</CardTitle>
                  <CardDescription>CRUD completo para estudiantes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 font-mono text-sm">
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded">
                      <span>
                        <Badge className="bg-blue-600 mr-2">GET</Badge>/api/v1/students
                      </span>
                      <span className="text-gray-600">Listar estudiantes (paginado)</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded">
                      <span>
                        <Badge className="bg-blue-600 mr-2">GET</Badge>/api/v1/students/:id
                      </span>
                      <span className="text-gray-600">Obtener por ID</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded">
                      <span>
                        <Badge className="bg-green-600 mr-2">POST</Badge>/api/v1/students
                      </span>
                      <span className="text-gray-600">Crear estudiante</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-yellow-50 rounded">
                      <span>
                        <Badge className="bg-yellow-600 mr-2">PUT</Badge>/api/v1/students/:id
                      </span>
                      <span className="text-gray-600">Actualizar estudiante</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-red-50 rounded">
                      <span>
                        <Badge className="bg-red-600 mr-2">DEL</Badge>/api/v1/students/:id
                      </span>
                      <span className="text-gray-600">Eliminar estudiante</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>📚 Contenido Educativo</CardTitle>
                  <CardDescription>Gestión de cursos, subáreas y preguntas</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 font-mono text-sm">
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded">
                      <span>
                        <Badge className="bg-blue-600 mr-2">GET</Badge>/api/v1/courses
                      </span>
                      <span className="text-gray-600">Listar cursos</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded">
                      <span>
                        <Badge className="bg-blue-600 mr-2">GET</Badge>/api/v1/subject-areas/course/:courseId
                      </span>
                      <span className="text-gray-600">Subáreas por curso</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded">
                      <span>
                        <Badge className="bg-blue-600 mr-2">GET</Badge>/api/v1/questions/subject-area/:id
                      </span>
                      <span className="text-gray-600">Preguntas por subárea</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded">
                      <span>
                        <Badge className="bg-green-600 mr-2">POST</Badge>/api/v1/questions
                      </span>
                      <span className="text-gray-600">Crear pregunta</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="structure" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>📁 Estructura del Proyecto</CardTitle>
                <CardDescription>Organización modular y escalable</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                  <pre>{`src/
├── config/           # Configuración de la aplicación
│   └── environment.ts
├── controllers/      # Controladores de rutas
│   ├── auth.controller.ts
│   ├── student.controller.ts
│   └── ...
├── middleware/       # Middleware personalizado
│   ├── auth.middleware.ts
│   ├── validation.middleware.ts
│   └── error-handler.ts
├── routes/          # Definición de rutas
│   ├── auth.routes.ts
│   ├── student.routes.ts
│   └── ...
├── services/        # Lógica de negocio
│   ├── auth.service.ts
│   ├── student.service.ts
│   └── base.service.ts
├── types/           # Definiciones de tipos
│   ├── common.types.ts
│   └── entities.types.ts
├── utils/           # Utilidades y helpers
│   ├── logger.ts
│   ├── response.helper.ts
│   └── pagination.helper.ts
└── server.ts        # Punto de entrada`}</pre>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>🗄️ Esquema de Base de Datos</CardTitle>
                <CardDescription>Relaciones y entidades principales</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold mb-2">👤 Users</h4>
                      <p className="text-sm text-gray-600">Usuarios base del sistema con roles</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold mb-2">🎓 Students</h4>
                      <p className="text-sm text-gray-600">Estudiantes vinculados a grados y secciones</p>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <h4 className="font-semibold mb-2">📚 Courses</h4>
                      <p className="text-sm text-gray-600">Matemáticas y Comunicación</p>
                    </div>
                    <div className="p-4 bg-orange-50 rounded-lg">
                      <h4 className="font-semibold mb-2">❓ Questions</h4>
                      <p className="text-sm text-gray-600">Banco de preguntas por subárea</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="setup" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>🚀 Instalación y Configuración</CardTitle>
                <CardDescription>Pasos para configurar el proyecto</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">1. Clonar e instalar dependencias</h4>
                    <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                      <div>git clone {"<repository-url>"}</div>
                      <div>cd educational-platform-api</div>
                      <div>npm install</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">2. Configurar variables de entorno</h4>
                    <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                      <div>cp .env.example .env</div>
                      <div># Editar .env con tus configuraciones</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">3. Configurar base de datos</h4>
                    <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                      <div>npm run generate # Generar cliente Prisma</div>
                      <div>npm run migrate # Ejecutar migraciones</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">4. Iniciar en desarrollo</h4>
                    <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                      <div>npm run dev</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>⚙️ Variables de Entorno Requeridas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
                  <pre>{`# Environment
NODE_ENV=development
PORT=3000

# Database
DATABASE_URL=postgresql://username:password@localhost:5432/educational_platform

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRES_IN=24h
JWT_REFRESH_SECRET=your-refresh-secret
JWT_REFRESH_EXPIRES_IN=7d

# CORS
CORS_ORIGIN=http://localhost:3000

# Machine Learning Service
ML_SERVICE_URL=http://localhost:8000
ML_API_KEY=your-ml-service-api-key`}</pre>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="deployment" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>🐳 Docker Deployment</CardTitle>
                <CardDescription>Despliegue con contenedores</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Desarrollo con Docker Compose</h4>
                    <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                      <div>docker-compose up -d</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Producción</h4>
                    <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                      <div>docker build -t educational-api .</div>
                      <div>docker run -p 3000:3000 educational-api</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>☁️ Despliegue en Producción</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Badge className="mr-2">✅</Badge>
                    <span>Configurar HTTPS y certificados SSL</span>
                  </div>
                  <div className="flex items-center">
                    <Badge className="mr-2">✅</Badge>
                    <span>Base de datos en la nube (AWS RDS, Google Cloud SQL)</span>
                  </div>
                  <div className="flex items-center">
                    <Badge className="mr-2">✅</Badge>
                    <span>Variables de entorno seguras</span>
                  </div>
                  <div className="flex items-center">
                    <Badge className="mr-2">✅</Badge>
                    <span>Logs centralizados y monitoreo</span>
                  </div>
                  <div className="flex items-center">
                    <Badge className="mr-2">✅</Badge>
                    <span>Backups automáticos</span>
                  </div>
                  <div className="flex items-center">
                    <Badge className="mr-2">✅</Badge>
                    <span>Load balancer y escalado horizontal</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>🤖 Integración con Machine Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  La API está preparada para comunicarse con servicios de ML desarrollados en Python:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Badge variant="outline" className="mr-2">
                      Config
                    </Badge>
                    <span className="text-sm">Variables de entorno para servicio ML</span>
                  </div>
                  <div className="flex items-center">
                    <Badge variant="outline" className="mr-2">
                      HTTP
                    </Badge>
                    <span className="text-sm">Cliente HTTP para comunicación con Python</span>
                  </div>
                  <div className="flex items-center">
                    <Badge variant="outline" className="mr-2">
                      Types
                    </Badge>
                    <span className="text-sm">Interfaces TypeScript para intercambio de datos</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <div className="text-center mt-12 p-6 bg-white rounded-lg shadow-sm">
          <p className="text-gray-600">
            🚀 API lista para desarrollo y producción • 📚 Documentación completa incluida • 🔧 Fácil de extender y
            mantener
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <Button variant="outline" size="sm">
              <FileText className="h-4 w-4 mr-2" />
              Ver Documentación
            </Button>
            <Button variant="outline" size="sm">
              <Code className="h-4 w-4 mr-2" />
              Código Fuente
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
