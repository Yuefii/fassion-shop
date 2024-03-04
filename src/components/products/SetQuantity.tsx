"use client";

import { CartProductsType } from "@/types/CartProductsType";

interface SetQuantityProps {
  cartCounter?: boolean;
  cartProduct: CartProductsType;
  handleQuantityIncrease: () => void;
  handleQuantityDecrease: () => void;
}
const SetQuantity: React.FC<SetQuantityProps> = ({
  cartCounter,
  cartProduct,
  handleQuantityDecrease,
  handleQuantityIncrease,
}) => {
  return (
    <div className="flex gap-8 items-center">
      {cartCounter ? null : <div className="font-semibold">Quantity: </div>}
      <div className="flex gap-4 items-center text-base">
        <button
          className="border-2 border-gray-300 px-2 rounded"
          onClick={handleQuantityDecrease}
        >
          -
        </button>
        <div>{cartProduct.quantity}</div>
        <button
          className="border-2 border-gray-300 px-2 rounded"
          onClick={handleQuantityIncrease}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default SetQuantity;
