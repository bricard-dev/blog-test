import { cn } from "@/lib/utils";

export default function Category({
  category,
  variant,
  className,
}: {
  category: string;
  variant?: "default" | "dark";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "w-fit rounded-full bg-white/30 px-4 py-2 text-xs font-bold tracking-wider text-white uppercase backdrop-blur-xs",
        className,
        {
          "bg-black/30": variant === "dark",
        },
      )}
    >
      {category}
    </div>
  );
}
