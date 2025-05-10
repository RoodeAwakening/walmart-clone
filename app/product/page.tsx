import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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

  //   console.log("images", product.images);

  console.log("categories", product);
  return (
    <div className="flex p-4 lg:p-10 flex-col lg:flex-row w-full">
      <div className="hidden lg:inline space-y-4">
        {product?.images?.map((image: string, index: number) => (
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
      <Carousel
        opts={{ loop: true }}
        className="w-3/5 mb-10 lg:mb-0 lg:w-1/3 self-start flex items-center max-w-xl mx-auto lg:mx-20"
      >
        <CarouselContent>
          {product?.images?.map((image: string, index: number) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <div className="flex aspect-square items-center justify-center p-2 relative">
                  <Image
                    key={index}
                    src={image}
                    alt={product.title + " image " + index}
                    width={400}
                    height={400}
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className=" flex-1 border rounded-md w-full p-5 space-y-5">
        <h1 className="md:text-3xl font-bold">{product.title}</h1>
        <div className="space-x-2">
          {product.categories.map(
            (crumb: { name: string; url: string }, index: number) => (
              <Badge
                key={crumb.name + index}
                className={crumb.name}
                variant="outline"
              >
                {crumb.name}
              </Badge>
            )
          )}
        </div>

        <h3 className="font-bold text-xl">About this item</h3>
        <div
          dangerouslySetInnerHTML={{
            __html: product?.detailed_description_html,
          }}
          className="prose prose-sm max-w-none [&>ul]:list-disc [&>ul]:pl-5"
        />

        {product?.rating && (
            <p className="text-yellow-500 text-sm">
              {product.rating} ★{" "}
              <span className="text-gray-400 ml-2">{product.reviews} reviews</span>
            </p>
            )}

            <p className="text-2xl font-bold mt-2">
            {product?.price_map.was_price.currencyUnit} {product?.price_map.price}
            </p>

        {/* add to cart button */}
      </div>
    </div>
  );
}
