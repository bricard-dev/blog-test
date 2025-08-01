import { cn } from "@/lib/utils";
import Link from "next/link";
import LastPostsCard from "./card";

type Post = {
  id: number;
  category: string;
  date: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
};

const posts: Post[] = [
  {
    id: 1,
    category: "Bretagne",
    date: "16 juillet 2025",
    title: "Week-end enchanteur en Bretagne entre terre, mer et légendes",
    description:
      "Découvrez les paysages sauvages et mystiques de la Bretagne lors d’un voyage authentique au cœur des traditions celtiques.",
    image: {
      src: "https://images.unsplash.com/photo-1616350428103-cc6bf12d46f0?q=80&w=3467&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Un voilier au porte de Saint-Malo",
    },
  },
  {
    id: 2,
    category: "Espagne",
    date: "11 juillet 2025",
    title: "Escapade culturelle à Grenade : sur les traces de l’Alhambra",
    description:
      "Plongez dans l’histoire fascinante de Grenade en explorant les ruelles animées, l’Alhambra majestueuse et ses jardins féeriques.",
    image: {
      src: "https://images.unsplash.com/photo-1560964598-4ac56f223111?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Ruelle de Séville",
    },
  },
  {
    id: 3,
    category: "Portugal",
    date: "04 juillet 2025",
    title:
      "Lisbonne autrement : balade authentique dans les quartiers pittoresques",
    description:
      "Explorez Lisbonne à travers ses quartiers typiques, entre façades colorées, belvédères panoramiques et ambiance bohème.",
    image: {
      src: "https://images.unsplash.com/photo-1536663815808-535e2280d2c2?q=80&w=2190&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Lisbonne vu des toits",
    },
  },
];

export default function LastPostsList() {
  return (
    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, index) => (
        <Link
          key={post.id}
          className={cn("border-b pb-6 last:border-none md:border-none", {
            "block md:col-span-2 lg:col-span-1":
              index === posts.length - 1 && posts.length % 2 !== 0,
          })}
          href="/"
        >
          <LastPostsCard {...post} />
        </Link>
      ))}
    </div>
  );
}
