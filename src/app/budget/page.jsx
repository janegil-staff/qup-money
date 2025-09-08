"use client";
import { useState, useEffect } from "react";
import BudgetCard from "@/components/BudgetCard-old";
import SalaryProgressBar from "@/components/SalaryProgressBar";
import { getSalaryCycleFrom19th } from "@/utils/SalaryCycleFrom19th";
import { FindAndFormateLatestDate } from "@/utils/getLAtestDatAndFormat";

export default function BudgetPage() {
  const [transactions, setTransactions] = useState([]);
  const { startDate, endDate } = getSalaryCycleFrom19th();

  useEffect(() => {
    fetch("/api/transactions")
      .then((res) => res.json())
      .then(setTransactions);
  }, []);

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1 className="text-3xl font-bold mb-6 text-center">Budget</h1>
      <div className="my-10">
        <BudgetCard transactions={transactions} />

        <SalaryProgressBar startDate={startDate} endDate={endDate} />
      </div>
    </main>
  );
}
