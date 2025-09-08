import { useEffect, useState } from "react";

export default function Dashboard() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("/api/dashboard?userId=123")
      .then((res) => res.json())
      .then((data) => setTransactions(data));
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {transactions.map((tx) => (
          <li key={tx._id}>
            {tx.category}: ${tx.amount} on{" "}
            {new Date(tx.date).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
}
