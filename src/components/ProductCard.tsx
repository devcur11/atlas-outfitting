import PlaceholderImage from "./PlaceholderImage";

interface ProductCardProps {
  name: string;
  price: string;
  originalPrice?: string;
  placeholderLabel?: string;
  buyHref: string;
}

export default function ProductCard({
  name,
  price,
  originalPrice,
  placeholderLabel,
  buyHref,
}: ProductCardProps) {
  return (
    <div className="group">
      <PlaceholderImage
        label={placeholderLabel || ""}
        aspectRatio="4/5"
        className="mb-3 transition-all duration-200 group-hover:scale-[1.02] group-hover:shadow-md"
      />
      <h3 className="font-sans font-semibold text-sm text-charcoal mb-1">{name}</h3>
      <div className="flex items-center gap-2 mb-2">
        {originalPrice && (
          <span className="text-sage text-sm line-through">{originalPrice}</span>
        )}
        <span className={`text-sm font-semibold ${originalPrice ? "text-copper" : "text-charcoal"}`}>
          {price}
        </span>
      </div>
      <a
        href={buyHref} /* PLACEHOLDER */
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-river text-white rounded-md px-5 py-2 text-sm font-sans font-semibold hover:bg-river-dark transition-colors"
      >
        Buy
      </a>
    </div>
  );
}
