import mongoose from "mongoose";

const BudgetCycleSchema = new mongoose.Schema({
  startDate: Date,
  endDate: Date,
  totalSpent: Number,
  progress: Number,
});

export default mongoose.models.BudgetCycle ||
  mongoose.model("BudgetCycle", BudgetCycleSchema);
