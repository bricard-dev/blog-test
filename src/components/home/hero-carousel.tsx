"use client";

import { carouselSlides } from "@/lib/data";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from "../ui/carousel";
import { OverlayImage, OverlayImageContent } from "../ui/overlay-image";

export default function HeroCarousel() {
  const autoplay = Autoplay({
    delay: 4000, // 4 secondes entre chaque slide
    stopOnInteraction: false, // Continue l'autoplay après interaction
    stopOnMouseEnter: true, // Pause au survol
    stopOnFocusIn: false, // Ne s'arrête pas au focus
  });

  return (
    <Carousel opts={{ loop: true }} plugins={[autoplay]}>
      <CarouselContent className="ml-0">
        {carouselSlides.map((slide, index) => (
          <CarouselItem key={slide.id} className="group h-[500px] pl-0">
            <Link
              href={`/article/${slide.id}`}
              className="relative block h-full"
            >
              <OverlayImage image={slide.image} isPrimary={index === 0}>
                <OverlayImageContent
                  title={slide.title}
                  description={slide.description}
                  category={slide.category}
                  date={slide.date}
                />
              </OverlayImage>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselDots
        align="left"
        className="pointer-events-none absolute inset-x-0 bottom-10 mx-auto max-w-5xl px-6"
        activeDotClassName="bg-white"
        inactiveDotClassName="bg-primary"
        autoplay={autoplay}
      />
    </Carousel>
  );
}
