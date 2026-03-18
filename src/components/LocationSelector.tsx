"use client";

import { useState, useEffect } from "react";

const cities = ["Bozeman", "Helena", "Dillon", "Missoula", "Whitefish"];

export default function LocationSelector() {
  const [activeCity, setActiveCity] = useState("Bozeman");

  const scrollToCity = (city: string) => {
    const el = document.getElementById(city.toLowerCase());
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCity(
              entry.target.id.charAt(0).toUpperCase() + entry.target.id.slice(1)
            );
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    cities.forEach((city) => {
      const el = document.getElementById(city.toLowerCase());
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="sticky top-16 md:top-20 z-40 bg-cream border-b border-sand">
      <div className="max-w-[1200px] mx-auto px-6 flex gap-1 md:gap-6 overflow-x-auto scrollbar-hide">
        {cities.map((city) => (
          <button
            key={city}
            onClick={() => scrollToCity(city)}
            className={`py-4 px-3 md:px-2 font-sans font-semibold text-sm tracking-wide whitespace-nowrap border-b-2 transition-colors shrink-0 ${
              activeCity === city
                ? "border-copper text-charcoal"
                : "border-transparent text-sage hover:text-charcoal"
            }`}
          >
            {city}
          </button>
        ))}
      </div>
    </div>
  );
}
