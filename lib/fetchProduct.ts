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
  
    let url: string;
    try {
      const urlObj = new URL(jsonEndpoint);
      // Append the api_key query parameter (works regardless of existing query parameters)
      urlObj.searchParams.append("api_key", apiKey);
      url = urlObj.toString();
    } catch (error) {
      // Return null for invalid URL instead of throwing an error
      return null;
    }
  
    const res = await fetch(url, {
      next: { revalidate: 60 },
    });
  
    if (!res.ok) {
      throw new Error(`Failed to fetch product data: ${res.status}`);
    }
  
    const { product_result } = (await res.json()) as SerpApiResponse;
    return product_result;
  }