"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Locations & Rivers", href: "/locations" },
  { label: "Our Guides", href: "/guides" },
  { label: "Moloka\u02BBi", href: "/molokai" },
  { label: "Shop", href: "/shop" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const isTransparent = isHome && !isScrolled;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isTransparent
            ? "bg-transparent"
            : "bg-cream shadow-sm"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="shrink-0">
            <Image
              src="/images/logo.png"
              alt="Atlas Outfitting"
              width={180}
              height={178}
              className={`h-10 md:h-14 w-auto transition-all duration-300 ${
                isTransparent ? "invert brightness-200" : ""
              }`}
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-sans font-semibold text-sm tracking-wide transition-colors ${
                  isTransparent
                    ? "text-white hover:text-white/80"
                    : "text-charcoal hover:text-river"
                } ${pathname === link.href ? (isTransparent ? "text-white" : "text-river") : ""}`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/book"
              className="bg-river text-white rounded-md px-7 py-3 font-sans font-semibold text-sm tracking-wide hover:bg-river-dark transition-colors"
            >
              Book a Trip
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className={`md:hidden p-2 ${isTransparent ? "text-white" : "text-charcoal"}`}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute inset-y-0 right-0 w-[280px] bg-cream shadow-xl flex flex-col">
            <div className="flex items-center justify-end p-4">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-charcoal"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col space-y-1 px-6 flex-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-sans font-semibold text-lg py-3 transition-colors ${
                    pathname === link.href ? "text-river" : "text-charcoal hover:text-river"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="p-6">
              <Link
                href="/book"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center bg-river text-white rounded-md px-7 py-3.5 font-sans font-semibold tracking-wide hover:bg-river-dark transition-colors"
              >
                Book a Trip
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
