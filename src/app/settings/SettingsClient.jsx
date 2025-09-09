"use client";
import { useState } from "react";
import toast from "react-hot-toast";

export default function SettingsClient({ user }) {
  const [payday, setPayday] = useState(user.payday || 19);
  const [budget, setBudget] = useState(user.budget || 0);
  const [currency, setCurrency] = useState(user.currency || "USD");
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    setLoading(true);
    await fetch("/api/settings", {
      method: "POST",
      body: JSON.stringify({ payday, budget, currency }),
      headers: { "Content-Type": "application/json" },
    });
    setLoading(false);
    toast.success("Updated settings")
  };

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>

      <form className="space-y-6 max-w-xl">
        {/* Payday Field */}
        <div>
          <label className="block mb-1 font-semibold">Payday</label>
          <input
            type="number"
            min="1"
            max="31"
            value={payday}
            onChange={(e) => setPayday(Number(e.target.value))}
            className="w-full p-2 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <p className="text-sm text-gray-400 mt-1">
            Day of the month you get paid
          </p>
        </div>

        {/* Budget Field */}
        <div>
          <label className="block mb-1 font-semibold">Monthly Budget</label>
          <input
            type="number"
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
            className="w-full p-2 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <p className="text-sm text-gray-400 mt-1">
            Your target spending limit per month
          </p>
        </div>

        {/* Currency Field */}
        <div>
          <label className="block mb-1 font-semibold">Preferred Currency</label>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="w-full p-2 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="USD">USD – US Dollar</option>
            <option value="EUR">EUR – Euro</option>
            <option value="NOK">NOK – Norwegian Krone</option>
            <option value="GBP">GBP – British Pound</option>
          </select>
        </div>

        {/* Save Button */}
        <button
          type="button"
          onClick={handleSave}
          disabled={loading}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition"
        >
          {loading ? "Saving..." : "Save Settings"}
        </button>
      </form>
    </div>
  );
}
