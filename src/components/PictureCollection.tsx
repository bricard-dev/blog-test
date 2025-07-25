import { cn } from "@/lib/utils";
import Image from "next/image";

interface PictureCollectionProps {
  className?: string;
}

export default function PictureCollection({
  className,
}: PictureCollectionProps) {
  return (
    <div className={cn("flex justify-center", className)}>
      <div className="group relative cursor-pointer select-none">
        <div className="absolute top-8 -left-50 z-10 hidden h-[400px] w-[300px] -rotate-10 overflow-hidden rounded-3xl shadow-lg transition-transform group-hover:-translate-x-10 group-hover:translate-y-1 group-hover:-rotate-12 md:block">
          <Image
            src="https://images.unsplash.com/photo-1667052313435-45ffc6d9d40e?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Portrait 1"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-20 h-[350px] w-[262px] overflow-hidden rounded-3xl shadow-lg transition-transform group-hover:rotate-5 md:h-[467px] md:w-[350px] md:group-hover:scale-110">
          <Image
            src="https://images.unsplash.com/photo-1669986480068-901a77513c09?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Central"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute top-8 -right-50 z-10 hidden h-[400px] w-[300px] rotate-10 overflow-hidden rounded-3xl shadow-lg transition-transform group-hover:translate-x-10 group-hover:translate-y-1 group-hover:rotate-12 md:block">
          <Image
            src="https://images.unsplash.com/photo-1669986480113-695b1c9a4a75?q=80&w=3465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Portrait 2"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
