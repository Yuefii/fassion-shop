"use client";

import { useCart } from "@/hooks/useCart";
import { MdArrowBack } from "react-icons/md";

import Link from "next/link";
import Heading from "../products/Heading";
import Button from "../ui/Button";
import CartItem from "./CartItem";
import { formatPrice } from "@/utils/formatPrice";

const CartUser = () => {
  const { cartProducts, cartTotalAmount, handleClearCart } = useCart();
  if (!cartProducts || cartProducts.length === 0) {
    return (
      <div className="flex flex-col item-center">
        <div className="text-2xl">Cart is Empty</div>
        <div>
          <Link href="/" className="text-gray-500 flex items-center gap-1 mt-2">
            <MdArrowBack />
            <span>Start Shopping</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Heading title="Shopping Cart" center />
      <div className="grid grid-cols-5 mt-8 text-xs gap-4 pb-2 items-center">
        <div className="col-span-2 justify-self-start">Product</div>
        <div className="justify-self-center">Price</div>
        <div className="justify-self-center">Quantity</div>
        <div className="justify-self-end">Total</div>
      </div>
      <div>
        {cartProducts &&
          cartProducts.map((item) => <CartItem key={item.id} item={item} />)}
      </div>
      <div className="border-t-[1.5px] border-gray-200 py-4 flex justify-between gap-4">
        <div className="w-[90px]">
          <Button
            label="Clear Cart"
            onClick={() => {
              handleClearCart();
            }}
            small
            outline
          />
        </div>
        <div className="text-sm flex flex-col gap-1 items-start">
          <div className="flex justify-between w-full text-base font-semibold">
            <span>Subtotal</span>
            <span>{formatPrice(cartTotalAmount)}</span>
          </div>
          <p className="text-gray-500">
            Taxes and Shipping calculate at checkout
          </p>
          <Button label="Checkout" onClick={() => {}} />
          <Link href="/" className="text-gray-500 flex items-center gap-1 mt-2">
            <MdArrowBack />
            <span>Continue Shopping</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartUser;
