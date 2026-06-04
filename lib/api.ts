const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "http://127.0.0.1:5000/api";

export async function getMatches() {
  const res = await fetch(
    `${API_URL}/matches`,
    {
      cache: "no-store",
    }
  );

  return res.json();
}

export async function getTeams() {
  const res = await fetch(
    `${API_URL}/teams`,
    {
      cache: "no-store",
    }
  );

  return res.json();
}

export async function getTeam(
  slug: string
) {
  const res = await fetch(
    `${API_URL}/teams/${slug}`,
    {
      cache: "no-store",
    }
  );

  return res.json();
}

export async function getArticles() {
  const res = await fetch(
    `${API_URL}/articles`,
    {
      cache: "no-store",
    }
  );

  return res.json();
}

export async function getArticle(
  slug: string
) {
  const res = await fetch(
    `${API_URL}/articles/${slug}`,
    {
      cache: "no-store",
    }
  );

  return res.json();
}

export async function getPredictions() {
  const res = await fetch(
    `${API_URL}/predictions`,
    {
      cache: "no-store",
    }
  );

  return res.json();
}

export async function getStandings() {
  const res = await fetch(
    `${API_URL}/standings`,
    {
      cache: "no-store",
    }
  );

  return res.json();
}