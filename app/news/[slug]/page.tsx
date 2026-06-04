import { notFound } from "next/navigation";
import { getArticle } from "@/lib/api";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function NewsPage({
  params,
}: Props) {

  const { slug } = await params;

  const result =
    await getArticle(slug);

  if (!result.success) {
    notFound();
  }

  const article = result.data;

  return (
    <main className="max-w-4xl mx-auto p-6">

      <article className="bg-white border rounded-xl p-8">

        <div className="text-sm text-blue-600">
          {article.category}
        </div>

        <h1 className="text-4xl font-bold mt-2">
          {article.title}
        </h1>

        <div className="mt-2 text-gray-500">
          {article.date}
        </div>

        <p className="mt-4 text-gray-600">
          {article.description}
        </p>

        <div className="mt-8 whitespace-pre-line leading-8">
          {article.content}
        </div>

      </article>

    </main>
  );
}