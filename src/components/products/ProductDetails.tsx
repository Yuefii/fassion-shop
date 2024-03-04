"use client";

import { CartProductsType } from "@/types/CartProductsType";
import { Rating } from "@mui/material";
import { useCallback, useState } from "react";
import { SelectedImgType } from "@/types/SelectedImgType";

import SetColor from "./SetColor";
import SetQuantity from "./SetQuantity";
import Button from "../ui/Button";
import ProductImage from "./ProductImage";

const ProductDetails = ({ product }: any) => {
  const [cartProduct, setCardProduct] = useState<CartProductsType>({
    id: product.id,
    name: product.name,
    description: product.description,
    category: product.category,
    brand: product.brand,
    selectedImg: { ...product.images[0] },
    quantity: product.quantity,
    price: product.price,
  });

  // console.log(cartProduct);

  const productRating =
    product.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    product.reviews.length;

  const handleColorSelect = useCallback((value: SelectedImgType) => {
    setCardProduct((prev) => {
      return { ...prev, selectedImg: value };
    });
  }, []);

  const handleQuantityIncrease = useCallback(() => {
    if (cartProduct.quantity == 99) {
      return;
    }

    setCardProduct((prev) => {
      return { ...prev, quantity: prev.quantity + 1 };
    });
  }, [cartProduct]);

  const handleQuantityDecrease = useCallback(() => {
    if (cartProduct.quantity == 1) {
      return;
    }
    setCardProduct((prev) => {
      return { ...prev, quantity: prev.quantity - 1 };
    });
  }, [cartProduct]);

  const Horizontal = () => {
    return <hr className="w-[30%] my-2" />;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm">
      <ProductImage
        cartProduct={cartProduct}
        product={product}
        handleColorSelect={handleColorSelect}
      />
      <div>
        <h1 className="text-3xl font-medium text-gray-700">{product.name}</h1>
        <div className="flex items-center gap-2">
          <Rating value={productRating} readOnly />
          <div>{product.reviews.length} reviews</div>
        </div>
        <Horizontal />
        <p className="text-justify">{product.description}</p>
        <Horizontal />
        <div>
          <span className="font-semibold">Category: </span>
          {product.category}
        </div>
        <div>
          <span className="font-semibold">Brand: </span>
          {product.brand}
        </div>
        <div className={product.inStock ? "text-teal-400" : "text-rose-400"}>
          {product.inStock ? "In Stock" : "Out of Stock"}
        </div>
        <Horizontal />
        <SetColor
          cartProduct={cartProduct}
          images={product.images}
          handleColorSelect={handleColorSelect}
        />
        <Horizontal />
        <SetQuantity
          cartProduct={cartProduct}
          handleQuantityIncrease={handleQuantityIncrease}
          handleQuantityDecrease={handleQuantityDecrease}
        />
        <Horizontal />
        <div className="max-w-[300px]">
          <Button label="Add to Cart" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
