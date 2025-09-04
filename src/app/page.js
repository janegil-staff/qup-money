"use client";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  return (
    <div className="bg-[#121212] text-[#e0e0e0] min-h-screen font-sans">
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl font-bold text-[#00ffc3] mb-4">Qup Money</h1>
        <p className="text-xl max-w-xl mx-auto mb-6">
          Track your expenses, master your salary cycle, and take control of your budget — all in one sleek app.
        </p>
        <button onClick={() => router.push("/auth/signin")} className="bg-[#00bcd4] text-black px-6 py-3 rounded-full text-lg hover:scale-105 transition">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 grid md:grid-cols-3 gap-8 text-center">
        {[
          { title: "💸 Expense Tracker", desc: "Log every transaction with ease and clarity." },
          { title: "📆 Salary Cycle", desc: "Visualize your income flow from the 19th to the 18th." },
          { title: "📊 Budget Insights", desc: "Set category limits and monitor your spending." },
        ].map((f, i) => (
          <div key={i} className="bg-[#1c1c1c] p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2">{f.title}</h3>
            <p className="text-[#b0b0b0]">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-[#1a1a1a] text-center">
        <h2 className="text-3xl font-bold mb-8">What Users Say</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <blockquote className="bg-[#2a2a2a] p-6 rounded-lg italic">
            “Qup Money helped me save €400 in just two months. The salary cycle view is genius.”
            <footer className="mt-4 text-[#00ffc3]">— Erik, Oslo</footer>
          </blockquote>
          <blockquote className="bg-[#2a2a2a] p-6 rounded-lg italic">
            “I finally understand where my money goes. The budgeting tools are so intuitive.”
            <footer className="mt-4 text-[#00ffc3]">— Lina, Bergen</footer>
          </blockquote>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to own your finances?</h2>
        <p className="text-lg mb-6">Join thousands of users who trust Qup Money to guide their spending.</p>
        <button className="bg-[#00ffc3] text-black px-8 py-4 rounded-full text-xl hover:scale-105 transition">
          Download Now
        </button>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-[#888] text-sm">
        © 2025 Qup Money. Built for clarity. Made in Norway.
      </footer>
    </div>
  );
}
