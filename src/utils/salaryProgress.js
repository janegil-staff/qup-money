export function getSalaryProgress(startDate, endDate) {
  const now = new Date();
  const start = new Date(startDate);
  const end = new Date(endDate);

  // Normalize all dates to midnight
  start.setHours(0, 0, 0, 0);
  end.setHours(0, 0, 0, 0);
  now.setHours(0, 0, 0, 0);

  const totalDays = (end - start) / (1000 * 60 * 60 * 24);
  const elapsedDays = (now - start) / (1000 * 60 * 60 * 24);

  const percent = Math.min(Math.max((elapsedDays / totalDays) * 100, 0), 100);
  const daysRemaining = Math.max(Math.ceil((end - now) / (1000 * 60 * 60 * 24)), 0);

  return {
    percent: percent.toFixed(1),
    daysRemaining,
  };
}
