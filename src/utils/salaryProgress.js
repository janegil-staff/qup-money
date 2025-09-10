export function getSalaryProgress(startDate, endDate) {
  const now = new Date();
  const start = new Date(startDate);
  const end = new Date(endDate);

  // Normalize all dates to midnight
  start.setHours(0, 0, 0, 0);
  end.setHours(0, 0, 0, 0);
  now.setHours(0, 0, 0, 0);

  const MS_PER_DAY = 1000 * 60 * 60 * 24;

  const totalDays = (end - start) / MS_PER_DAY;
  const elapsedDays = (now - start) / MS_PER_DAY;

  const percent = Math.min(Math.max((elapsedDays / totalDays) * 100, 0), 100);
  const daysRemaining = Math.max(Math.ceil((end - now) / MS_PER_DAY), 0);

  let status = "In Progress";
  if (now < start) status = "Upcoming";
  if (now > end) status = "Completed";

  const daysElapsed = Math.max(Math.floor(elapsedDays), 0);

  return {
    percent: percent.toFixed(1),
    daysRemaining,
    status,
    daysElapsed
  };
}
