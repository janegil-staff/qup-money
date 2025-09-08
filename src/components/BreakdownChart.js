export default function BreakdownChart({ breakdown }) {
  return (
    <div className="bg-[#1c1c1c] p-6 rounded-lg shadow text-center">
      <h3 className="text-lg font-semibold text-[#00ffc3] mb-4">
        Category Breakdown
      </h3>
      <div className="w-60 h-60 mx-auto relative">
        <svg viewBox="0 0 32 32" className="w-full h-full">
          {
            breakdown.reduce(
              (acc, item, i) => {
                const startAngle = acc.total;
                const slice = item.percent / 100;
                const endAngle = startAngle + slice;
                const largeArc = slice > 0.5 ? 1 : 0;
                const x1 = 16 + 16 * Math.cos(2 * Math.PI * startAngle);
                const y1 = 16 + 16 * Math.sin(2 * Math.PI * startAngle);
                const x2 = 16 + 16 * Math.cos(2 * Math.PI * endAngle);
                const y2 = 16 + 16 * Math.sin(2 * Math.PI * endAngle);
                const path = `M16,16 L${x1},${y1} A16,16 0 ${largeArc},1 ${x2},${y2} Z`;
                acc.total = endAngle;
                acc.paths.push(
                  <path key={i} d={path} fill={colors[i % colors.length]} />
                );
                return acc;
              },
              { total: 0, paths: [] }
            ).paths
          }
        </svg>
      </div>
      <ul className="mt-6 space-y-2 text-left text-sm text-[#ccc]">
        {breakdown.map((item, i) => (
          <li key={i}>
            <span
              className="inline-block w-3 h-3 mr-2 rounded-full"
              style={{ backgroundColor: colors[i % colors.length] }}
            ></span>
            {item.category} – {item.percent}%
          </li>
        ))}
      </ul>
    </div>
  );
}

const colors = ["#4CAF50", "#1E88E5", "#8E24AA", "#26C6DA", "#80DEEA"];
