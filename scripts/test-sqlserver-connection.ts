import { PrismaClient } from "@prisma/client"
import { config } from "../src/config/environment"

const prisma = new PrismaClient()

async function testSQLServerConnection() {
  console.log("🔍 Probando conexión a SQL Server...")
  console.log("📍 URL de conexión:", config.DATABASE_URL?.replace(/password=[^;]+/, "password=***"))

  try {
    // Probar conexión básica
    await prisma.$connect()
    console.log("✅ Conexión establecida exitosamente!")

    // Obtener información del servidor
    const serverInfo = (await prisma.$queryRaw`
      SELECT 
        @@VERSION as version,
        @@SERVERNAME as server_name,
        DB_NAME() as database_name,
        SYSTEM_USER as current_user,
        GETDATE() as current_time
    `) as any[]

    console.log("📊 Información del servidor:")
    console.log("   Versión:", serverInfo[0].version.split("\n")[0])
    console.log("   Servidor:", serverInfo[0].server_name)
    console.log("   Base de datos:", serverInfo[0].database_name)
    console.log("   Usuario:", serverInfo[0].current_user)
    console.log("   Hora:", serverInfo[0].current_time)

    // Verificar tablas existentes
    const tables = (await prisma.$queryRaw`
      SELECT TABLE_NAME 
      FROM INFORMATION_SCHEMA.TABLES 
      WHERE TABLE_TYPE = 'BASE TABLE'
      ORDER BY TABLE_NAME
    `) as any[]

    console.log("📋 Tablas en la base de datos:")
    if (tables.length === 0) {
      console.log('   ⚠️  No hay tablas. Ejecuta "npm run migrate" para crear el esquema.')
    } else {
      tables.forEach((table: any) => {
        console.log(`   - ${table.TABLE_NAME}`)
      })
    }

    // Probar una operación simple si las tablas existen
    if (tables.length > 0) {
      try {
        const userCount = await prisma.user.count()
        console.log(`👥 Usuarios en la base de datos: ${userCount}`)
      } catch (error) {
        console.log("⚠️  Las tablas existen pero el esquema puede no estar actualizado")
      }
    }
  } catch (error: any) {
    console.error("❌ Error de conexión:")

    if (error.code === "ECONNREFUSED") {
      console.error("   🔌 No se puede conectar al servidor SQL Server")
      console.error("   💡 Verifica que SQL Server esté corriendo en el puerto 1433")
    } else if (error.code === "ELOGIN") {
      console.error("   🔐 Error de autenticación")
      console.error("   💡 Verifica usuario y contraseña en DATABASE_URL")
    } else if (error.message.includes("certificate")) {
      console.error("   🔒 Error de certificado SSL")
      console.error('   💡 Agrega "trustServerCertificate=true" a tu CONNECTION_STRING')
    } else {
      console.error("   📝 Error:", error.message)
    }

    console.error("\n🔧 Pasos para solucionar:")
    console.error("1. Verifica que SQL Server esté corriendo")
    console.error("2. Confirma la URL de conexión en .env")
    console.error("3. Verifica usuario y contraseña")
    console.error("4. Asegúrate que la base de datos existe")
  } finally {
    await prisma.$disconnect()
  }
}

// Ejecutar si es llamado directamente
if (require.main === module) {
  testSQLServerConnection()
    .then(() => process.exit(0))
    .catch(() => process.exit(1))
}

export { testSQLServerConnection }
