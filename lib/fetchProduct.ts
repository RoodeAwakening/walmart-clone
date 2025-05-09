type SerpApiResponse = {
  product_result: any;
};

export default async function fetchProduct(
  jsonEndpoint: string
): Promise<SerpApiResponse["product_result"]> {

  const apiKey = process.env.SERP_API;
  if (!apiKey) {
    throw new Error("Missing SERPAPI_API_KEY in environment");
  }

  const url = jsonEndpoint.includes("?")
    ? `${jsonEndpoint}&api_key=${apiKey}`
    : `${jsonEndpoint}?api_key=${apiKey}`;

  const res = await fetch(url, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch product data: ${res.status}`);
  }

  const { product_result } = (await res.json()) as SerpApiResponse;
  return product_result;
}
