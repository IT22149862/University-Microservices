const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const lecturerRoutes = require("./routes/lecturerRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3003;

app.use(cors());
app.use(express.json());

// Swagger config
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Lecturer Service API",
      version: "1.0.0",
      description: "Lecturer Microservice for University Management System",
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
        description: "Direct Access",
      },
      {
        url: "http://localhost:5000/lecturer-service",
        description: "Via API Gateway",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Swagger JSON for API Gateway
app.get("/swagger.json", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerSpec);
});

// Routes
app.use("/api/lecturers", lecturerRoutes);

// Health check
app.get("/", (req, res) => {
  res.json({ message: "Lecturer Service is running!" });
});

app.listen(PORT, () => {
  console.log(`Lecturer Service running on http://localhost:${PORT}`);
  console.log(`Swagger Docs: http://localhost:${PORT}/api-docs`);
});