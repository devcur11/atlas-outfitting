import Link from "next/link";
import Image from "next/image";
import { Instagram, Star } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Locations & Rivers", href: "/locations" },
  { label: "Our Guides", href: "/guides" },
  { label: "Moloka\u02BBi", href: "/molokai" },
  { label: "Shop", href: "/shop" },
  { label: "Book a Trip", href: "/book" },
];

function Stars() {
  return (
    <span className="inline-flex gap-0.5 text-copper">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
      ))}
    </span>
  );
}

export default function Footer() {
  return (
    <footer className="bg-river text-cream">
      <div className="max-w-[1200px] mx-auto px-6 py-10 md:py-14">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-10 mb-12">
          <div className="shrink-0">
            <Image
              src="/images/logo.png"
              alt="Atlas Outfitting"
              width={160}
              height={158}
              className="h-12 w-auto invert brightness-200 mb-5"
            />
            <div className="space-y-2 text-warm-white/80 text-sm">
              <p>
                <a href="tel:+14062025383" className="hover:text-white transition-colors">
                  +1 (406) 202-5383
                </a>
              </p>
              <p>
                <a
                  href="mailto:Ikaikaflagg@att.net"
                  className="hover:text-white transition-colors"
                >
                  Ikaikaflagg@att.net
                </a>
              </p>
              <p>MT Outfitter #40625</p>
            </div>
          </div>

          <div>
            <h4 className="font-sans font-semibold text-sm tracking-wider uppercase mb-4 text-center">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-warm-white/80 text-sm hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-sans font-semibold text-sm tracking-wider uppercase mb-4">
              Follow Us
            </h4>
            <div className="flex gap-4">
              {/* PLACEHOLDER: Update with actual social URLs */}
              <a
                href="https://www.instagram.com/atlas_outfitting/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warm-white/80 hover:text-white transition-colors"
              >
                <Instagram size={22} />
              </a>
            </div>
          </div>

          <div className="lg:max-w-[260px]">
            <h4 className="font-sans font-semibold text-sm tracking-wider uppercase mb-4">
              Newsletter
            </h4>
            <p className="text-warm-white/80 text-sm mb-3">
              Get fishing reports &amp; trip updates
            </p>
            {/* PLACEHOLDER: Newsletter form — no integration yet */}
            <form
              action="#"
              className="flex gap-2"
            >
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 rounded-md bg-river-dark border border-warm-white/20 text-white text-sm placeholder:text-warm-white/50 focus:outline-none focus:ring-1 focus:ring-copper"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-copper text-white rounded-md text-sm font-semibold hover:bg-copper-light transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-warm-white/20 pt-8 mb-6">
          <h4 className="font-sans font-semibold text-sm tracking-wider uppercase mb-4 text-center">
            Reviews
          </h4>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-warm-white/80">
            <span className="flex items-center gap-2">
              <Stars /> 5.0 on Google (19 reviews)
            </span>
            <span className="hidden sm:inline text-warm-white/30">|</span>
            <span className="flex items-center gap-2">
              <Stars /> 5.0 on FishingBooker (23 reviews)
            </span>
          </div>
        </div>

        <div className="text-center text-warm-white/50 text-xs">
          &copy; {new Date().getFullYear()} Atlas Outfitting LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
