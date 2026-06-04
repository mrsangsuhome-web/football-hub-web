import { getLiveMatches } from "@/lib/api";

export default async function LiveScorePage() {

  const data =
    await getLiveMatches();

  const matches =
    data.response || [];

  return (
    <main className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">
        Live Scores
      </h1>

      <div className="space-y-4">
        {matches.map((match: any) => (
          <div
            key={match.fixture.id}
            className="border rounded-xl p-4"
          >
            <h2 className="font-bold">
              {match.teams.home.name}
              {" vs "}
              {match.teams.away.name}
            </h2>

            <p>
              {match.goals.home}
              {" - "}
              {match.goals.away}
            </p>

            <p>
              {match.fixture.status.elapsed}'
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}