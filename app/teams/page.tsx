import Link from "next/link";
import { getTeams } from "@/lib/api";

export default async function TeamsPage() {
  const result = await getTeams();

  const teams = result?.data ?? [];

  return (
    <main className="max-w-7xl mx-auto p-6">

      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          National Teams
        </h1>

        <p className="mt-2 text-gray-500">
          FIFA rankings, team profiles and statistics
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">

        {teams.map((team: any) => (

          <Link
            key={team.slug}
            href={`/team/${team.slug}`}
            className="bg-white border rounded-xl p-6 hover:shadow-md transition"
          >

            <h2 className="text-2xl font-bold">
              {team.name}
            </h2>

            <div className="mt-3 text-gray-500">
              FIFA Rank #{team.rank}
            </div>

            <div className="mt-2 text-gray-500">
              Coach: {team.coach}
            </div>

          </Link>

        ))}

      </div>

    </main>
  );
}