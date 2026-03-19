import { Star } from "lucide-react";

function Stars() {
  return (
    <span className="inline-flex gap-0.5 text-copper">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
      ))}
    </span>
  );
}

export default function SocialProofStrip() {
  return (
    <section className="bg-sand-light py-8">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-charcoal">
          <span className="flex items-center gap-2">
            <Stars /> 5.0 on Google (19 reviews)
          </span>
          <span className="hidden sm:inline text-sage">|</span>
          <span className="flex items-center gap-2">
            <Stars /> 5.0 on FishingBooker (23 reviews)
          </span>
        </div>
      </div>
    </section>
  );
}
