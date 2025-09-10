export function getSalaryCycleFrom19th(payday = 19) {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const day = now.getDate();

  let cycleStartYear = year;
  let cycleStartMonth = month;

  if (day < payday) {
    cycleStartMonth -= 1;
    if (cycleStartMonth < 0) {
      cycleStartMonth = 11;
      cycleStartYear -= 1;
    }
  }

  let cycleEndMonth = cycleStartMonth + 1;
  let cycleEndYear = cycleStartYear;
  if (cycleEndMonth > 11) {
    cycleEndMonth = 0;
    cycleEndYear += 1;
  }

  const startDate = new Date(Date.UTC(cycleStartYear, cycleStartMonth, payday));
  const endDate = new Date(Date.UTC(cycleEndYear, cycleEndMonth, payday));

  return {
    startDate,
    endDate,
    startISO: startDate.toISOString(),
    endISO: endDate.toISOString(),
  };
}
