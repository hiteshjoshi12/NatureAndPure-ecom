// src/components/CategoryCarousel.jsx
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { FaArrowRight } from "react-icons/fa";

// Example data (replace with your real images and labels)
const categories = [
  {
    label: "FRAGRANCES",
    image: "https://img.forestessentialsindia.com/pub/media/home/category/Fragrance.jpg",
  },
  {
    label: "TRAVEL",
    image: "https://img.forestessentialsindia.com/pub/media/home/category/Travel-Minis.jpg",
  },
  {
    label: "GIFT CARD",
    image: "https://img.forestessentialsindia.com/pub/media/home/category/gift-card.jpg",
  },
  {
    label: "GIFTING",
    image: "https://img.forestessentialsindia.com/pub/media/home/category/GIFTING-category.jpg",
  },
  {
    label: "FACE",
    image: "https://img.forestessentialsindia.com/pub/media/home/category/Face-Care.jpg",
  },
  {
    label: "BODY",
    image: "https://img.forestessentialsindia.com/pub/media/home/category/Body-Care.jpg",
  },
  {
    label: "MAKEUP",
    image: "https://img.forestessentialsindia.com/pub/media/home/category/Makeup.jpg",
  },
  {
    label: "HAIR",
    image: "https://img.forestessentialsindia.com/pub/media/home/category/Hair-Care.jpg",
  },
];

export default function CategoryCarousel() {
  return (
    <div className="w-full py-4 sm:py-6">
      <Carousel
        plugins={[Autoplay({ delay: 3500 })]}
        opts={{ loop: true, align: "start" }}
        className="w-full"
      >
        <CarouselContent>
          {categories.map((cat, idx) => (
            <CarouselItem
              key={cat.label}
              className="
                basis-8/12
                xs:basis-6/12
                sm:basis-4/12
                md:basis-3/12
                lg:basis-2/12
                px-2
                "
            >
              <div className="rounded-2xl overflow-hidden shadow-md bg-white group relative">
                <img
                  src={cat.image}
                  alt={cat.label}
                  className="
                    w-full
                    h-32
                    xs:h-40
                    sm:h-44
                    md:h-48
                    lg:h-56
                    object-cover
                  "
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-white font-bold text-base xs:text-lg md:text-xl drop-shadow text-center">
                    {cat.label}
                  </span>
                </div>
                <button className="absolute bottom-3 right-3 bg-white/80 hover:bg-yellow-400 transition rounded-full p-2 shadow flex items-center justify-center">
                  <FaArrowRight className="text-yellow-700" />
                </button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

