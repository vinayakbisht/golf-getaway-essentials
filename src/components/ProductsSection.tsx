import { useState } from "react";
import { products } from "@/lib/products";
import { ProductCard } from "./ProductCard";
import { ProductDetail } from "./ProductDetail";
import type { Product } from "@/lib/products";

export function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <>
      <section id="shop" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-gold font-body text-sm uppercase tracking-[0.3em] mb-3">Our Collection</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Golf Travel Essentials
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} onSelect={setSelectedProduct} index={i} />
          ))}
        </div>
      </section>
      {selectedProduct && (
        <ProductDetail product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </>
  );
}
