# Configuración con SQL Server

## 🗄️ Configuración de SQL Server

### Opción 1: SQL Server Local

#### Windows (SQL Server Express)
1. **Descargar SQL Server Express**:
   - Ve a: https://www.microsoft.com/sql-server/sql-server-downloads
   - Descarga "Express" (gratis)

2. **Instalar SQL Server Management Studio (SSMS)**:
   - Descarga desde: https://docs.microsoft.com/sql/ssms/download-sql-server-management-studio-ssms

3. **Crear la base de datos**:
   \`\`\`sql
   CREATE DATABASE educational_platform;
   \`\`\`

4. **Configurar tu .env**:
   \`\`\`env
   DATABASE_URL="sqlserver://localhost:1433;database=educational_platform;user=sa;password=TuPassword123;trustServerCertificate=true;encrypt=true"
   \`\`\`

#### macOS/Linux (Docker)
\`\`\`bash
# Ejecutar SQL Server en Docker
docker run -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=YourPassword123" \
   -p 1433:1433 --name sqlserver \
   -d mcr.microsoft.com/mssql/server:2022-latest

# Conectar y crear base de datos
docker exec -it sqlserver /opt/mssql-tools/bin/sqlcmd \
   -S localhost -U sa -P YourPassword123 \
   -Q "CREATE DATABASE educational_platform"
\`\`\`

### Opción 2: SQL Server en la Nube

#### Azure SQL Database
1. **Crear cuenta en Azure** (tiene tier gratuito)
2. **Crear SQL Database**
3. **Obtener connection string**:
   \`\`\`env
   DATABASE_URL="sqlserver://your-server.database.windows.net:1433;database=educational_platform;user=your-username;password=your-password;encrypt=true"
   \`\`\`

#### AWS RDS SQL Server
1. **Crear instancia RDS** con SQL Server Express (gratis)
2. **Configurar security groups**
3. **Usar connection string**:
   \`\`\`env
   DATABASE_URL="sqlserver://your-rds-endpoint:1433;database=educational_platform;user=admin;password=your-password;encrypt=true"
   \`\`\`

## 🚀 Pasos para levantar con SQL Server

### 1. Instalar dependencias
\`\`\`bash
npm install
\`\`\`

### 2. Configurar .env para SQL Server
\`\`\`env
NODE_ENV=development
PORT=3000
DATABASE_URL="sqlserver://localhost:1433;database=educational_platform;user=sa;password=YourPassword123;trustServerCertificate=true;encrypt=true"
JWT_SECRET=tu-clave-secreta-muy-segura
JWT_REFRESH_SECRET=tu-clave-refresh-secreta
CORS_ORIGIN=http://localhost:3000
\`\`\`

### 3. Generar cliente Prisma para SQL Server
\`\`\`bash
npm run generate
\`\`\`

### 4. Ejecutar migraciones
\`\`\`bash
npm run migrate
\`\`\`

### 5. Levantar la API
\`\`\`bash
npm run dev
\`\`\`

## 🔧 Formatos de Connection String para SQL Server

### Autenticación SQL Server
\`\`\`env
# Formato básico
DATABASE_URL="sqlserver://username:password@server:port;database=dbname;encrypt=true"

# Con opciones adicionales
DATABASE_URL="sqlserver://sa:Password123@localhost:1433;database=educational_platform;trustServerCertificate=true;encrypt=true;connectionTimeout=30"

# Para Azure SQL
DATABASE_URL="sqlserver://username:password@server.database.windows.net:1433;database=dbname;encrypt=true"
\`\`\`

### Autenticación Windows (solo Windows)
\`\`\`env
DATABASE_URL="sqlserver://server:port;database=dbname;integratedSecurity=true;trustServerCertificate=true"
\`\`\`

## 🐳 Docker con SQL Server

### Usar docker-compose actualizado
\`\`\`bash
# Levantar todo el stack
docker-compose up -d

# Ver logs de SQL Server
docker-compose logs sqlserver

# Conectar a SQL Server
docker exec -it educational-platform-api_sqlserver_1 /opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P YourPassword123
\`\`\`

### Comandos útiles SQL Server en Docker
\`\`\`bash
# Verificar que SQL Server está corriendo
docker-compose ps

# Backup de la base de datos
docker exec educational-platform-api_sqlserver_1 /opt/mssql-tools/bin/sqlcmd \
  -S localhost -U sa -P YourPassword123 \
  -Q "BACKUP DATABASE educational_platform TO DISK = '/var/opt/mssql/backup/educational_platform.bak'"

# Restaurar backup
docker exec educational-platform-api_sqlserver_1 /opt/mssql-tools/bin/sqlcmd \
  -S localhost -U sa -P YourPassword123 \
  -Q "RESTORE DATABASE educational_platform FROM DISK = '/var/opt/mssql/backup/educational_platform.bak'"
\`\`\`

## 🔍 Verificar conexión

### Usando Prisma Studio
\`\`\`bash
npm run studio
\`\`\`

### Usando código de prueba
\`\`\`typescript
// test-connection.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function testConnection() {
  try {
    await prisma.$connect()
    console.log('✅ Conexión a SQL Server exitosa!')
    
    // Probar una consulta simple
    const result = await prisma.$queryRaw`SELECT @@VERSION as version`
    console.log('📊 Versión de SQL Server:', result)
    
  } catch (error) {
    console.error('❌ Error de conexión:', error)
  } finally {
    await prisma.$disconnect()
  }
}

testConnection()
\`\`\`

## ⚠️ Troubleshooting SQL Server

### Error de conexión
\`\`\`bash
# Verificar que SQL Server está corriendo
# Windows:
services.msc # Buscar "SQL Server"

# Docker:
docker ps | grep sqlserver
\`\`\`

### Error de autenticación
- Verificar usuario y contraseña
- Habilitar autenticación SQL Server (no solo Windows)
- Verificar que el usuario tiene permisos

### Error de puerto
\`\`\`sql
-- Verificar puerto en SQL Server
SELECT name, protocol_desc, port, state_desc 
FROM sys.tcp_endpoints 
WHERE type_desc = 'TSQL'
\`\`\`

### Error de certificado
Agregar `trustServerCertificate=true` al connection string

## 📊 Herramientas recomendadas

### GUI para SQL Server
- **SQL Server Management Studio (SSMS)** - Windows
- **Azure Data Studio** - Multiplataforma
- **DBeaver** - Multiplataforma, gratis
- **Prisma Studio** - Incluido con Prisma

### Extensiones VS Code
- **SQL Server (mssql)**
- **Prisma**
- **Thunder Client** - Para probar la API
