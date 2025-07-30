import { cn } from "@/lib/utils";

interface SectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  children: React.ReactNode;
}

export function SectionTitle({
  as: Component = "h2",
  className,
  children,
  ...props
}: SectionTitleProps) {
  return (
    <Component
      className={cn("font-mono text-3xl font-bold md:text-4xl", className)}
      {...props}
    >
      {children}
    </Component>
  );
}
