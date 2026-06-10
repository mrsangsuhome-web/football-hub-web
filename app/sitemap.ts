
import { MetadataRoute }
from "next";

export default function sitemap():
MetadataRoute.Sitemap {

  return [

    {
      url:
      "https://football-hub-web.vercel.app",
      priority: 1
    },

    {
      url:
      "https://football-hub-web.vercel.app/world-cup-2026",
      priority: 1
    },

    {
      url:
      "https://football-hub-web.vercel.app/world-cup-2026/schedule",
      priority: 1
    },

    {
      url:
      "https://football-hub-web.vercel.app/world-cup-2026/groups",
      priority: 0.9
    },

    {
      url:
      "https://football-hub-web.vercel.app/world-cup-2026/bracket",
      priority: 0.9
    }

  ];

}

