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

export default function BudgetCardOld({ transactions }) {
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
        <div className="money-card minimal mx-auto mb-20">
          <div className="card-header">Total Balance</div>
          <div className="card-amount">0 NOK</div>
          <div className="card-footer">No transactions</div>
        </div>
      </>
    );
  }
  return (
    <div className="money-card minimal mx-auto mb-20">
      <div className="card-header">Total Balance</div>
      <div className="card-amount">{sum.toFixed(2)} NOK</div>
      <div className="card-footer">Updated: {date}</div>
    </div>
  );
}
