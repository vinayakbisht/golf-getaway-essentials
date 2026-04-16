import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/lib/cart-store";
import { X, Minus, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
  onCheckout: () => void;
}

export function CartDrawer({ open, onClose, onCheckout }: CartDrawerProps) {
  const { items, removeFromCart, updateQuantity, total } = useCart();

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/40 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 250 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-card shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="font-display text-xl font-bold text-card-foreground">Your Cart</h2>
              <button onClick={onClose} className="p-1 hover:bg-muted rounded-md transition-colors">
                <X className="h-5 w-5 text-muted-foreground" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <p className="text-center text-muted-foreground font-body mt-12">Your cart is empty</p>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4 p-3 border border-border rounded-lg">
                      <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-body font-semibold text-sm text-card-foreground truncate">{item.name}</h4>
                        <p className="text-primary font-body font-bold text-sm">${item.price.toFixed(2)}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1 hover:bg-muted rounded transition-colors">
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="text-xs font-body font-semibold w-6 text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 hover:bg-muted rounded transition-colors">
                            <Plus className="h-3 w-3" />
                          </button>
                          <button onClick={() => removeFromCart(item.id)} className="ml-auto p-1 text-destructive hover:bg-destructive/10 rounded transition-colors">
                            <Trash2 className="h-3 w-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-border space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-body font-semibold text-card-foreground">Total</span>
                  <span className="font-body font-bold text-xl text-primary">${total.toFixed(2)}</span>
                </div>
                <button
                  onClick={() => { onClose(); onCheckout(); }}
                  className="w-full bg-gold text-gold-foreground font-body font-semibold py-3 rounded-md text-sm uppercase tracking-widest hover:brightness-110 transition-all"
                >
                  Proceed to Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
