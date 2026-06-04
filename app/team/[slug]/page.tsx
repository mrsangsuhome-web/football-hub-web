type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function TeamPage({
  params,
}: Props) {
  const { slug } = await params;

  const API_URL =
    process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(
    `${API_URL}/api/team/${slug}`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  const team = await res.json();

  return (
    <main className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold mb-8">
        {team.name}
      </h1>

      {team.crest && (

        <img
          src={team.crest}
          alt={team.name}
          width={150}
          height={150}
        />

      )}

      <div className="space-y-3 mt-6">

        <p>
          <strong>Country:</strong>{" "}
          {team.area?.name}
        </p>

        <p>
          <strong>Founded:</strong>{" "}
          {team.founded}
        </p>

        <p>
          <strong>Venue:</strong>{" "}
          {team.venue}
        </p>

        <p>
          <strong>Website:</strong>{" "}
          {team.website}
        </p>

      </div>

    </main>
  );
}