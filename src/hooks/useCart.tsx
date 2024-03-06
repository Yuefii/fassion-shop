import { product } from "@/constants/product";
import { CartProductsType } from "@/types/CartProductsType";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import toast from "react-hot-toast";

type CartContextType = {
  cartTotalQuantity: number;
  cartProducts: CartProductsType[] | null;
  handleAddToCart: (product: CartProductsType) => void;
  handleRemoveCart: (product: CartProductsType) => void;
};

export const CartContext = createContext<CartContextType | null>(null);

export const CartContextProvider = (props: any) => {
  const [cartTotalQuantity, setCartTotalQuantity] = useState(0);
  const [cartProducts, setCartProducts] = useState<CartProductsType[] | null>(
    null
  );

  useEffect(() => {
    const cartItems: any = localStorage.getItem("shopCartItems");
    const cartProduct: CartProductsType[] | null = JSON.parse(cartItems);
    setCartProducts(cartProduct);
  }, []);

  const handleAddToCart = useCallback((product: CartProductsType) => {
    setCartProducts((prev) => {
      let updatedCart;

      if (prev) {
        updatedCart = [...prev, product];
      } else {
        updatedCart = [product];
      }
      toast.success("Product added to cart");
      localStorage.setItem("shopCartItems", JSON.stringify(updatedCart));
      return updatedCart;
    });
  }, []);

  const handleRemoveCart = useCallback(
    (product: CartProductsType) => {
      if (cartProducts) {
        const filteredProduct = cartProducts.filter((item) => {
          return item.id !== product.id;
        });
        setCartProducts(filteredProduct);
        toast.success("Product Removed");
        localStorage.setItem("ShopCartItems", JSON.stringify(filteredProduct));
      }
    },
    [cartProducts]
  );

  const value = {
    cartTotalQuantity,
    cartProducts,
    handleAddToCart,
    handleRemoveCart
  };

  return <CartContext.Provider value={value} {...props} />;
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (context === null) {
    throw new Error("useCart must be used.");
  }

  return context;
};
