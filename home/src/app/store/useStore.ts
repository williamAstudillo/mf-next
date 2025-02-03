import { Product } from "app/modules/product/domain/product";
import { create } from "zustand";

interface CartItem extends Product {
  quantity: number;
}

interface CartStore {
  cart: CartItem[];
  addToCart: (item: Product) => void;
  decreaseQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  addQuantity: (id: number) => void;
}

const getCartFromLocalStorage = (): CartItem[] | [] => {
  try {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    return cart ? cart : [];
  } catch (error) {
    console.error("Error al cargar el carrito desde localStorage", error);
    return [];
  }
};

const saveCartToLocalStorage = (cart: CartItem[]): void => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const useCartStore = create<CartStore>((set) => ({
  cart: getCartFromLocalStorage(),

  addToCart: (item) =>
    set((state) => {
      const existingItem = state.cart.find((product) => product.id === item.id);

      let updatedCart;
      if (existingItem) {
        updatedCart = state.cart.map((product) =>
          product.id === item.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
      } else {
        updatedCart = [...state.cart, { ...item, quantity: 1 }];
      }

      saveCartToLocalStorage(updatedCart);
      return { cart: updatedCart };
    }),

  decreaseQuantity: (id: number) =>
    set((state) => {
      const updatedCart: CartItem[] = state.cart
        .map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
        .filter((product) => product.quantity > 0);
      saveCartToLocalStorage(updatedCart);
      return { cart: updatedCart };
    }),

  addQuantity: (id: number) =>
    set((state) => {
      const updatedCart = state.cart.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
      saveCartToLocalStorage(updatedCart);
      return { cart: updatedCart };
    }),

  removeFromCart: (id: number) =>
    set((state) => {
      const updatedCart = state.cart.filter((item) => item.id !== id);
      saveCartToLocalStorage(updatedCart);
      return { cart: updatedCart };
    }),

  clearCart: () => {
    localStorage.removeItem("cart");
    return { cart: [] };
  },
}));

export default useCartStore;
