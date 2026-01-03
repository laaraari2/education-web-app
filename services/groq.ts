// Server-side helper to query Sanity (GROQ) safely using an API key stored in env vars.
// Usage: from serverless functions or server-only code, call `fetchFromSanity(query, params)`.

export async function fetchFromSanity(query: string, params: Record<string, any> = {}) {
  const projectId = process.env.SANITY_PROJECT_ID;
  const dataset = process.env.SANITY_DATASET ?? 'production';
  if (!projectId) throw new Error('SANITY_PROJECT_ID is not set in environment');

  const token = process.env.GROQ_API_KEY;
  const encodedQuery = encodeURIComponent(query);
  const url = `https://${projectId}.api.sanity.io/v2024-01-01/data/query/${dataset}?query=${encodedQuery}`;

  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Sanity request failed: ${res.status} ${body}`);
  }

  const json = await res.json();
  return json.result;
}

export default fetchFromSanity;
