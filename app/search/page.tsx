import Link from "next/link";
import { articles } from "@/lib/articles";

export default function SearchPage() {
  return (
    <main className="max-w-7xl mx-auto p-6">

      <h1 className="text-4xl font-bold mb-8">
        Search Football Articles
      </h1>

      <input
        type="text"
        placeholder="Search..."
        className="w-full border rounded-lg p-3 mb-8"
      />

      <div className="space-y-4">

        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/news/${article.slug}`}
            className="block bg-white border rounded-xl p-5 hover:shadow-md"
          >

            <div className="text-sm text-gray-500">
              {article.category}
            </div>

            <h2 className="text-xl font-bold mt-2">
              {article.title}
            </h2>

            <p className="mt-2 text-gray-600">
              {article.description}
            </p>

          </Link>
        ))}

      </div>

    </main>
  );
}