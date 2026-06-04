import { notFound } from "next/navigation";
import { groups } from "@/lib/groups";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return groups.map((group) => ({
    slug: group.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  const group = groups.find(
    (g) => g.slug === slug
  );

  if (!group) {
    return {
      title: "Group Not Found",
    };
  }

  return {
    title: `${group.name} | FIFA World Cup 2026`,
    description: `${group.name} teams, fixtures and standings.`,
  };
}

export default async function WorldCupGroupPage({
  params,
}: Props) {
  const { slug } = await params;

  const group = groups.find(
    (g) => g.slug === slug
  );

  if (!group) {
    notFound();
  }

  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">
        {group.name}
      </h1>

      <div className="bg-white border rounded-xl p-6">
        <h2 className="text-2xl font-semibold mb-4">
          Teams
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {group.teams.map((team) => (
            <div
              key={team}
              className="border rounded-lg p-4"
            >
              {team}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white border rounded-xl p-6 mt-8">
        <h2 className="text-2xl font-semibold mb-4">
          Group Analysis
        </h2>

        <p>
          {group.name} is one of the FIFA World Cup
          2026 groups featured on Football Hub.
          Follow standings, team profiles, match
          previews and predictions throughout the
          tournament.
        </p>
      </div>
    </main>
  );
}