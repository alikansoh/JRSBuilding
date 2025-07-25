"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Droplets,
  Sparkles,
  ArrowRight,
  Bath,
  Lightbulb,
  Thermometer,
  Shield,
  CheckCircle,
  Star,
  Timer,
  Palette,
  Wrench,
  Phone,
  Mail,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Heart,
  Award,
  Zap,
} from "lucide-react";

const bathroomStyles = [
  {
    title: "Modern Luxury",
    description:
      "Sleek lines, premium materials, and contemporary fixtures for the ultimate modern bathroom experience.",
    features: [
      "Walk-in rainfall showers",
      "Floating vanities",
      "LED mirror lighting",
      "Heated towel rails",
    ],
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "Classic Elegance",
    description:
      "Timeless designs with traditional elements that never go out of style, perfect for period properties.",
    features: [
      "Freestanding bathtubs",
      "Period-style fixtures",
      "Natural stone tiles",
      "Classic color schemes",
    ],
    color: "from-purple-500 to-pink-400",
  },
  {
    title: "Spa Sanctuary",
    description:
      "Transform your bathroom into a personal wellness retreat with spa-inspired features and finishes.",
    features: [
      "Steam shower units",
      "Underfloor heating",
      "Natural materials",
      "Ambient lighting",
    ],
    color: "from-green-500 to-emerald-400",
  },
  {
    title: "Compact & Smart",
    description:
      "Maximize every inch with clever storage solutions and space-saving designs for smaller bathrooms.",
    features: [
      "Wall-mounted fixtures",
      "Built-in storage",
      "Corner solutions",
      "Multi-functional fittings",
    ],
    color: "from-orange-500 to-red-400",
  },
];

const bathroomGallery = [
  {
    image: "/bath-3.jpeg",
    title: "Victorian Bathroom Revival",
  },
  {
    image: "/small-bath.jpeg",
    title: "Small Space, Big Impact",
  },
  {
    image: "/family-bath.jpeg",
    title: "Luxury Spa Transformation",
  },
  {
    image: "/bath-5.jpeg",
    title: "Modern Family Bathroom",
  },
];

const services = [
  {
    icon: <Bath className="w-8 h-8" />,
    title: "Complete Bathroom Renovation",
    description:
      "Full transformation from design to completion including plumbing, electrical, tiling, and finishing.",
    highlights: [
      "New layout planning",
      "Modern plumbing systems",
      "Luxury fixture installation",
    ],
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Shower Room Conversions",
    description:
      "Convert unused spaces or existing bathrooms into stunning shower rooms with contemporary features.",
    highlights: [
      "Walk-in shower installation",
      "Waterproofing systems",
      "Glass screen fitting",
    ],
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Bathroom Refurbishment",
    description:
      "Update and refresh your existing bathroom with new fixtures, tiles, and modern amenities.",
    highlights: [
      "Fixture replacement",
      "Re-tiling services",
      "Lighting upgrades",
    ],
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Accessibility Adaptations",
    description:
      "Make your bathroom safer and more accessible with grab rails, walk-in baths, and level access showers.",
    highlights: [
      "Walk-in bath installation",
      "Grab rail fitting",
      "Non-slip flooring",
    ],
  },
];

