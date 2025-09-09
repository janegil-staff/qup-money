import { useSession } from "next-auth/react";
import { useState } from "react";
import toast from "react-hot-toast";

export default function TransactionList({ transactions }) {
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
  const handleDelete = async (id) => {
    const confirmed = window.confirm("Delete this transaction?");
    if (!confirmed) return;

   
      const res = await fetch(`/api/transactions/${id}`, {
        method: "DELETE",
      });

       window.location.reload();
      if (res.ok) {
        setTransactions((prev) => prev.filter((tx) => tx._id !== id));
        toast.success("Transaction deleted");
       
      } else {
        const error = await res.json();
        toast.error(error.error || "Failed to delete");
      }
 
  };

  return (
    <div className="bg-card p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
      <ul className="space-y-2">
        {currentItems.map((tx) => (
          <li
            onClick={() => handleDelete(tx._id)}
            key={tx._id}
            className="bg-gray-800 p-4 rounded-lg flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">{tx.title}</p>
              <p className="text-sm text-gray-400">{tx.category}</p>
            </div>
            <p
              className={`font-bold ${
                tx.type === "income" ? "text-green-400" : "text-red-400"
              }`}
            >
              {tx.type === "income" ? "+" : "-"}${tx.amount}
            </p>
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
    </div>
  );
}
