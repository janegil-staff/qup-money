import "./styles.css";
export default function TransactionList({ transactions }) {
  return (
    <div>
      <h2>📋 Transactions</h2>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Amount (€)</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(tx => (
            <tr key={tx.id}>
              <td>{tx.category}</td>
              <td style={{ color: tx.amount > 100 ? 'var(--danger)' : 'inherit' }}>
                €{tx.amount.toFixed(2)}
              </td>
              <td>{new Date(tx.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
