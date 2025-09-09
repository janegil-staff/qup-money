import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import User from "@/models/User";
import SettingsClient from "./SettingsClient";
import { connectToDB } from "@/lib/db";

export default async function SettingsPage() {
  await connectToDB();
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.id) {
    return <div className="text-white p-10">Please sign in</div>;
  }

  const rawUser = await User.findById(session.user.id);
  const user = rawUser.toObject();

  user.id = user._id.toString();
  delete user._id;
  delete user.__v;
  delete user.password;

  return <SettingsClient user={user} />;
}
