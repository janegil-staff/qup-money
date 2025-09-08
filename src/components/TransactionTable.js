export default function TransactionTable({ transactions }) {
  return (
    <div className="bg-[#1c1c1c] p-6 rounded-lg shadow">
      <h3 className="text-lg font-semibold text-[#00ffc3] mb-4">
        Recent Transactions
      </h3>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-[#aaa] border-b border-[#333]">
            <th className="pb-2">Date</th>
            <th className="pb-2">Category</th>
            <th className="pb-2">Description</th>
            <th className="pb-2 text-right">Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx, i) => (
            <tr
              key={i}
              className="border-b border-[#2a2a2a] hover:bg-[#2a2a2a]"
            >
              <td className="py-2">{new Date(tx.date).toLocaleDateString()}</td>
              <td className="py-2">
                <span
                  className="text-white text-xs px-2 py-1 rounded-full"
                  style={{ backgroundColor: getColor(tx.category) }}
                >
                  {tx.category}
                </span>
              </td>
              <td className="py-2">{tx.description}</td>
              <td className="py-2 text-right text-red-400">
                -€{tx.amount.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function getColor(category) {
  const map = {
    Groceries: "#4CAF50",
    Transport: "#1E88E5",
    Entertainment: "#8E24AA",
    Rent: "#26C6DA",
    Misc: "#80DEEA",
  };
  return map[category] || "#999";
}
