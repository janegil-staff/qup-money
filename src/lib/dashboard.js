import Transaction from "@/models/Transaction";
import { connectToDB } from "./db";
import User from "@/models/User";

export async function getDashboardData(userId) {
  await connectToDB();

  const transactions = await Transaction.find({ userId })
    .sort({ createdAt: -1 })
    .lean();

  const totalIncome = transactions
    .filter(tx => tx.type === "income")
    .reduce((sum, tx) => sum + tx.amount, 0);

  const totalExpenses = transactions
    .filter(tx => tx.type === "expense")
    .reduce((sum, tx) => sum + tx.amount, 0);

  const user = await User.findById(userId).lean();
  const budget = user?.budget || 0;

  return {
    totalIncome,
    totalExpenses,
    recentTransactions: transactions,
    budget,
    user,
  };
}
