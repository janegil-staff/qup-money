"use client";
import BudgetCard from "@/components/BudgetCard";
import SpendingCard from "@/components/SpendingCard";
import TransactionList from "@/components/TransactionList";
import Header from "@/components/Header";

export default function ClientDashboard({
  balance,
  income,
  expenses,
  progress,
  transactionCount,
  transactions,
  payday,
  budget,
}) {

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen p-6">
      <Header />
      <h1 className="text-3xl font-bold mb-6">Your Dashboard</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <BudgetCard
          balance={balance}
          income={income}
          expenses={expenses}
          progress={progress}
          budget={budget}
        />
        <SpendingCard
          spending={expenses}
          transactionCount={transactionCount}
        />
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Payday</h2>
          <p className="text-lg">Next payday: <span className="font-bold">{payday}th</span></p>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Recent Transactions</h2>
        <TransactionList transactions={transactions} />
      </div>
    </div>
  );
}
