import Image from "next/image";
import Hero from "@/components/Hero";
import LocationSelector from "@/components/LocationSelector";
import Accordion from "@/components/Accordion";
import PlaceholderImage from "@/components/PlaceholderImage";
import FadeInSection from "@/components/FadeInSection";

interface River {
  name: string;
  description: string;
  bestSeason: string;
  techniques: string[];
}

interface Accommodation {
  name: string;
  note: string;
}

interface CityData {
  name: string;
  id: string;
  overview: string;
  rivers: River[];
  imageSrc: string;
  accommodations: Accommodation[];
  nearby: string;
  bg: string;
}

const cities: CityData[] = [
  {
    name: "Bozeman",
    id: "bozeman",
    overview:
      "Bozeman is the ideal base for anglers who want to combine world-class fly fishing with Yellowstone National Park and Big Sky Resort.",
    rivers: [
      {
        name: "Yellowstone River",
        description:
          "One of the longest freestone rivers in the nation. Shines just after runoff with exceptional dry fly fishing and streamer opportunities.",
        bestSeason: "June–September",
        techniques: ["Dry Fly", "Nymph", "Streamer"],
      },
      {
        name: "Madison River",
        description:
          "Flows out of Yellowstone National Park through Ennis. The Lower Madison fishes best in spring and fall, the Upper Madison is a fantastic summer fishery.",
        bestSeason: "Year-round (varies by section)",
        techniques: ["Dry Fly", "Nymph"],
      },
    ],
    imageSrc: "/images/bozeman-river.png",
    accommodations: [
      { name: "Gallatin River Lodge", note: "Riverside" },
      { name: "Kimpton Armory Hotel", note: "Downtown" },
      { name: "C'mon Inn", note: "Town" },
      { name: "Hatch Adventures", note: "Camping" },
    ],
    nearby: "Yellowstone National Park, Big Sky Resort",
    bg: "bg-cream",
  },
  {
    name: "Helena",
    id: "helena",
    overview:
      "Helena is the destination for serious anglers. The Missouri River just north of the capital offers world-class trout fishing year-round.",
    rivers: [
      {
        name: "Lower Missouri River",
        description:
          "Below Holter Dam near Wolf Creek. Year-round tailwater with consistent temperatures. Generous to new anglers and capable of the most technical dry fly hatches in the world.",
        bestSeason: "Year-round",
        techniques: ["Dry Fly", "Nymph", "Streamer"],
      },
      {
        name: "Gates of the Mountains / Land of the Giants",
        description:
          "Trophy trout below Hauser Dam flowing into Holter Reservoir. Named for the size and power of the fish. Jet boat access only.",
        bestSeason: "March–November",
        techniques: ["Nymph", "Streamer"],
      },
    ],
    imageSrc: "/images/helena-river.png",
    accommodations: [
      { name: "Flagg Crew Airbnb, Boulder MT", note: "1-6 guests" },
      { name: "Comfort Suites", note: "Town" },
      { name: "Holiday Inn Express", note: "Town" },
      { name: "On Demark Lodge", note: "Riverside" },
    ],
    nearby: "Gates of the Mountains Wilderness, Lewis & Clark history",
    bg: "bg-sand-light",
  },
  {
    name: "Dillon",
    id: "dillon",
    overview:
      "Southwestern Montana. Secluded and quiet. Fish a freestone river and a tailwater in one location. Season runs April 1 through October 1.",
    rivers: [
      {
        name: "Beaverhead River",
        description:
          "Tailwater below Clark Canyon Reservoir. 69 miles of pea gravel bottom. Primarily brown trout with occasional large rainbows.",
        bestSeason: "April–October",
        techniques: ["Nymph", "Streamer"],
      },
      {
        name: "Big Hole River",
        description:
          "153-mile freestone with unique tea-colored water from iron in the soil. Abundant trout and occasional arctic grayling.",
        bestSeason: "June–September",
        techniques: ["Dry Fly", "Nymph"],
      },
      {
        name: "Jefferson River",
        description:
          "83-mile Missouri tributary. Known for streamer fishing and solitude in shoulder seasons.",
        bestSeason: "Spring & Fall",
        techniques: ["Streamer"],
      },
    ],
    imageSrc: "/images/dillon-river.png",
    accommodations: [
      { name: "Quality Inn", note: "Town" },
      { name: "Best Western Paradise Inn", note: "Town" },
      { name: "Sportsman's Lodge", note: "Town" },
    ],
    nearby: "Winston Fly Rod Company (Twin Bridges)",
    bg: "bg-cream",
  },
  {
    name: "Missoula",
    id: "missoula",
    overview:
      "Centrally located with access to four major rivers. A great base for combining fly fishing with other outdoor activities.",
    rivers: [
      {
        name: "Blackfoot River",
        description:
          "Starts in the Bob Marshall Wilderness. Gin-clear water, huge canyon walls, big boulders. Home of native Westslope Cutthroat and Bull Trout.",
        bestSeason: "Spring & Fall",
        techniques: ["Dry Fly", "Nymph", "Streamer"],
      },
      {
        name: "Clark Fork River",
        description:
          "Runs through downtown Missoula. Fishes from early spring through late fall with all major hatches.",
        bestSeason: "Year-round",
        techniques: ["Dry Fly", "Nymph"],
      },
      {
        name: "Bitterroot River",
        description:
          "Starts in Conner, MT, joins the Clark Fork south of Missoula. Shines in shoulder seasons with special fly fishing opportunities.",
        bestSeason: "Spring & Fall",
        techniques: ["Dry Fly", "Nymph"],
      },
    ],
    imageSrc: "/images/missoula-river.png",
    accommodations: [
      { name: "DoubleTree by Hilton", note: "Town" },
      { name: "Holiday Inn Downtown", note: "Town" },
    ],
    nearby: "Bob Marshall Wilderness, University of Montana",
    bg: "bg-sand-light",
  },
  {
    name: "Whitefish",
    id: "whitefish",
    overview:
      "Northwestern Montana. Best for a family or business trip that combines a day of fly fishing with skiing at Whitefish Mountain Resort or visiting Glacier National Park.",
    rivers: [
      {
        name: "Flathead River",
        description:
          "Large freestone near Glacier National Park. Scenic dry fly fishing from a boat, searching for native Westslope Cutthroat.",
        bestSeason: "June–September",
        techniques: ["Dry Fly"],
      },
    ],
    imageSrc: "/images/whitefish-river.png",
    accommodations: [
      { name: "Hampton Inn & Suites", note: "Town" },
      { name: "The Pine Lodge", note: "Town/Riverside" },
    ],
    nearby: "Glacier National Park, Whitefish Mountain Resort",
    bg: "bg-cream",
  },
];

