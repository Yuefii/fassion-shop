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
  cartTotalAmount: number;
  cartTotalQuantity: number;
  cartProducts: CartProductsType[] | null;
  handleAddToCart: (product: CartProductsType) => void;
  handleRemoveCart: (product: CartProductsType) => void;
  handleIncreaseOnCart: (product: CartProductsType) => void;
  handleDecreaseOnCart: (product: CartProductsType) => void;
  handleClearCart: () => void;
};

export const CartContext = createContext<CartContextType | null>(null);

export const CartContextProvider = (props: any) => {
  const [cartTotalAmount, setCartTotalAmount] = useState(0);
  const [cartTotalQuantity, setCartTotalQuantity] = useState(0);
  const [cartProducts, setCartProducts] = useState<CartProductsType[] | null>(
    null
  );

  useEffect(() => {
    const cartItems: any = localStorage.getItem("cartItems");
    const cartProduct: CartProductsType[] | null = JSON.parse(cartItems);
    setCartProducts(cartProduct);
  }, []);

  useEffect(() => {
    const getTotal = () => {
      if (cartProducts) {
        const { total, quantity } = cartProducts?.reduce(
          (acc, item) => {
            const itemTotal = item.price * item.quantity;
            acc.total += itemTotal;
            acc.quantity += item.quantity;

            return acc;
          },
          { 
            total: 0,
            quantity: 0,
          }
        );
        setCartTotalQuantity(quantity)
        setCartTotalAmount(total)
      }
    };
    getTotal()
  },[cartProducts]);

  const handleAddToCart = useCallback((product: CartProductsType) => {
    setCartProducts((prev) => {
      let updatedCart;

      if (prev) {
        updatedCart = [...prev, product];
      } else {
        updatedCart = [product];
      }
      toast.success("Product added to cart");
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
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
        localStorage.setItem("cartItems", JSON.stringify(filteredProduct));
      }
    },
    [cartProducts]
  );

  const handleIncreaseOnCart = useCallback(
    (product: CartProductsType) => {
      let updatedCart;

      if (product.quantity === 99) {
        return toast.error("Maximun Reached");
      }

      if (cartProducts) {
        updatedCart = [...cartProducts];

        const exiting = cartProducts.findIndex(
          (item) => item.id === product.id
        );

        if (exiting > -1) {
          updatedCart[exiting].quantity = ++updatedCart[exiting].quantity;
        }
        setCartProducts(updatedCart);
        localStorage.setItem("cartItems", JSON.stringify(updatedCart));
      }
    },
    [cartProducts]
  );

  const handleDecreaseOnCart = useCallback(
    (product: CartProductsType) => {
      let updatedCart;

      if (product.quantity === 1) {
        return toast.error("Minimum Reached");
      }

      if (cartProducts) {
        updatedCart = [...cartProducts];

        const exiting = cartProducts.findIndex(
          (item) => item.id === product.id
        );

        if (exiting > -1) {
          updatedCart[exiting].quantity = --updatedCart[exiting].quantity;
        }
        setCartProducts(updatedCart);
        localStorage.setItem("cartItems", JSON.stringify(updatedCart));
      }
    },
    [cartProducts]
  );

  const handleClearCart = useCallback(() => {
    setCartTotalQuantity(0);
    setCartProducts(null);
    localStorage.setItem("cartItems", JSON.stringify(null));
  }, []);

  const value = {
    cartTotalQuantity,
    cartTotalAmount,
    cartProducts,
    handleAddToCart,
    handleRemoveCart,
    handleIncreaseOnCart,
    handleDecreaseOnCart,
    handleClearCart,
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
