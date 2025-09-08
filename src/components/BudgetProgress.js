export default function BudgetProgress({ progress }) {
  return (
    <div className="p-4 bg-white rounded shadow">
      <h3 className="text-lg font-semibold">Budget Usage</h3>
      <div className="mt-2 w-full bg-gray-200 rounded-full h-4">
        <div
          className="bg-green-500 h-4 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="mt-1 text-sm text-gray-600">{progress}% used</p>
    </div>
  );
}
