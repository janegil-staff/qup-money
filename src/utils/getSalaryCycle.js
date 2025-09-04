// utils/getSalaryCycle.js
export function getCurrentSalaryCycle() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth(); // 0-indexed

  const startDate = new Date(year, month, 1); // 1st of current month
  const endDate = new Date(year, month + 1, 1); // 1st of next month

  return { startDate, endDate };
}
