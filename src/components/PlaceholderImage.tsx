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
    "16/9": "aspect-[16/9]",
    "3/4": "aspect-[3/4]",
    "1/1": "aspect-square",
    "4/5": "aspect-[4/5]",
  };

  return (
    <div
      className={`bg-sand rounded-lg flex flex-col items-center justify-center ${aspectClasses[aspectRatio]} ${className}`}
    >
      <Mountain className="text-sage" size={32} />
      <span className="text-sage text-xs font-mono mt-2">{label}</span>
    </div>
  );
}
