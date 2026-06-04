import Link from "next/link";
import { getArticles } from "@/lib/api";

export default async function NewsPage() {
  const articles =
    await getArticles();

  return (
    <main className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">
        Football News
      </h1>

      <div className="space-y-4">
        {articles.map((article: any) => (
          <Link
            key={article.slug}
            href={`/news/${article.slug}`}
            className="block border rounded-xl p-5"
          >
            <h2 className="text-2xl font-bold">
              {article.title}
            </h2>
          </Link>
        ))}
      </div>
    </main>
  );
}