import Link from "next/link";
import { getMatches, getStandings } from "@/lib/api";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function LeagueDetailPage({
  params,
}: Props) {
  const { slug } = await params;

  const standingsData =
    await getStandings(slug);

  const matchesData =
    await getMatches(slug);

  const table =
    standingsData?.standings?.[0]?.table || [];

  const matches =
    matchesData?.matches || [];

  return (
    <main className="max-w-7xl mx-auto p-6">

      <h1 className="text-4xl font-bold mb-8">
        {slug} League
      </h1>

      <section className="mb-10">

        <h2 className="text-2xl font-bold mb-4">
          Standings
        </h2>

        <table className="w-full border bg-white">

          <tbody>

            {table.map((team: any) => (

              <tr
                key={team.team.id}
                className="border-b"
              >

                <td className="p-2">
                  {team.position}
                </td>

                <td className="p-2">

                  <Link
                    href={`/team/${team.team.id}`}
                  >
                    {team.team.name}
                  </Link>

                </td>

                <td className="p-2">
                  {team.points}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </section>

      <section>

        <h2 className="text-2xl font-bold mb-4">
          Matches
        </h2>

        <div className="space-y-4">

          {matches.slice(0, 20).map(
            (match: any) => (

              <Link
                key={match.id}
                href={`/match/${match.id}`}
                className="block border rounded-xl p-4 bg-white"
              >

                <div>

                  {match.homeTeam?.name}

                  {" vs "}

                  {match.awayTeam?.name}

                </div>

              </Link>

            )
          )}

        </div>

      </section>

    </main>
  );
}