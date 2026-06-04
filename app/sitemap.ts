import { MetadataRoute } from "next";

import { articles } from "@/lib/articles";
import { matches } from "@/lib/matches";
import { teams } from "@/lib/teams";

export default function sitemap(): MetadataRoute.Sitemap {

  const baseUrl =
    "https://football-hub.vercel.app";

  const staticPages = [
    "",
    "/matches",
    "/teams",
    "/predictions",
    "/standings",
    "/world-cup",
    "/news",
    "/search",
  ];

  const staticUrls = staticPages.map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
    })
  );

  const articleUrls = articles.map(
    (article) => ({
      url: `${baseUrl}/news/${article.slug}`,
      lastModified: new Date(),
    })
  );

  const teamUrls = teams.map(
    (team) => ({
      url: `${baseUrl}/team/${team.slug}`,
      lastModified: new Date(),
    })
  );

  const matchUrls = matches.map(
    (match) => ({
      url: `${baseUrl}/match/${match.slug}`,
      lastModified: new Date(),
    })
  );

  return [
    ...staticUrls,
    ...articleUrls,
    ...teamUrls,
    ...matchUrls,
  ];
}