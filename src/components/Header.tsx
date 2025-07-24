"use client";

import { Menu, Search } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/aventure", label: "Aventure" },
  { href: "/spiritualite", label: "Spiritualité" },
  { href: "/psychologie", label: "Psychologie" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center px-6">
        {/* Menu mobile uniquement visible en dessous de md */}
        <div className="flex flex-1 items-center md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
                <span className="sr-only">Ouvrir le menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>
                  <span className="font-mono text-xl font-bold">Blog</span>
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-6">
                <ul className="flex flex-col">
                  {navLinks.map((link) => (
                    <li key={link.href} className="border-b last:border-b-0">
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "hover:bg-accent hover:text-accent-foreground block px-4 py-3 text-sm font-medium transition-colors",
                          pathname === link.href
                            ? "text-foreground font-bold"
                            : "text-muted-foreground",
                        )}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
          {/* Logo centré mobile */}
          <div className="flex-1 text-center">
            <Link
              href="/"
              className="pointer-events-none font-mono text-xl font-bold select-none"
            >
              Blog
            </Link>
          </div>
        </div>

        {/* Logo desktop */}
        <div className="hidden items-center md:flex">
          <Link href="/" className="font-mono text-xl font-bold select-none">
            Blog
          </Link>
        </div>
        {/* Navigation desktop centrée */}
        <nav className="hidden flex-1 justify-center md:flex">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-sm transition-colors",
                    pathname === link.href
                      ? "text-foreground font-bold"
                      : "text-muted-foreground hover:text-foreground font-medium",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* Bouton recherche à droite */}
        <div className="ml-auto flex items-center">
          <Button variant="ghost" size="icon">
            <Search />
            <span className="sr-only">Rechercher</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
