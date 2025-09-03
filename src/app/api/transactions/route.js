import { connectToDB } from "@/lib/db";
import Transaction from "@/models/Transaction";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export async function GET(req) {
  await connectToDB();
  const session = await getServerSession(authOptions);

  if (!session) {
    return new Response("Unauthorized", { status: 401 });
  }

  const userId = session.user.id;
  const transactions = await Transaction.find({userId }).sort({
    date: -1,
  });

  return Response.json(transactions);
}

export async function POST(req) {
  await connectToDB();
  const body = await req.json();
  console.log(body);
  const newTx = await Transaction.create(body);
  return Response.json(newTx);
}
