"use client";
import { useState } from "react";

export default function TransactionForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");
  const [category, setCategory] = useState("General");

  const handleSubmit = (e) => {
    e.preventDefault();
    const transaction = {
      title,
      amount: parseFloat(amount),
      type,
      category,
      date: new Date().toISOString(),
    };
    onAdd(transaction);
    setTitle("");
    setAmount("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-900 p-4 rounded-lg text-white"
    >
      <h2 className="text-xl font-bold mb-4">Add Transaction</h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full mb-2 px-3 py-2 rounded bg-gray-800 border border-gray-700"
        required
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full mb-2 px-3 py-2 rounded bg-gray-800 border border-gray-700"
        required
      />

      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="w-full mb-2 px-3 py-2 rounded bg-gray-800 border border-gray-700"
      >
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full mb-4 px-3 py-2 rounded bg-gray-800 border border-gray-700"
      >
        <option>General</option>
        <option>Food</option>
        <option>Rent</option>
        <option>Travel</option>
        <option>Entertainment</option>
      </select>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
      >
        Add Transaction
      </button>
    </form>
  );
}
