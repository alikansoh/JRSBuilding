"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useSwipeable } from "react-swipeable";

const slides = [
  {
    title: "Building Britain’s Future with Quality & Integrity",
    description:
      "Trusted construction services across the UK — residential, commercial, and industrial projects delivered on time and on budget.",
    image: "/kit.jpeg",
    label: "Kitchen",
  },
  {
    title: "Expert Residential Construction & Renovation",
    description:
      "Delivering bespoke homes and renovations with precision and care throughout the UK.",
    image: "/bath.jpg",
    label: "Bathroom",
  },
  {
    title: "Reliable Commercial & Industrial Projects",
    description:
      "From offices to warehouses, our team ensures projects meet the highest standards.",
    image: "/living1.jpeg",
    label: "Living Room",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const slideInterval = useRef<NodeJS.Timeout | null>(null);

  const startAutoPlay = () => {
    slideInterval.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
  };

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (slideInterval.current) clearInterval(slideInterval.current);
    };
  }, []);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setCurrent((prev) => (prev + 1) % slides.length),
    onSwipedRight: () =>
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length),
    trackMouse: true, // allows swipe with mouse on desktop too
  });

  return (
    <section
      {...swipeHandlers}
      className="relative h-[550px] sm:h-[620px] md:h-[700px] lg:h-[780px] xl:h-[650px] overflow-hidden"
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-20" : "opacity-0 z-10"
          }`}
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.2)), url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="w-full h-full flex items-center px-4 sm:px-8 lg:px-16">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
                {slide.title}
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-white mb-10 leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]">
                {slide.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-[#CC3333] hover:bg-[#a82424] text-white font-semibold text-base sm:text-lg transition rounded-md shadow-lg"
                >
                  Get a Free Quote
                </Link>
                <Link
                  href="/services"
                  className="px-6 py-3 border border-white text-white hover:bg-white hover:text-[#CC3333] font-semibold text-base sm:text-lg transition rounded-md shadow-lg"
                >
                  Our Services
                </Link>
              </div>
            </div>
          </div>

          {index === current && (
            <div className="absolute top-6 sm:top-10 right-4 sm:right-10 bg-white text-[#CC3333] text-lg sm:text-xl font-extrabold px-6 py-3 shadow-lg z-30 tracking-wide uppercase">
              {slide.label}
            </div>
          )}
        </div>
      ))}

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-2 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full ${
              i === current ? "bg-[#CC3333]" : "bg-white/70 hover:bg-white"
            } transition`}
          />
        ))}
      </div>
    </section>
  );
}
