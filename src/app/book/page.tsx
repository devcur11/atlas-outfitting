import BookingForm from "@/components/BookingForm";
import Accordion from "@/components/Accordion";
import FadeInSection from "@/components/FadeInSection";

const faqItems = [
  {
    title: "Pricing & Payment",
    content: (
      <div className="space-y-3 text-sm">
        <p>
          Half-day trips are priced the same as full-day trips — operating costs
          don&apos;t change.
        </p>
        <p>
          Gratuity is not included. Standard is 20-25%. Float/Wade: $150–$187.50. Jet
          Boat: $170–$212.50.
        </p>
        <p>
          Travel insurance recommended:{" "}
          <span className="text-copper">
            IMG Travel Insurance via Global Rescue
          </span>
          .
        </p>
      </div>
    ),
  },
  {
    title: "What to Expect",
    content: (
      <div className="space-y-3 text-sm">
        <p>6–8 hours on the water, lunch and all gear provided.</p>
        <p>
          Boat type varies by location and conditions (raft vs drift boat).
        </p>
        <p>
          Guide gear is pre-rigged for the specific water you&apos;ll be fishing.
        </p>
      </div>
    ),
  },
  {
    title: "Gear & Preparation",
    content: (
      <div className="space-y-3 text-sm">
        <p>Personal gear welcome but not required.</p>
        <p>
          Footwear: Wet wading shoes in summer (Chacos, Tevas). Waders for shoulder
          seasons. NO felt or spikes.
        </p>
        <p>
          Montana fishing license required —{" "}
          <a
            href="https://ols.fwp.mt.gov"
            target="_blank"
            rel="noopener noreferrer"
            className="text-copper hover:underline"
          >
            Purchase here →
          </a>
        </p>
      </div>
    ),
  },
  {
    title: "Policies",
    content: (
      <div className="space-y-3 text-sm">
        <p>
          <span className="font-semibold">Cancellation:</span> 30+ days = apply to
          alternate date within 1 year. &lt;30 days = conditional. &lt;1 week / no-show
          = full charge.
        </p>
        <p>Weather is not grounds for cancellation.</p>
        <p>
          <span className="font-semibold">3rd person:</span> Not in the boat. $250
          add-on for wade only.
        </p>
        <p>
          <span className="font-semibold">Alcohol:</span> BYOB, no glass. Guide can
          prohibit.
        </p>
        <p>
          <span className="font-semibold">Pets:</span> Not allowed (service animals
          pre-approved only).
        </p>
        <p>
          <span className="font-semibold">Minimum age:</span> 6
        </p>
      </div>
    ),
  },
];

export default function BookPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-cream pt-28 md:pt-36 pb-8">
        <div className="max-w-[640px] mx-auto px-6 text-center">
          <h1 className="font-serif font-bold text-[2rem] md:text-[3rem] text-charcoal mb-4">
            Book a Trip
          </h1>
          <p className="text-charcoal/70 font-sans mb-4">
            Fill out the form below and our team will reach out within a few days for
            confirmation and payment.
          </p>
          <a
            href="tel:+14062025383"
            className="text-copper font-sans font-semibold text-xl hover:underline"
          >
            +1 (406) 202-5383
          </a>
        </div>
      </section>

      {/* Booking Form */}
      <section className="bg-cream pb-12 md:pb-20">
        <div className="max-w-[640px] mx-auto px-6">
          <BookingForm />
        </div>
      </section>

      {/* MT Fishing License */}
      <FadeInSection>
        <section className="bg-sand-light py-10 md:py-14">
          <div className="max-w-[640px] mx-auto px-6">
            <div className="bg-warm-white rounded-lg p-6 border border-sand text-center">
              <h3 className="font-sans font-semibold text-lg text-charcoal mb-2">
                Don&apos;t forget your Montana fishing license
              </h3>
              <p className="text-charcoal/70 font-sans text-sm mb-3">
                All anglers need a valid license before getting on the water.
              </p>
              <a
                href="https://ols.fwp.mt.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="text-copper font-sans font-semibold hover:underline"
              >
                Purchase License →
              </a>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* FAQs */}
      <FadeInSection>
        <section className="bg-cream py-12 md:py-20">
          <div className="max-w-[800px] mx-auto px-6">
            <h2 className="font-serif font-bold text-[1.75rem] md:text-[2.5rem] text-charcoal text-center mb-10">
              Frequently Asked Questions
            </h2>
            <Accordion items={faqItems} />
          </div>
        </section>
      </FadeInSection>
    </>
  );
}
