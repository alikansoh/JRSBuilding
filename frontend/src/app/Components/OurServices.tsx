"use client";

import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Home Renovations",
    image: "/renovation.jpeg",
    description: "Complete property transformations tailored to your vision.",
    link: "/services/home-renovations",
  },
  {
    title: "Loft Conversions",
    image: "/loft.jpeg",
    description: "Expand your living space with functional and stylish lofts.",
    link: "/services/loft-conversions",
  },
  {
    title: "Kitchen Remodeling",
    image: "/kitchen.jpeg",
    description: "Modern, functional kitchens crafted with precision.",
    link: "/services/kitchen-remodeling",
  },
  {
    title: "Bathroom Upgrades",
    image: "/bath-services.jpeg",
    description: "Beautiful bathrooms that combine comfort and elegance.",
    link: "/services/bathroom-upgrades",
  },
  {
    title: "Extensions & Additions",
    image: "/extension.jpeg",
    description: "Add value and space to your home seamlessly.",
    link: "/services/extensions",
  },
  {
    title: "Commercial Fit-Outs",
    image: "/com.jpeg",
    description: "Professional, brand-aligned spaces for your business.",
    link: "/services/Commercial-Fit-Outs",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-gradient-to-br from-[#fefefe] to-[#f8f8f8] pt-16 pb-20 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#CC3333] tracking-tight mb-6 drop-shadow-sm">
          Our Services
        </h2>
        <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
          Premium construction and renovation solutions designed to transform your property with style and precision.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 border border-gray-50 group flex flex-col transform hover:-translate-y-2"
          >
            {/* Image Container with fixed aspect ratio */}
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                priority={index < 3} // Prioritize first 3 images
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              {/* Floating Icon */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                <svg className="w-6 h-6 text-[#CC3333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>

            {/* Content Container */}
            <div className="p-6 lg:p-8 flex flex-col justify-between flex-grow">
              <div className="mb-6">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#CC3333] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-base lg:text-lg leading-relaxed line-clamp-3">
                  {service.description}
                </p>
              </div>

              {/* CTA Button */}
              <Link href={service.link} className="group/button">
                <div className="relative overflow-hidden rounded-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#CC3333] to-[#aa2828] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative inline-flex items-center justify-center w-full bg-[#CC3333] text-white text-sm font-bold px-8 py-3 border-2 border-[#CC3333] hover:bg-transparent hover:text-[#CC3333] transition-all duration-300 uppercase tracking-wide shadow-lg hover:shadow-xl group-hover/button:scale-105">
                    Learn More
                    <svg className="w-4 h-4 ml-2 transform group-hover/button:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA Section */}
      <div className="text-center mt-16">
        <div className="inline-flex items-center space-x-2 text-gray-600 mb-4">
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#CC3333]"></div>
          <span className="text-sm font-medium uppercase tracking-wider">Need Something Custom?</span>
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#CC3333]"></div>
        </div>
        <Link href="/contact" className="group inline-flex items-center">
          <span className="text-[#CC3333] font-semibold text-lg group-hover:text-gray-900 transition-colors duration-300">
            Get in touch for a personalized quote
          </span>
          <svg className="w-5 h-5 ml-2 text-[#CC3333] group-hover:text-gray-900 transform group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}