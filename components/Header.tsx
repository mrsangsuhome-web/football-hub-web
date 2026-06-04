import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-6">

        <Link
          href="/"
          className="text-2xl font-bold"
        >
          Football Hub
        </Link>

        <nav className="flex gap-4 text-sm font-medium">
          <Link href="/matches">Matches</Link>
          <Link href="/teams">Teams</Link>
          <Link href="/standings">Standings</Link>
          <Link href="/predictions">Predictions</Link>
          <Link href="/world-cup">World Cup</Link>
          <Link href="/news">News</Link>
          <Link href="/livescore">Livescore</Link>
        </nav>
      </div>
    </header>
  );
}