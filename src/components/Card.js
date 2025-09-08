export default function Card({ title, value, subtitle }) {
  return (
    <div className="bg-[#1c1c1c] p-5 rounded-lg shadow hover:shadow-lg transition">
      <h2 className="text-lg font-semibold text-[#00ffc3] mb-2">{title}</h2>
      <p className="text-3xl font-bold">{value}</p>
      <p className="text-sm text-[#aaa]">{subtitle}</p>
    </div>
  );
}
