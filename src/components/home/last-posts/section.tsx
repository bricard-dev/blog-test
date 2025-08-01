import Section from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/section-title";
import LastPostsList from "./list";

export default function LastPostsSection() {
  return (
    <Section fullHeight className="relative py-28 md:py-40">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[url('/images/background.jpg')] bg-cover bg-center opacity-10" />
      <div className="mx-auto flex max-w-5xl flex-col items-center space-y-16 md:space-y-20">
        <SectionTitle className="text-center">Derniers articles</SectionTitle>
        <LastPostsList />
        <Button>Voir plus d&apos;articles</Button>
      </div>
    </Section>
  );
}
