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
    <section className="bg-[#fefefe] pb-20 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-extrabold text-[#CC3333] tracking-tight mb-4">
          What We Offer
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          Discover our premium range of construction and renovation services, designed to elevate your space with excellence and precision.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-500 border border-gray-200 group flex flex-col"
          >
            <div className="relative w-full h-60 overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                width={800}
                height={500}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 lg:p-8 text-center flex flex-col flex-grow justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-[#CC3333] mb-3 group-hover:text-black transition">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>
              <Link href={service.link}>
                <span className="inline-block bg-[#CC3333] text-white text-sm font-medium px-6 py-2 border border-[#CC3333] hover:bg-transparent hover:text-[#CC3333] transition duration-300 uppercase tracking-wider">
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
