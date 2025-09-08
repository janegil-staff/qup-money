export default function DaysLeft({ daysLeft }) {
  return (
    <div className="p-4 bg-white rounded shadow text-center">
      <h3 className="text-lg font-semibold">Days Left</h3>
      <p className="text-3xl font-bold text-blue-600">{daysLeft}</p>
    </div>
  );
}
