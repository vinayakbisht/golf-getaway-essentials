import productTravelBag from "@/assets/product-travel-bag.jpg";
import productGlove from "@/assets/product-glove.jpg";
import productPolo from "@/assets/product-polo.jpg";
import productGolfBalls from "@/assets/product-golf-balls.jpg";
import productCap from "@/assets/product-cap.jpg";
import productShoeBag from "@/assets/product-shoe-bag.jpg";
import productSunglasses from "@/assets/product-sunglasses.jpg";
import productTowel from "@/assets/product-towel.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: "travel-golf-bag",
    name: "Voyager Travel Golf Bag",
    price: 249.99,
    image: productTravelBag,
    category: "Bags",
    description: "A premium padded travel golf bag designed for the jet-setting golfer. Features heavy-duty wheels, TSA-approved locks, and reinforced padding to protect your clubs on any journey.",
    features: ["Heavy-duty 600D polyester", "Inline skate wheels", "TSA-approved lock", "Fits bags up to 48\"", "Weighs only 9 lbs"],
  },
  {
    id: "leather-golf-glove",
    name: "Tour Elite Leather Glove",
    price: 34.99,
    image: productGlove,
    category: "Gloves",
    description: "Handcrafted from premium Cabretta leather for an unmatched grip and buttery-soft feel. Perforated fingers ensure breathability on those warm-weather rounds.",
    features: ["100% Cabretta leather", "Perforated for breathability", "Reinforced palm", "Adjustable closure", "Available in S–XL"],
  },
  {
    id: "performance-polo",
    name: "Fairway Performance Polo",
    price: 79.99,
    image: productPolo,
    category: "Apparel",
    description: "Engineered with moisture-wicking fabric and 4-way stretch, this polo keeps you cool and unrestricted from the first tee to the 18th green.",
    features: ["UPF 50+ sun protection", "4-way stretch fabric", "Moisture-wicking", "Anti-odor technology", "Tailored athletic fit"],
  },
  {
    id: "premium-golf-balls",
    name: "ProFlight Tour Golf Balls (12-Pack)",
    price: 44.99,
    image: productGolfBalls,
    category: "Equipment",
    description: "Tour-level performance with a soft urethane cover for exceptional spin control around the greens and explosive distance off the tee.",
    features: ["3-piece urethane construction", "High spin around greens", "Low drag dimple pattern", "Soft feel", "Dozen pack"],
  },
  {
    id: "traveler-cap",
    name: "Destination Traveler Cap",
    price: 29.99,
    image: productCap,
    category: "Accessories",
    description: "A lightweight, packable cap with UV protection that looks as good at the airport lounge as it does on the links.",
    features: ["UPF 40+ rated", "Moisture-wicking sweatband", "Packable & crushable", "Adjustable strap", "Embroidered logo"],
  },
  {
    id: "shoe-bag",
    name: "Executive Shoe Bag",
    price: 39.99,
    image: productShoeBag,
    category: "Bags",
    description: "Keep your golf shoes separate and ventilated with this zippered shoe bag featuring a waterproof interior and ventilation grommets.",
    features: ["Waterproof interior lining", "Ventilation grommets", "Dual zipper", "Fits shoes up to size 14", "Carry handle"],
  },
  {
    id: "aviator-sunglasses",
    name: "Links Aviator Sunglasses",
    price: 129.99,
    image: productSunglasses,
    category: "Accessories",
    description: "Polarized lenses with contrast-enhancing tint help you read greens like a pro. Ultra-light titanium frame stays comfortable all round.",
    features: ["Polarized lenses", "Contrast-enhancing tint", "Titanium frame", "Anti-reflective coating", "Includes hard case"],
  },
  {
    id: "golf-towel",
    name: "Clubhouse Microfiber Towel",
    price: 19.99,
    image: productTowel,
    category: "Accessories",
    description: "Ultra-absorbent waffle-weave microfiber towel with a carabiner clip. Keeps your clubs and hands clean through 18 holes and beyond.",
    features: ["Waffle-weave microfiber", "Carabiner clip attachment", "Quick-dry technology", "16\" x 24\" size", "Machine washable"],
  },
];
