import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(req) {
  const body = await req.json();
  const { type, amount, category, note, userId } = body;

  const transaction = await prisma.transaction.create({
    data: { type, amount, category, note, userId },
  });

  return Response.json(transaction);
}

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");

  const transactions = await prisma.transaction.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
  });

  return Response.json(transactions);
}
