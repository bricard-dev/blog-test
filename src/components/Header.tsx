"use client";

import { Menu, Search, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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

  // Fermer le menu quand la route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Désactiver le défilement quand le menu est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 z-50 flex h-16 w-full items-center border-b border-[#EAEAEA] bg-white">
        <div className="mx-auto flex w-full items-center justify-between px-6">
          <button
            className="-ml-2 p-2 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo ou titre du site */}
          <div className="flex-1 text-center md:text-left">
            <Link href="/" className="text-xl font-bold">
              Blog
            </Link>
          </div>

          <div className="hidden md:block">
            <nav>
              <ul className="flex justify-center gap-8">
                {navLinks.map((link) => (
                  <li
                    key={link.href}
                    className={
                      pathname === link.href
                        ? "text-sm font-bold text-[#495057]"
                        : "text-sm font-medium text-[#495057]/75 transition-colors hover:text-[#495057]"
                    }
                  >
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="ml-4">
            <button className="p-2">
              <Search size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Menu mobile */}
      <div
        className={`fixed inset-0 z-40 transform bg-white transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"} overflow-y-auto pt-16 md:hidden`}
      >
        <nav className="p-6">
          <ul className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block rounded-lg px-4 py-3 transition-colors ${
                    pathname === link.href
                      ? "bg-gray-100 font-bold text-[#495057]"
                      : "font-medium text-[#495057]/75 hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
