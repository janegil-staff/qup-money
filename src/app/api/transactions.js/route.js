import { connectToDB } from "@/lib/db";
import Transaction from "@/models/Transaction";

export async function POST(req) {
  try {
    const { type, amount, category, note, userId } = await req.json();
    await connectToDB();

    const transaction = await Transaction.create({
      type,
      amount,
      category,
      note,
      userId,
    });

    return new Response(JSON.stringify(transaction), { status: 201 });
  } catch (err) {
    console.error("Transaction error:", err);
    return new Response(
      JSON.stringify({ error: "Failed to add transaction" }),
      { status: 500 }
    );
  }
}
