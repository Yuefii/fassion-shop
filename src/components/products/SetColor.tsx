"use client";

import { CartProductsType } from "@/types/CartProductsType";
import { SelectedImgType } from "@/types/SelectedImgType";

import React from "react";

interface SetColorProps {
  images: SelectedImgType[];
  cartProduct: CartProductsType;
  handleColorSelect: (value: SelectedImgType) => void;
}

const SetColor: React.FC<SetColorProps> = ({
  images,
  cartProduct,
  handleColorSelect,
}) => {
  return (
    <>
      <div className="flex gap-4 items-center">
        <span className="font-semibold">Color: </span>
        <div className="flex gap-1">
          {images.map((item) => (
            <div
              key={item.color}
              onClick={() => handleColorSelect(item)}
              className={`h-7 w-7 rounded-full border-teal-300 flex items-center ${
                cartProduct.selectedImg.color === item.color
                  ? "border-1"
                  : "border-none"
              }`}
            >
              <div
                style={{ background: item.colorCode }}
                className="h-5 w-5 rounded-full border-1 border-gray-300 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SetColor;
