const standings = [
  {
    position: 1,
    team: "Brazil",
    played: 3,
    won: 3,
    draw: 0,
    lost: 0,
    points: 9,
  },
  {
    position: 2,
    team: "Argentina",
    played: 3,
    won: 2,
    draw: 0,
    lost: 1,
    points: 6,
  },
  {
    position: 3,
    team: "Japan",
    played: 3,
    won: 1,
    draw: 0,
    lost: 2,
    points: 3,
  },
  {
    position: 4,
    team: "Canada",
    played: 3,
    won: 0,
    draw: 0,
    lost: 3,
    points: 0,
  },
];

export default function StandingsPage() {
  return (
    <main className="max-w-7xl mx-auto p-6">

      <div className="mb-8">

        <h1 className="text-4xl font-bold">
          World Cup Standings
        </h1>

        <p className="mt-2 text-gray-500">
          Group rankings and tournament standings
        </p>

      </div>

      <div className="overflow-hidden rounded-xl border bg-white shadow-sm">

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>
              <th className="p-4 text-left">#</th>
              <th className="p-4 text-left">Team</th>
              <th className="p-4 text-center">P</th>
              <th className="p-4 text-center">W</th>
              <th className="p-4 text-center">D</th>
              <th className="p-4 text-center">L</th>
              <th className="p-4 text-center">PTS</th>
            </tr>

          </thead>

          <tbody>

            {standings.map((team) => (
              <tr
                key={team.position}
                className="border-t hover:bg-gray-50"
              >

                <td className="p-4 font-bold">
                  {team.position}
                </td>

                <td className="p-4 font-semibold">
                  {team.team}
                </td>

                <td className="p-4 text-center">
                  {team.played}
                </td>

                <td className="p-4 text-center">
                  {team.won}
                </td>

                <td className="p-4 text-center">
                  {team.draw}
                </td>

                <td className="p-4 text-center">
                  {team.lost}
                </td>

                <td className="p-4 text-center font-bold">
                  {team.points}
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

      <section className="mt-10 bg-white border rounded-xl p-6">

        <h2 className="text-2xl font-bold">
          Standings Overview
        </h2>

        <p className="mt-4 leading-8 text-gray-700">
          Follow the latest FIFA World Cup standings,
          group rankings, points, wins, losses and
          qualification scenarios throughout the tournament.
        </p>

      </section>

    </main>
  );
}