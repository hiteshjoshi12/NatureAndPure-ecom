import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { FaHeart } from "react-icons/fa";

const products = [
  {
    image: "./SaffronFaceWash.png",
    title: "Natural & Pure Illuminating Saffron Face Wash – 100ml",
    subtitle: "For Clear, Glowing Skin | With Saffron & Sandalwood | All Skin Types",
    price: "₹359",
    button: "View Product",
  },
  {
    image: "./ubtanfacewash.png",
    title: "Illuminating Ubtan Face Wash",
    subtitle: "Gentle Exfoliation | Deep Cleansing | Radiant Glow",
    price: "₹359",
    button: "View Product",
  },
  {
    image: "./cremefacewash.png",
    title: "Illuminating Hydra Glow Creme Face Wash",
    subtitle: "Gentle Cleanse • Deep Hydration • Radiant Skin",
    price: "₹359",
    button: "View Product",
  },
  {
    image: "./phytoserem.jpg",
    title: "97% PHYTO MUCIN SERUM",
    subtitle: "Vegan, phyto-based serum powered by Phytomucin from wild yam",
    price: "₹749",
    button: "View Product",
  },
  {
    image: "./Quintgel.png",
    title: "Quint Essence Gel Moisturiser",
    subtitle: "Five Essential Benefits. One Perfect Cream.",
    price: "₹599",
    button: "View Product",
  },
  
];

export default function SeasonalIndulgencesCarousel() {
  return (
    <section className="w-full py-8 sm:py-12 px-2 sm:px-4 md:px-0 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            SEASONAL INDULGENCES
          </h2>
          <a
            href="#"
            className="text-xs sm:text-sm font-medium text-gray-700 hover:underline flex items-center gap-1"
          >
            VIEW ALL <span aria-hidden>→</span>
          </a>
        </div>
        <Carousel
          opts={{
            align: "start",
            containScroll: "trimSnaps",
            dragFree: true,
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {products.map((product, idx) => (
              <CarouselItem
                key={idx}
                className="
                  basis-[90%]
                  xs:basis-3/4
                  sm:basis-2/5
                  md:basis-1/4
                  lg:basis-1/5
                  px-1 sm:px-2
                "
              >
                <Card className="relative p-3 sm:p-4 h-full flex flex-col bg-white">
                  {/* Product Image */}
                  <img
                    src={product.image}
                    alt={product.title}
                    className="
                      w-full
                      h-40 xs:h-56 sm:h-64 md:h-72 lg:h-80
                      object-contain mx-auto mb-3 sm:mb-4
                      bg-gray-100 shadow-sm hover:shadow-md transition rounded-lg
                      cursor-pointer hover:scale-105 transform duration-200
                    "
                  />
                  {/* Product Info */}
                  <div className="flex-1 flex flex-col items-start">
                    <div>
                      <h3 className="font-semibold text-sm sm:text-base md:text-lg mb-1">
                        {product.title}
                      </h3>
                      <p className="text-gray-500 text-xs sm:text-sm mb-1">
                        {product.subtitle}
                      </p>
                    </div>
                    <div className="font-bold text-sm sm:text-base md:text-lg mb-2">
                      {product.price}
                    </div>
                  </div>
                  {/* Action Button */}
                  <button className="mt-auto w-full border border-gray-300 rounded-lg py-2 font-medium text-xs sm:text-sm hover:bg-gray-100 transition cursor-pointer flex items-center justify-center">
                    {product.button}
                  </button>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}

