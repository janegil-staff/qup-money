export default function BudgetCard({ balance, income, expenses, progress }) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">Budget Overview</h2>
      <p>Income: ${income}</p>
      <p>Expenses: ${expenses}</p>
      <p>Balance: ${balance}</p>
      <div className="mt-2 w-full bg-gray-700 rounded-full h-2">
        <div
          className="bg-green-500 h-2 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
