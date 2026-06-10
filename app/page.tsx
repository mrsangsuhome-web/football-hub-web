
"use client";

import { useEffect, useState } from "react";

import AdBanner from "@/components/AdBanner";
import WorldCupBanner from "@/components/WorldCupBanner";

const API =
  "https://football-hub-api-djhp.onrender.com";

type Match = {
  id: string;
  home_team: string;
  away_team: string;
  competition: string;
  status: string;
};

type News = {
  title: string;
  category: string;
};

type Stats = {
  teams: number;
  matches: number;
  competitions: number;
  status: string;
};

export default function HomePage() {

  const [matches, setMatches] =
    useState<Match[]>([]);

  const [news, setNews] =
    useState<News[]>([]);

  const [stats, setStats] =
    useState<Stats>({
      teams: 0,
      matches: 0,
      competitions: 0,
      status: "loading",
    });

  useEffect(() => {

    loadData();

    const timer =
      setInterval(loadData, 10000);

    return () =>
      clearInterval(timer);

  }, []);

  async function loadData() {

    try {

      const statsRes =
        await fetch(
          `${API}/api/stats`
        );

      setStats(
        await statsRes.json()
      );

      const matchesRes =
        await fetch(
          `${API}/api/matches`
        );

      setMatches(
        await matchesRes.json()
      );

      const newsRes =
        await fetch(
          `${API}/api/news`
        );

      setNews(
        await newsRes.json()
      );

    } catch (err) {

      console.error(err);

    }

  }

  return (

    <main className="max-w-7xl mx-auto p-6">

      <section className="mb-8">

        <h1 className="text-5xl font-bold">
          Football Hub
        </h1>

        <p className="mt-3 text-gray-500">
          World Cup 2026
          • Live Scores
          • Results
          • News
        </p>

      </section>

      <AdBanner />

      <WorldCupBanner />

      <div className="grid md:grid-cols-4 gap-4 mb-8">

        <div className="border rounded-xl p-4">
          <div>Matches</div>
          <div className="text-3xl font-bold">
            {stats.matches}
          </div>
        </div>

        <div className="border rounded-xl p-4">
          <div>Competitions</div>
          <div className="text-3xl font-bold">
            {stats.competitions}
          </div>
        </div>

        <div className="border rounded-xl p-4">
          <div>Teams</div>
          <div className="text-3xl font-bold">
            {stats.teams}
          </div>
        </div>

        <div className="border rounded-xl p-4">
          <div>Status</div>
          <div className="text-3xl font-bold">
            {stats.status}
          </div>
        </div>

      </div>

      <div className="border rounded-xl p-4 mb-8">

        <h2 className="text-2xl font-bold mb-4">
          Today's Matches
        </h2>

        {matches.map((match) => (

          <div
            key={match.id}
            className="border-b py-3"
          >

            <div className="font-semibold">

              {match.home_team}
              {" vs "}
              {match.away_team}

            </div>

            <div className="text-sm text-gray-500">
              {match.competition}
            </div>

            <div className="text-sm">
              {match.status}
            </div>

          </div>

        ))}

      </div>

      <AdBanner slot="1234567890" />

      <div className="border rounded-xl p-4">

        <h2 className="text-2xl font-bold mb-4">
          Latest News
        </h2>

        {news.map((item, index) => (

          <div
            key={index}
            className="border-b py-3"
          >

            <div className="font-semibold">
              {item.title}
            </div>

            <div className="text-sm text-gray-500">
              {item.category}
            </div>

          </div>

        ))}

      </div>

      <AdBanner slot="9876543210" />

    </main>

  );
}

