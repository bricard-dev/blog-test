import Section from "@/components/layout/section";
import { SectionTitle } from "@/components/ui/section-title";
import { ThemeCard } from "./theme-card";

export default function ThemeSection() {
  return (
    <Section fullHeight className="bg-primary py-28 md:py-40">
      <div className="space-y-16 md:space-y-20">
        <div className="mx-auto flex max-w-xl flex-col items-center gap-6 text-center text-white md:gap-8">
          <SectionTitle>Thèmes</SectionTitle>
          <p className="font-mono text-lg leading-relaxed">
            Pour que vous trouviez en un clin d&apos;œil ce qui vous inspire, le
            blog est organisé en trois grands thèmes.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 items-center justify-items-center gap-8 md:gap-6 lg:grid-cols-3">
          <ThemeCard
            title="Aventure"
            slug="aventure"
            description="Escapades andalouses, virées hors des sentiers battus en Asie ou parenthèses iodées sur les côtes bretonnes : parcourez nos carnets pour vibrer, goûter et apprendre au rythme de chaque rencontre."
            bgColor="A3CD8B"
            cta="S'évader"
          />

          <ThemeCard
            title="Spiritualité"
            slug="spiritualite"
            description="Des retraites de méditation aux traditions spirituelles rencontrées lors de mes voyages, ce thème explore les pratiques, philosophies et expériences qui invitent à la réflexion et au mieux-être intérieur."
            bgColor="ADC5ED"
            cta="M'inspirer"
          />

          <ThemeCard
            title="Psychologie"
            slug="psychologie"
            description="Découvre des articles sur la compréhension de soi, la gestion des émotions, et les clés pour avancer dans la vie. Un espace pour réfléchir, grandir et mieux se connaître."
            bgColor="EBC0F5"
            cta="S'interroger"
          />
        </div>
      </div>
    </Section>
  );
}
