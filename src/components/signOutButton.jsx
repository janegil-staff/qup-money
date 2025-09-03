"use client";

import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";

export default function SignOutButton() {
  return (
    <button
    className="cursor-pointer float-right"
      onClick={() => signOut()}>
      <LogOut />
    </button>
  );
}
