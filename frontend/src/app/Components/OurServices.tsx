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
    image: "/bath3.jpeg",
    description: "Beautiful bathrooms that combine comfort and elegance.",
    link: "/services/bathroom-upgrades",
  },
  {
    title: "Extensions & Additions",
    image: "/extension.jpeg",
    description: "Add value and space to your home seamlessly.",
    link: "/services/extensions-additions",
  },
  {
    title: "Commercial Fit-Outs",
    image: "/com.jpeg",
    description: "Professional, brand-aligned spaces for your business.",
    link: "/services/commercial-fit-outs",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-[#fefefe] pt-12 pb-10 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#CC3333] tracking-tight mb-4">
          Our Services
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          Premium construction and renovation solutions designed to transform your property with style and precision.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group flex flex-col"
          >
            <div className="relative w-full h-60 overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                width={800}
                height={500}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition duration-300"></div>
            </div>

            <div className="p-6 lg:p-8 text-center flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-2xl font-semibold text-[#CC3333] mb-4 group-hover:text-black transition duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <Link href={service.link} passHref>
                <span className="inline-block bg-[#CC3333] text-white text-sm font-semibold px-6 py-2.5 border border-[#CC3333] hover:bg-transparent hover:text-[#CC3333] transition-all duration-300 uppercase rounded-full tracking-wide shadow-sm">
                  Learn More
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
