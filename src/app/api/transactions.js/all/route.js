import { connectToDB } from "@/lib/db";
import Transaction from "@/models/Transaction";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");

  await connectToDB();
  const transactions = await Transaction.find({ userId }).sort({
    createdAt: -1,
  });

  return new Response(JSON.stringify(transactions), { status: 200 });
}
