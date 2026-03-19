import Link from "next/link";
import Hero from "@/components/Hero";
import Accordion from "@/components/Accordion";
import Image from "next/image";
import FadeInSection from "@/components/FadeInSection";
import ScrollToTop from "@/components/ScrollToTop";

const highlights = [
  "5-Star Chef — 3 Meals/Day",
  "Private Lodge with Pool",
  "Professional Guides",
  "Masseuse Included",
];

const packages = [
  {
    title: "Combo — Hunt & Fish",
    description:
      "2 days private axis deer hunting, 2 days guided bonefishing with Captain Clay, 1 free day",
    price: "$5,500 / person",
    subNote: "+ $800 per additional fishing day",
    badge: "Most Popular",
  },
  {
    title: "All Hunt",
    description: "4 days private axis deer hunting, 1 free day",
    price: "$5,500 / person",
  },
  {
    title: "All Fish",
    description:
      "4 days guided bonefishing on a fly rod with Captain Clay, 1 free day",
    price: "Contact for pricing",
  },
];

const seasonDates = [
  {
    week: "Week 1",
    dates: "Jan 3–9, 2027",
    type: "Combo or All Fish (Low Tide)",
    availability: "Available",
  },
  {
    week: "Week 2",
    dates: "Jan 10–16, 2027",
    type: "All Hunt (High Tide)",
    availability: "Available",
  },
  {
    week: "Week 3",
    dates: "Jan 17–23, 2027",
    type: "Combo (Low Tide)",
    availability: "Available",
  },
  {
    week: "Week 4",
    dates: "Jan 24–30, 2027",
    type: "All Hunt (High Tide)",
    availability: "Available",
  },
  {
    week: "Week 5",
    dates: "Jan 31 – Feb 6, 2027",
    type: "Combo or All Fish (Low Tide)",
    availability: "Available",
  },
];

