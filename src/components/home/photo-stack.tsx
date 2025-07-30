import { cn } from "@/lib/utils";
import Image, { type StaticImageData } from "next/image";
import { useMemo } from "react";

const getPhotoTransforms = (
  index: number,
  centerIndex: number,
  spread: number,
  rotate: number,
) => {
  const offset = (index - centerIndex) * spread;
  const degree = (index - centerIndex) * rotate;

  const isCenter = index === Math.floor(centerIndex);
  return {
    translateX: offset,
    rotateZ: degree,
    zIndex: isCenter ? 10 : 1,
  };
};

function getPhotoStyle(
  index: number,
  centerIndex: number,
  spread: number,
  rotate: number,
  height: number,
  width: number,
): React.CSSProperties {
  const { translateX, rotateZ, zIndex } = getPhotoTransforms(
    index,
    centerIndex,
    spread,
    rotate,
  );
  const isCenter = index === Math.floor(centerIndex);
  return isCenter
    ? {
        height,
        width,
        transform: "translateX(-50%)",
        left: "50%",
        zIndex,
        transformOrigin: "center",
      }
    : {
        height,
        width,
        transform: `translateX(${translateX}px) rotate(${rotateZ}deg)`,
        left: "auto",
        zIndex,
        transformOrigin: "center",
      };
}

type PhotoStackProps = {
  /** Array of image sources to display in the stack */
  images: string[] | StaticImageData[];
  /** Horizontal spread between photos in pixels */
  spread?: number;
  /** Rotation angle in degrees */
  rotate?: number;
  /** Container height in pixels */
  height?: number;
  /** Container width in pixels */
  width?: number;
  /** Additional class names */
  className?: string;
};

function PhotoStack({
  images,
  spread = 200,
  rotate = 8,
  height = 400,
  width = 280,
  className,
}: PhotoStackProps) {
  const centerIndex = useMemo(() => (images.length - 1) / 2, [images.length]);

  return (
    <div
      className={cn("relative mx-auto", className)}
      style={{ height, width }}
    >
      {images.map((img, index) => (
        <PhotoStackItem
          key={typeof img === "string" ? img : img.src}
          img={img}
          isCenter={index === Math.floor(centerIndex)}
          style={getPhotoStyle(
            index,
            centerIndex,
            spread,
            rotate,
            height,
            width,
          )}
          height={height}
          width={width}
          index={index}
        />
      ))}
    </div>
  );
}

type PhotoStackItemProps = {
  img: string | StaticImageData;
  isCenter: boolean;
  style: React.CSSProperties;
  height: number;
  width: number;
  index: number;
};

function PhotoStackItem({ img, isCenter, style, index }: PhotoStackItemProps) {
  return (
    <div
      className={cn("absolute top-0 overflow-hidden rounded-2xl shadow-xl", {
        "md:scale-110": isCenter,
        "hidden md:block": !isCenter,
      })}
      style={{ ...style }}
    >
      <Image
        src={img}
        alt={`Photo ${index + 1}`}
        fill
        className="object-cover"
        priority={isCenter}
      />
    </div>
  );
}

export { PhotoStack, PhotoStackItem };
