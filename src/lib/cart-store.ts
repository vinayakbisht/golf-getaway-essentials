import { useState, useCallback } from "react";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

let globalCart: CartItem[] = [];
let listeners: Set<() => void> = new Set();

function notify() {
  listeners.forEach((l) => l());
}

export function useCart() {
  const [, setTick] = useState(0);

  const subscribe = useCallback(() => {
    const rerender = () => setTick((t) => t + 1);
    listeners.add(rerender);
    return () => listeners.delete(rerender);
  }, []);

  // subscribe on mount
  useState(() => {
    const rerender = () => setTick((t) => t + 1);
    listeners.add(rerender);
    return () => listeners.delete(rerender);
  });

  const addToCart = useCallback((item: Omit<CartItem, "quantity">, qty = 1) => {
    const existing = globalCart.find((c) => c.id === item.id);
    if (existing) {
      existing.quantity += qty;
    } else {
      globalCart.push({ ...item, quantity: qty });
    }
    globalCart = [...globalCart];
    notify();
  }, []);

  const removeFromCart = useCallback((id: string) => {
    globalCart = globalCart.filter((c) => c.id !== id);
    notify();
  }, []);

  const updateQuantity = useCallback((id: string, qty: number) => {
    if (qty <= 0) {
      globalCart = globalCart.filter((c) => c.id !== id);
    } else {
      const item = globalCart.find((c) => c.id === id);
      if (item) item.quantity = qty;
      globalCart = [...globalCart];
    }
    notify();
  }, []);

  const clearCart = useCallback(() => {
    globalCart = [];
    notify();
  }, []);

  const total = globalCart.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const itemCount = globalCart.reduce((sum, i) => sum + i.quantity, 0);

  return {
    items: globalCart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    total,
    itemCount,
  };
}