export default function BathroomUpgradesPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-play functionality for gallery - faster interval (3 seconds)
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setActiveSlide((prev) =>
        prev === bathroomGallery.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const nextSlide = () => {
    setActiveSlide((prev) =>
      prev === bathroomGallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setActiveSlide((prev) =>
      prev === 0 ? bathroomGallery.length - 1 : prev - 1
    );
  };

  const currentProject = bathroomGallery[activeSlide];

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-blue-50 min-h-screen">
      {/* Hero Section */}
      <section className="mt-20 max-w-7xl mx-auto px-4 pt-24 pb-20 text-[#1C1C3A]">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-blue-50 px-6 py-3 rounded-full mb-8">
            <Droplets className="w-5 h-5 text-[#CC3333]" />
            <span className="text-sm font-semibold text-[#CC3333] uppercase tracking-wide">
              Bathroom Transformations
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            <span className="block text-[#1C1C3A]">Transform Your</span>
            <span className="block text-[#CC3333] bg-gradient-to-r from-[#CC3333] to-[#aa2828] bg-clip-text text-transparent">
              Dream Bathroom
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto">
            Whether it’s a simple refresh or a full renovation, we create clean,
            comfortable, and stylish bathrooms that truly feel like home.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <button className="inline-flex items-center bg-[#CC3333] text-white font-bold text-lg px-10 py-5 rounded-2xl hover:bg-[#aa2828] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
              <Sparkles className="w-6 h-6 mr-3" />
              <span>Start Your Transformation</span>
              <ArrowRight className="w-6 h-6 ml-3" />
            </button>
            <button className="inline-flex items-center border-2 border-[#CC3333] text-[#CC3333] font-bold text-lg px-10 py-5 rounded-2xl hover:bg-[#CC3333] hover:text-white transition-all duration-300">
              <span>View All Projects</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-black text-[#CC3333] mb-2">50+</div>
              <div className="text-gray-600 font-medium">
                Bathrooms Transformed
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-[#CC3333] mb-2">98%</div>
              <div className="text-gray-600 font-medium">
                Customer Satisfaction
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-[#CC3333] mb-2">20+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-[#CC3333] mb-2">5★</div>
              <div className="text-gray-600 font-medium">Average Rating</div>
            </div>
          </div>
        </div>

        {/* Fixed Image Gallery */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Our Bathroom Transformations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our stunning bathroom renovation projects showcasing
              beautiful designs and quality craftsmanship.
            </p>
          </div>

          {/* Fixed Image Slider - Mobile Optimized */}
          <div className="relative max-w-3xl lg:max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              {/* Image Display Area - Fixed for Mobile */}
              <div className="relative w-full overflow-hidden">
                <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[450px]">
                  <Image
                    src={currentProject.image}
                    alt={currentProject.title}
                    fill
                    className="object-cover sm:object-contain w-full h-full sm:bg-gray-50"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 900px"
                    priority={activeSlide === 0}
                  />

                  {/* Gradient overlay for better text readability - only on mobile */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent sm:from-black/20"></div>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center text-[#CC3333] hover:bg-white transition-all duration-300 hover:scale-110 shadow-lg z-10"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center text-[#CC3333] hover:bg-white transition-all duration-300 hover:scale-110 shadow-lg z-10"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Play/Pause Button */}
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-[#CC3333] hover:bg-white transition-all duration-300 hover:scale-110 shadow-lg z-10"
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5" />
                  ) : (
                    <Play className="w-5 h-5 ml-0.5" />
                  )}
                </button>

                {/* Title Overlay - Improved for mobile */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {currentProject.title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Project Navigation Dots */}
            <div className="flex justify-center mt-8 gap-3">
              {bathroomGallery.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 relative ${
                    idx === activeSlide
                      ? "bg-[#CC3333] scale-125 shadow-lg"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                >
                  {idx === activeSlide && (
                    <div className="absolute inset-0 rounded-full bg-[#CC3333] animate-ping opacity-75"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </section>


        {/* Services Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Our Bathroom Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive bathroom solutions from complete renovations to
              specific upgrades and accessibility improvements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 group hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#CC3333] to-[#aa2828] rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#1C1C3A] group-hover:text-[#CC3333] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <Star className="w-4 h-4 text-yellow-500 mr-3 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Our Bathroom Renovation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial design consultation to final installation, we ensure
              a smooth and stress-free bathroom transformation.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-[#CC3333] via-[#b62d2d] to-[#CC3333] py-16 px-8 rounded-3xl shadow-2xl">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl translate-x-40 translate-y-40"></div>

          <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-2xl backdrop-blur-sm mb-8">
              <Droplets className="w-10 h-10" />
            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              Ready for Your Bathroom Transformation?
            </h2>

            <p className="text-xl mb-10 leading-relaxed opacity-90">
              Let&apos;s create the bathroom of your dreams. Contact JRS
              Building today for a free consultation and detailed quote for your
              bathroom renovation project.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="inline-flex items-center bg-white text-[#CC3333] font-bold text-lg px-10 py-4 rounded-2xl hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
                <Phone className="w-5 h-5 mr-3" />
                <span>Free Design Consultation</span>
              </button>

              <div className="flex flex-col sm:flex-row items-center gap-4 text-white/90">
                <div className="flex items-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <span>info@jrs-building.co.uk</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5" />
                  <span>Serving All London Areas</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
