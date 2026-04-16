import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/lib/cart-store";
import { X } from "lucide-react";
import { toast } from "sonner";

interface CheckoutModalProps {
  open: boolean;
  onClose: () => void;
}

export function CheckoutModal({ open, onClose }: CheckoutModalProps) {
  const { items, total, clearCart } = useCart();
  const [form, setForm] = useState({ name: "", address: "", phone: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.address || !form.phone) {
      toast.error("Please fill in all fields");
      return;
    }
    clearCart();
    onClose();
    setForm({ name: "", address: "", phone: "" });
    toast.success("🎉 Order placed successfully! Your items will be delivered soon.", { duration: 5000 });
  };

  if (!open) return null;

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
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-card rounded-xl max-w-lg w-full shadow-2xl p-6 md:p-8"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display text-2xl font-bold text-card-foreground">Checkout</h2>
            <button onClick={onClose} className="p-1 hover:bg-muted rounded-md transition-colors">
              <X className="h-5 w-5 text-muted-foreground" />
            </button>
          </div>

          <div className="mb-6 p-4 bg-muted rounded-lg">
            <p className="text-sm font-body text-muted-foreground mb-1">{items.length} item(s)</p>
            <p className="text-xl font-bold font-body text-primary">Total: ${total.toFixed(2)}</p>
            <p className="text-xs font-body text-gold mt-1 uppercase tracking-wider">Cash on Delivery</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-body font-semibold text-card-foreground mb-1">Full Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border border-input rounded-md px-4 py-2.5 text-sm font-body bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-body font-semibold text-card-foreground mb-1">Delivery Address</label>
              <textarea
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                rows={3}
                className="w-full border border-input rounded-md px-4 py-2.5 text-sm font-body bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                placeholder="Your full address"
              />
            </div>
            <div>
              <label className="block text-sm font-body font-semibold text-card-foreground mb-1">Phone Number</label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full border border-input rounded-md px-4 py-2.5 text-sm font-body bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="+91 XXX XXX XXXX"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground font-body font-semibold py-3 rounded-md text-sm uppercase tracking-widest hover:bg-primary/80 transition-colors mt-2"
            >
              Place Order
            </button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
