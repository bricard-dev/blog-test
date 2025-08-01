import AboutSection from "@/components/home/about/section";
import HeroSection from "@/components/home/hero/section";
import LastPostsSection from "@/components/home/last-posts/section";
import ThemeSection from "@/components/home/theme/section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ThemeSection />
      <LastPostsSection />
    </main>
  );
}
