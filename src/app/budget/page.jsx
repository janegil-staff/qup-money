"use client";
import { useEffect, useState } from "react";
import BudgetCard from "@/components/BudgetCard-old";
import SalaryProgressBar from "@/components/SalaryProgressBar";
import { getSalaryCycleFrom19th } from "@/utils/SalaryCycleFrom19th";
import { useSession } from "next-auth/react";

export default function BudgetPage() {
  const { data: session, status } = useSession();
  const [transactions, setTransactions] = useState([]);
  const [budget, setBudget] = useState([]);
  const [salaryCycle, setSalaryCycle] = useState({
    startDate: null,
    endDate: null,
  });

  useEffect(() => {
    if (status !== "authenticated") return;

    const { user } = session;
    console.log(user);
    // ✅ Calculate salary cycle once session is ready
    const { startDate, endDate } = getSalaryCycleFrom19th(user.payday);
    setSalaryCycle({ startDate, endDate });

    // ✅ Fetch transactions
    fetch("/api/transactions", {
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then(setTransactions)
      .catch((err) => console.error("Something went wrong", err));
  }, [session, status]);

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1 className="text-3xl font-bold mb-6 text-center">Budget</h1>
      <div className="my-10">
        <BudgetCard transactions={transactions} />
        {session?.user?.payday && (
          <SalaryProgressBar payday={session.user.payday} />
        )}
      </div>
    </main>
  );
}
