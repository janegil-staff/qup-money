export function getSalaryCycleFrom19th() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const day = now.getDate();

  let cycleStartYear = year;
  let cycleStartMonth = month;

  if (day < 19) {
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

  const startDate = new Date(cycleStartYear, cycleStartMonth, 19);
  const endDate = new Date(cycleEndYear, cycleEndMonth, 19);

  return { startDate, endDate };
}
