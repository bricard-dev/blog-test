"use client";

import { carouselSlides } from "@/lib/data";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Category from "../Category";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";

export default function ImageCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState<number>(1);

  // Configuration de l'autoplay avec redémarrage après interaction
  const autoplay = Autoplay({
    delay: 4000, // 4 secondes entre chaque slide
    stopOnInteraction: false, // Continue l'autoplay après interaction
    stopOnMouseEnter: true, // Pause au survol
    stopOnFocusIn: false, // Ne s'arrête pas au focus
  });

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel opts={{ loop: true }} plugins={[autoplay]} setApi={setApi}>
      <CarouselContent className="ml-0">
        {carouselSlides.map((carouselSlide) => (
          <CarouselItem key={carouselSlide.id} className="group h-[500px] pl-0">
            <Link
              href={`/article/${carouselSlide.id}`}
              className="relative block h-full"
            >
              <Image
                src={carouselSlide.image.src}
                alt={carouselSlide.image.alt}
                fill
                priority
                className="object-cover"
              />

              {/* Gradient en fond */}
              <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/80 to-transparent" />
              {/* Overlay noir animé */}
              <div className="pointer-events-none absolute inset-0 z-20 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-20" />

              <div className="absolute right-0 bottom-[74px] left-0 z-30 mx-auto max-w-5xl">
                <div className="max-w-2xl px-6 select-none">
                  <Category
                    category={carouselSlide.category}
                    className="mb-4"
                  />
                  <h1 className="mb-4 font-mono text-4xl font-bold text-white">
                    {carouselSlide.title}
                  </h1>
                  <div className="flex gap-4 font-mono text-sm leading-6 text-white">
                    <p className="shrink-0">{carouselSlide.date}</p>
                    <div className="border" />
                    <p className="line-clamp-3 md:line-clamp-4">
                      {carouselSlide.description}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Dot */}
      <div className="absolute right-0 bottom-10 left-0 z-30 mx-auto max-w-5xl px-6">
        <div className="flex gap-2.5">
          {Array.from({ length: carouselSlides.length }, (_, index) => (
            <Button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                `h-2.5 w-2.5 min-w-0 rounded-full border-0 bg-white/30 p-0 backdrop-blur-xs transition-all ease-in-out hover:bg-white/50`,
                {
                  "bg-white": current === index + 1,
                },
              )}
            />
          ))}
        </div>
      </div>
    </Carousel>
  );
}
