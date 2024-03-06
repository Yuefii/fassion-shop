"use client";

import { useCart } from "@/hooks/useCart";
import { useRouter } from "next/navigation";
import { FiShoppingCart } from "react-icons/fi";

const CartCount = () => {
  const { cartTotalQuantity } = useCart();
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/cart")}
      className="relative cursor-pointer"
    >
      <div className="text-3xl">
      <FiShoppingCart />
      </div>
      <span className="absolute top-[-3px] right-[-10px] bg-gray-700 text-white h-5 w-5 rounded-full flex items-center justify-center text-xs font-semibold border">
        {cartTotalQuantity}
      </span>
    </div>
  );
};

export default CartCount;
