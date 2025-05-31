import { PrismaClient } from "@prisma/client"
import bcrypt from "bcryptjs"

const prisma = new PrismaClient()

async function main() {
  console.log("🌱 Seeding database...")

  // Create admin user
  const adminPassword = await bcrypt.hash("admin123", 10)
  const admin = await prisma.user.upsert({
    where: { email: "admin@educational.com" },
    update: {},
    create: {
      email: "admin@educational.com",
      password: adminPassword,
      firstName: "Admin",
      lastName: "User",
      role: "ADMIN",
    },
  })

  // Create teacher user
  const teacherPassword = await bcrypt.hash("teacher123", 10)
  const teacher = await prisma.user.upsert({
    where: { email: "teacher@educational.com" },
    update: {},
    create: {
      email: "teacher@educational.com",
      password: teacherPassword,
      firstName: "Maria",
      lastName: "Rodriguez",
      role: "TEACHER",
    },
  })

  // Create grades
  const grade1 = await prisma.grade.upsert({
    where: { id: "grade-1" },
    update: {},
    create: {
      id: "grade-1",
      name: "Primer Grado",
      level: 1,
      description: "Primer grado de primaria",
    },
  })

  const grade2 = await prisma.grade.upsert({
    where: { id: "grade-2" },
    update: {},
    create: {
      id: "grade-2",
      name: "Segundo Grado",
      level: 2,
      description: "Segundo grado de primaria",
    },
  })

  // Create sections
  const sectionA = await prisma.section.upsert({
    where: { id: "section-1a" },
    update: {},
    create: {
      id: "section-1a",
      name: "Sección A",
      gradeId: grade1.id,
      capacity: 30,
    },
  })

  const sectionB = await prisma.section.upsert({
    where: { id: "section-1b" },
    update: {},
    create: {
      id: "section-1b",
      name: "Sección B",
      gradeId: grade1.id,
      capacity: 30,
    },
  })

  // Create courses
  const mathCourse = await prisma.course.upsert({
    where: { code: "MATH" },
    update: {},
    create: {
      name: "Matemáticas",
      code: "MATH",
      type: "MATHEMATICS",
      description: "Curso de matemáticas",
    },
  })

  const commCourse = await prisma.course.upsert({
    where: { code: "COMM" },
    update: {},
    create: {
      name: "Comunicación",
      code: "COMM",
      type: "COMMUNICATION",
      description: "Curso de comunicación",
    },
  })

  // Create subject areas
  const geometry = await prisma.subjectArea.create({
    data: {
      name: "Geometría",
      courseId: mathCourse.id,
      description: "Estudio de formas y espacios",
    },
  })

  const algebra = await prisma.subjectArea.create({
    data: {
      name: "Álgebra",
      courseId: mathCourse.id,
      description: "Estudio de números y operaciones",
    },
  })

  const reading = await prisma.subjectArea.create({
    data: {
      name: "Comprensión Lectora",
      courseId: commCourse.id,
      description: "Desarrollo de habilidades de lectura",
    },
  })

  // Create sample questions
  await prisma.question.create({
    data: {
      title: "Suma básica",
      content: "¿Cuánto es 2 + 3?",
      type: "MULTIPLE_CHOICE",
      difficulty: "EASY",
      subjectAreaId: algebra.id,
      correctAnswer: "5",
      explanation: "2 + 3 = 5",
      points: 1,
      options: {
        create: [
          { text: "4", isCorrect: false, order: 1 },
          { text: "5", isCorrect: true, order: 2 },
          { text: "6", isCorrect: false, order: 3 },
          { text: "7", isCorrect: false, order: 4 },
        ],
      },
    },
  })

  await prisma.question.create({
    data: {
      title: "Formas geométricas",
      content: "¿Cuántos lados tiene un triángulo?",
      type: "MULTIPLE_CHOICE",
      difficulty: "EASY",
      subjectAreaId: geometry.id,
      correctAnswer: "3",
      explanation: "Un triángulo siempre tiene 3 lados",
      points: 1,
      options: {
        create: [
          { text: "2", isCorrect: false, order: 1 },
          { text: "3", isCorrect: true, order: 2 },
          { text: "4", isCorrect: false, order: 3 },
          { text: "5", isCorrect: false, order: 4 },
        ],
      },
    },
  })

  console.log("✅ Database seeded successfully!")
  console.log("👤 Admin user: admin@educational.com / admin123")
  console.log("👨‍🏫 Teacher user: teacher@educational.com / teacher123")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
