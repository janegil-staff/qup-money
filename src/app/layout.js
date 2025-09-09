import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import SessionWrapper from "@/components/SessionWrapper";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import ShowSidebar from "@/components/ShowSidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Take Control of Your Money.",
  description: "Qup Money is your personal expense tracker, built for clarity, speed, and peace of mind. From payday to payday, we help you stay on top of your budget — effortlessly.",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionWrapper>
          <div className="min-h-screen bg-gray-900 text-white flex flex-col md:flex-row">
            <ShowSidebar />

            <main className="flex-1 p-6">{children}</main>
          </div>
        </SessionWrapper>

        <Toaster />
      </body>
    </html>
  );
}
