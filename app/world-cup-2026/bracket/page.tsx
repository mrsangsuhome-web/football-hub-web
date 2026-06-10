
"use client";

import { useEffect, useState } from "react";

const API =
  "https://football-hub-api-djhp.onrender.com";

export default function BracketPage() {

  const [bracket, setBracket] =
    useState<any>({});

  useEffect(() => {

    fetch(
      `${API}/api/worldcup/bracket`
    )
      .then((r) => r.json())
      .then(setBracket)
      .catch(console.error);

  }, []);

  return (

    <main className="max-w-7xl mx-auto p-6">

      <h1 className="text-4xl font-bold mb-6">
        World Cup 2026 Bracket
      </h1>

      <div className="space-y-6">

        <div className="border rounded-xl p-4">

          <h2 className="font-bold mb-2">
            Round of 32
          </h2>

          <pre>
            {JSON.stringify(
              bracket.round_of_32 || [],
              null,
              2
            )}
          </pre>

        </div>

        <div className="border rounded-xl p-4">

          <h2 className="font-bold mb-2">
            Round of 16
          </h2>

          <pre>
            {JSON.stringify(
              bracket.round_of_16 || [],
              null,
              2
            )}
          </pre>

        </div>

        <div className="border rounded-xl p-4">

          <h2 className="font-bold mb-2">
            Quarter Finals
          </h2>

          <pre>
            {JSON.stringify(
              bracket.quarter_finals || [],
              null,
              2
            )}
          </pre>

        </div>

        <div className="border rounded-xl p-4">

          <h2 className="font-bold mb-2">
            Semi Finals
          </h2>

          <pre>
            {JSON.stringify(
              bracket.semi_finals || [],
              null,
              2
            )}
          </pre>

        </div>

        <div className="border rounded-xl p-4">

          <h2 className="font-bold mb-2">
            Final
          </h2>

          <pre>
            {JSON.stringify(
              bracket.final || [],
              null,
              2
            )}
          </pre>

        </div>

      </div>

    </main>

  );
}

