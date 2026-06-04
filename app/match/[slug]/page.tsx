import { notFound } from "next/navigation";
import { matches } from "@/lib/matches";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return matches.map((match) => ({
    slug: match.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  const match = matches.find((m) => m.slug === slug);

  if (!match) {
    return {
      title: "Match Not Found",
    };
  }

  return {
    title: `${match.home} vs ${match.away}`,
    description: `${match.home} vs ${match.away} preview, prediction and statistics.`,
  };
}

export default async function MatchPage({ params }: Props) {
  const { slug } = await params;

  const match = matches.find((m) => m.slug === slug);

  if (!match) {
    notFound();
  }

  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold">
        {match.home} vs {match.away}
      </h1>

      <p className="mt-4 text-gray-600">
        {match.league}
      </p>

      <p className="text-gray-600">
        Kickoff: {match.time}
      </p>

      <div className="mt-8 bg-white border rounded-xl p-6">
        <h2 className="text-2xl font-semibold mb-4">
          Match Preview
        </h2>

        <p>
          Full preview, prediction and statistics for
          {` ${match.home} vs ${match.away}.`}
        </p>
      </div>
    </main>
  );
}