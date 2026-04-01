const Record = require("../models/Record");

// CREATE RECORD
exports.createRecord = async (req, res) => {
  try {
    const { amount, type, category, date, notes } = req.body;

    const record = await Record.create({
      user: req.user.id,
      amount,
      type,
      category,
      date,
      notes,
    });

    res.status(201).json(record);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// GET ALL RECORDS (with filters)
exports.getRecords = async (req, res) => {
  try {
    const { type, category } = req.query;

    let filter = { isDeleted: false };

    if (type) filter.type = type;
    if (category) filter.category = category;

    const records = await Record.find(filter).sort({ date: -1 });

    res.json(records);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// UPDATE RECORD
exports.updateRecord = async (req, res) => {
  try {
    const record = await Record.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(record);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// DELETE RECORD (soft delete)
exports.deleteRecord = async (req, res) => {
  try {
    await Record.findByIdAndUpdate(req.params.id, {
      isDeleted: true,
    });

    res.json({ msg: "Record deleted" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};