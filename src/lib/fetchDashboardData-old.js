import { connectToDB } from './db';
import Transaction from '@/models/Transaction';
import BudgetCycle from '@/models/BudgetCycle';

export async function fetchDashboardData() {
  await connectToDB();

  const cycle = await BudgetCycle.findOne().sort({ endDate: -1 }).lean();

  if (!cycle) {
    return {
      cycle: null,
      transactions: [],
      categoryTotals: {},
    };
  }

  const transactions = await Transaction.find({
    date: { $gte: cycle.startDate, $lte: cycle.endDate },
  }).sort({ date: -1 }).lean();

  const categoryTotals = {};
  transactions.forEach(tx => {
    categoryTotals[tx.category] = (categoryTotals[tx.category] || 0) + tx.amount;
  });

  return {
    cycle,
    transactions,
    categoryTotals,
  };
}
