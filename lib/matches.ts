export type Match = {
  id: number;
  slug: string;
  home: string;
  away: string;
  league: string;
  time: string;
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
  "Japan",
  "South Korea",
  "Mexico",
  "United States",
  "Uruguay",
  "Colombia",
  "Canada",
  "Morocco",
  "Senegal",
  "Iran",
];

export const matches: Match[] = [];

let id = 1;

for (let i = 0; i < teams.length; i++) {
  for (let j = i + 1; j < teams.length; j++) {
    matches.push({
      id: id++,
      slug: `${teams[i]
        .toLowerCase()
        .replace(/\s/g, "-")}-vs-${teams[j]
        .toLowerCase()
        .replace(/\s/g, "-")}`,
      home: teams[i],
      away: teams[j],
      league: "FIFA World Cup 2026",
      time: `${18 + (id % 6)}:00`,
    });
  }
}