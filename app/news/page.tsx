
"use client";

import { useEffect, useState } from "react";

const API =
  "https://football-hub-api-djhp.onrender.com";

type News = {
  title: string;
  category: string;
};

export default function NewsPage() {

  const [news, setNews] =
    useState<News[]>([]);

  useEffect(() => {

    fetch(
      `${API}/api/news`
    )
      .then((r) => r.json())
      .then(setNews)
      .catch(console.error);

  }, []);

  return (

    <main className="max-w-7xl mx-auto p-6">

      <h1 className="text-4xl font-bold mb-6">
        World Cup 2026 News
      </h1>

      <div className="space-y-4">

        {news.map((item, index) => (

          <article
            key={index}
            className="
            border
            rounded-xl
            p-5
            hover:shadow
          "
          >

            <div
              className="
              text-xs
              uppercase
              text-gray-500
              mb-2
            "
            >
              {item.category}
            </div>

            <h2 className="text-xl font-bold">
              {item.title}
            </h2>

          </article>

        ))}

      </div>

    </main>

  );
}

