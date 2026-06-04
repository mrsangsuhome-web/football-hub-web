import { notFound } from "next/navigation";
import { leagues } from "@/lib/leagues";

type Props = {
params: Promise<{
slug: string;
}>;
};

export async function generateStaticParams() {
return leagues.map((league) => ({
slug: league.slug,
}));
}

export async function generateMetadata({ params }: Props) {
const { slug } = await params;

const league = leagues.find(
(item) => item.slug === slug
);

if (!league) {
return {
title: "League Not Found",
};
}

return {
title: league.name,
description: league.description,
};
}

export default async function LeaguePage({
params,
}: Props) {
const { slug } = await params;

const league = leagues.find(
(item) => item.slug === slug
);

if (!league) {
notFound();
}

return ( <main className="max-w-5xl mx-auto p-6"> <h1 className="text-4xl font-bold">
{league.name} </h1>


  <p className="mt-2 text-gray-500">
    {league.country}
  </p>

  <div className="mt-8 bg-white border rounded-xl p-6">
    <h2 className="text-2xl font-semibold mb-4">
      Competition Overview
    </h2>

    <p>
      {league.description}
    </p>

    <p className="mt-4">
      Football Hub provides standings,
      fixtures, predictions, match previews,
      team statistics and football news
      related to {league.name}.
    </p>
  </div>

  <div className="mt-8 bg-white border rounded-xl p-6">
    <h2 className="text-2xl font-semibold mb-4">
      Latest Coverage
    </h2>

    <ul className="space-y-3">
      <li>Match previews</li>
      <li>League standings</li>
      <li>Transfer updates</li>
      <li>Statistical analysis</li>
      <li>Expert predictions</li>
    </ul>
  </div>
</main>

);
}
