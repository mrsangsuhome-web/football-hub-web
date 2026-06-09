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

  const API_URL =
    process.env.NEXT_PUBLIC_API_URL ||
    "https://football-hub-api-djhp.onrender.com";

  try {

    const res = await fetch(
      `${API_URL}/api/team/${slug}`,
      {
        next: {
          revalidate: 3600,
        },
      }
    );

    const team = await res.json();

    return {
      title:
        `${team.name} | Football Hub`,
      description:
        `${team.name} fixtures, standings, squad and statistics.`,
    };

  } catch {

    return {
      title: "Team | Football Hub",
      description:
        "Football team profile.",
    };

  }
}

export default async function TeamPage(
  { params }: Props
) {

  const { slug } = await params;

  const API_URL =
    process.env.NEXT_PUBLIC_API_URL ||
    "https://football-hub-api-djhp.onrender.com";

  let team: any = null;

  try {

    const res = await fetch(
      `${API_URL}/api/team/${slug}`,
      {
        next: {
          revalidate: 3600,
        },
      }
    );

    team = await res.json();

  } catch {}

  return (
    <main className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold mb-6">
        {team?.name || `Team ${slug}`}
      </h1>

      {team?.crest && (
        <img
          src={team.crest}
          alt={team.name}
          width={150}
          height={150}
        />
      )}

      <div className="mt-6 space-y-3">

        <p>
          <strong>Country:</strong>{" "}
          {team?.area?.name}
        </p>

        <p>
          <strong>Founded:</strong>{" "}
          {team?.founded}
        </p>

        <p>
          <strong>Venue:</strong>{" "}
          {team?.venue}
        </p>

        <p>
          <strong>Website:</strong>{" "}
          {team?.website}
        </p>

      </div>

    </main>
  );
}