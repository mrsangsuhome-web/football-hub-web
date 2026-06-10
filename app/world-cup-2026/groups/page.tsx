
"use client";

import { useEffect, useState } from "react";

const API =
  "https://football-hub-api-djhp.onrender.com";

export default function GroupsPage() {

  const [groups, setGroups] =
    useState<any>({});

  useEffect(() => {

    fetch(
      `${API}/api/worldcup/groups`
    )
      .then((r) => r.json())
      .then(setGroups)
      .catch(console.error);

  }, []);

  return (

    <main className="max-w-7xl mx-auto p-6">

      <h1 className="text-4xl font-bold mb-6">
        World Cup 2026 Groups
      </h1>

      <div className="grid md:grid-cols-3 gap-4">

        {Object.entries(groups).map(
          ([group, teams]) => (

            <div
              key={group}
              className="
              border
              rounded-xl
              p-4
            "
            >

              <h2 className="font-bold mb-3">
                Group {group}
              </h2>

              {(teams as string[]).map(
                (team) => (

                  <div
                    key={team}
                    className="py-1"
                  >
                    {team}
                  </div>

                )
              )}

            </div>

          )
        )}

      </div>

    </main>

  );
}

