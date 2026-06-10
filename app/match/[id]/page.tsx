
"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const API =
  "https://football-hub-api-djhp.onrender.com";

export default function MatchPage() {

  const params = useParams();

  const [match, setMatch] =
    useState<any>(null);

  useEffect(() => {

    fetch(
      `${API}/api/matches`
    )
      .then((r) => r.json())
      .then((data) => {

        const found =
          data.find(
            (m: any) =>
              String(m.id) ===
              String(params.id)
          );

        setMatch(found);

      });

  }, [params.id]);

  if (!match) {

    return (

      <main className="p-6">
        Loading...
      </main>

    );

  }

  return (

    <main className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold mb-4">

        {match.home_team}
        {" vs "}
        {match.away_team}

      </h1>

      <div
        className="
        border
        rounded-xl
        p-6
      "
      >

        <div className="mb-3">

          Competition:

          {" "}

          {match.competition}

        </div>

        <div className="mb-3">

          Status:

          {" "}

          {match.status}

        </div>

        <div>

          Date:

          {" "}

          {match.match_date}

        </div>

      </div>

    </main>

  );
}

