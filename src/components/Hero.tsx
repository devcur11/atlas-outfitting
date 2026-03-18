import Image from "next/image";
import { ReactNode } from "react";

interface HeroProps {
  imageSrc: string;
  imageAlt: string;
  height?: "full" | "70vh" | "60vh" | "40vh";
  overlay?: "gradient" | "dark";
  children: ReactNode;
}

export default function Hero({
  imageSrc,
  imageAlt,
  height = "60vh",
  overlay = "gradient",
  children,
}: HeroProps) {
  const heightClasses: Record<string, string> = {
    full: "h-screen",
    "70vh": "h-[70vh]",
    "60vh": "h-[60vh]",
    "40vh": "h-[40vh]",
  };

  const needsNavOffset = height !== "full";

  return (
    <section className={`relative ${heightClasses[height]} w-full overflow-hidden ${needsNavOffset ? "mt-16 md:mt-20" : ""}`}>
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      {overlay === "gradient" ? (
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
      ) : (
        <div className="absolute inset-0 bg-black/50 z-10" />
      )}
      <div className={`relative z-20 flex flex-col items-center justify-center h-full text-center px-6 ${needsNavOffset ? "" : "pt-16 md:pt-20"}`}>
        {children}
      </div>
    </section>
  );
}
