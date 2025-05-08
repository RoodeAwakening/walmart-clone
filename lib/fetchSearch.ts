// lib/fetchSearch.ts
import { ProductResult, SearchResponse } from "@/typings/searchTypings";
import { getJson } from "serpapi";

/**
 * Fetch Walmart search results from SerpApi and shape them into
 * the ProductResult / SearchResponse contracts used throughout the app.
 */
export default async function fetchSearch(
  query: string,
  page = 1,
): Promise<SearchResponse> {
  const api_key = process.env.SERP_API!; // ← make sure this is in .env
  const json = await getJson({
    engine: "walmart",
    query,
    page,
    device: "desktop",
    api_key,
  });

  const products: ProductResult[] =
    json.organic_results?.map((p: any) => {
      /* Consolidate the five boolean flags into one readable badge string */
      const badge =
        [
          p.two_day_shipping && "2-Day",
          p.free_shipping && "Free Ship",
          p.free_shipping_with_walmart_plus && "Free Ship +",
          p.out_of_stock && "Out of Stock",
          p.sponsored && "Sponsored",
        ]
          .filter(Boolean)
          .join(" · ") || null;

      return {
        /* IDs */
        usItemId: p.us_item_id,
        productId: p.product_id,

        /* Core info */
        title: p.title,
        description: p.description,
        thumbnail: p.thumbnail,

        /* Price */
        price: p.primary_offer?.offer_price ?? null,
        currency: p.primary_offer?.currency ?? null,
        pricePerUnit:
          p.price_per_unit && {
            amount: p.price_per_unit.extracted_price,
            currency: p.price_per_unit.currency,
            unit: p.price_per_unit.unit,
          },

        /* Social proof */
        rating: p.rating ?? 0,
        reviews: p.reviews ?? 0,

        /* Seller / logistics */
        seller: { id: p.seller_id, name: p.seller_name },
        shipping: {
          twoDay: p.two_day_shipping,
          free: p.free_shipping,
          freeWithPlus: p.free_shipping_with_walmart_plus,
          price: p.shipping_price ?? null,
        },

        /* Consolidated badge */
        badge,

        /* Links */
        url: p.product_page_url,
        serpapiUrl: p.serpapi_product_page_url,
      };
    }) ?? [];

  return {
    totalResults:
      json.search_information?.total_results ?? products.length,
    products,
  };
}
