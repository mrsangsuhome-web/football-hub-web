import Link from "next/link";
import { teams } from "@/lib/teams";

export const metadata = {
  title: "Teams",
  description: "National football teams and World Cup profiles.",
};

export default function TeamsPage() {
  return (
    <main className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">
        Teams
      </h1>

      <div className="grid md:grid-cols-3 gap-4">
        {teams.map((team) => (
          <Link
            key={team.slug}
            href={`/team/${team.slug}`}
            className="bg-white border rounded-xl p-5 hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold">
              {team.name}
            </h2>

            <p className="mt-2 text-gray-500">
              {team.confederation}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}