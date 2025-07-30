import Category from "@/components/ui/category";
import { cn } from "@/lib/utils";
import Image from "next/image";
import * as React from "react";

type OverlayImageProps = React.ComponentPropsWithRef<"div"> & {
  image: { src: string; alt: string };
  overlayClassName?: string;
  className?: string;
  isPrimary?: boolean;
};

type OverlayImageContext = { isPrimary: boolean };

const OverlayImageContext = React.createContext<OverlayImageContext | null>(
  null,
);

function useOverlayImage() {
  const context = React.useContext(OverlayImageContext);

  if (!context) {
    throw new Error(
      "useOverlayImage must be used within OverlayImageContextProvider",
    );
  }

  return context;
}

function OverlayImage({
  image,
  overlayClassName,
  isPrimary = false,
  children,
  className,
  ...props
}: OverlayImageProps & React.ComponentProps<"div">) {
  return (
    <OverlayImageContext.Provider value={{ isPrimary }}>
      <div
        className={cn("group relative h-full w-full", className)}
        data-slot="overlay-image"
        {...props}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority={isPrimary}
          className="object-cover"
        />
        <div
          tabIndex={-1}
          className={cn(
            "pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 to-transparent",
            overlayClassName,
          )}
        />
        <div
          tabIndex={-1}
          className="pointer-events-none absolute inset-0 bg-black opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-20"
        />

        <div className="absolute inset-x-0 bottom-10 z-10">{children}</div>
      </div>
    </OverlayImageContext.Provider>
  );
}

type OverlayImageContentProps = {
  title: string;
  description?: string;
  category?: string;
  date?: string;
  actions?: React.ReactNode;
  className?: string;
};

function OverlayImageContent({
  title,
  description,
  category,
  date,
  actions,
  className,
  ...props
}: React.ComponentProps<"div"> & OverlayImageContentProps) {
  const { isPrimary } = useOverlayImage();

  return (
    <div
      className={cn("mx-auto max-w-5xl", className)}
      data-slot="overlay-image-content"
      {...props}
    >
      <div className="flex max-w-2xl flex-col gap-4 p-6 text-white">
        {category && <Category category={category} />}
        {isPrimary ? (
          <h1 className="mb-2 font-mono text-4xl font-bold">{title}</h1>
        ) : (
          <h2 className="mb-2 font-mono text-4xl font-bold">{title}</h2>
        )}
        <div className="flex gap-4 font-mono text-sm/6">
          {date && <span className="shrink-0">{date}</span>}
          <div className="border-l" />
          {description && (
            <p className="mb-2 line-clamp-3 md:line-clamp-4">{description}</p>
          )}
          {actions}
        </div>
      </div>
    </div>
  );
}

export { OverlayImage, OverlayImageContent };
