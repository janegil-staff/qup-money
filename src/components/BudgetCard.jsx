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
  const { income, expense } = calculateTotalsByType(transactions);
  let sum = 0;
  if (income && !expense) {
    sum = income;
  } else if (!income && expense) {
    sum = expense;
  } else if (income && expense) {
    sum = income - expense;
  }

  const date = FindAndFormateLatestDate(transactions);
  if (!date) {
    return (
      <>
        <div class="money-card minimal mx-auto mb-20">
          <div class="card-header">Total Balance</div>
          <div class="card-amount">0 NOK</div>
          <div class="card-footer">No transactions</div>
        </div>
      </>
    );
  }
  return (
    <div class="money-card minimal mx-auto mb-20">
      <div class="card-header">Total Balance</div>
      <div class="card-amount">{sum} NOK</div>
      <div class="card-footer">Updated: {date}</div>
    </div>
  );
}
