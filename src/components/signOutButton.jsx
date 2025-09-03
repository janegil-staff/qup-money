"use client";

import { signOut } from "next-auth/react";

export default function SignOutButton() {
  return (
    <button
      onClick={() => signOut()}
      className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-semibold text-white transition-all duration-300 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-xl shadow-lg hover:scale-105 hover:shadow-xl group"
    >
      <span className="absolute inset-0 w-full h-full bg-black opacity-10 group-hover:opacity-20 transition-opacity"></span>
      <span className="relative z-10">Sign Out</span>
    </button>
  );
}
