import { Organic } from "@/typings/searchTypings";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Badge } from "./ui/badge";

function Product({ product }: { product: Organic }) {
  return (
    <Link
      className="flex flex-col relative border rounded-md h-full p-5 hover:shadow-lg"
      href={{
        pathname: "/product:",
        query: { url: product.url },
      }}
    >
      <Image
        src={product.general.image}
        alt={product.general.title}
        width={200}
        height={200}
        className="mx-auto"
      />
      {product.price.price_strikethrough && (
        <p className="text-sm text-gray-500 line-through">
          ${product.price.price_strikethrough}
        </p>
      )}
      <p className="text-xl font-bold">${product.price.price}</p>

      {product.general.badge && (
        <Badge className="w-fit absolute top-2 right-2">
          {product.general.badge}
        </Badge>
      )}

      <p className="font-light">
        {product.general.title.length > 70
          ? product.general.title.slice(0, 70) + "..."
          : product.general.title}{" "}
      </p>

      {product.rating && <p className="text-yellow-500 text-sm">{product.rating.rating} ★  <span className="text-gray-400 ml-2">{product.rating.count}</span></p>}
    </Link>
  );
}

export default Product;
