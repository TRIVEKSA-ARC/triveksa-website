import express from "express";

import {
  createLead,
  getLeads,
  getLeadById,
  updateLeadStatus,
  deleteLead,
} from "../controllers/leadController.js";

const router = express.Router();

/* ================= CREATE LEAD ================= */

router.post("/", createLead);

/* ================= GET ALL LEADS ================= */

router.get("/", getLeads);

/* ================= GET SINGLE LEAD ================= */

router.get("/:id", getLeadById);

/* ================= UPDATE LEAD STATUS ================= */

router.put("/:id", updateLeadStatus);

/* ================= DELETE LEAD ================= */

router.delete("/:id", deleteLead);

export default router;