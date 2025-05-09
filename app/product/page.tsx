import fetchProduct from "@/lib/fetchProduct";

type Props = {
  searchParams: {
    url: string;
  };
};

export default async function ProductPage({ searchParams: { url } }: Props) {
  const product = await fetchProduct(url);
console.log("product999999999999999999", product);
  return <div>ProductPage</div>;
}
