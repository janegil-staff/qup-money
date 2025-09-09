import { authOptions } from "@/lib/auth";
import { connectToDB } from "@/lib/db";
import User from "@/models/User";
import { getServerSession } from "next-auth";
User
export async function POST(req) {
  try {
    await connectToDB();
    const session = await getServerSession({ req, res: null, ...authOptions });

    if (!session) return new Response("Unauthorized", { status: 401 });

    const { payday, budget, currency } = await req.json();
    await User.findByIdAndUpdate(session.user.id, {
      payday,
      budget,
      currency,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Settings update failed:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
