// utils/salaryProgress.js
export function getSalaryProgress(startDate, endDate) {
  const now = new Date();
  const start = new Date(startDate);
  const end = new Date(endDate);

  const total = end - start;
  const elapsed = now - start;
  const percent = Math.min(Math.max((elapsed / total) * 100, 0), 100);

  return {
    percent: percent.toFixed(1),
    daysRemaining: Math.ceil((end - now) / (1000 * 60 * 60 * 24)),
  };
}
