import { notFound } from "next/navigation";

const groups = {
  a: {
    name: "Group A",
    teams: [
      "Brazil",
      "Argentina",
      "Japan",
      "Canada",
    ],
  },

  b: {
    name: "Group B",
    teams: [
      "France",
      "Germany",
      "Mexico",
      "Morocco",
    ],
  },
};

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function GroupPage({
  params,
}: Props) {

  const { slug } = await params;

  const group =
    groups[
      slug.toLowerCase() as keyof typeof groups
    ];

  if (!group) {
    notFound();
  }

  return (
    <main className="max-w-7xl mx-auto p-6">

      <div className="bg-white border rounded-xl p-8">

        <h1 className="text-4xl font-bold">
          {group.name}
        </h1>

        <p className="mt-4 text-gray-500">
          FIFA World Cup 2026
        </p>

      </div>

      <section className="bg-white border rounded-xl p-6 mt-8">

        <h2 className="text-2xl font-bold">
          Teams
        </h2>

        <ul className="mt-4 space-y-3">

          {group.teams.map((team) => (
            <li
              key={team}
              className="border rounded-lg p-3"
            >
              {team}
            </li>
          ))}

        </ul>

      </section>

    </main>
  );
}