import { Metadata } from "next";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {

  const { slug } = await params;

  return {
    title: `Match ${slug} | Football Hub`,
    description: `Match analysis, statistics and results.`,
  };
}

export default async function MatchPage(
  { params }: Props
) {

  const { slug } = await params;

  return (
    <main className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold">
        Match {slug}
      </h1>

      <div className="mt-6 bg-white border rounded-xl p-6">
        Match details will be connected from API.
      </div>

    </main>
  );
}