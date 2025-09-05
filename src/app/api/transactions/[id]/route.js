import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/db";
import Transaction from "@/models/Transaction";

export async function DELETE(request, { params }) {
  await connectToDB();

  try {
    const { id } = params;
    const deleted = await Transaction.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json(
        { error: "Transaction not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Transaction deleted" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Delete error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
