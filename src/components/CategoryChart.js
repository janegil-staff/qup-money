import { Pie } from "react-chartjs-2";

export default function CategoryChart({ data }) {
  const chartData = {
    labels: data.map((d) => d._id),
    datasets: [
      {
        data: data.map((d) => d.total),
        backgroundColor: ["#4ade80", "#60a5fa", "#f87171", "#facc15"],
      },
    ],
  };

  return (
    <div className="p-4 bg-white rounded shadow col-span-2">
      <h3 className="text-lg font-semibold mb-2">Spending by Category</h3>
      <Pie data={chartData} />
    </div>
  );
}
