"use client";

import { CartProductsType } from "@/types/CartProductsType";
import { Rating } from "@mui/material";
import { useCart } from "@/hooks/useCart";
import { useCallback, useEffect, useState } from "react";
import { SelectedImgType } from "@/types/SelectedImgType";
import { MdCheckCircle } from "react-icons/md";

import SetColor from "./SetColor";
import SetQuantity from "./SetQuantity";
import Button from "../ui/Button";
import ProductImage from "./ProductImage";
import { useRouter } from "next/navigation";

const ProductDetails = ({ product }: any) => {
  const { cartProducts, handleAddToCart } = useCart();
  const [isProductCart, setIsProductCart] = useState(false);
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

  const router = useRouter();

  // console.log(cartProduct);
  // console.log(cartProducts);

  useEffect(() => {
    setIsProductCart(false);
    if (cartProducts) {
      const exiting = cartProducts.findIndex((item) => item.id === product.id);
      if (exiting > -1) {
        setIsProductCart(true);
      }
    }
  }, [cartProducts, product.id]);

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
        {isProductCart ? (
          <>
            <p className="mb-2 text-gray-500 flex items-center gap-1">
              <MdCheckCircle className="text-teal-400" size={20} />
              <span>product added to cart</span>
            </p>
            <div className="max-w-[300px]">
              <Button
                label="View Cart"
                outline
                onClick={() => router.push("/cart")}
              />
            </div>
          </>
        ) : (
          <>
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
              <Button
                label="Add to Cart"
                onClick={() => handleAddToCart(cartProduct)}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
