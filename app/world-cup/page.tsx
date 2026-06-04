import Link from "next/link";

export default function WorldCupPage() {
  return (
    <main className="max-w-7xl mx-auto p-6">

      {/* HERO */}

      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-xl p-8">

        <h1 className="text-5xl font-bold">
          FIFA World Cup 2026
        </h1>

        <p className="mt-4 text-lg">
          Schedule, Standings, Predictions, Teams and Analysis
        </p>

      </section>

      {/* QUICK LINKS */}

      <section className="grid md:grid-cols-4 gap-4 mt-8">

        <Link
          href="/matches"
          className="bg-white border rounded-xl p-5 hover:shadow-md"
        >
          <h2 className="text-xl font-bold">
            Match Schedule
          </h2>

          <p className="mt-2 text-gray-500">
            All upcoming matches
          </p>
        </Link>

        <Link
          href="/standings"
          className="bg-white border rounded-xl p-5 hover:shadow-md"
        >
          <h2 className="text-xl font-bold">
            Standings
          </h2>

          <p className="mt-2 text-gray-500">
            Group rankings
          </p>
        </Link>

        <Link
          href="/predictions"
          className="bg-white border rounded-xl p-5 hover:shadow-md"
        >
          <h2 className="text-xl font-bold">
            Predictions
          </h2>

          <p className="mt-2 text-gray-500">
            Match win probability
          </p>
        </Link>

        <Link
          href="/teams"
          className="bg-white border rounded-xl p-5 hover:shadow-md"
        >
          <h2 className="text-xl font-bold">
            Teams
          </h2>

          <p className="mt-2 text-gray-500">
            Team profiles
          </p>
        </Link>

      </section>

      {/* GROUPS */}

      <section className="mt-10 bg-white border rounded-xl p-6">

        <h2 className="text-3xl font-bold">
          World Cup Groups
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mt-6">

          <div className="border rounded-lg p-4">
            <h3 className="font-bold text-xl">
              Group A
            </h3>

            <ul className="mt-3 space-y-2">
              <li>Brazil</li>
              <li>Argentina</li>
              <li>Japan</li>
              <li>Canada</li>
            </ul>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-bold text-xl">
              Group B
            </h3>

            <ul className="mt-3 space-y-2">
              <li>France</li>
              <li>Germany</li>
              <li>Mexico</li>
              <li>Morocco</li>
            </ul>
          </div>

        </div>

      </section>

      {/* TOP TEAMS */}

      <section className="mt-10 bg-white border rounded-xl p-6">

        <h2 className="text-3xl font-bold">
          Top Teams
        </h2>

        <div className="grid md:grid-cols-3 gap-4 mt-6">

          <Link
            href="/team/brazil"
            className="border rounded-lg p-4 hover:bg-gray-50"
          >
            Brazil
          </Link>

          <Link
            href="/team/argentina"
            className="border rounded-lg p-4 hover:bg-gray-50"
          >
            Argentina
          </Link>

          <Link
            href="/team/france"
            className="border rounded-lg p-4 hover:bg-gray-50"
          >
            France
          </Link>

        </div>

      </section>

      {/* SEO CONTENT */}

      <section className="mt-10 bg-white border rounded-xl p-6">

        <h2 className="text-3xl font-bold">
          World Cup 2026 Predictions & Analysis
        </h2>

        <p className="mt-4 leading-8 text-gray-700">

          Follow the latest FIFA World Cup 2026 schedule,
          team statistics, match predictions, standings,
          analysis and football news. Football Hub provides
          comprehensive coverage of every match, team and
          tournament update throughout the World Cup.

        </p>

      </section>

    </main>
  );
}