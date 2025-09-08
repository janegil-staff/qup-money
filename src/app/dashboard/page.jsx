import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getDashboardData } from "@/lib/dashboard";
import ClientDashboard from "./ClientDashboard";
import { getBalance } from "@/utils/CalculateBaclance";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session)
    return <div className="text-center text-white p-10">Please sign in</div>;

  const userId = session.user.id;
  const { budget, totalExpenses, totalIncome, recentTransactions, user } =
    await getDashboardData(userId);

  const balance = await getBalance(userId);
  const progress = totalIncome > 0 ? (totalExpenses / totalIncome) * 100 : 0;

  return (
    <ClientDashboard
      balance={balance}
      income={totalIncome}
      expenses={totalExpenses}
      progress={progress}
      transactionCount={recentTransactions.length}
      transactions={recentTransactions}
      payday={session.user.payday || 19}
      budget={budget}
    />
  );
}
