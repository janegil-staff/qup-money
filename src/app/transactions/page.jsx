"use client";
import { useState, useEffect } from "react";
import TransactionForm from "@/components/TransactionForm";
import { useSession } from "next-auth/react";
import { Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import TransactionList from "@/components/TransactionList";

export default function Dashboard() {
  const router = useRouter();
  const [transactions, setTransactions] = useState([]);
  const { data: session } = useSession();
  const userId = session?.user?.id;

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

      <TransactionList transactions={transactions} />
    </main>
  );
}
