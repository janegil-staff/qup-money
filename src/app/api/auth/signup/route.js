import { connectToDB } from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { email, password } = await req.json();
    await connectToDB();

    const existing = await User.findOne({ email });
    if (existing)
      return new Response(JSON.stringify({ error: "User exists" }), {
        status: 409,
      });

    const hashed = await bcrypt.hash(password, 10);
    await User.create({ email, password: hashed });

    return new Response(JSON.stringify({ success: true }), { status: 201 });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Signup failed" }), {
      status: 500,
    });
  }
}
