import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Product } from "@/lib/products";
import { useCart } from "@/lib/cart-store";
import { X, Minus, Plus, Check } from "lucide-react";

interface ProductDetailProps {
  product: Product | null;
  onClose: () => void;
}

export function ProductDetail({ product, onClose }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  if (!product) return null;

  const handleAdd = () => {
    addToCart({ id: product.id, name: product.name, price: product.price, image: product.image }, quantity);
    setQuantity(1);
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-foreground/60 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="bg-card rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="grid md:grid-cols-2 gap-0">
            <div className="aspect-square bg-muted">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-6 md:p-8 flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <p className="text-xs uppercase tracking-widest text-gold font-body">{product.category}</p>
                <button onClick={onClose} className="p-1 hover:bg-muted rounded-md transition-colors">
                  <X className="h-5 w-5 text-muted-foreground" />
                </button>
              </div>

              <h2 className="font-display text-2xl font-bold text-card-foreground mb-2">{product.name}</h2>
              <p className="text-2xl font-bold text-primary font-body mb-4">${product.price.toFixed(2)}</p>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">{product.description}</p>

              <div className="mb-6">
                <h4 className="font-body font-semibold text-sm text-card-foreground mb-3">Features</h4>
                <ul className="space-y-2">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground font-body">
                      <Check className="h-4 w-4 text-gold flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-body text-card-foreground">Qty:</span>
                  <div className="flex items-center border border-border rounded-md">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2 hover:bg-muted transition-colors">
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="px-4 font-body font-semibold text-sm">{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)} className="p-2 hover:bg-muted transition-colors">
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <button
                  onClick={handleAdd}
                  className="w-full bg-primary text-primary-foreground font-body font-semibold py-3 rounded-md text-sm uppercase tracking-widest hover:bg-primary/80 transition-colors"
                >
                  Add to Cart — ${(product.price * quantity).toFixed(2)}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
