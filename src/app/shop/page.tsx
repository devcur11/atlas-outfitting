import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import FadeInSection from "@/components/FadeInSection";

const products = [
  {
    name: 'Black AO Cotton Hoodie "Catch it on the Fly"',
    price: "$70",
    placeholderLabel: "product-hoodie-black.jpg",
    buyHref: "#", /* PLACEHOLDER: Squarespace product URL */
  },
  {
    name: "Anetik TRUCK Sun Hoodie",
    price: "$80",
    placeholderLabel: "product-anetik-truck.jpg",
    buyHref: "#", /* PLACEHOLDER */
  },
  {
    name: "Anetik LOTG Sun Hoodie",
    price: "$80",
    placeholderLabel: "product-anetik-lotg.jpg",
    buyHref: "#", /* PLACEHOLDER */
  },
  {
    name: "Casual OG Logo Cotton Hoodie",
    price: "$45",
    originalPrice: "$50",
    placeholderLabel: "product-hoodie-og.jpg",
    buyHref: "#", /* PLACEHOLDER */
  },
  {
    name: "Raft Rack Tee",
    price: "$32",
    placeholderLabel: "product-tee-raft.jpg",
    buyHref: "#", /* PLACEHOLDER */
  },
];

export default function ShopPage() {
  return (
    <>
      {/* Hero */}
      <Hero
        imageSrc="/images/hero-shop.png"
        imageAlt="Atlas Outfitting gear and apparel"
        height="40vh"
        overlay="gradient"
      >
        <h1 className="font-serif text-[2.5rem] md:text-[4rem] text-white font-bold leading-tight mb-4">
          AO Gear
        </h1>
        <p className="font-sans text-lg text-white/80">
          Support and represent Atlas Outfitting on and off the water.
        </p>
      </Hero>

      {/* Gift Card Callout */}
      <FadeInSection>
        <section className="bg-sand-light py-10 md:py-14">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <h2 className="font-serif font-bold text-xl md:text-2xl text-charcoal mb-6">
              Give the gift of a lifetime on the water.
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#" /* PLACEHOLDER: Squarespace gift card URL */
                className="bg-river text-white rounded-md px-7 py-3 font-sans font-semibold text-sm tracking-wide hover:bg-river-dark transition-colors"
              >
                Fishing Trip Gift Card — from $750
              </a>
              <a
                href="#" /* PLACEHOLDER: Squarespace merch gift card URL */
                className="border-2 border-river text-river rounded-md px-7 py-3 font-sans font-semibold text-sm hover:bg-river hover:text-white transition-colors"
              >
                Merch Gift Card — from $25
              </a>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Products Grid */}
      <FadeInSection>
        <section className="bg-cream py-12 md:py-20">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {products.map((product) => (
                <ProductCard key={product.name} {...product} />
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>
    </>
  );
}
