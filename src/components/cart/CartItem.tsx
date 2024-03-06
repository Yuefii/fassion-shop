"use client";

import { truncate } from "@/utils/truncate";
import { formatPrice } from "@/utils/formatPrice";
import { CartProductsType } from "@/types/CartProductsType";

import Link from "next/link";
import Image from "next/image";
import SetQuantity from "../products/SetQuantity";

interface CartItemProps {
  item: CartProductsType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  return (
    <div className="grid grid-cols-5 text-xs md:text-sm gap-4 border-t-[1.5px] border-gray-200 py-4 items-center">
      <div className="col-span-2 justify-self-start flex gap-2 md:gap-4">
        <Link href={`/products/${item.id}`}>
          <div className="relative w-[70px] aspect-square">
            <Image
              src={item.selectedImg.image}
              alt={item.name}
              fill
              className="object-contain"
            />
          </div>
        </Link>
        <div className="flex flex-col justify-between">
          <Link href={`/products/${item.id}`}>{truncate(item.name)}</Link>
          <div>{item.selectedImg.color}</div>
          <div>
            <p className="text-gray-500 underline" onClick={() => {}}>
              Remove
            </p>
          </div>
        </div>
      </div>
      <div className="justify-self-center">{formatPrice(item.price)}</div>
      <div className="justify-self-center">
        <SetQuantity
          cartCounter={true}
          cartProduct={item}
          handleQuantityIncrease={() => {}}
          handleQuantityDecrease={() => {}}
        />
      </div>
      <div className="justify-self-end font-semibold">
        {formatPrice(item.price * item.quantity)}
      </div>
    </div>
  );
};

export default CartItem;
