import Image from "next/image";
import Link from "next/link";
import PlaceholderImage from "./PlaceholderImage";

interface TripCardProps {
  imageSrc?: string;
  placeholderLabel?: string;
  title: string;
  description: string;
  price: string;
  href: string;
}

export default function TripCard({
  imageSrc,
  placeholderLabel,
  title,
  description,
  price,
  href,
}: TripCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="rounded-lg overflow-hidden transition-all duration-200 group-hover:scale-[1.02] group-hover:shadow-md">
        {imageSrc ? (
          <div className="relative aspect-[16/9]">
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ) : (
          <PlaceholderImage label={placeholderLabel || ""} aspectRatio="16/9" className="rounded-none" />
        )}
        <div className="pt-4">
          <h3 className="font-serif font-bold text-xl text-charcoal mb-1">{title}</h3>
          <p className="text-charcoal/70 font-sans text-sm mb-2">{description}</p>
          <p className="text-copper font-sans font-semibold text-sm">{price}</p>
          <span className="text-copper text-sm font-sans hover:underline mt-1 inline-block">
            Learn More →
          </span>
        </div>
      </div>
    </Link>
  );
}
