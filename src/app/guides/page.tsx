import Hero from "@/components/Hero";
import GuideCard from "@/components/GuideCard";
import FadeInSection from "@/components/FadeInSection";

const guides = [
  {
    name: 'Ikaika "Atlas" Flagg',
    location: "Owner / Outfitter — Helena, MT",
    placeholderLabel: "guide-ikaika.jpg",
    bio: "Ikaika is from Reno, Nevada. He holds his USCG Near Coastal Captain's license and spends most of his time on the Missouri River with his jet boat or exploring local freestone rivers by raft. Guide history in Alaska, Wyoming, and all over southwestern Montana. Gonzaga University undergrad, University of Nevada Reno MBA.",
    rivers: ["Missouri River", "Land of the Giants"],
  },
  {
    name: 'Samson "Kalama" Flagg',
    location: "Helena, MT",
    placeholderLabel: "guide-kalama.jpg",
    bio: "Kalama is Ikaika's brother and business partner. USCG Captain and EMT with a degree from Amherst College in clinical psychology and history. Grew up fly fishing the Truckee River in Nevada and moved to Montana to guide. Spring and fall on the Big Hole and Missouri, hunting and spearfishing in the off-season.",
    rivers: ["Missouri River", "Big Hole River"],
  },
  {
    name: "Ben Johnston",
    location: "Bozeman, MT",
    placeholderLabel: "guide-ben.jpg",
    bio: "Ben spends over 150 days a year on the water. Started fly fishing at nine, bought a drift boat at 17. Montana State University graduate in fish and wildlife ecology. Reads water well, strong local entomology knowledge, and believes the most important skill is creating a memorable experience.",
    rivers: ["Gallatin River", "Yellowstone River", "Madison River"],
  },
  {
    name: "Aurrora Dominiguez",
    location: "Bozeman, MT",
    placeholderLabel: "guide-aurrora.jpg",
    bio: "Born and raised in the West, Aurrora grew up fly fishing across Nevada, Wyoming, and Montana. Montana State University graduate in community health. Guides in summer, hunts in fall, skis in winter. Her enthusiasm, patience, and pure stoke on the river provide the best experience for all.",
    rivers: ["Yellowstone River", "Madison River"],
  },
  {
    name: "Mike Burk",
    location: "Helena, MT",
    placeholderLabel: "guide-mike.jpg",
    bio: "Mike is a native Montanan, born and raised in Helena. 29 years as a physical education teacher, 20 years coaching. After hanging up his coaching whistle, he turned his full attention to the Missouri River. A natural teacher who loves sharing experiences on the water.",
    rivers: ["Missouri River"],
  },
  {
    name: "Michael Matthews",
    location: "Missoula, MT",
    placeholderLabel: "guide-michael.jpg",
    bio: "University of Montana football alum and marketing graduate. Grew up in southwest Washington fishing for salmon, steelhead, trout, and bass. Today he guides clients down Montana's freestone rivers throwing big dry flies to eager trout. A trip with Michael always means knowledge exchanged and laughs shared.",
    rivers: ["Blackfoot River", "Clark Fork River", "Bitterroot River"],
  },
  {
    name: "Cody Bitterman",
    location: "Whitefish, MT",
    placeholderLabel: "guide-cody.jpg",
    bio: "With roots between the Flathead Valley and the San Juan Islands, Cody has experience fishing across the entire Northwest. Whether it's trout, bass, pike, salmon, or steelhead, he's passionate about the hunt for the fish of a lifetime and the memories made along the way.",
    rivers: ["Flathead River"],
  },
  {
    name: "Jon Onken",
    location: "Bozeman, MT",
    placeholderLabel: "guide-jon.jpg",
    bio: "Jon is a guide and the Atlas Outfitting professional photographer. Montana State University student studying fish and wildlife conservation and film. Grew up in New Mexico fishing freestones and the San Juan River. Always has his camera on the boat — expect great photos of your trip.",
    rivers: ["Yellowstone River", "Madison River"],
  },
];

export default function GuidesPage() {
  return (
    <>
      {/* Hero */}
      <Hero
        imageSrc="/images/hero-guides.png"
        imageAlt="Atlas Outfitting guides on the water"
        height="60vh"
        overlay="gradient"
      >
        <h1 className="font-serif text-[2.5rem] md:text-[4rem] text-white font-bold leading-tight mb-4">
          Meet Your Guides
        </h1>
        <p className="font-sans text-lg text-white/80 max-w-2xl">
          Local knowledge. Years on the water. A passion for putting you on fish.
        </p>
      </Hero>

      {/* Guide Grid */}
      <FadeInSection>
        <section className="bg-cream py-12 md:py-20">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {guides.map((guide) => (
                <GuideCard key={guide.name} {...guide} />
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Extended Network Note */}
      <FadeInSection>
        <section className="bg-sand-light py-12 md:py-20">
          <div className="max-w-[720px] mx-auto px-6 text-center">
            <p className="text-charcoal/70 font-sans leading-relaxed">
              Our core guides are listed above, but Atlas Outfitting also works with an
              extended network of trusted guides across Western Montana. If your preferred
              date or location requires it, we&apos;ll connect you with someone we know
              personally and stand behind.
            </p>
          </div>
        </section>
      </FadeInSection>
    </>
  );
}
