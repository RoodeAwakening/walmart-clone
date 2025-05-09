import fetchProduct from "@/lib/fetchProduct";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = {
  searchParams: {
    url: string;
  };
};

export default async function ProductPage({ searchParams: { url } }: Props) {
  const product = await fetchProduct(url);
  if (!product) {
    return notFound();
  }

  console.log("images", product.images);

  return (
    <div>
      <div>
        {product.images.map((image: string, index: number) => (
          <Image
            key={index}
            src={image}
            alt={product.title + " image " + index}
            width={90}
            height={90}
            className="border rounded-sm"
          />
        ))}
      </div>
    </div>
  );
}