const detailAccordionItems = [
  {
    title: "Travel & Flights",
    content: (
      <div className="space-y-3">
        <p>
          Fly into Honolulu (HNL) or Kahului Maui (OGG), then Mokulele Airlines to
          Molokai (MKK). Arrive and depart as early as possible (Sunday arrival,
          Saturday departure).
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://www.mokuleleairlines.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-copper hover:underline text-sm"
          >
            Mokulele Airlines →
          </a>
          <a
            href="https://www.hawaii-aloha.com/blog/flying-to-molokai-heres-how-to-get-there/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-copper hover:underline text-sm"
          >
            Travel Tips →
          </a>
        </div>
      </div>
    ),
  },
  {
    title: "Gear List",
    content: (
      <div className="space-y-4">
        <div>
          <h5 className="font-semibold text-charcoal mb-1">General</h5>
          <p className="text-sm">
            Swimsuit, polarized sunglasses, water bottles, flip flops, beach towel,
            warm weather clothes, light sweatshirt, snorkel gear
          </p>
        </div>
        <div>
          <h5 className="font-semibold text-charcoal mb-1">Hunting</h5>
          <p className="text-sm">
            Rifle min .243 (no semi-auto or suppressors in HI), light camo sun shirt +
            pants, light rain gear, knife, game bags, 3 boxes ammo, wool socks, sun hat,
            light hiking boots, headlamp, binoculars, backpack.{" "}
            <a
              href="https://www.tsa.gov/travel/transporting-firearms-and-ammunition"
              target="_blank"
              rel="noopener noreferrer"
              className="text-copper hover:underline"
            >
              TSA firearm rules →
            </a>
          </p>
        </div>
        <div>
          <h5 className="font-semibold text-charcoal mb-1">Fishing</h5>
          <p className="text-sm">
            9&apos; 8wt fly rod (optional), 8/9wt floating line on sealed drag reel,
            12-15lb fluoro, pliers, saltwater flies (crab patterns, shrimp, clousers),
            flat boots/tabis, sun hoodie, sun pants
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Licensing & Waivers",
    content: (
      <div className="space-y-2">
        <p className="text-sm">
          <a
            href="https://hunting.ehawaii.gov/hunting/license.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-copper hover:underline"
          >
            Hawaii hunting license →
          </a>
        </p>
        <p className="text-sm">
          <a
            href="https://fishing.hawaii.gov/login"
            target="_blank"
            rel="noopener noreferrer"
            className="text-copper hover:underline"
          >
            Hawaii fishing license →
          </a>
        </p>
        <p className="text-sm">
          Email licenses + signed waiver to{" "}
          <a
            href="mailto:info@atlasoutfitting.com"
            className="text-copper hover:underline"
          >
            info@atlasoutfitting.com
          </a>{" "}
          one month prior.
        </p>
      </div>
    ),
  },
  {
    title: "FAQs",
    content: (
      <div className="space-y-3 text-sm">
        <div>
          <p className="font-semibold text-charcoal">Meat processing?</p>
          <p>Debone and freeze in insulated shipping box, or donate.</p>
        </div>
        <div>
          <p className="font-semibold text-charcoal">Firearms travel?</p>
          <p>
            Declare at check-in, locked case, unloaded, max 10 lbs ammo.{" "}
            <a
              href="https://www.tsa.gov/travel/transporting-firearms-and-ammunition"
              target="_blank"
              rel="noopener noreferrer"
              className="text-copper hover:underline"
            >
              TSA rules →
            </a>
          </p>
        </div>
        <div>
          <p className="font-semibold text-charcoal">Family/observers?</p>
          <p>
            Yes, $3,000/person. Includes lodge, chef, masseuse, and pool. Counts toward
            group total of 4.
          </p>
        </div>
        <div>
          <p className="font-semibold text-charcoal">Bring own gear or use ours?</p>
          <p>
            We recommend ours (pre-set up), but personal gear is welcome.
          </p>
        </div>
        <div>
          <p className="font-semibold text-charcoal">Masseuse?</p>
          <p>
            Yes, one per guest included. Additional at $120/hr + gratuity.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Cancellation Policy",
    content: (
      <div className="space-y-2 text-sm">
        <p>
          <span className="font-semibold">Cancel 30+ days:</span> Apply payment to
          alternate week or next year IF Atlas rebooks original week.
        </p>
        <p>
          <span className="font-semibold">Cancel within 30 days or no-show:</span> Full
          price charged.
        </p>
        <p>Must be paid in full to rebook.</p>
      </div>
    ),
  },
  {
    title: "Gratuity",
    content: (
      <div className="space-y-2 text-sm">
        <p>Standard 20-25%</p>
        <p>Hunt/Combo: $1,000–$1,250</p>
        <p>Observer: $600–$750</p>
        <p>Captain Clay: tipped separately, $170–$212.50</p>
      </div>
    ),
  },
];

function AvailabilityDot({ status }: { status: string }) {
  const color =
    status === "Available"
      ? "bg-green-500"
      : status === "Limited"
        ? "bg-yellow-500"
        : "bg-red-500";
  return <span className={`inline-block w-2 h-2 rounded-full ${color} mr-2`} />;
}

export default function MolokaiPage() {
  return (
    <>
      <ScrollToTop />
      {/* Hero */}
      <Hero
        imageSrc="/images/hero-molokai.png"
        imageAlt="Moloka'i hunting and fishing in Hawai'i"
        height="70vh"
        overlay="gradient"
      >
        <h1 className="font-serif text-[2.5rem] md:text-[4rem] text-white font-bold leading-tight mb-4">
          Hunt &amp; Fishing Expedition
        </h1>
        <p className="font-sans text-lg text-white/80 mb-8 max-w-2xl">
          Axis deer. Bonefish on the fly. Five-star chef. One unforgettable week.
        </p>
        <Link
          href="/book"
          className="bg-white text-river rounded-md px-7 py-3.5 font-sans font-semibold tracking-wide hover:bg-cream transition-colors"
        >
          Reserve Your Week
        </Link>
      </Hero>

      {/* Overview */}
      <FadeInSection>
        <section className="bg-cream py-12 md:py-20">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="max-w-3xl mx-auto mb-12">
              <p className="text-charcoal/80 font-sans leading-relaxed mb-4">
                Atlas Outfitting brings you to Moloka&#x02BB;i, the most rural and
                traditional Hawaiian island. The Flagg brothers grew up in Hawai&#x02BB;i
                and have deep connections to the land and culture. This is not a resort
                experience — it&apos;s a real hunting and fishing adventure with all the
                comforts you could ask for.
              </p>
              <p className="text-charcoal/80 font-sans leading-relaxed">
                Our Moloka&#x02BB;i season runs January and February. Groups of 2–4 stay
                at a private lodge with a pool, five-star chef preparing three meals a day,
                and a masseuse on call. Days are spent hunting axis deer in the mountains
                or chasing bonefish on the flats with Captain Clay.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="bg-sand-light rounded-lg p-4 text-center"
                >
                  <p className="font-sans font-semibold text-charcoal text-sm">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Packages */}
      <FadeInSection>
        <section className="bg-sand-light py-12 md:py-20">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="font-serif font-bold text-[1.75rem] md:text-[2.5rem] text-charcoal text-center mb-12">
              Choose Your Adventure
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {packages.map((pkg) => (
                <div
                  key={pkg.title}
                  className="relative bg-warm-white rounded-lg p-8 border border-sand"
                >
                  {pkg.badge && (
                    <span className="absolute top-4 right-4 bg-copper text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {pkg.badge}
                    </span>
                  )}
                  <h3 className="font-serif font-bold text-xl text-charcoal mb-3">
                    {pkg.title}
                  </h3>
                  <p className="text-charcoal/70 font-sans text-sm leading-relaxed mb-4">
                    {pkg.description}
                  </p>
                  <p className="text-copper font-sans font-semibold text-lg">
                    {pkg.price}
                  </p>
                  {pkg.subNote && (
                    <p className="text-sage font-sans text-xs mt-1">{pkg.subNote}</p>
                  )}
                </div>
              ))}
            </div>
            <p className="text-center text-charcoal/70 font-sans text-sm">
              Observers welcome at $3,000 / person — includes lodge, chef, masseuse, and
              pool
            </p>
          </div>
        </section>
      </FadeInSection>

      {/* Available Dates */}
      <FadeInSection>
        <section className="bg-cream py-12 md:py-20">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="font-serif font-bold text-[1.75rem] md:text-[2.5rem] text-charcoal text-center mb-12">
              2027 Season Dates
            </h2>

            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-sand">
                    <th className="py-3 font-sans font-semibold text-sm text-sage">
                      Week
                    </th>
                    <th className="py-3 font-sans font-semibold text-sm text-sage">
                      Dates
                    </th>
                    <th className="py-3 font-sans font-semibold text-sm text-sage">
                      Type
                    </th>
                    <th className="py-3 font-sans font-semibold text-sm text-sage">
                      Availability
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {seasonDates.map((row) => (
                    <tr key={row.week} className="border-b border-sand/50">
                      <td className="py-4 font-sans font-semibold text-charcoal">
                        {row.week}
                      </td>
                      <td className="py-4 font-sans text-charcoal/80">{row.dates}</td>
                      <td className="py-4 font-sans text-charcoal/80">{row.type}</td>
                      <td className="py-4 font-sans text-charcoal/80">
                        <AvailabilityDot status={row.availability} />
                        {row.availability}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-4">
              {seasonDates.map((row) => (
                <div
                  key={row.week}
                  className="bg-warm-white rounded-lg p-4 border border-sand"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-sans font-semibold text-charcoal">
                      {row.week}
                    </span>
                    <span className="font-sans text-sm text-charcoal/80">
                      <AvailabilityDot status={row.availability} />
                      {row.availability}
                    </span>
                  </div>
                  <p className="font-sans text-sm text-charcoal/80">{row.dates}</p>
                  <p className="font-sans text-xs text-sage mt-1">{row.type}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Photo Gallery */}
      <FadeInSection>
        <section className="bg-sand-light py-12 md:py-20">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                <div key={n} className="aspect-[16/9] relative rounded-lg overflow-hidden">
                  <Image
                    src={`/images/molokai-${n}.png`}
                    alt={`Molokaʻi experience ${n}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Detail Accordions */}
      <FadeInSection>
        <section className="bg-cream py-12 md:py-20">
          <div className="max-w-[800px] mx-auto px-6">
            <Accordion items={detailAccordionItems} />
          </div>
        </section>
      </FadeInSection>

      {/* CTA */}
      <FadeInSection>
        <section className="bg-sand-light py-12 md:py-20">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <h2 className="font-serif font-bold text-[1.75rem] md:text-[2.5rem] text-charcoal mb-4">
              Ready to Book Your Week?
            </h2>
            <p className="font-sans text-charcoal/70 mb-2">
              <a
                href="tel:+14062025383"
                className="text-copper font-semibold hover:underline text-lg"
              >
                +1 (406) 202-5383
              </a>
            </p>
            <Link
              href="/book"
              className="inline-block bg-river text-white rounded-md px-7 py-3.5 font-sans font-semibold tracking-wide hover:bg-river-dark transition-colors mt-4"
            >
              Contact Us to Reserve
            </Link>
            <p className="text-sage text-sm font-sans mt-4">
              Groups of 2 or 4 preferred
            </p>
          </div>
        </section>
      </FadeInSection>
    </>
  );
}
