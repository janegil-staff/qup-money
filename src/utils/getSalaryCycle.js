export function getCurrentSalaryCycle(payday) {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth(); // 0-indexed
  const day = now.getDate();

  let cycleStartDate, cycleEndDate;

  if (day < payday) {
    // Start date is last month's payday
    const prevMonth = month === 0 ? 11 : month - 1;
    const startYear = month === 0 ? year - 1 : year;
    cycleStartDate = new Date(startYear, prevMonth, payday);
    cycleEndDate = new Date(year, month, payday);
  } else {
    // Start date is this month's payday
    const nextMonth = month === 11 ? 0 : month + 1;
    const endYear = month === 11 ? year + 1 : year;
    cycleStartDate = new Date(year, month, payday);
    cycleEndDate = new Date(endYear, nextMonth, payday);
  }

  return {
    startDate: cycleStartDate,
    endDate: cycleEndDate,
  };
}
