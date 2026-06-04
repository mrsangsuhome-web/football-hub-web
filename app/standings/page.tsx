import { getStandings } from "@/lib/api";

export default async function StandingsPage() {

  const data =
    await getStandings("PL");

  const table =
    data?.standings?.[0]?.table || [];

  return (
    <main className="max-w-7xl mx-auto p-6">

      <h1 className="text-4xl font-bold mb-8">
        Premier League Standings
      </h1>

      <table className="w-full border">

        <tbody>

          {table.map((team: any) => (

            <tr
              key={team.team.id}
            >
              <td>{team.position}</td>

              <td>
                {team.team.name}
              </td>

              <td>{team.points}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </main>
  );
}