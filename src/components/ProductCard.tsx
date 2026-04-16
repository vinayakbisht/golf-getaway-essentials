import { motion } from "framer-motion";
import type { Product } from "@/lib/products";
import { useCart } from "@/lib/cart-store";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  index: number;
}

export function ProductCard({ product, onSelect, index }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      onClick={() => onSelect(product)}
    >
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={800}
          height={800}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5">
        <p className="text-xs uppercase tracking-widest text-gold font-body mb-1">{product.category}</p>
        <h3 className="font-display text-lg font-semibold text-card-foreground mb-2">{product.name}</h3>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-primary font-body">${product.price.toFixed(2)}</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart({ id: product.id, name: product.name, price: product.price, image: product.image });
            }}
            className="p-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/80 transition-colors"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingCart className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
