export function getCurrentSalaryCycle(payday) {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth(); // 0-indexed
  const day = now.getDate();

  let cycleStartDate, cycleEndDate;

  if (day < payday) {
    // We're in the current cycle
    cycleStartDate = new Date(year, month - 1, payday);
    cycleEndDate = new Date(year, month, payday);
  } else {
    // We're in the next cycle
    cycleStartDate = new Date(year, month, payday);
    cycleEndDate = new Date(year, month + 1, payday);
  }

  return {
    startDate: cycleStartDate,
    endDate: cycleEndDate,
  };
}
