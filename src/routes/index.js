const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

// Middleware para autenticación JWT
const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: process.env.JWKS_URI || 'http://localhost:3000/.well-known/jwks.json'
  }),
  audience: process.env.AUTH0_AUDIENCE || 'http://localhost:3000',
  issuer: process.env.AUTH0_DOMAIN || 'http://localhost:3000',
  algorithms: ['RS256']
});

// Import all route files
const authRoutes = require('./auth.routes');
const courseRoutes = require('./course.routes');
const gradeRoutes = require('./grade.routes');
const questionRoutes = require('./question.routes');
const sectionRoutes = require('./section.routes');
const staffRoutes = require('./staff.routes');
const studentRoutes = require('./student.routes');
const subjectAreaRoutes = require('./subject-area.routes');
const userRoutes = require('./user.routes');

// Rutas públicas
router.use('/auth', authRoutes);

// Rutas protegidas
router.use('/courses', checkJwt, courseRoutes);
router.use('/grades', checkJwt, gradeRoutes);
router.use('/questions', checkJwt, questionRoutes);
router.use('/sections', checkJwt, sectionRoutes);
router.use('/staff', checkJwt, staffRoutes);
router.use('/students', checkJwt, studentRoutes);
router.use('/subject-areas', checkJwt, subjectAreaRoutes);
router.use('/users', checkJwt, userRoutes);

module.exports = router;
