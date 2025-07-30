import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const categoryVariants = cva(
  "w-fit rounded-full bg-white/30 text-xs font-bold tracking-wider text-white uppercase backdrop-blur-xs",
  {
    variants: {
      variant: {
        default: "bg-white/30",
        black: "bg-black/30",
      },
      size: {
        default: "px-4 py-2",
        sm: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export default function Category({
  className,
  variant,
  size,
  category,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof categoryVariants> & {
    category: string;
  }) {
  return (
    <span
      data-slot="category"
      className={cn(categoryVariants({ variant, size, className }))}
      {...props}
    >
      {category}
    </span>
  );
}
