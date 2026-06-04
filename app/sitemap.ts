import { MetadataRoute } from "next";
import { teams } from "@/lib/teams";
import { articles } from "@/lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
const baseUrl = "https://football-hub-web.vercel.app";

const teamUrls = teams.map((team) => ({
url: `${baseUrl}/team/${team.slug}`,
lastModified: new Date(),
}));

const articleUrls = articles.map((article) => ({
url: `${baseUrl}/news/${article.slug}`,
lastModified: new Date(),
}));

return [
{
url: baseUrl,
lastModified: new Date(),
},
{
url: `${baseUrl}/matches`,
lastModified: new Date(),
},
{
url: `${baseUrl}/teams`,
lastModified: new Date(),
},
{
url: `${baseUrl}/news`,
lastModified: new Date(),
},
...teamUrls,
...articleUrls,
];
}
