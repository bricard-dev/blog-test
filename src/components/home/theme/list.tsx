import { ThemeCard } from "./card";

type Theme = {
  id: number;
  title: string;
  slug: string;
  description: string;
  bgColor: string;
  cta: string;
};

const themes: Theme[] = [
  {
    id: 1,
    title: "Aventure",
    slug: "aventure",
    description:
      "Escapades andalouses, virées hors des sentiers battus en Asie ou parenthèses iodées sur les côtes bretonnes : parcourez nos carnets pour vibrer, goûter et apprendre au rythme de chaque rencontre.",
    bgColor: "A3CD8B",
    cta: "S'évader",
  },
  {
    id: 2,
    title: "Spiritualité",
    slug: "spiritualite",
    description:
      "Des retraites de méditation aux traditions spirituelles rencontrées lors de mes voyages, ce thème explore les pratiques, philosophies et expériences qui invitent à la réflexion et au mieux-être intérieur.",
    bgColor: "ADC5ED",
    cta: "M'inspirer",
  },
  {
    id: 3,
    title: "Psychologie",
    slug: "psychologie",
    description:
      "Découvre des articles sur la compréhension de soi, la gestion des émotions, et les clés pour avancer dans la vie. Un espace pour réfléchir, grandir et mieux se connaître.",
    bgColor: "EBC0F5",
    cta: "S'interroger",
  },
];

export default function ThemeList() {
  return (
    <div className="mx-auto grid max-w-5xl grid-cols-1 justify-items-center gap-8 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
      {themes.map((theme) => (
        <ThemeCard key={theme.id} {...theme} />
      ))}
    </div>
  );
}
