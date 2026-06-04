import { getMatches } from "@/lib/api";

export default async function LiveScorePage() {
  let matches: any[] = [];

  try {
    const data = await getMatches("PL");
    matches = data?.matches || [];
  } catch (e) {
    console.error(e);
  }

  return (
    <main className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">
        Premier League Matches
      </h1>

      <div className="space-y-4">
        {matches.slice(0, 20).map((match) => (
          <div
            key={match.id}
            className="bg-white border rounded-xl p-4"
          >
            <div className="font-semibold">
              {match.homeTeam?.name}
              {" vs "}
              {match.awayTeam?.name}
            </div>

            <div className="text-sm text-gray-500">
              {match.utcDate}
            </div>

            <div>
              {match.score?.fullTime?.home ?? "-"}
              {" : "}
              {match.score?.fullTime?.away ?? "-"}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}