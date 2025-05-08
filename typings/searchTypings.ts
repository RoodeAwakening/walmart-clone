export interface ProductResult {
  /** IDs */
  usItemId: string;
  productId: string;

  /** Core catalog info */
  title: string;
  description: string;
  thumbnail: string;

  /** Price & units */
  price: number | null;
  currency: string | null;
  pricePerUnit?: {
    amount: number;
    currency: string;
    unit: string;
  };

  /** Social proof */
  rating: number;
  reviews: number;

  /** Seller & logistics */
  seller: { id: string; name: string };
  shipping: {
    twoDay: boolean;
    free: boolean;
    freeWithPlus: boolean;
    price: number | null;
  };

  /** Badge / flag booleans */
  twoDayShipping: boolean;
  freeShipping: boolean;
  freeShippingPlus: boolean;
  outOfStock: boolean;
  sponsored: boolean;
  badge?: string;

  /** Links */
  url: string;
  serpapiUrl: string;
}

export interface SearchResponse {
  totalResults: number;
  products: ProductResult[];
}
