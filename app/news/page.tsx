import Link from "next/link";
import { articles } from "@/lib/articles";

export const metadata = {
  title: "Football News",
  description: "Latest football news, previews and predictions.",
};

export default function NewsPage() {
  return (
    <main className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">
        Football News
      </h1>

      <div className="space-y-4">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/news/${article.slug}`}
            className="block bg-white border rounded-xl p-5 hover:shadow-md transition"
          >
            <div className="text-sm text-blue-600 font-medium">
              {article.category}
            </div>

            <h2 className="text-2xl font-bold mt-2">
              {article.title}
            </h2>

            <p className="mt-2 text-gray-600">
              {article.description}
            </p>

            <div className="mt-3 text-sm text-gray-400">
              {article.date}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}