import { Plane, ShoppingCart } from "lucide-react";
import { useCart } from "@/lib/cart-store";

interface NavbarProps {
  onCartOpen: () => void;
}

export function Navbar({ onCartOpen }: NavbarProps) {
  const { itemCount } = useCart();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#hero" className="flex items-center gap-2">
          <Plane className="h-6 w-6 text-gold" />
          <span className="font-display text-lg font-bold text-primary-foreground tracking-wide">
            Destination Fareways
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {["Shop", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-primary-foreground/80 hover:text-gold transition-colors font-body tracking-wide"
            >
              {item}
            </a>
          ))}
        </div>

        <button
          onClick={onCartOpen}
          className="relative p-2 text-primary-foreground/80 hover:text-gold transition-colors"
          aria-label="Open cart"
        >
          <ShoppingCart className="h-5 w-5" />
          {itemCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-gold text-gold-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {itemCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
}
