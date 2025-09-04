// utils/getSalaryCycle.js
export function getSalaryCycleFrom19th() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const day = now.getDate();

  // If today is before the 19th, we're in the previous cycle
  const cycleStartMonth = day >= 19 ? month : month - 1;

  const startDate = new Date(year, cycleStartMonth, 19);
  const endDate = new Date(year, cycleStartMonth + 1, 19);

  return { startDate, endDate };
}
