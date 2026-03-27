const express = require("express");
const router = express.Router();
const {
  getAllLecturers,
  getLecturerById,
  createLecturer,
  updateLecturer,
  deleteLecturer,
} = require("../controllers/lecturerController");

/**
 * @swagger
 * components:
 *   schemas:
 *     Lecturer:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - department
 *         - specialization
 *       properties:
 *         id:
 *           type: string
 *           example: "uuid-here"
 *         lecturerId:
 *           type: string
 *           example: "LEC001"
 *         name:
 *           type: string
 *           example: "Dr. Kasun Perera"
 *         email:
 *           type: string
 *           example: "kasun.perera@university.lk"
 *         department:
 *           type: string
 *           example: "Information Technology"
 *         specialization:
 *           type: string
 *           example: "Software Engineering"
 *         phone:
 *           type: string
 *           example: "0771234567"
 */

/**
 * @swagger
 * /api/lecturers:
 *   get:
 *     summary: Get all lecturers
 *     tags: [Lecturers]
 *     responses:
 *       200:
 *         description: Successfully retrieved all lecturers
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 count:
 *                   type: integer
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Lecturer'
 */
router.get("/", getAllLecturers);

/**
 * @swagger
 * /api/lecturers/{id}:
 *   get:
 *     summary: Get a lecturer by ID
 *     tags: [Lecturers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Lecturer ID
 *     responses:
 *       200:
 *         description: Lecturer found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Lecturer'
 *       404:
 *         description: Lecturer not found
 */
router.get("/:id", getLecturerById);

/**
 * @swagger
 * /api/lecturers:
 *   post:
 *     summary: Create a new lecturer
 *     tags: [Lecturers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - department
 *               - specialization
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Dr. Nimal Fernando"
 *               email:
 *                 type: string
 *                 example: "nimal@university.lk"
 *               department:
 *                 type: string
 *                 example: "Information Technology"
 *               specialization:
 *                 type: string
 *                 example: "Database Systems"
 *               phone:
 *                 type: string
 *                 example: "0712345678"
 *     responses:
 *       201:
 *         description: Lecturer created successfully
 *       400:
 *         description: Missing required fields
 */
router.post("/", createLecturer);

/**
 * @swagger
 * /api/lecturers/{id}:
 *   put:
 *     summary: Update a lecturer
 *     tags: [Lecturers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               department:
 *                 type: string
 *               specialization:
 *                 type: string
 *               phone:
 *                 type: string
 *     responses:
 *       200:
 *         description: Lecturer updated successfully
 *       404:
 *         description: Lecturer not found
 */
router.put("/:id", updateLecturer);

/**
 * @swagger
 * /api/lecturers/{id}:
 *   delete:
 *     summary: Delete a lecturer
 *     tags: [Lecturers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lecturer deleted successfully
 *       404:
 *         description: Lecturer not found
 */
router.delete("/:id", deleteLecturer);

module.exports = router;