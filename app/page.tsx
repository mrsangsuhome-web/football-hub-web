
"use client";

import { useEffect, useState } from "react";
import AdBanner from "@/components/AdBanner";

const API =
  "https://football-hub-api-djhp.onrender.com";

type Match = {
  id: string;
  home_team: string;
  away_team: string;
  match_date: string;
  competition: string;
  status: string;
};

type News = {
  title: string;
  category: string;
};

type Standing = {
  group: string;
  team: string;
  played: number;
  won: number;
  draw: number;
  lost: number;
  points: number;
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

  const [standings, setStandings] =
    useState<Standing[]>([]);

  const [stats, setStats] =
    useState<Stats>({
      teams: 48,
      matches: 104,
      competitions: 12,
      status: "online",
    });

  useEffect(() => {

    loadData();

    const interval = setInterval(
      loadData,
      10000
    );

    return () => clearInterval(
      interval
    );

  }, []);

  async function loadData() {

    try {

      const statsRes =
        await fetch(
          `${API}/api/stats`
        );

      const statsData =
        await statsRes.json();

      setStats(statsData);

      const matchesRes =
        await fetch(
          `${API}/api/matches`
        );

      const matchesData =
        await matchesRes.json();

      setMatches(matchesData);

      const newsRes =
        await fetch(
          `${API}/api/news`
        );

      const newsData =
        await newsRes.json();

      setNews(newsData);

      const standingsRes =
        await fetch(
          `${API}/api/standings`
        );

      const standingsData =
        await standingsRes.json();

      setStandings(
        standingsData
      );

    } catch (err) {

      console.error(err);

    }

  }

  return (

    <main className="max-w-7xl mx-auto p-6">

      <div className="mb-8">

        <h1 className="text-5xl font-bold">
          Football Hub
        </h1>

        <p className="text-gray-500 mt-2">
          World Cup 2026 Schedule,
          Results & News
        </p>

      </div>

      <AdBanner />

      <div className="flex flex-wrap gap-3 mb-8">

        <button className="border rounded-lg px-4 py-2">
          🏆 World Cup
        </button>

        <button className="border rounded-lg px-4 py-2">
          📅 Schedule
        </button>

        <button className="border rounded-lg px-4 py-2">
          ⚽ Results
        </button>

        <button className="border rounded-lg px-4 py-2">
          📊 Standings
        </button>

        <button className="border rounded-lg px-4 py-2">
          🌎 Groups
        </button>

        <button className="border rounded-lg px-4 py-2">
          🏅 Bracket
        </button>

        <button className="border rounded-lg px-4 py-2">
          📰 News
        </button>

      </div>

      <div className="grid md:grid-cols-4 gap-4 mb-8">

        <div className="border rounded-xl p-4">
          <div className="text-gray-500">
            Matches
          </div>
          <div className="text-3xl font-bold">
            {stats.matches}
          </div>
        </div>

        <div className="border rounded-xl p-4">
          <div className="text-gray-500">
            Competitions
          </div>
          <div className="text-3xl font-bold">
            {stats.competitions}
          </div>
        </div>

        <div className="border rounded-xl p-4">
          <div className="text-gray-500">
            Teams
          </div>
          <div className="text-3xl font-bold">
            48
          </div>
        </div>

        <div className="border rounded-xl p-4">
          <div className="text-gray-500">
            Status
          </div>
          <div className="text-3xl font-bold">
            {stats.status}
          </div>
        </div>

      </div>

      <div className="border rounded-xl p-8 text-center mb-8">

        <h2 className="text-3xl font-bold">
          🏆 FIFA World Cup 2026
        </h2>

        <p className="mt-3 text-gray-500">
          48 Teams • 12 Groups • 104 Matches
        </p>

      </div>

      <div className="border rounded-xl p-4 mb-8">

        <h2 className="font-bold text-xl mb-4">
          ⚽ Today's Matches
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

      <div className="border rounded-xl p-4 mb-8">

        <h2 className="font-bold text-xl mb-4">
          📊 Group Standings
        </h2>

        {standings.map((team, index) => (

          <div
            key={index}
            className="grid grid-cols-4 border-b py-2"
          >

            <div>
              {team.team}
            </div>

            <div>
              P: {team.played}
            </div>

            <div>
              W: {team.won}
            </div>

            <div>
              Pts: {team.points}
            </div>

          </div>

        ))}

      </div>

      <div className="border rounded-xl p-4 mb-8">

        <h2 className="font-bold text-xl mb-4">
          📰 Latest News
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


