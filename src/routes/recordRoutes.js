const express = require("express");
const {
  createRecord,
  getRecords,
  updateRecord,
  deleteRecord,
} = require("../controllers/recordController");

const auth = require("../middlewares/authMiddleware");
const authorize = require("../middlewares/roleMiddleware");

const router = express.Router();

// CREATE → only admin
router.post("/", auth, authorize("admin"), createRecord);

// GET → all roles
router.get("/", auth, authorize("admin", "analyst", "viewer"), getRecords);

// UPDATE → admin
router.put("/:id", auth, authorize("admin"), updateRecord);

// DELETE → admin
router.delete("/:id", auth, authorize("admin"), deleteRecord);

module.exports = router;