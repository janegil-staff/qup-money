"use client";
import { useState, useEffect } from "react";
import BudgetOverview from "@/components/BudgetOverview";
import TransactionList from "@/components/TransactionList";
import BudgetCard from "@/components/BudgetCard";
import FloatingButton from "@/components/FloatingButton";
import SalaryProgressBar from "@/components/SalaryProgressBar";
import { getSalaryCycleFrom19th } from "@/utils/SalaryCycleFrom19th";

export default function DashboardPage() {
  const [transactions, setTransactions] = useState([]);
  const { startDate, endDate } = getSalaryCycleFrom19th();

  useEffect(() => {
    fetch("/api/transactions")
      .then((res) => res.json())
      .then(setTransactions);
  }, []);

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <div className="my-10">
        <BudgetCard transactions={transactions} />

        <SalaryProgressBar startDate={startDate} endDate={endDate} />
      </div>
    </main>
  );
}
