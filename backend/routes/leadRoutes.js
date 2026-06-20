import express from "express";
import {
  createLead,
  getLeads,
  getLeadById,
  updateLeadStatus,
  deleteLead,
} from "../controllers/leadController.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

/* ================= CREATE LEAD ================= */
// Left public so potential clients can register inquiries
router.post("/", createLead);

/* ================= PROTECTED ADMIN MANIPULATION ROUTES ================= */

// Get all leads
router.get("/", authMiddleware, getLeads);

// Get single lead
router.get("/:id", authMiddleware, getLeadById);

// Update lead status
router.put("/:id", authMiddleware, updateLeadStatus);

// Delete lead
router.delete("/:id", authMiddleware, deleteLead);

export default router;