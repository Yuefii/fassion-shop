"use client";

import { formatPrice } from "@/utils/formatPrice";
import { useRouter } from "next/navigation";
import { truncate } from "@/utils/truncate";
import { Rating } from "@mui/material";

import Image from "next/image";

const Card = ({ item }: any) => {
  const router = useRouter();
  const productRating =
    item.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    item.reviews.length;
  return (
    <div
      onClick={() => router.push(`/products/${item.id}`)}
      className="col-span-1 cursor-pointer border-1 border-gray-200 bg-gray-50 rounded-sm p-2 transition hover:scale-105 text-center text-sm"
    >
      <div className="flex flex-col items-center w-full gap-1">
        <div className="aspect-square overflow-hidden relative w-full">
          <Image
            src={item.images[0].image}
            alt=""
            fill
            className="w-full h-full object-contain"
          />
        </div>
        <div className="mt-4">{truncate(item.name)}</div>
        <div>
          <Rating value={productRating} readOnly />
        </div>
        <div>{item.reviews.length} reviews</div>
        <div className="font-semibold">{formatPrice(item.price)}</div>
      </div>
    </div>
  );
};

export default Card;
