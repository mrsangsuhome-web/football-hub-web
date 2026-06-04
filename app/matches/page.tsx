import Link from "next/link";
import { getMatches } from "@/lib/api";

export default async function MatchesPage() {
  const result = await getMatches();

  const matches = result?.data ?? [];

  return (
    <main className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">
        Football Matches
      </h1>

      <div className="space-y-4">
        {matches.map((match: any) => (
          <Link
            key={match.slug}
            href={`/match/${match.slug}`}
            className="block border rounded-xl p-5 bg-white hover:shadow-md"
          >
            <div className="text-sm text-gray-500">
              {match.league}
            </div>

            <div className="text-2xl font-bold mt-2">
              {match.home} vs {match.away}
            </div>

            <div className="mt-2 text-gray-500">
              Kick Off: {match.time}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}