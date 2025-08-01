import Section from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/section-title";
import { PhotoStack } from "./photo-stack";

const images = [
  "https://images.unsplash.com/photo-1669986480068-901a77513c09?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1667052313435-45ffc6d9d40e?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1669986480113-695b1c9a4a75?q=80&w=3465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export default function AboutSection() {
  return (
    <Section fullHeight className="relative py-28 md:py-40">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[url('/images/background.jpg')] bg-cover bg-center opacity-5" />
      <div className="space-y-16 md:space-y-20">
        <PhotoStack images={images} />
        <div className="mx-auto flex max-w-xl flex-col items-center gap-6 text-center md:gap-8">
          <SectionTitle>Curieux voyageur</SectionTitle>
          <p className="text-muted-foreground font-mono leading-relaxed md:text-lg">
            Je passe de ruelles andalouses aux chemins du bout du monde pour
            écouter, goûter et raconter ce que chaque culture a de plus vivant.
          </p>
          <Button>Qui suis-je ?</Button>
        </div>
      </div>
    </Section>
  );
}
