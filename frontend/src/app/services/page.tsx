"use client";

import { Building2, Layers3, Hammer, Bath, MoveRight, Warehouse, PlugZap, Contact2, Droplets } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <section className="mt-20 max-w-7xl mx-auto px-4 pt-24 pb-20 text-[#1C1C3A]">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Building Services</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Discover how <strong>JRS Building Company</strong> transforms London homes and commercial properties through expert construction and renovation services.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <Layers3 className="text-[#CC3333] w-8 h-8 mb-4" />, title: "Home Renovations",
            desc: "Complete property transformations tailored to your vision, lifestyle, and needs. We handle every detail for a stunning result."
          },
          {
            icon: <MoveRight className="text-[#CC3333] w-8 h-8 mb-4" />, title: "Loft Conversions",
            desc: "Expand your living space with functional and stylish loft conversions. Ideal for creating bedrooms, offices, or play areas."
          },
          {
            icon: <Hammer className="text-[#CC3333] w-8 h-8 mb-4" />, title: "Kitchen Remodeling",
            desc: "Modern, functional kitchens crafted with precision. From design to final fit-out, we make cooking spaces shine."
          },
          {
            icon: <Bath className="text-[#CC3333] w-8 h-8 mb-4" />, title: "Bathroom Upgrades",
            desc: "Beautiful bathrooms that combine comfort, style, and smart layouts. We renovate with premium materials and craftsmanship."
          },
          {
            icon: <Building2 className="text-[#CC3333] w-8 h-8 mb-4" />, title: "Extensions & Additions",
            desc: "Add value and space to your home with seamless property extensions that blend perfectly with your existing design."
          },
          {
            icon: <Warehouse className="text-[#CC3333] w-8 h-8 mb-4" />, title: "Commercial Fit-Outs",
            desc: "Professional, brand-aligned commercial interiors built for performance. Perfect for retail, offices, and more."
          },
          {
            icon: <PlugZap className="text-[#CC3333] w-8 h-8 mb-4" />, title: "Electrical Services",
            desc: "From lighting installations to full rewiring, our certified electricians deliver safe, efficient electrical solutions tailored to your property."
          },
          {
            icon: <Droplets className="text-[#CC3333] w-8 h-8 mb-4" />, title: "Plumbing Services",
            desc: "Reliable plumbing for kitchens, bathrooms, and utility spaces. We handle repairs, installations, and emergency fixes with care."
          }
        ].map((service, index) => (
          <div
            key={index}
            className="border-2 border-gray-200 hover:border-[#CC3333] rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 bg-white transform hover:-translate-y-1"
          >
            {service.icon}
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.desc}</p>
            <Link href="/contact" className="text-[#CC3333] font-semibold hover:underline">Learn More</Link>
          </div>
        ))}
      </div>

      {/* Request a Quote Section */}
      <section className="mt-20 bg-gradient-to-r from-[#CC3333] to-[#b62d2d] py-12 px-6 rounded-3xl shadow-xl">
        <div className="max-w-4xl mx-auto text-center text-white">
          <Contact2 className="w-10 h-10 mx-auto mb-3" />
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Let&apos;s Bring Your Project to Life</h2>
          <p className="text-base md:text-lg mb-5">Contact <strong>JRS Building Company</strong> today for a personalised quote and expert advice. We&apos;re ready to build your vision.</p>
          <Link href="/contact" className="inline-block bg-white text-[#CC3333] font-semibold px-8 py-2 rounded-md hover:bg-gray-100 transition">
            Request a Quote
          </Link>
        </div>
      </section>
    </section>
  );
}
