import { connectToDB } from "@/lib/db";
import Transaction from "@/models/Transaction";
import mongoose from "mongoose";

export async function getBalance(userId) {
  await connectToDB();

  const objectId = new mongoose.Types.ObjectId(userId);

  const transactions = await Transaction.find({ userId: objectId });

  const balance = transactions.reduce((sum, tx) => sum + tx.amount, 0);

  return balance;
}
