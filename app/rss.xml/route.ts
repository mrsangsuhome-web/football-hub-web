import { articles } from "@/lib/articles";

export async function GET() {
  const siteUrl =
    "https://football-hub.vercel.app";

  const rssItems = articles
    .map(
      (article) => `
      <item>
        <title>${article.title}</title>

        <link>
          ${siteUrl}/news/${article.slug}
        </link>

        <description>
          ${article.description}
        </description>

        <pubDate>
          ${new Date(article.date).toUTCString()}
        </pubDate>
      </item>
    `
    )
    .join("");

  const xml = `
<?xml version="1.0" encoding="UTF-8" ?>

<rss version="2.0">

<channel>

<title>Football Hub</title>

<link>${siteUrl}</link>

<description>
Football News, Predictions and Analysis
</description>

${rssItems}

</channel>

</rss>
`;

  return new Response(xml, {
    headers: {
      "Content-Type":
        "application/xml; charset=utf-8",
    },
  });
}