
"use client";

import { useEffect, useState } from "react";

const API =
  "https://football-hub-api-djhp.onrender.com";

export default function SchedulePage() {

  const [matches, setMatches] =
    useState<any[]>([]);

  useEffect(() => {

    fetch(
      `${API}/api/worldcup/schedule`
    )
      .then((r) => r.json())
      .then(setMatches);

  }, []);

  return (

    <main className="max-w-7xl mx-auto p-6">

      <h1 className="text-4xl font-bold mb-6">
        FIFA World Cup 2026 Schedule
      </h1>

      {matches.map((match, index) => (

        <div
          key={index}
          className="
          border
          rounded-xl
          p-4
          mb-3
        "
        >

          <div className="font-bold">

            {match.home_team}
            {" vs "}
            {match.away_team}

          </div>

          <div className="text-gray-500">

            {match.date}
            {" "}
            {match.time}

          </div>

        </div>

      ))}

    </main>

  );
}

