
import type { Metadata } from "next";
import Link from "next/link";

import "./globals.css";

export const metadata: Metadata = {

  title: {
    default:
      "Football Hub",
    template:
      "%s | Football Hub",
  },

  description:
    "FIFA World Cup 2026 Schedule, Results, Groups, Bracket, News and Live Scores.",

  keywords: [
    "World Cup 2026",
    "Football Hub",
    "FIFA World Cup",
    "World Cup Schedule",
    "World Cup Groups",
    "World Cup Bracket",
    "Live Scores",
    "Football News"
  ],

  openGraph: {

    title:
      "Football Hub",

    description:
      "World Cup 2026 Schedule, Results, Groups and News",

    type:
      "website",

    siteName:
      "Football Hub"

  }

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (

    <html lang="en">

      <body
        className="
        bg-gray-50
        text-gray-900
      "
      >

        <header
          className="
          bg-white
          border-b
          sticky
          top-0
          z-50
        "
        >

          <div
            className="
            max-w-7xl
            mx-auto
            px-6
            py-4
            flex
            items-center
            justify-between
          "
          >

            <Link
              href="/"
              className="
              text-2xl
              font-bold
            "
            >
              ⚽ Football Hub
            </Link>

            <nav
              className="
              flex
              gap-5
              text-sm
              font-medium
            "
            >

              <Link href="/">
                Home
              </Link>

              <Link href="/world-cup-2026">
                World Cup
              </Link>

              <Link href="/world-cup-2026/schedule">
                Schedule
              </Link>

              <Link href="/world-cup-2026/groups">
                Groups
              </Link>

              <Link href="/world-cup-2026/bracket">
                Bracket
              </Link>

              <Link href="/news">
                News
              </Link>

            </nav>

          </div>

        </header>

        <main>

          {children}

        </main>

        <footer
          className="
          border-t
          bg-white
          mt-12
        "
        >

          <div
            className="
            max-w-7xl
            mx-auto
            px-6
            py-8
          "
          >

            <div
              className="
              text-lg
              font-bold
              mb-2
            "
            >
              Football Hub
            </div>

            <p
              className="
              text-sm
              text-gray-500
            "
            >
              FIFA World Cup 2026
              Schedule,
              Groups,
              Bracket,
              Results
              and News.
            </p>

            <div
              className="
              mt-4
              text-xs
              text-gray-400
            "
            >
              © 2026 Football Hub
            </div>

          </div>

        </footer>

      </body>

    </html>

  );
}

