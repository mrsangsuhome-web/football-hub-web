import Link from "next/link";
import { notFound } from "next/navigation";

import { articles } from "@/lib/articles";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props) {

  const { slug } = await params;

  return {
    title: `${slug} News`,
    description:
      `${slug} football news, predictions and analysis`,
  };
}

export default async function CategoryPage({
  params,
}: Props) {

  const { slug } = await params;

  const categoryArticles =
    articles.filter(
      (article) =>
        article.category.toLowerCase() ===
        slug.toLowerCase()
    );

  if (categoryArticles.length === 0) {
    notFound();
  }

  return (
    <main className="max-w-7xl mx-auto p-6">

      <h1 className="text-4xl font-bold mb-8">
        {slug}
      </h1>

      <div className="space-y-4">

        {categoryArticles.map((article) => (
          <Link
            key={article.slug}
            href={`/news/${article.slug}`}
            className="block bg-white border rounded-xl p-6 hover:shadow-md"
          >

            <div className="text-sm text-gray-500">
              {article.date}
            </div>

            <h2 className="text-2xl font-bold mt-2">
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