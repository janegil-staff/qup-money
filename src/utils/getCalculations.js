function getCalculations(transactions) {
  const totalSpent = transactions.reduce((sum, tx) => sum + tx.amount, 0);

  const byCategory = {};
  transactions.forEach((tx) => {
    byCategory[tx.category] = (byCategory[tx.category] || 0) + tx.amount;
  });

  const savings = byCategory["Savings"] || 0;
  const budget = {
    Food: 100,
    Transport: 100,
    Entertainment: 150,
    Utilities: 100,
    Savings: 250,
  };

  const remaining = Object.keys(budget).reduce((acc, cat) => {
    const spent = byCategory[cat] || 0;
    acc[cat] = budget[cat] - spent;
    return acc;
  }, {});

  return { totalSpent, byCategory, savings, remaining };
}
