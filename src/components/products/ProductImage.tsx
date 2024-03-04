"use client";

import { CartProductsType } from "@/types/CartProductsType";
import { SelectedImgType } from "@/types/SelectedImgType";
import Image from "next/image";

interface ProductImageProps {
  cartProduct: CartProductsType;
  product: any;
  handleColorSelect: (value: SelectedImgType) => void;
}
const ProductImage: React.FC<ProductImageProps> = ({
  cartProduct,
  product,
  handleColorSelect,
}) => {
  return (
    <div className="grid grid-cols-6 gap-2 h-full max-h-[500px] min-h-[300px] sm:min-h-[400px]">
      <div className="flex flex-col items-center justify-center gap-4 cursor-pointer border h-full max-h-[500px] min-h-[300px] sm:min-h-[400px]">
        {product.images.map((item: SelectedImgType) => (
          <div
            key={item.color}
            onClick={() => handleColorSelect(item)}
            className={`relative w-[80%] aspect-square rounded border-teal-300 ${
              cartProduct.selectedImg.color === item.color
                ? "border-[1.5px]"
                : "border-none"
            }`}
          >
            <Image
              src={item.image}
              alt={item.color}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
      <div className="col-span-5 relative aspect-square">
        <Image
          src={cartProduct.selectedImg.image}
          alt={cartProduct.name}
          fill
          className="w-full h-full object-contain max-h-[500px] min-h-[300px] sm:min-h-[400px]"
        />
      </div>
    </div>
  );
};

export default ProductImage;
