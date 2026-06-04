import { MetadataRoute } from "next";

import { teams } from "@/lib/teams";
import { matches } from "@/lib/matches";
import { articles } from "@/lib/articles";
import { groups } from "@/lib/groups";

export default function sitemap(): MetadataRoute.Sitemap {
const baseUrl =
"https://football-hub-web.vercel.app";

const staticPages = [
"",
"/matches",
"/teams",
"/news",
"/predictions",
"/standings",
"/world-cup",
"/world-cup/groups",
"/search",
];

const staticUrls = staticPages.map((page) => ({
url: `${baseUrl}${page}`,
lastModified: new Date(),
changeFrequency: "daily" as const,
priority: page === "" ? 1 : 0.8,
}));

const teamUrls = teams.map((team) => ({
url: `${baseUrl}/team/${team.slug}`,
lastModified: new Date(),
changeFrequency: "weekly" as const,
priority: 0.7,
}));

const matchUrls = matches.map((match) => ({
url: `${baseUrl}/match/${match.slug}`,
lastModified: new Date(),
changeFrequency: "daily" as const,
priority: 0.9,
}));

const articleUrls = articles.map((article) => ({
url: `${baseUrl}/news/${article.slug}`,
lastModified: new Date(),
changeFrequency: "weekly" as const,
priority: 0.8,
}));

const groupUrls = groups.map((group) => ({
url: `${baseUrl}/world-cup/group/${group.slug}`,
lastModified: new Date(),
changeFrequency: "weekly" as const,
priority: 0.8,
}));

return [
...staticUrls,
...teamUrls,
...matchUrls,
...articleUrls,
...groupUrls,
];
}
