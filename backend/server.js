import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import mongoSanitize from "express-mongo-sanitize";
import xss from "xss-clean";
import connectDB from "./config/db.js";

// Routes
import authRoutes from "./routes/auth.routes.js";
import aboutRoutes from "./routes/about.routes.js";
import projectRoutes from "./routes/Projects/project.routes.js";
import footerRoutes from "./routes/footer.routes.js";
import leadRoutes from "./routes/leadRoutes.js";

dotenv.config();

const app = express();

/* ================= SECURITY & LOGGING MIDDLEWARE ================= */
app.use(
  helmet({
    crossOriginEmbedderPolicy: false,
  })
);

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("combined"));
}

/* ================= DATABASE ================= */
connectDB();

/* ================= BODY PARSERS ================= */
  express.json({
    limit: "2mb",
  })
);

app.use(
  express.urlencoded({
    extended: true,
    limit: "2mb",
  })
);

/* ================= DATA SANITIZATION ================= */
app.use(mongoSanitize());
app.use(xss());

/* ================= CORS ================= */
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://triveksaarc.com",
      "https://www.triveksaarc.com",
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

/* ================= HEALTH CHECK ================= */
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    db: "connected",
    cloudinary: process.env.CLOUDINARY_CLOUD_NAME,
    time: new Date(),
  });
});

/* ================= ROUTES ================= */
app.use("/api/auth", authRoutes);
app.use("/api/about", aboutRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/footer", footerRoutes);
app.use("/api/leads", leadRoutes);

/* ================= ROOT ================= */
app.get("/", (req, res) => {
  res.send("🚀 Portfolio Backend Running");
});

/* ================= ERROR HANDLER ================= */
app.use((err, req, res, next) => {
  console.error("GLOBAL ERROR:", err);

  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

/* ================= START SERVER ================= */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});