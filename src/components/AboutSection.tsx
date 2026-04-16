import { MapPin, Phone, Mail } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-primary">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-gold font-body text-sm uppercase tracking-[0.3em] mb-3">About Us</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
          Destination Fareways LLC
        </h2>
        <p className="text-primary-foreground/80 font-body text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          Destination Fareways LLC is dedicated to providing premium travel essentials for golfers who explore the world through the game. Every product is curated with the traveling golfer in mind — combining performance, style, and durability for the fairways that await.
        </p>

        <div id="contact" className="flex flex-col sm:flex-row items-center justify-center gap-8 text-primary-foreground/70 font-body text-sm">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-gold" />
            <span>Dehradun, India</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-gold" />
            <span>+91 XXX XXX XXXX</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-gold" />
            <span>hello@destinationfareways.com</span>
          </div>
        </div>
      </div>
    </section>
  );
}
