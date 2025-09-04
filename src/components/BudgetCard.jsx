// BudgetCard.js
import React from "react";
import "./style2.css";
import { FindAndFormateLatestDate } from "@/utils/getLAtestDatAndFormat";

function calculateTotalsByType(data) {
  return data.reduce((acc, item) => {
    acc[item.type] = (acc[item.type] || 0) + item.amount;
    return acc;
  }, {});
}

export default function BudgetCard({ transactions }) {
  const { income, expense  } = calculateTotalsByType(transactions);
  const sum = income - expense;
  const date = FindAndFormateLatestDate(transactions);
  return (
    <div class="money-card minimal mx-auto mb-20">
      <div class="card-header">Total Balance</div>
      <div class="card-amount">{sum} NOK</div>
      <div class="card-footer">Updated: {date}</div>
    </div>
  );
}
