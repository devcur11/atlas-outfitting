import { Mountain } from "lucide-react";

interface PlaceholderImageProps {
  label: string;
  aspectRatio?: "16/9" | "3/4" | "1/1" | "4/5";
  className?: string;
}

export default function PlaceholderImage({
  label,
  aspectRatio = "16/9",
  className = "",
}: PlaceholderImageProps) {
  const aspectClasses: Record<string, string> = {
    "16/9": "pb-[56.25%]",
    "3/4": "pb-[133.333%]",
    "1/1": "pb-[100%]",
    "4/5": "pb-[125%]",
  };

  return (
    <div
      className={`relative bg-sand rounded-lg ${aspectClasses[aspectRatio]} ${className}`}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <Mountain className="text-sage" size={32} />
        <span className="text-sage text-xs font-mono mt-2">{label}</span>
      </div>
    </div>
  );
}
