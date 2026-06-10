
"use client";

import { useEffect, useState } from "react";

const API =
  "https://football-hub-api-djhp.onrender.com";

export default function BracketPage() {

  const [data, setData] =
    useState<any>({});

  useEffect(() => {

    fetch(
      `${API}/api/worldcup/bracket`
    )
      .then((r) => r.json())
      .then(setData);

  }, []);

  return (

    <main className="max-w-7xl mx-auto p-6">

      <h1 className="text-4xl font-bold mb-6">
        World Cup Bracket
      </h1>

      <pre
        className="
        border
        rounded-xl
        p-4
        overflow-auto
      "
      >
        {JSON.stringify(
          data,
          null,
          2
        )}
      </pre>

    </main>

  );
}

