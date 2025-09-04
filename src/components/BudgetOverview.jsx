"use client";
export default function BudgetOverview({ transactions }) {
  const budget = {
    Food: 200,
    Transport: 100,
    Entertainment: 150,
    Utilities: 120,
    Savings: 300,
  };

  const totals = {};
  transactions.forEach((tx) => {
    totals[tx.category] = (totals[tx.category] || 0) + tx.amount;
  });

  const totalSpent = Object.values(totals).reduce((a, b) => a + b, 0);

  return (
    <div>
      <h2>💰 Budget Overview</h2>
      <p>
        <strong>Total Spent:</strong> €{totalSpent.toFixed(2)}
      </p>
      <ul>
        {Object.keys(budget).map((cat) => {
          const spent = totals[cat] || 0;
          const remaining = budget[cat] - spent;
          return (
            <li key={cat}>
              {cat}: Spent €{spent.toFixed(2)} / Budget €{budget[cat]} →
              Remaining €{remaining.toFixed(2)}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
