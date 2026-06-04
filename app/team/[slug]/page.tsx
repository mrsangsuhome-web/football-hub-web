import { notFound } from "next/navigation";
import { getTeam } from "@/lib/api";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function TeamPage({
  params,
}: Props) {

  const { slug } = await params;

  const result =
    await getTeam(slug);

  if (!result.success) {
    notFound();
  }

  const team = result.data;

  return (
    <main className="max-w-7xl mx-auto p-6">

      <div className="bg-white border rounded-xl p-8">

        <h1 className="text-4xl font-bold">
          {team.name}
        </h1>

        <div className="mt-3">
          FIFA Rank #{team.rank}
        </div>

        <div className="mt-2">
          Coach: {team.coach}
        </div>

      </div>

    </main>
  );
}