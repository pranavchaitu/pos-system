import { createContext, ReactNode, useState } from "react";

// Define the type for the cart item
type CartItem = {
  id: number;
  [key: string]: any; // This allows for other properties besides 'id'
};

// Define the context value type
type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
};

// Create a context with an empty object as the default value
export const CartContext = createContext<CartContextType | undefined>(undefined);

/**
 * CartProvider Component
 *
 * This component provides the cart context to its children. It manages the state of the cart and provides functions to modify it.
 *
 * @param {Object} props - The props object.
 * @param {ReactNode} props.children - The children components that will have access to the cart context.
 *
 * @returns {JSX.Element} The JSX representation of the CartProvider component, which wraps its children with the CartContext provider.
 */
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  /**
   * Adds an item to the cart if it doesn't already exist.
   *
   * @param {CartItem} item - The item to add to the cart.
   */
  const addToCart = (item: CartItem) => {
    // Check if the item already exists in the cart
    const itemExists = cart.findIndex((foodItem) => foodItem.id === item.id);
    if (itemExists === -1) {
      // Add the item to the cart if it doesn't exist
      setCart([...cart, item]);
    }
  };

  // Define the context value
  const value: CartContextType = {
    cart,
    addToCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
