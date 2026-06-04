import { notFound } from "next/navigation";
import { matches } from "@/lib/matches";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function MatchPage({
  params,
}: Props) {
  const { slug } = await params;

  const match = matches.find(
    (m) => m.slug === slug
  );

  if (!match) {
    notFound();
  }

  return (
    <main className="max-w-7xl mx-auto p-6">

      <h1 className="text-4xl font-bold">
        {match.home} vs {match.away}
      </h1>

      <div className="mt-6">

        <div>
          Home Win: {match.prediction.home}%
        </div>

        <div>
          Draw: {match.prediction.draw}%
        </div>

        <div>
          Away Win: {match.prediction.away}%
        </div>

      </div>

    </main>
  );
}