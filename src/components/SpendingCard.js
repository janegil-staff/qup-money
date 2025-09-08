export default function SpendingCard({ spending, transactionCount }) {
  return (
    <div className="bg-card p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Spending Summary</h2>
      <p>🧾 Transactions: {transactionCount}</p>
      <p>💸 Total Spent: ${spending}</p>
    </div>
  );
}
