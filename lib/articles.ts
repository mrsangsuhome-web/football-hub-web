export type Article = {
  slug: string;
  title: string;
  category: string;
  description: string;
  date: string;
};

const teams = [
  "Argentina",
  "Brazil",
  "France",
  "Germany",
  "England",
  "Spain",
  "Portugal",
  "Netherlands",
  "Belgium",
  "Croatia",
];

export const articles: Article[] = [
  {
    slug: "world-cup-2026-favorites",
    title: "Top Favorites To Win World Cup 2026",
    category: "World Cup",
    description: "Ranking the strongest contenders.",
    date: "2026-06-04",
  },

  ...teams.map((team) => ({
    slug: `${team.toLowerCase()}-squad-analysis`,
    title: `${team} Squad Analysis`,
    category: "Team",
    description: `${team} World Cup squad review.`,
    date: "2026-06-04",
  })),

  ...Array.from({ length: 90 }, (_, i) => ({
    slug: `world-cup-prediction-${i + 1}`,
    title: `World Cup Prediction ${i + 1}`,
    category: "Prediction",
    description: `Match prediction and analysis ${i + 1}.`,
    date: "2026-06-04",
  })),
];