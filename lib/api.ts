const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://football-hub-api-djhp.onrender.com";

export async function getCompetitions() {
  const res = await fetch(
    `${API_URL}/api/competitions`
  );

  return res.json();
}

export async function getMatches(
  code = "PL"
) {
  const res = await fetch(
    `${API_URL}/api/matches?code=${code}`
  );

  return res.json();
}

export async function getLiveMatches() {
  return getMatches("PL");
}

export async function getStandings(
  code = "PL"
) {
  const res = await fetch(
    `${API_URL}/api/standings?code=${code}`
  );

  return res.json();
}

export async function getTeams(
  code = "PL"
) {
  const res = await fetch(
    `${API_URL}/api/teams?code=${code}`
  );

  return res.json();
}