import Image from "next/image";
import PlaceholderImage from "./PlaceholderImage";

interface GuideCardProps {
  name: string;
  location: string;
  imageSrc?: string;
  placeholderLabel?: string;
  bio: string;
  rivers: string[];
}

export default function GuideCard({
  name,
  location,
  imageSrc,
  placeholderLabel,
  bio,
  rivers,
}: GuideCardProps) {
  return (
    <div className="bg-warm-white rounded-lg overflow-hidden border border-sand">
      {imageSrc ? (
        <div className="relative pb-[133.333%]">
          <Image
            src={imageSrc}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      ) : (
        <PlaceholderImage
          label={placeholderLabel || ""}
          aspectRatio="3/4"
          className="rounded-none"
        />
      )}
      <div className="p-6">
        <h3 className="font-serif font-bold text-xl text-charcoal">{name}</h3>
        <p className="text-sage text-sm mb-3">{location}</p>
        <p className="text-charcoal/80 font-sans text-sm leading-relaxed mb-4">{bio}</p>
        <div className="flex flex-wrap -mt-2 -ml-2">
          {rivers.map((river) => (
            <span
              key={river}
              className="bg-sand-light text-charcoal text-xs px-3 py-1 rounded-full font-sans mt-2 ml-2"
            >
              {river}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
