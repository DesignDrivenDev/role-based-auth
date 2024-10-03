import express from "express";
import { verifyToken, checkRole } from "../middlewares/authMiddleware.js";

const router = express.Router();
// only admin can access this route
// , verifyToken, checkRole

router.get("/admin", verifyToken, checkRole("admin"), (req, res) => {
  res.json({ message: "welcome to admin route" });
});

// both admin and manager can access this route
router.get(
  "/manager",
  verifyToken,
  checkRole("admin", "manager"),
  (req, res) => {
    res.json({ message: "welcome to manager route" });
  }
);

// All can access this route
router.get(
  "/user",
  verifyToken,
  checkRole("admin", "manager", "user"),
  (req, res) => {
    res.json({ message: "welcome to user route" });
  }
);

export default router;
