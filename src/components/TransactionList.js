export default function TransactionList({ transactions }) {
  return (
    <div className="bg-card p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
      <ul className="space-y-2">
        {transactions.map((tx) => (
          <li
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
    </div>
  );
}
