type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function MatchPage({
  params,
}: Props) {
  const { slug } = await params;

  return (
    <main className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold mb-8">
        Match #{slug}
      </h1>

      <div className="bg-white border rounded-xl p-6">

        <p>
          Match details API
          will be connected
          in Phase 2.
        </p>

        <p className="mt-4">
          Match ID: {slug}
        </p>

      </div>

    </main>
  );
}
import { Metadata } from "next";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {

  const { slug } =
    await params;

  return {

    title:
      `Team ${slug} | Football Hub`,

    description:
      `Statistics, fixtures and standings for team ${slug}.`,

  };
}

export default async function TeamPage(
  { params }: Props
) {

  const { slug } =
    await params;

  return (

    <main className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold">

        Team {slug}

      </h1>

    </main>

  );
}