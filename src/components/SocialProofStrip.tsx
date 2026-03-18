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
          {/* PLACEHOLDER: Replace with real review data */}
          <a href="#" className="flex items-center gap-2 hover:text-copper transition-colors">
            <Stars /> 5.0 on Google (XX reviews)
          </a>
          <span className="hidden sm:inline text-sage">|</span>
          <a href="#" className="flex items-center gap-2 hover:text-copper transition-colors">
            <Stars /> 5.0 on FishingBooker (XX reviews)
          </a>
          <span className="hidden sm:inline text-sage">|</span>
          <a href="#" className="flex items-center gap-2 hover:text-copper transition-colors">
            <Stars /> 5.0 on Yelp (XX reviews)
          </a>
        </div>
      </div>
    </section>
  );
}
