"use client";
import { useEffect } from "react";

export default function StoreSession({ session }) {
  useEffect(() => {
    if (session?.user) {
      localStorage.setItem("user", JSON.stringify(session.user));
    }
  }, [session]);

  return null;
}
