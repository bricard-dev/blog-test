"use client";

import { Article } from "@/lib/definitions";
import { Pause, Play } from "lucide-react";
import { useEffect, useState } from "react";
import Slide from "./Slide";

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

export default function Carousel() {
  const slides = [articles[articles.length - 1], ...articles, articles[0]];
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const [transitionEnabled, setTransitionEnabled] = useState<boolean>(true);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [dragStartX, setDragStartX] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragOffset, setDragOffset] = useState<number>(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return newIndex >= slides.length - 1 ? 1 : newIndex;
    });
    setTransitionEnabled(true);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? articles.length - 1 : prevIndex - 1,
    );
  };

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  // Auto-advance slides every 5 seconds when playing
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [isPlaying, currentIndex]);

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    setDragStartX(clientX);
    setIsDragging(true);
    setDragOffset(0);

    // Réinitialiser le compteur d'intervalle
    if (isPlaying) {
      setIsPlaying(false);
    }

    // Empêcher la sélection de texte pendant le glissement
    document.body.style.userSelect = "none";
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging || dragStartX === null) return;

    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const diff = dragStartX - clientX;

    // Limiter le décalage à la largeur d'une diapositive pour éviter les sauts
    // const maxOffset = window.innerWidth * 0.8; // 80% de la largeur de l'écran
    const maxOffset = window.innerWidth * 1;
    const newOffset = Math.max(-maxOffset, Math.min(maxOffset, -diff));

    setDragOffset(newOffset);

    // Empêcher le défilement de la page sur mobile
    e.preventDefault();
  };

  const handleDragEnd = () => {
    if (!dragStartX) return;

    // Seuil pour déterminer si on change de slide ou non (15% de la largeur)
    const threshold = window.innerWidth * 0.15;

    // Réinitialiser la sélection de texte
    document.body.style.userSelect = "";

    if (dragOffset > threshold) {
      // Glissement vers la droite - aller à la diapositive précédente
      setCurrentIndex((prev) => (prev === 0 ? articles.length - 1 : prev - 1));
    } else if (dragOffset < -threshold) {
      // Glissement vers la gauche - aller à la diapositive suivante
      setCurrentIndex((prev) => (prev === articles.length - 1 ? 0 : prev + 1));
    }

    // Réinitialiser l'état
    setDragStartX(null);
    setIsDragging(false);
    setDragOffset(0);

    // Redémarrer l'animation si elle était en cours
    if (isPlaying) {
      const timer = setTimeout(() => setIsPlaying(true), 5000);
      return () => clearTimeout(timer);
    }
  };

  const handleTransitionEnd = () => {};

  return (
    <div
      className="relative h-[600px] w-full overflow-hidden select-none"
      onMouseDown={handleDragStart}
      onMouseMove={isDragging ? handleDragMove : undefined}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      onTouchStart={handleDragStart}
      onTouchMove={isDragging ? handleDragMove : undefined}
      onTouchEnd={handleDragEnd}
    >
      <div
        className="flex h-full transition-transform duration-300 ease-out"
        style={{
          transform: `translateX(calc(-${currentIndex * 100}% + ${dragOffset}px))`,
          transition:
            !transitionEnabled || isDragging
              ? "none"
              : "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          cursor: isDragging ? "grabbing" : "grab",
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {slides.map((article: Article, index: number) => (
          <div
            key={`${article.id}-${index}`}
            className="h-full w-full flex-shrink-0"
          >
            <Slide article={article} />
          </div>
        ))}
      </div>

      <div className="absolute right-0 bottom-0 left-0 mx-auto flex max-w-5xl items-center justify-between gap-4 p-6">
        <div className="flex gap-2">
          {articles.map((_: Article, index: number) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 rounded-full backdrop-blur-xs transition-colors ${
                index === currentIndex ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={togglePlayPause}
          className="rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
          aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
        >
          {isPlaying ? <Pause /> : <Play />}
        </button>
      </div>
    </div>
  );
}
