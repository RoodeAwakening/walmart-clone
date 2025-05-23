import Product from "@/components/Product";
import fetchSearch, {
    ProductResult,
  } from "@/lib/fetchSearch";

type Props = {
  searchParams: {
    q: string;
  };
};

async function SearchPage({ searchParams: { q } }: Props) {
const { totalResults, products } = await fetchSearch(q);
//   const results = await fetchSearch(q);
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-2">Results For {q}</h1>
      <h2>({totalResults.toLocaleString()} results)</h2>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {products.map(product => (
            <li key={product.id}>
              <Product 
              product={product}
              />
            </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchPage;
