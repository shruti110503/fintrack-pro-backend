const express = require("express");
const {
  getSummary,
  getCategoryBreakdown,
} = require("../controllers/dashboardController");

const auth = require("../middlewares/authMiddleware");
const authorize = require("../middlewares/roleMiddleware");

const router = express.Router();

// Summary → analyst + admin
router.get("/summary", auth, authorize("admin", "analyst"), getSummary);

// Category breakdown → analyst + admin
router.get(
  "/categories",
  auth,
  authorize("admin", "analyst"),
  getCategoryBreakdown
);

module.exports = router;