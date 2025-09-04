// utils/getSalaryCycle.js
export function getCurrentSalaryCycle(payday) {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth(); // 0-indexed
  const day = now.getDate();

  const startDate = new Date(year, month, day); // 1today
  const endDate = new Date(year, month, payday); // 1st of next month

  return { startDate, endDate };
}
