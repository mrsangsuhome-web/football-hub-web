const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://football-hub-api-djhp.onrender.com";

async function safeFetch(url: string) {
  try {
    const res = await fetch(url, {
      next: {
        revalidate: 300,
      },
    });

    if (!res.ok) {
      return {};
    }

    const contentType =
      res.headers.get("content-type");

    if (
      !contentType?.includes(
        "application/json"
      )
    ) {
      return {};
    }

    return await res.json();
  } catch {
    return {};
  }
}

export async function getCompetitions() {
  return safeFetch(
    `${API_URL}/api/competitions`
  );
}

export async function getMatches(
  code = "PL"
) {
  return safeFetch(
    `${API_URL}/api/matches?code=${code}`
  );
}

export async function getLiveMatches() {
  return getMatches("PL");
}

export async function getStandings(
  code = "PL"
) {
  return safeFetch(
    `${API_URL}/api/standings?code=${code}`
  );
}

export async function getTeams(
  code = "PL"
) {
  return safeFetch(
    `${API_URL}/api/teams?code=${code}`
  );
}