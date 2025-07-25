import AboutSection from "@/components/AboutSection";
import ImageCarousel from "@/components/carousel/ImageCarousel";

export default function Home() {
  return (
    <main>
      <ImageCarousel />
      <div className="relative h-full w-full overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[url('/images/background.jpg')] bg-cover bg-center opacity-5" />
        <AboutSection />
      </div>
    </main>
  );
}