const lotgAccordionItems = [
  {
    title: "History",
    content: (
      <p>
        Lewis &amp; Clark named Gates of the Mountains on July 19, 1805, as they traveled
        up the Missouri River through the limestone canyon.
      </p>
    ),
  },
  {
    title: "Access",
    content: (
      <p>
        Jet boat across Upper Holter Reservoir or a long hike through Helena National
        Forest. Commercial boat access is the only practical way to fish this stretch.
      </p>
    ),
  },
  {
    title: "Guide Requirements",
    content: (
      <p>
        USCG Captain&apos;s license required. Grandfathered L1 commercial permit — only
        approximately 50 statewide.
      </p>
    ),
  },
  {
    title: "The Fish",
    content: (
      <p>
        Average 20 inches. Fish in the 24–30 inch range are not uncommon. Eagle Lake
        species rainbows and browns. Primarily nymphing and streamer, with occasional
        dry fly opportunities.
      </p>
    ),
  },
  {
    title: "Season & Booking",
    content: (
      <p>
        March through November. Plan early — anticipate a year-long wait minimum.
        Last-minute openings do occur. Meeting point: Gates of the Mountains Marina,
        3131 Gates of the Mountains Rd, Helena MT 59601.
      </p>
    ),
  },
];

export default function LocationsPage() {
  return (
    <>
      {/* Hero */}
      <Hero
        imageSrc="/images/hero-locations.png"
        imageAlt="Rivers of Western Montana"
        height="60vh"
        overlay="gradient"
      >
        <h1 className="font-serif text-[2.5rem] md:text-[4rem] text-white font-bold leading-tight mb-4">
          Where to Fish in Western Montana
        </h1>
        <p className="font-sans text-lg text-white/80 max-w-2xl">
          Five regions, dozens of rivers, one guide service that covers them all.
        </p>
      </Hero>

      {/* Location Selector */}
      <LocationSelector />

      {/* City Sections */}
      {cities.map((city) => (
        <section key={city.id} id={city.id} className={`${city.bg} py-12 md:py-20`}>
          <div className="max-w-[1200px] mx-auto px-6">
            <FadeInSection>
              <h2 className="font-serif font-bold text-[1.75rem] md:text-[2.5rem] text-charcoal mb-4">
                {city.name}
              </h2>
              <p className="text-charcoal/70 font-sans text-lg mb-10 max-w-3xl">
                {city.overview}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div className="space-y-8">
                  {city.rivers.map((river) => (
                    <div key={river.name}>
                      <h3 className="font-sans font-semibold text-xl text-charcoal mb-2">
                        {river.name}
                      </h3>
                      <p className="text-charcoal/70 font-sans leading-relaxed mb-3">
                        {river.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <span className="bg-sand text-charcoal text-xs px-3 py-1 rounded-full font-sans font-semibold">
                          Best: {river.bestSeason}
                        </span>
                        {river.techniques.map((tech) => (
                          <span
                            key={tech}
                            className="bg-copper-light/20 text-copper text-xs px-3 py-1 rounded-full font-sans"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}

                  {/* Accommodations */}
                  <div>
                    <h4 className="font-sans font-semibold text-sm uppercase tracking-wider text-sage mb-3">
                      Where to Stay
                    </h4>
                    <ul className="space-y-1">
                      {city.accommodations.map((acc) => (
                        <li key={acc.name} className="text-charcoal/70 font-sans text-sm">
                          {acc.name}{" "}
                          <span className="text-sage">({acc.note})</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Nearby */}
                  <p className="text-sage font-sans text-sm">
                    <span className="font-semibold">Also nearby:</span> {city.nearby}
                  </p>
                </div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src={city.imageSrc}
                    alt={`${city.name} fishing`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Land of the Giants — Featured Callout (Helena only) */}
              {city.id === "helena" && (
                <div
                  id="land-of-the-giants"
                  className="bg-river text-cream rounded-lg p-8 mb-10"
                >
                  <h3 className="font-serif font-bold text-2xl mb-3">
                    Land of the Giants — Our Signature Experience
                  </h3>
                  <p className="text-cream/80 font-sans leading-relaxed mb-4">
                    Trophy rainbow and brown trout averaging 20 inches in a limestone
                    canyon accessible only by jet boat. One of only 50 grandfathered
                    commercial access permits in the state.
                  </p>
                  <p className="text-copper-light font-sans font-semibold mb-6">
                    $850 / day
                  </p>
                  <Accordion items={lotgAccordionItems} />
                </div>
              )}
            </FadeInSection>
          </div>
        </section>
      ))}

      {/* Trip Types Explainer */}
      <FadeInSection>
        <section className="bg-cream py-12 md:py-20">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="font-serif font-bold text-[1.75rem] md:text-[2.5rem] text-charcoal text-center mb-12">
              Choosing Your Trip Type
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Float Trip */}
              <div className="bg-warm-white rounded-lg overflow-hidden border border-sand">
                <div className="relative aspect-[16/9]">
                  <Image
                    src="/images/trip-float.png" /* Reuse: trip-type-float → trip-float */
                    alt="Float trip on a drift boat"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif font-bold text-xl text-charcoal mb-2">
                    Float Trip
                  </h3>
                  <p className="text-charcoal/70 font-sans leading-relaxed mb-4">
                    The most popular guided fly fishing trip in Montana. Done from a
                    drift boat or raft. Your guide rows while you fish.
                  </p>
                  <ul className="space-y-1 text-sm text-charcoal/70 font-sans">
                    <li>• Cover more water</li>
                    <li>• Long drifts, fewer tangles</li>
                    <li>• Handicap accessible</li>
                    <li>• 1-2 anglers per boat</li>
                  </ul>
                </div>
              </div>

              {/* Walk & Wade */}
              <div className="bg-warm-white rounded-lg overflow-hidden border border-sand">
                <PlaceholderImage
                  label="trip-type-wade.jpg"
                  aspectRatio="16/9"
                  className="rounded-none"
                />
                <div className="p-6">
                  <h3 className="font-serif font-bold text-xl text-charcoal mb-2">
                    Walk &amp; Wade
                  </h3>
                  <p className="text-charcoal/70 font-sans leading-relaxed mb-4">
                    Traditional on-foot fly fishing. Access wade-only sections with less
                    fishing pressure.
                  </p>
                  <ul className="space-y-1 text-sm text-charcoal/70 font-sans">
                    <li>• Up to 3 anglers</li>
                    <li>• Wade-only sections, fewer people</li>
                    <li>• Less pressured trout</li>
                    <li>• More intimate experience</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Ridgeline Aviation */}
      <FadeInSection>
        <section className="bg-sand-light py-12 md:py-20">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <h2 className="font-serif font-bold text-[1.75rem] md:text-[2rem] text-charcoal mb-4">
                  Flying In?
                </h2>
                <p className="text-charcoal/70 font-sans leading-relaxed mb-4">
                  Our partners at Ridgeline Aviation offer private charter flights between
                  Montana cities and from out of state on their Pilatus PC-12 (8
                  passengers) and PA-18 Super Cub for backcountry access.
                </p>
                <a
                  href="https://flyridgelinemt.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-copper font-sans font-semibold hover:underline"
                >
                  Learn More at Ridgeline Aviation →
                </a>
              </div>
              <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
                <Image
                  src="/images/ridgeline-plane.png"
                  alt="Ridgeline Aviation Pilatus PC-12 charter plane"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>
    </>
  );
}
