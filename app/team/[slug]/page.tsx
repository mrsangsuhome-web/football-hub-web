import { notFound } from "next/navigation";
import { teams } from "@/lib/teams";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return teams.map((team) => ({
    slug: team.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  const team = teams.find((t) => t.slug === slug);

  if (!team) {
    return {
      title: "Team Not Found",
    };
  }

  return {
    title: `${team.name} Team Profile`,
    description: `${team.name} squad, statistics and World Cup analysis.`,
  };
}

export default async function TeamPage({ params }: Props) {
  const { slug } = await params;

  const team = teams.find((t) => t.slug === slug);

  if (!team) {
    notFound();
  }

  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold">
        {team.name}
      </h1>

      <p className="mt-4 text-gray-600">
        Confederation: {team.confederation}
      </p>

      <div className="mt-8 bg-white border rounded-xl p-6">
        <h2 className="text-2xl font-semibold mb-4">
          Team Analysis
        </h2>

        <p>
          {team.name} is one of the featured national teams in
          Football Hub's FIFA World Cup 2026 coverage.
        </p>
      </div>
    </main>
  );
}