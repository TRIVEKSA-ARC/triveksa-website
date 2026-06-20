import express from "express";
import {
  getFooter,
  updateFooter,
} from "../controllers/footer.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", getFooter);
router.put("/", authMiddleware, updateFooter);

export default router;