import { MetadataRoute } from "next";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://football-hub-api-djhp.onrender.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  const baseUrl =
    "https://football-hub-web.vercel.app";

  const urls: MetadataRoute.Sitemap = [

    {
      url: baseUrl,
      changeFrequency: "daily",
      priority: 1,
    },

    {
      url: `${baseUrl}/league`,
      changeFrequency: "daily",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/teams`,
      changeFrequency: "daily",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/matches`,
      changeFrequency: "hourly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/standings`,
      changeFrequency: "daily",
      priority: 0.8,
    },

  ];

  try {

    const teamsRes =
      await fetch(
        `${API_URL}/api/teams?code=PL`
      );

    const teamsData =
      await teamsRes.json();

    const teams =
      teamsData.teams || [];

    teams.forEach((team: any) => {

      urls.push({
        url: `${baseUrl}/team/${team.id}`,
        changeFrequency: "weekly",
        priority: 0.7,
      });

    });

  } catch {}

  try {

    const matchesRes =
      await fetch(
        `${API_URL}/api/matches?code=PL`
      );

    const matchesData =
      await matchesRes.json();

    const matches =
      matchesData.matches || [];

    matches.forEach((match: any) => {

      urls.push({
        url: `${baseUrl}/match/${match.id}`,
        changeFrequency: "daily",
        priority: 0.7,
      });

    });

  } catch {}

  return urls;
}