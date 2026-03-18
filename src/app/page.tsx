import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import TripCard from "@/components/TripCard";
import SocialProofStrip from "@/components/SocialProofStrip";
import TestimonialCard from "@/components/TestimonialCard";
import PlaceholderImage from "@/components/PlaceholderImage";
import FadeInSection from "@/components/FadeInSection";
import { ChevronDown } from "lucide-react";

const trips = [
  {
    imageSrc: "/images/trip-float.png",
    title: "Float & Wade",
    description:
      "Drift boat and raft trips across Western Montana's legendary rivers.",
    price: "$750 / day",
    href: "/locations",
  },
  {
    imageSrc: "/images/trip-jetboat.png",
    title: "Land of the Giants — Jet Boat",
    description:
      "Trophy trout in the Gates of the Mountains. Jet boat access only.",
    price: "$850 / day",
    href: "/locations#land-of-the-giants",
  },
  {
    imageSrc: "/images/hero-molokai.png", // Reuse: trip-molokai → hero-molokai
    title: "Moloka\u02BBi, Hawai\u02BBi",
    description:
      "Axis deer hunting and bonefish on the fly from our Hawaiian lodge.",
    price: "Starting at $5,500",
    href: "/molokai",
  },
];

const testimonials = [
  {
    quote:
      "My dad and I had a phenomenal time at the Land of the Giants with Ikaika. This is our second year fishing with Atlas Outfitting, and plan on coming back for more. We couldn't have asked for a better fishing experience.",
    attribution: "— Client Review | Land of the Giants, August 2024",
  },
  {
    quote:
      "I had three days of outstanding fishing with Atlas. The service was excellent, guides highly skilled, enthusiastic, and patient. Equipment was first rate. The fishing was simply outstanding. I will be rebooking soon!",
    attribution: "— Client Review | August 2025",
  },
  {
    quote:
      "Ikaika and his crew made our first fly fishing adventure a memorable one for sure! Him and his guides are all patient and thorough in passing on their knowledge. We will plan to be back soon for another adventure with Atlas Outfitting.",
    attribution: "— Client Review | September 2025",
  },
];

const whyAtlas = [
  {
    title: "We Go Where the Fish Are",
    description:
      "Our guides are mobile across Western Montana. We fish the river that's fishing best on the day of your trip, not the one closest to our shop.",
  },
  {
    title: "Local Guides, Local Knowledge",
    description:
      "Every guide fishes their home water daily, season after season. You're getting years of accumulated knowledge on the specific stretch you'll be fishing.",
  },
  {
    title: "Your Trip, Your Way",
    description:
      "Whether it's your first time holding a fly rod or you're chasing trophy trout on streamers, we tailor the day to your skill level and goals.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Hero
        imageSrc="/images/hero-home.png"
        imageAlt="Fly fishing in Western Montana"
        height="full"
        overlay="gradient"
      >
        <Image
          src="/images/logo.png"
          alt="Atlas Outfitting"
          width={180}
          height={178}
          className="h-16 md:h-20 w-auto invert brightness-200 mb-6"
        />
        <h1 className="font-serif text-[2.5rem] md:text-[4rem] text-white font-bold leading-tight mb-4">
          Western Montana Fly Fishing
        </h1>
        <p className="font-sans text-lg text-white/80 mb-8 max-w-xl">
          Guided trips across the best rivers in the West
        </p>
        <Link
          href="/locations"
          className="bg-white text-river rounded-md px-7 py-3.5 font-sans font-semibold tracking-wide hover:bg-cream transition-colors"
        >
          Plan Your Trip
        </Link>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <ChevronDown className="text-white/60 animate-bounce" size={28} />
        </div>
      </Hero>

      {/* Trip Types */}
      <FadeInSection>
        <section className="bg-cream py-12 md:py-20">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="font-serif font-bold text-[1.75rem] md:text-[2.5rem] text-charcoal text-center mb-12">
              What We Offer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {trips.map((trip) => (
                <TripCard key={trip.title} {...trip} />
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Social Proof Strip */}
      <SocialProofStrip />

      {/* Testimonials */}
      <FadeInSection>
        <section className="bg-cream py-12 md:py-20">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="font-serif font-bold text-[1.75rem] md:text-[2.5rem] text-charcoal text-center mb-12">
              What Our Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <TestimonialCard key={i} {...t} />
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Why Atlas */}
      <FadeInSection>
        <section className="bg-sand-light py-12 md:py-20">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="font-serif font-bold text-[1.75rem] md:text-[2.5rem] text-charcoal text-center mb-12">
              Why Fish With Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {whyAtlas.map((item) => (
                <div key={item.title} className="text-center md:text-left">
                  <h3 className="font-sans font-semibold text-lg text-charcoal mb-2">
                    {item.title}
                  </h3>
                  <p className="text-charcoal/70 font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Photo Band */}
      <FadeInSection>
        <section>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-0.5">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="relative aspect-[16/9]">
                <Image
                  src={`/images/gallery-${n}.png`}
                  alt={`Atlas Outfitting gallery ${n}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
          <div className="bg-cream py-6 text-center">
            <a
              href="https://www.instagram.com/atlasoutfitting/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-copper font-sans font-semibold hover:underline"
            >
              Follow us on Instagram →
            </a>
          </div>
        </section>
      </FadeInSection>

      {/* Final CTA */}
      <Hero
        imageSrc="/images/hero-locations.png" /* Reuse: cta-river → hero-locations */
        imageAlt="River landscape in Western Montana"
        height="60vh"
        overlay="dark"
      >
        <h2 className="font-serif text-[2rem] md:text-[3rem] text-white font-bold mb-6">
          Ready to Get on the Water?
        </h2>
        <Link
          href="/book"
          className="bg-white text-river rounded-md px-7 py-3.5 font-sans font-semibold tracking-wide hover:bg-cream transition-colors"
        >
          Book a Trip
        </Link>
      </Hero>
    </>
  );
}
