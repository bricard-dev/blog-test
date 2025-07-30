import { cn } from "@/lib/utils";
import React from "react";

type SectionProps = {
  className?: string;
  fullHeight?: boolean;
};

export default function Section({
  className,
  fullHeight = false,
  children,
  ...props
}: React.ComponentProps<"section"> & SectionProps) {
  return (
    <section
      className={cn("px-6", className, { "my-28 md:my-40": !fullHeight })}
      data-slot="section"
      {...props}
    >
      {children}
    </section>
  );
}

type SectionTitleProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  children: React.ReactNode;
};

export function SectionTitle({
  as: Component = "h2",
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement> & SectionTitleProps) {
  return (
    <Component
      className={cn("font-mono text-3xl font-bold md:text-4xl", className)}
      {...props}
    >
      {children}
    </Component>
  );
}
