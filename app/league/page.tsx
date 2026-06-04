import Link from "next/link";
import { getCompetitions } from "@/lib/api";

export default async function LeaguePage() {

  const data =
    await getCompetitions();

  const leagues =
    data.competitions || [];

  return (
    <main className="max-w-7xl mx-auto p-6">

      <h1 className="text-4xl font-bold mb-8">
        Football Leagues
      </h1>

      <div className="grid md:grid-cols-3 gap-4">

        {leagues.map((league: any) => (

          <Link
            key={league.code}
            href={`/league/${league.code}`}
            className="bg-white border rounded-xl p-4"
          >
            <h2 className="font-bold">
              {league.name}
            </h2>

            <p>
              {league.area?.name}
            </p>

          </Link>

        ))}

      </div>

    </main>
  );
}