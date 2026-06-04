import { notFound } from "next/navigation";
import { articles } from "@/lib/articles";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: article.title,
    description: article.description,
  };
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;

  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto p-6">
      <article className="bg-white border rounded-xl p-6">
        <div className="text-sm text-gray-500">
          {article.category}
        </div>

        <h1 className="text-4xl font-bold mt-2">
          {article.title}
        </h1>

        <div className="text-sm text-gray-500 mt-2">
          {article.date}
        </div>

        <div className="mt-6 prose max-w-none">
          <p>
            {article.description}
          </p>

          <p>
            Football Hub analysis and coverage for FIFA World Cup 2026.
          </p>

          <p>
            This article is part of our prediction, preview and
            football statistics section.
          </p>
        </div>
      </article>
    </main>
  );
}