interface TestimonialCardProps {
  quote: string;
  attribution: string;
}

export default function TestimonialCard({ quote, attribution }: TestimonialCardProps) {
  return (
    <div className="bg-warm-white rounded-lg p-8 border border-sand">
      <span className="text-sand text-6xl font-serif leading-none block -mt-2 mb-2">
        &ldquo;
      </span>
      <p className="text-charcoal/80 font-sans leading-relaxed mb-4">{quote}</p>
      <p className="text-sage text-sm font-sans">{attribution}</p>
    </div>
  );
}
