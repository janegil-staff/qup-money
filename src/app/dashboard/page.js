import Image from "next/image";

export default function Dashboard() {
  return (
    <main className="bg-[#121212] text-[#e0e0e0] min-h-screen font-sans">
      {/* Hero Section */}
      <section className="px-6 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-[#00ffc3] mb-4">
          Take Control of Your Money
        </h1>
        <p className="text-lg md:text-xl text-[#aaa] mb-8">
          Qup Money helps you track every krone from payday to payday —
          effortlessly.
        </p>
        <div className="flex justify-center gap-4"></div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-16 bg-[#1c1c1c]">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#00ffc3]">
          Why Qup Money?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Smart Salary Cycle",
              desc: "Automatically tracks your budget from the 19th to the 18th.",
              icon: "🧠",
            },
            {
              title: "Visual Spending Insights",
              desc: "See where your money goes with clean charts and summaries.",
              icon: "📊",
            },
            {
              title: "Private & Secure",
              desc: "Your data stays on your device. No ads, no tracking.",
              icon: "🔒",
            },
          ].map((f, i) => (
            <div
              key={i}
              className="bg-[#2a2a2a] p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold text-[#00ffc3] mb-2">
                {f.title}
              </h3>
              <p className="text-[#ccc]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#00ffc3]">
          Your Financial Command Center
        </h2>
        <p className="text-center text-[#aaa] max-w-2xl mx-auto mb-12">
          From the moment you open Qup Money, you’ll see what matters most: how
          much you’ve spent, how many days are left in your cycle, and where
          your money is going.
        </p>
        <div className="bg-[#1c1c1c] rounded-lg p-6 text-center text-[#ccc]">
          <p>
            <div className="text-center">
              <Image
                src="/images/dashboard.png"
                alt="Qup Money Dashboard"
                width={800}
                height={500}
                className="rounded-lg shadow-lg mx-auto"
              />
            </div>
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-16 bg-[#1c1c1c]">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#00ffc3]">
          Loved by Minimalists and Money Nerds
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              quote: "Finally, a budget app that doesn’t overwhelm me.",
              name: "Nora, Oslo",
            },
            {
              quote: "I check Qup every morning. It’s like brushing my teeth.",
              name: "Emil, Bergen",
            },
          ].map((t, i) => (
            <div key={i} className="bg-[#2a2a2a] p-6 rounded-lg shadow">
              <p className="italic text-[#ccc]">“{t.quote}”</p>
              <p className="mt-4 text-[#00ffc3] font-semibold">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-[#00ffc3] mb-6">
          Ready to Master Your Money?
        </h2>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 text-center text-[#666] text-sm">
        <p>© 2025 Qup Money. All rights reserved.</p>
        <div className="mt-2 flex justify-center gap-4">
          <a href="#" className="hover:text-[#00ffc3]">
            About
          </a>
          <a href="#" className="hover:text-[#00ffc3]">
            Privacy
          </a>
          <a href="#" className="hover:text-[#00ffc3]">
            Contact
          </a>
        </div>
      </footer>
    </main>
  );
}
