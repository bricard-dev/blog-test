"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import Category from "./Category";

const articles = [
  {
    id: 1,
    category: "Nature",
    title: "Ocean Drive",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, laborum.",
    date: "10 juin 2025",
    image: {
      src: "https://images.unsplash.com/photo-1682687982501-1e58ab814714?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Girl in the ocean",
    },
  },
  {
    id: 2,
    category: "Nature",
    title: "Green Leaf",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius accusantium tempora labore?",
    date: "08 juin 2025",
    image: {
      src: "https://images.unsplash.com/photo-1752328731464-28565befe6a3?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Leaf with water droplet",
    },
  },
  {
    id: 3,
    category: "Italy",
    title: "Venise under the water",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem cum maiores molestiae ea eum similique consequatur est, fugiat tempora, suscipit temporibus, placeat quaerat.",
    date: "01 juin 2025",
    image: {
      src: "https://images.unsplash.com/photo-1751870296111-ecc21309ecf1?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Venise from a boat",
    },
  },
];

const TOTAL_ARTICLES = articles.length;

const slides = [articles[TOTAL_ARTICLES - 1], ...articles, articles[0]];

export default function TestCarousel() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [dragStartX, setDragStartX] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const dragging = useRef(false);

  const router = useRouter();

  const containerRef = useRef<HTMLDivElement>(null);

  const handleTransitionEnd = () => {
    console.log("HANDLE TRANSITION END");
    if (currentSlide === 0) {
      jumpTo(TOTAL_ARTICLES);
    } else if (currentSlide === TOTAL_ARTICLES + 1) {
      jumpTo(1);
    }
  };

  const jumpTo = (index: number) => {
    console.log("JUMP TO");
    if (!containerRef.current) return;
    containerRef.current.style.transition = "none";
    setCurrentSlide(index);
    setTimeout(() => {
      if (containerRef.current) containerRef.current.style.transition = "";
    }, 20);
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    setDragStartX(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!dragging.current || dragStartX === null) return;
    const offset = e.clientX - dragStartX;
    setDragOffset(offset);
  };

  const handlePointerUp = () => {
    dragging.current = false;

    if (dragOffset === 0) router.push(`/articles/${currentSlide}`);

    if (Math.abs(dragOffset) > window.innerWidth / 4) {
      if (dragOffset < 0) setCurrentSlide((c) => c + 1);
      else if (dragOffset > 0) setCurrentSlide((c) => c - 1);
    }
    setDragOffset(0);
    setDragStartX(null);
  };

  const preventImageDrag = (e: React.DragEvent) => e.preventDefault();

  return (
    <div
      className="relative h-[400px] w-full touch-pan-x overflow-hidden select-none"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      style={{ cursor: dragging.current ? "grabbing" : "pointer" }}
    >
      <div
        ref={containerRef}
        className="flex h-full"
        style={{
          transition: dragging.current ? "none" : "transform 0.3s ease-in-out",
          transform: `translateX(calc(${-currentSlide * 100}vw + ${dragOffset}px))`,
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="group relative h-full w-full flex-shrink-0 select-none"
          >
            <Image
              src={slide.image.src}
              alt={slide.image.alt}
              fill
              className="object-cover"
              priority
              draggable={false}
              onDragStart={preventImageDrag}
            />
            {/* Gradient en fond */}
            <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/80 to-transparent" />
            {/* Overlay noir animé */}
            <div className="pointer-events-none absolute inset-0 z-20 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-20" />

            <div className="absolute right-0 bottom-[54px] left-0 z-20 mx-auto max-w-5xl px-6 text-white">
              <div className="max-w-[600px]">
                <Category category={slide.category} className="mb-4" />
                <h2 className="mb-4 font-mono text-4xl font-bold">
                  {slide.title}
                </h2>
                <div className="mb-4 flex gap-4 font-mono">
                  <p className="whitespace-nowrap">{slide.date}</p>
                  <div className="border" />
                  <p className="line-clamp-2">{slide.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute right-0 bottom-0 left-0 mx-auto max-w-5xl px-6 pb-10">
        <div className="flex gap-2">
          {articles.map((_, index) => (
            <button
              onPointerDown={(e) => e.stopPropagation()}
              onPointerUp={(e) => e.stopPropagation()}
              key={index}
              onClick={(e) => {
                setCurrentSlide(index + 1);
              }}
              className={`h-3 w-3 rounded-full backdrop-blur-xs transition-colors ${
                index === currentSlide - 1 ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
