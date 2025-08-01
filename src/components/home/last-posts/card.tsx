import Category from "@/components/ui/category";
import { cn } from "@/lib/utils";
import Image from "next/image";

type LastPostsCardProps = {
  title: string;
  category: string;
  description: string;
  date: string;
  image: {
    src: string;
    alt: string;
  };
  className?: string;
};

export default function LastPostsCard({
  title,
  category,
  description,
  date,
  image,
  className,
}: LastPostsCardProps) {
  return (
    <div
      className={cn("group flex h-full max-w-full flex-col gap-4", className)}
    >
      <div className="relative h-80 w-full overflow-hidden rounded-sm">
        <div className="absolute inset-0 z-10 transition-colors duration-300 ease-in-out group-hover:bg-black/20" />
        <Image src={image.src} alt={image.alt} fill className="object-cover" />
        <Category
          category={category}
          variant="black"
          className="absolute top-4.5 right-4.5 z-20"
        />
      </div>
      <div className="flex flex-col gap-4 font-mono">
        <p className="text-muted-foreground text-sm font-medium">{date}</p>
        <h3 className="group-hover: text-xl font-bold group-hover:opacity-80">
          {title}
        </h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
