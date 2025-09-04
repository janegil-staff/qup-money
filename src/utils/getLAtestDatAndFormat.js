export const FindAndFormateLatestDate = (transactions) => {
  const latestDate = transactions.reduce((latest, item) => {
    const current = new Date(item.createdAt);
    return current > latest ? current : latest;
  }, new Date(0)); // Start with the earliest possible date

  const formatted = latestDate.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  return formatted;
};
