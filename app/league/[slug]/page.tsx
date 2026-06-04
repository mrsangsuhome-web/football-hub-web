import { notFound } from "next/navigation";
import { leagues } from "@/lib/leagues";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props) {
  const { slug } = await params;

  const league = leagues.find(
    (item) => item.slug === slug
  );

  return {
    title: league?.name || "League",
    description:
      league?.description ||
      "Football league information",
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

  return (
    <main className="max-w-7xl mx-auto p-6">

      <div className="bg-white border rounded-xl p-8">

        <h1 className="text-4xl font-bold">
          {league.name}
        </h1>

        <p className="mt-3 text-gray-600">
          {league.country}
        </p>

        <p className="mt-4">
          {league.description}
        </p>

        <div className="mt-6">
          Teams: {league.teams}
        </div>

      </div>

    </main>
  );
}