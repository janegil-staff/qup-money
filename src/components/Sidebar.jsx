"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import SignOutButton from "./signOutButton";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Transactions", href: "/transactions" },
    { name: "Budget", href: "/budget" },
    { name: "Settings", href: "/settings" },
  ];

  return (
    <div className="md:flex">
      {/* Mobile toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden p-4 text-white bg-gray-900 w-full flex justify-between items-center"
      >
        <span className="font-bold">Menu</span>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        className={`bg-gray-950 text-white w-full md:w-64 p-6 space-y-4 transition-all duration-300 ${
          open ? "block" : "hidden"
        } md:block`}
      >
        <h2 className="text-2xl font-bold mb-6">💰 Qup Money</h2>
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`block px-4 py-2 rounded hover:bg-gray-800 transition ${
              pathname === link.href ? "bg-gray-800 font-semibold" : ""
            }`}
          >
            {link.name}
          </Link>
        ))}
         <SignOutButton />
      </aside>
           
    </div>
  );
}
