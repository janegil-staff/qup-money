import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { connectToDB } from "@/lib/db";
import Transaction from "@/models/Transaction";

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);


  if (!session || !session.user?.email) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  await connectToDB();

  try {
    const userId = session.user.id;

    const transactions = await Transaction.find({ userId }).sort({
      date: -1,
    });

    const totalIncome = transactions
      .filter((tx) => tx.amount > 0)
      .reduce((sum, tx) => sum + tx.amount, 0);

    const totalExpenses = transactions
      .filter((tx) => tx.amount < 0)
      .reduce((sum, tx) => sum + Math.abs(tx.amount), 0);

    const balance = totalIncome - totalExpenses;

    return res.status(200).json({
      balance,
      totalIncome,
      totalExpenses,
      recentTransactions: transactions.slice(0, 10), // optional: last 10
    });
  } catch (error) {
    console.error("Dashboard API error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
