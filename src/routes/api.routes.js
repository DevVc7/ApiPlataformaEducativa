const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /:
 *   get:
 *     summary: Bienvenida a la API de la Plataforma Educativa
 *     description: Página principal de la API
 *     responses:
 *       200:
 *         description: Mensaje de bienvenida
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 endpoints:
 *                   type: array
 *                   items:
 *                     type: string
 */
router.get('/', (req, res) => {
  res.json({
    message: 'Bienvenido a la API de la Plataforma Educativa',
    endpoints: [
      '/api/auth',
      '/api/courses',
      '/api/grades',
      '/api/questions',
      '/api/sections',
      '/api/staff',
      '/api/students',
      '/api/subject-areas',
      '/api/users'
    ]
  });
});

/**
 * @swagger
 * /health:
 *   get:
 *     summary: Verifica el estado de la API
 *     description: Endpoint para verificar si la API está funcionando correctamente
 *     responses:
 *       200:
 *         description: La API está funcionando correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: ok
 *                 message:
 *                   type: string
 *                   example: API is running
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 */
router.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'API is running',
    timestamp: new Date().toISOString()
  });
});

module.exports = router;
