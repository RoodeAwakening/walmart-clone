import fetchSearch from "@/lib/fetchSearch";

type Props = {
  searchParams: {
    q: string;
  };
};

async function SearchPage({ searchParams: { q } }: Props) {
  const results = await fetchSearch(q);
  console.log('------------>', results?.content.results)
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-2">Results For {q}</h1>
      <h2>({results?.content?.page_details?.total_results} results)</h2>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {results?.content.results.map(product => (
            <li key={product.general.product_id}>
              {product.general.title}
            </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchPage;
