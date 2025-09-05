"use client";
import { useState, useEffect } from "react";
import TransactionForm from "@/components/TransactionForm";
import { useSession } from "next-auth/react";

export default function Dashboard() {
  const [transactions, setTransactions] = useState([]);
  const { data: session } = useSession();
  const userId = session?.user?.id;

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(transactions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = transactions.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  useEffect(() => {
    fetch("/api/transactions")
      .then((res) => res.json())
      .then(setTransactions);
  }, []);

  const handleAdd = async (tx) => {
    tx.userId = userId;

    const res = await fetch("/api/transactions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tx),
    });
    const newTx = await res.json();
    setTransactions([newTx, ...transactions]);
  };

  return (
    <main className="p-6 bg-gray-950 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Qup Money</h1>
      <TransactionForm onAdd={handleAdd} />
      <ul className="mt-6 space-y-2">
        {currentItems.map((tx) => (
          <li
            key={tx._id}
            className="bg-gray-800 p-3 rounded flex justify-between"
          >
            <span>
              {tx.title} ({tx.category})
            </span>
            <span
              className={
                tx.type === "income" ? "text-green-400" : "text-red-400"
              }
            >
              {tx.type === "income" ? "+" : "-"}${tx.amount.toFixed(2)}
            </span>
          </li>
        ))}
      </ul>

      <div className="flex justify-between items-center mt-4 text-sm text-[#aaa]">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-[#2a2a2a] rounded hover:bg-[#3a3a3a] disabled:opacity-30"
        >
          ← Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-[#2a2a2a] rounded hover:bg-[#3a3a3a] disabled:opacity-30"
        >
          Next →
        </button>
      </div>
    </main>
  );
}
