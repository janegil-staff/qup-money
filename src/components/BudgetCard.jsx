// BudgetCard.js
import React from "react";
import "./style2.css";

function calculateTotalsByType(data) {
  return data.reduce((acc, item) => {
    acc[item.type] = (acc[item.type] || 0) + item.amount;
    return acc;
  }, {});
}

export default function BudgetCard({ transactions }) {
  const { expense, income } = calculateTotalsByType(transactions);
  const sum = expense - income;
  return (
    <div class="money-card minimal mx-auto mb-20">
      <div class="card-header">Total Balance</div>
      <div class="card-amount">{sum} NOK</div>
      <div class="card-footer">Updated: 04 Sep 2025</div>
    </div>
  );
}
