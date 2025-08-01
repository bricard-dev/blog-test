import Section from "@/components/layout/section";
import { SectionTitle } from "@/components/ui/section-title";
import ThemeList from "./list";

interface ThemeSectionProps {
  className?: string;
}

export default function ThemeSection({ className }: ThemeSectionProps) {
  return (
    <Section fullHeight className={`bg-primary py-28 md:py-40 ${className}`}>
      <div className="space-y-16 md:space-y-20">
        <div className="mx-auto flex max-w-xl flex-col items-center gap-6 text-center text-white md:gap-8">
          <SectionTitle>Thèmes</SectionTitle>
          <p className="font-mono leading-relaxed md:text-lg">
            Pour que vous trouviez en un clin d&apos;œil ce qui vous inspire, le
            blog est organisé en trois grands thèmes.
          </p>
        </div>
        <ThemeList />
      </div>
    </Section>
  );
}
