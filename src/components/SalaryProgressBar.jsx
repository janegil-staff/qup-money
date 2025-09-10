import { getCurrentSalaryCycle } from "@/utils/getSalaryCycle";
import { getSalaryProgress } from "@/utils/salaryProgress";

export default function SalaryProgressBar({ payday }) {
  const { startDate, endDate } = getCurrentSalaryCycle(payday);
  const { percent, daysRemaining } = getSalaryProgress(startDate, endDate);
  const safePercent = isNaN(percent) ? 0 : percent;
  const barColor =
    safePercent < 50 ? "#f44336" : safePercent < 80 ? "#ff9800" : "#4caf50";

  return (
    <div>
      <h3>💰 Salary Progress</h3>
      <div style={{ background: "#444", borderRadius: "8px", height: "20px" }}>
        <div
          role="progressbar"
          aria-valuenow={safePercent}
          aria-valuemin={0}
          aria-valuemax={100}
          style={{
            width: `${safePercent}%`,
            background: `${barColor}`,
            height: "100%",
            transition: "width 0.5s ease",
          }}
        />
      </div>
      <p style={{ color: "#ccc" }}>
        {safePercent}% through the pay cycle — {daysRemaining} days until payday
      </p>
    </div>
  );
}
