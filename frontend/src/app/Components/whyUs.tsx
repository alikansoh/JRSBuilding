"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const stats = [
  { label: "Projects Completed", value: 100, suffix: "+" },
  { label: "Years of Experience", value: 20, suffix: "+" },
  { label: "Expert Team Members", value: 20, suffix: "+" },
  { label: "Client Satisfaction", value: 95, suffix: "%" },
];

export default function AboutSection() {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const handleScroll = () => {
      const statsSection = document.getElementById("stats");
      if (!statsSection) return;

      const rect = statsSection.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom >= 0;
      if (inView) {
        const intervals = stats.map((stat, i) => {
          return setInterval(() => {
            setCounts((prev) => {
              const newCounts = [...prev];
              if (newCounts[i] < stat.value) newCounts[i] += 1;
              return newCounts;
            });
          }, 20);
        });
        window.removeEventListener("scroll", handleScroll);
        return () => intervals.forEach(clearInterval);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-white py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/about.jpeg"
            alt="JRS Building Contractor team at work"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#CC3333] mb-6 leading-tight">
            London’s Premier Building & Renovation Experts
          </h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
            Searching for trusted builders in London to transform your residential or commercial property? <strong>JRS Building Contractors</strong> brings over 20 years of experience delivering reliable, high-quality construction, renovation, and refurbishment solutions tailored to your unique needs.
          </p>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
            We pride ourselves on attention to detail, craftsmanship, and communication—backed by premium materials and a skilled team. From concept to completion, we ensure a seamless and stress-free experience that adds value to your property and enhances your lifestyle.
          </p>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Whether you&apos;re planning a full house renovation, kitchen upgrade, loft conversion, or property refurbishment, <strong>JRS</strong> is your partner for delivering durable, aesthetic, and cost-effective results across London.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div id="stats" className="mt-16 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index} className=" p-6 rounded-lg shadow hover:scale-105 transition-transform">
            <h3 className="text-3xl sm:text-5xl font-extrabold text-[#CC3333]">
              {counts[index]}{stat.suffix}
            </h3>
            <p className="text-sm sm:text-lg text-gray-700 mt-2 font-semibold">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
