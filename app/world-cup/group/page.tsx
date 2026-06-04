import Link from "next/link";
import { groups } from "@/lib/groups";

export const metadata = {
  title: "World Cup Groups",
  description:
    "FIFA World Cup 2026 groups, standings and team analysis.",
};

export default function WorldCupGroupsPage() {
  return (
    <main className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">
        FIFA World Cup 2026 Groups
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {groups.map((group) => (
          <Link
            key={group.slug}
            href={`/world-cup/group/${group.slug}`}
            className="bg-white border rounded-xl p-5 hover:shadow-md transition"
          >
            <h2 className="text-2xl font-bold mb-4">
              {group.name}
            </h2>

            <ul className="space-y-2 text-gray-600">
              {group.teams.map((team) => (
                <li key={team}>{team}</li>
              ))}
            </ul>
          </Link>
        ))}
      </div>
    </main>
  );
}