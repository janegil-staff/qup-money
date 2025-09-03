"use client";
import { useState } from "react";

export default function TransactionForm({ userId }) {
  const [form, setForm] = useState({
    type: "expense",
    amount: "",
    category: "",
    note: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/api/transactions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        amount: parseFloat(form.amount),
        userId,
      }),
    });
    setForm({ type: "expense", amount: "", category: "", note: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <select
        value={form.type}
        onChange={(e) => setForm({ ...form, type: e.target.value })}
        className="border p-2 w-full"
      >
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <input
        type="number"
        value={form.amount}
        onChange={(e) => setForm({ ...form, amount: e.target.value })}
        placeholder="Amount"
        className="border p-2 w-full"
      />
      <input
        type="text"
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
        placeholder="Category"
        className="border p-2 w-full"
      />
      <input
        type="text"
        value={form.note}
        onChange={(e) => setForm({ ...form, note: e.target.value })}
        placeholder="Note"
        className="border p-2 w-full"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded w-full"
      >
        Add Transaction
      </button>
    </form>
  );
}
