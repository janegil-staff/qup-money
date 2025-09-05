"use client";
import { useState } from "react";

export default function TransactionList({ transactions }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(transactions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = transactions.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4">📋 Transactions</h3>
      <table className="w-full bg-[#1e1e1e] border-collapse rounded-lg overflow-hidden">
        <thead>
          <tr className="text-left border-b border-[#333]">
            <th className="p-3">Type</th>
            <th className="p-3">Category</th>
            <th className="p-3">Amount</th>
            <th className="p-3">Date</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((tx) => (
            <tr
              key={tx.id}
              className="border-b border-[#2a2a2a] hover:bg-[#2a2a2a]"
            >
              <td className="p-3">{tx.type}</td>
              <td className="p-3">{tx.category}</td>
              <td className="p-3">€{tx.amount.toFixed(2)}</td>
              <td className="p-3">
                {new Date(tx.date).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
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
    </div>
  );
}
