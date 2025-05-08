import { ProductResult } from "@/typings/searchTypings";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Badge } from "./ui/badge";

function Product({ product }: { product: ProductResult }) {
  const { thumbnail, title, price, currency, rating, reviews, badge, url } =
    product;

  return (
    <Link
      className="flex flex-col relative border rounded-md h-full p-5 hover:shadow-lg"
      href={{
        pathname: "/product:",
        query: { url },
      }}
    >
      <Image
        src={thumbnail}
        alt={title}
        width={200}
        height={200}
        className="mx-auto"
      />
      <p className="text-xl font-bold">${price}</p>
      {badge && <Badge className="w-fit absolute top-2 right-2">{badge}</Badge>}

      <p className="font-light">
        {title.length > 70 ? title.slice(0, 70) + "..." : title}{" "}
      </p>

      {reviews > 1 && (
        <p className="text-yellow-500 text-sm">
          {rating} ★ <span className="text-gray-400 ml-2">{reviews}</span>
        </p>
      )}
    </Link>
  );
}

export default Product;
