import heroImage from "@/assets/hero-golf.jpg";

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroImage}
        alt="Luxury golf course at golden hour"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <p className="text-gold font-body text-sm uppercase tracking-[0.3em] mb-4">
          Premium Golf Travel Essentials
        </p>
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-primary-foreground leading-tight mb-6">
          Destination Fareways LLC
        </h1>
        <p className="text-primary-foreground/80 font-body text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
          Premium travel essentials crafted for golfers who play beyond boundaries. Elevate your journey, wherever the fairway takes you.
        </p>
        <a
          href="#shop"
          className="inline-flex items-center gap-2 bg-gold text-gold-foreground font-body font-semibold px-8 py-4 rounded-md text-sm uppercase tracking-widest hover:brightness-110 transition-all duration-300"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
}
