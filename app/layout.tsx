import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Football Hub",
    template: "%s | Football Hub",
  },

  description:
    "Live Scores, Match Predictions, Team Statistics and FIFA World Cup 2026 Coverage.",

  keywords: [
    "football",
    "soccer",
    "world cup",
    "football predictions",
    "live scores",
    "football news",
  ],

  verification: {
    google: "JY3k_aQCZ4QsvxQvkZV7q1AjhRRH6e4gc5qI5rnr14Q",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 min-h-screen">
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}