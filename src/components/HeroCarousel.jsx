import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const slides = [
  {
    bg: "https://img.forestessentialsindia.com/pub/media/mageplaza/bannerslider/banner/image/s/u/sun_spray_desktop_hp_banner_1.jpg",
  },
  {
    bg: "https://img.forestessentialsindia.com/pub/media/mageplaza/bannerslider/banner/image/h/a/haircare_desktop_2880x840.jpg",
  },
  {
    bg: "https://img.forestessentialsindia.com/pub/media/mageplaza/bannerslider/banner/image/t/r/travel_minis_desktop_banner_hp1.jpg",
  },
  {
    bg:"https://img.forestessentialsindia.com/pub/media/mageplaza/bannerslider/banner/image/m/o/mogra__hp_banner_1_desktop.jpg"
  },
  {
    bg: "https://img.forestessentialsindia.com/pub/media/mageplaza/bannerslider/banner/image/c/o/cologne_desktop_homepage_banner.jpg"
  }
    
  // Add more slides as needed
];

export default function HeroCarousel() {
  return (
    <div className="w-full">
      <Carousel
        plugins={[Autoplay({ delay: 3500 })]}
        opts={{ loop: true, align: "center" }}
        className="w-full"
      >
        <CarouselContent>
          {slides.map((slide, idx) => (
            <CarouselItem key={idx} className="w-full">
              <div
                className="
                  relative w-full
                  h-[220px] sm:h-[320px] md:h-[420px] lg:h-[540px]
                  flex items-center
                  bg-cover bg-center
                  transition-all duration-300
                "
                style={{ backgroundImage: `url(${slide.bg})` }}
              >
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="
                  relative z-10 flex flex-col md:flex-row
                  w-full h-full items-center justify-between
                  px-2 sm:px-4 md:px-8 py-4 md:py-8
                ">
                  {/* Place for future content */}
                </div>
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

