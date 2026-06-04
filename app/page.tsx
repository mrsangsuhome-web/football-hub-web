import MatchCard from "@/components/MatchCard";
import PredictionCard from "@/components/PredictionCard";
import SectionTitle from "@/components/SectionTitle";
import WorldCupBanner from "@/components/WorldCupBanner";

const liveMatches = [
  {
    id: 1,
    home: "Brazil",
    away: "Argentina",
    time: "19:00",
  },
  {
    id: 2,
    home: "France",
    away: "Germany",
    time: "22:00",
  },
  {
    id: 3,
    home: "Spain",
    away: "England",
    time: "01:00",
  },
];

const predictions = [
  {
    team: "Brazil",
    percentage: 78,
  },
  {
    team: "France",
    percentage: 72,
  },
  {
    team: "Spain",
    percentage: 69,
  },
];

export default function HomePage() {
  return (
    <main className="max-w-7xl mx-auto p-6">

      {/* HERO */}

      <section className="mb-10">

        <h1 className="text-5xl font-bold">
          Football Hub
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Live Scores • Match Predictions • Team Statistics • World Cup Coverage
        </p>

      </section>

      {/* LIVE MATCHES */}

      <section>

        <SectionTitle title="🔥 Live Matches" />

        <div className="grid md:grid-cols-3 gap-4">

          {liveMatches.map((match) => (
            <MatchCard
              key={match.id}
              home={match.home}
              away={match.away}
              time={match.time}
            />
          ))}

        </div>

      </section>

      {/* PREDICTIONS */}

      <section className="mt-12">

        <SectionTitle title="📊 Top Predictions" />

        <div className="grid md:grid-cols-3 gap-4">

          {predictions.map((item) => (
            <PredictionCard
              key={item.team}
              team={item.team}
              percentage={item.percentage}
            />
          ))}

        </div>

      </section>

      {/* WORLD CUP */}

      <section className="mt-12">

        <WorldCupBanner />

      </section>

      {/* NEWS */}

      <section className="mt-12">

        <SectionTitle title="📰 Latest News" />

        <div className="bg-white border rounded-xl p-6">

          <ul className="space-y-3">

            <li>
              Brazil vs Argentina Prediction & Preview
            </li>

            <li>
              France vs Germany Match Analysis
            </li>

            <li>
              FIFA World Cup 2026 Group Stage Preview
            </li>

          </ul>

        </div>

      </section>

    </main>
  );
}