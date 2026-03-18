import Link from "next/link";
import Image from "next/image";
import { Instagram, Youtube, Star } from "lucide-react";

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
      <div className="max-w-[1200px] mx-auto px-6 py-12 md:py-20">
        <div className="mb-10">
          <Image
            src="/images/logo.png"
            alt="Atlas Outfitting"
            width={160}
            height={158}
            className="h-auto w-[120px] md:w-[160px] invert brightness-200"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <h4 className="font-sans font-semibold text-sm tracking-wider uppercase mb-4">
              Contact
            </h4>
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
            <h4 className="font-sans font-semibold text-sm tracking-wider uppercase mb-4">
              Quick Links
            </h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <p key={link.href}>
                  <Link
                    href={link.href}
                    className="text-warm-white/80 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </p>
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
                href="https://www.instagram.com/atlasoutfitting/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warm-white/80 hover:text-white transition-colors"
              >
                <Instagram size={22} />
              </a>
              <a
                href="#" /* PLACEHOLDER */
                target="_blank"
                rel="noopener noreferrer"
                className="text-warm-white/80 hover:text-white transition-colors"
              >
                <Youtube size={22} />
              </a>
            </div>
          </div>

          <div>
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
            {/* PLACEHOLDER: Replace with real review data */}
            <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
              <Stars /> 5.0 on Google (XX reviews)
            </a>
            <span className="hidden sm:inline text-warm-white/30">|</span>
            <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
              <Stars /> 5.0 on FishingBooker (XX reviews)
            </a>
            <span className="hidden sm:inline text-warm-white/30">|</span>
            <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
              <Stars /> 5.0 on Yelp (XX reviews)
            </a>
          </div>
        </div>

        <div className="text-center text-warm-white/50 text-xs">
          &copy; {new Date().getFullYear()} Atlas Outfitting LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
