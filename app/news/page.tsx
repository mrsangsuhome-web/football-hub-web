import Link from "next/link";
import { getArticles } from "@/lib/api";

export default async function NewsPage() {
  const result = await getArticles();

  const articles = result?.data ?? [];

  return (
    <main className="max-w-7xl mx-auto p-6">

      <div className="mb-8">

        <h1 className="text-4xl font-bold">
          Football News
        </h1>

        <p className="mt-2 text-gray-500">
          Latest football news, predictions and analysis
        </p>

      </div>

      <div className="space-y-4">

        {articles.map((article: any) => (

          <Link
            key={article.slug}
            href={`/news/${article.slug}`}
            className="block bg-white border rounded-xl p-6 hover:shadow-md transition"
          >

            <div className="text-sm text-blue-600 font-semibold">
              {article.category}
            </div>

            <h2 className="text-2xl font-bold mt-2">
              {article.title}
            </h2>

            <div className="mt-2 text-gray-500">
              {article.date}
            </div>

          </Link>

        ))}

      </div>

    </main>
  );
}