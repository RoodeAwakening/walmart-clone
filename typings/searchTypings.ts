export interface SearchResult {
  results: Result[];
  total_results: number;
  last_visible_page: number;
  parse_status_code: number;
  created_at: string;
  status: string;
  page: number;
  url: string;
  job_id: string;
  status_code: number;
  parse_type: string;
}

export interface Result {
  content: Content;
}

export interface Content {
  url: string;
  organic: Organic[];
  total_results: number;
  last_visible_page: number;
  parse_status_code: number;
  page_details: PageDetails;
  results: Organic[];
}

export interface PageDetails {
  page: number;
  total_results: number;
  last_visible_page: number;
}

export interface Organic {
  url: string;
  image: string;
  price: Price & { price_strikethrough?: number };
  title: string;
  rating: Rating;
  seller: Seller & { id: string };
  product_id: string;
  badge?: string;
  variants?: Variant[];
  general: General;
  fulfillment: Fulfillment;
}

export interface Price {
  price: number;
  currency: string;
}

export interface Rating {
  count: number;
  rating: number;
}

export interface Seller {
  name: string;
}

export interface Variant {
  url: string;
  title: string;
  product_id: string;
}

export interface General {
  pos: number;
  url: string;
  image: string;
  title: string;
  sponsored: boolean;
  product_id: string;
  out_of_stock: boolean;
  section_title: string;
  badge: string;
}

export interface Fulfillment {
  pickup: boolean;
  delivery: boolean;
  shipping: boolean;
  free_shipping: boolean;
}

export interface Context {
  key: string;
  value: any;
}

export interface Link {
  rel: string;
  href: string;
  method: string;
}

export interface Job {
  callback_url: string;
  client_id: string;
  context: Context[];
  created_at: string;
  domain: string;
  geo_location: null | string;
  id: string;
  limit: number;
  locale: null | string;
  pages: number;
  parse: boolean;
  parser_type: null | string;
  parsing_instructions: null | string;
  browser_instructions: null | string;
  render: null | boolean;
  url: string;
  query: string;
  source: string;
  start_page: number;
  status: string;
  storage_type: null | string;
  storage_url: null | string;
  subdomain: string;
  content_encoding: string;
  updated_at: string;
  user_agent_type: string;
  session_info: null | string;
  statuses: any[];
  client_notes: null | string;
  _links: Link[];
}
