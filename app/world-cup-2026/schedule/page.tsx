
"use client";

import { useEffect, useState } from "react";

const API =
  "https://football-hub-api-djhp.onrender.com";

type Match = {
  home_team: string;
  away_team: string;
  date: string;
  time: string;
  group: string;
};

export default function SchedulePage() {

  const [matches, setMatches] =
    useState<Match[]>([]);

  useEffect(() => {

    fetch(
      `${API}/api/worldcup/schedule`
    )
      .then((r) => r.json())
      .then(setMatches)
      .catch(console.error);

  }, []);

  return (

    <main className="max-w-7xl mx-auto p-6">

      <h1 className="text-4xl font-bold mb-6">
        FIFA World Cup 2026 Schedule
      </h1>

      <div className="space-y-3">

        {matches.map((match, index) => (

          <div
            key={index}
            className="
            border
            rounded-xl
            p-4
          "
          >

            <div className="font-bold">

              {match.home_team}
              {" vs "}
              {match.away_team}

            </div>

            <div className="text-sm text-gray-500">

              Group {match.group}

            </div>

            <div className="text-sm">

              {match.date}
              {" "}
              {match.time}

            </div>

          </div>

        ))}

      </div>

    </main>

  );
}

