import mongoose from "mongoose";
import BudgetCycle from './src/models/BudgetCycle.js';

import Transaction from "./src/models/Transaction.js";
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' }); // 👈 this is crucial

 console.log('Mongo URI:', process.env.MONGODB_URI);
await mongoose.connect(process.env.MONGODB_URI);

await BudgetCycle.create({
  startDate: new Date("2025-08-19"),
  endDate: new Date("2025-09-18"),
  totalSpent: 1240.5,
  progress: 72,
});


await Transaction.insertMany([
  {
    title: "Food",
    type: "income",
    amount: 45.2,
    userId: "68bb1e015319380df71ed0fb"
  },
  {
    title: "Wine",
    type: "income",
    amount: 455.2,
    userId: "68bb1e015319380df71ed0fb"
  },
  {
    title: "Savings",
    type: "income",
    amount: 100,
    userId: "68bb1e015319380df71ed0fb"
  },
  {
    title: "Food",
    type: "expense",
    amount: 45.2,
    userId: "68bb1e015319380df71ed0fb"
  },
]);
