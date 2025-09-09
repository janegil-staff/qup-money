"use client";

import { useSession } from "next-auth/react";
import { format } from "date-fns";

export default function Header() {
  const { data: session } = useSession();
  const userName = session?.user?.name || session?.user?.email?.split("@")[0];
  const today = format(new Date(), "eeee, MMMM d");

  return (
    <header className="flex justify-between items-center bg-card p-6 rounded-lg shadow-md">
      <div>
        <h1 className="text-2xl font-bold text-accent">
          Welcome back, {userName}
        </h1>
        <p className="text-sm text-gray-400">{today}</p>
      </div>
    </header>
  );
}
