import express from "express";
import authMiddleware from "../../middlewares/auth.middleware.js";

import {
  createService,
  getServices,
  getAllServices,
  updateService,
  deleteService,
} from "../../controllers/Services/service.controller.js";

const router = express.Router();

/* ================= PUBLIC ================= */

// Get active services (Frontend)
router.get("/", getServices);

/* ================= ADMIN ================= */

// Get all services (Admin)
router.get("/admin", authMiddleware, getAllServices);

// Create
router.post("/", authMiddleware, createService);

// Update
router.put("/:id", authMiddleware, updateService);

// Delete
router.delete("/:id", authMiddleware, deleteService);

export default router;