"use client";

import { Article } from "@/lib/definitions";
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

const articles: Article[] = [
  {
    id: 1,
    image: {
      src: "https://images.unsplash.com/photo-1509840841025-9088ba78a826?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Forest path",
    },
    category: "Espagne",
    title: "Séville, entre flamenco et azulejos : mon carnet de voyage andalou",
    date: "12 juillet 2025",
    description:
      "De retour d’un séjour envoûtant à Séville, je vous partage mes impressions, coups de coeur et découvertes au fil des ruelles pavées, des patios fleuries et des monuments baignés de soleil.",
  },
  {
    id: 2,
    image: {
      src: "https://images.unsplash.com/photo-1515268064940-5150b7c29f35?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Mountain landscape",
    },
    category: "France",
    title:
      "À la conquête des Alpes : une randonnée inoubliable au cœur des sommets",
    date: "27 juin 2025",
    description:
      "Découverte d’un itinéraire époustouflant à travers vallées verdoyantes, cols panoramiques et sommets majestueux des Alpes françaises.",
  },
  {
    id: 3,
    image: {
      src: "https://images.unsplash.com/photo-1544198365-f5d60b6d8190?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Mountain lake",
    },
    category: "Wellness",
    title: "Serene Waters Await",
    date: "July 14, 2025",
    description: "Find peace by crystal clear alpine lakes",
  },
];

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
        {articles.map((article) => (
          <CarouselItem key={article.id} className="group h-[500px] pl-0">
            <Link
              href={`/article/${article.id}`}
              className="relative block h-full"
            >
              <Image
                src={article.image.src}
                alt={article.image.alt}
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
                  <Category category={article.category} className="mb-4" />
                  <h1 className="mb-4 font-mono text-4xl font-bold text-white">
                    {article.title}
                  </h1>
                  <div className="flex gap-4 font-mono text-sm leading-6 text-white">
                    <p className="shrink-0">{article.date}</p>
                    <div className="border" />
                    <p className="line-clamp-3 md:line-clamp-4">
                      {article.description}
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
          {Array.from({ length: articles.length }, (_, index) => (
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
