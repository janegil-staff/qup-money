// components/SalaryProgressBar.js
import { getCurrentSalaryCycle } from "@/utils/getSalaryCycle";
import { getSalaryProgress } from "@/utils/salaryProgress";

export default function SalaryProgressBar() {
  const { startDate, endDate } = getCurrentSalaryCycle();
  const { percent, daysRemaining } = getSalaryProgress(startDate, endDate);

  return (
    <div>
      <h3>💰 Salary Progress</h3>
      <div style={{ background: "#444", borderRadius: "8px", height: "20px" }}>
        <div style={{
          width: `${percent}%`,
          background: "#4caf50",
          height: "100%",
          transition: "width 0.5s ease",
        }} />
      </div>
      <p style={{ color: "#ccc" }}>
        {percent}% through the pay cycle — {daysRemaining} days until payday
      </p>
    </div>
  );
}
