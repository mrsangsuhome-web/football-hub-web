import Link from "next/link";
import { matches } from "@/lib/matches";

export const metadata = {
  title: "Matches",
  description: "Football matches, previews and statistics.",
};

export default function MatchesPage() {
  return (
    <main className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">
        Matches
      </h1>

      <div className="space-y-4">
        {matches.map((match) => (
          <Link
            key={match.id}
            href={`/match/${match.slug}`}
            className="block bg-white border rounded-xl p-5 hover:shadow-md transition"
          >
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold">
                  {match.home} vs {match.away}
                </h2>

                <p className="text-gray-500">
                  {match.league}
                </p>
              </div>

              <div className="font-semibold">
                {match.time}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}