const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://football-hub-api-djhp.onrender.com";

export async function getArticles() {
  const res = await fetch(
    `${API_URL}/api/articles`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!res.ok) {
    return [];
  }

  const json = await res.json();

  return json.data || [];
}

export async function getLiveMatches() {
  const res = await fetch(
    `${API_URL}/api/live`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  if (!res.ok) {
    return {
      response: [],
    };
  }

  return res.json();
}