const API_URL =
  process.env.NEXT_PUBLIC_API_URL;

export async function getLiveMatches() {

  const res = await fetch(
    `${API_URL}/api/live`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  return res.json();
}