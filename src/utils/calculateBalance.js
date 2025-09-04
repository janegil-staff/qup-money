function calculateBalance(income, expenses) {
  const totalIncome = income.reduce((sum, item) => sum + item.amount, 0);
  const totalExpenses = expenses.reduce((sum, item) => sum + item.amount, 0);
  const balance = totalIncome - totalExpenses;

  return {
    totalIncome,
    totalExpenses,
    balance,
  };
}
