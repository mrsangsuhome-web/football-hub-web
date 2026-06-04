import Link from "next/link";
import { leagues } from "@/lib/leagues";

export const metadata = {
title: "Football Leagues",
description:
"Explore football leagues, competitions and tournaments worldwide.",
};

export default function LeaguesPage() {
return ( <main className="max-w-7xl mx-auto p-6"> <h1 className="text-4xl font-bold mb-8">
Football Leagues </h1>

```
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {leagues.map((league) => (
      <Link
        key={league.slug}
        href={`/league/${league.slug}`}
        className="bg-white border rounded-xl p-6 hover:shadow-md transition"
      >
        <h2 className="text-2xl font-bold">
          {league.name}
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          {league.country}
        </p>

        <p className="mt-4 text-gray-600">
          {league.description}
        </p>
      </Link>
    ))}
  </div>
</main>
```

);
}
