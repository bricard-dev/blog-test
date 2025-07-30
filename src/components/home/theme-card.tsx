import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ThemeCardProps {
  title: string;
  slug: string;
  description: string;
  className?: string;
  bgColor?: string;
  cta?: string;
}

export function ThemeCard({
  title,
  description,
  slug = "",
  bgColor,
  cta = "Explorer",
  className,
}: ThemeCardProps) {
  return (
    <Card
      className={cn(
        "text-primary max-w-80 gap-8 border-none p-8 shadow-lg",
        className,
      )}
      style={{
        backgroundColor: `#${bgColor}`,
      }}
    >
      <CardHeader className="p-0">
        <CardTitle className="text-center font-mono text-2xl font-bold">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 p-0">
        <p className="font-mono">{description}</p>
      </CardContent>
      <CardFooter className="flex-col p-0">
        <Button asChild variant="outline">
          <Link href={`/themes/${slug}`}>{cta}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
