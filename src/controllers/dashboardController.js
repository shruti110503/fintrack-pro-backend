const Record = require("../models/Record");

// GET SUMMARY
exports.getSummary = async (req, res) => {
  try {
    const summary = await Record.aggregate([
      {
        $match: { isDeleted: false },
      },
      {
        $group: {
          _id: "$type",
          total: { $sum: "$amount" },
        },
      },
    ]);

    let income = 0;
    let expense = 0;

    summary.forEach((item) => {
      if (item._id === "income") income = item.total;
      if (item._id === "expense") expense = item.total;
    });

    res.json({
      totalIncome: income,
      totalExpense: expense,
      netBalance: income - expense,
    });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// CATEGORY-WISE TOTAL
exports.getCategoryBreakdown = async (req, res) => {
  try {
    const data = await Record.aggregate([
      { $match: { isDeleted: false } },
      {
        $group: {
          _id: "$category",
          total: { $sum: "$amount" },
        },
      },
    ]);

    res.json(data);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};