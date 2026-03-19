import Image from "next/image";

interface ProductCardProps {
  name: string;
  price: string;
  originalPrice?: string;
  imageSrc: string;
  buyHref: string;
}

export default function ProductCard({
  name,
  price,
  originalPrice,
  imageSrc,
  buyHref,
}: ProductCardProps) {
  return (
    <div className="group">
      <div className="pb-[125%] relative rounded-lg overflow-hidden mb-3 transition-all duration-200 group-hover:scale-[1.02] group-hover:shadow-md">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 33vw"
        />
      </div>
      <h3 className="font-sans font-semibold text-sm text-charcoal mb-1">{name}</h3>
      <div className="flex items-center space-x-2 mb-2">
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
