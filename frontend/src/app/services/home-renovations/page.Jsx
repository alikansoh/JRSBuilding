"use client";

import {
  Layers3,
  Star,
  CheckCircle,
  ArrowRight,
  Home,
  Palette,
  Hammer,
  Clock,
  Shield,
  Phone,
  Mail,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const renovationTypes = [
  {
    title: "Full Home Renovation",
    description:
      "Complete renovation service to refresh and modernise your home from top to bottom.",
    features: [
      "General repairs and upgrades",
      "Interior layout improvements",
      "Quality materials that fit your budget",
    ],
  },
  {
    title: "Old Home Refurbishment",
    description:
      "Update and repair older properties while keeping their original charm where possible.",
    features: [
      "Repair or replace damaged areas",
      "Retain character features",
      "Modern updates for everyday comfort",
    ],
  },
  {
    title: "Open-Plan Living",
    description:
      "Create more space by opening up your living areas and improving natural light flow.",
    features: [
      "Safe wall removal",
      "Kitchen-living area integration",
      "Brighter and more spacious feel",
    ],
  },
  {
    title: "Practical Home Improvements",
    description:
      "Smaller upgrades that make a big difference to your daily living.",
    features: [
      "Bathroom or kitchen refresh",
      "Lighting and storage solutions",
      "Flooring and wall finishes",
    ],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Initial Consultation",
    description:
      "We visit your property to understand your vision and assess the current state",
  },
  {
    step: "02",
    title: "Design & Planning",
    description:
      "We create clear plans to help you visualise your renovation before work begins",
  },
  {
    step: "03",
    title: "Permits & Approval",
    description:
      "We handle all necessary permits and building regulation approvals",
  },
  {
    step: "04",
    title: "Construction Phase",
    description:
      "Skilled craftsmen bring your vision to life with daily progress updates",
  },
  {
    step: "05",
    title: "Final Inspection",
    description:
      "Quality checks and final walkthrough ensure everything meets our high standards",
  },
];

const galleryImages = [
  {
    src: "/kitchen-remod.jpeg",
    title: "Modern Kitchen Transformation",
    description: "Complete kitchen renovation with island and premium finishes",
  },
  {
    src: "/renovations2.jpeg",
    title: "Open Plan Living Space",
    description: "Knocked through walls to create spacious living area",
  },
  {
    src: "/bath-remod.jpeg",
    title: "Luxury Bathroom Suite",
    description: "High-end bathroom renovation with marble tiles",
  },
  {
    src: "/renovations4.jpeg",
    title: "Victorian House Restoration",
    description: "Period property restored with modern amenities",
  },
];

export default function HomeRenovationsPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [direction, setDirection] = useState(1);

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setActiveSlide((prev) =>
        prev === galleryImages.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const goToSlide = (index) => {
    setDirection(index > activeSlide ? 1 : -1);
    setActiveSlide(index);
  };

  const nextSlide = () => {
    setDirection(1);
    setActiveSlide((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setDirection(-1);
    setActiveSlide((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="mt-20 max-w-7xl mx-auto px-4 pt-24 pb-20 text-[#1C1C3A]">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="inline-flex items-center space-x-2 bg-red-50 px-4 py-2 rounded-full mb-6">
              <Layers3 className="w-4 h-4 text-[#CC3333]" />
              <span className="text-sm font-semibold text-[#CC3333] uppercase tracking-wide">
                Home Renovations
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Transform Your
              <span className="block text-[#CC3333] bg-gradient-to-r from-[#CC3333] to-[#aa2828] bg-clip-text text-transparent">
                Dream Home
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Complete property transformations tailored to your vision,
              lifestyle, and needs. We handle every detail from planning to
              completion for a stunning result that exceeds expectations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="/contact"
                className="inline-flex items-center bg-[#CC3333] text-white font-bold px-8 py-4 rounded-2xl hover:bg-[#aa2828] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center border-2 border-[#CC3333] text-[#CC3333] font-bold px-8 py-4 rounded-2xl hover:bg-[#CC3333] hover:text-white transition-all duration-300"
              >
                <span>View our Projects</span>
              </Link>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>20+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-blue-500" />
                <span>Fully Insured</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#CC3333]/20 to-transparent rounded-3xl blur-3xl"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-black text-[#CC3333] mb-2">
                    100+
                  </div>
                  <div className="text-sm text-gray-600">
                    Projects Completed
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-[#CC3333] mb-2">
                    98%
                  </div>
                  <div className="text-sm text-gray-600">
                    Client Satisfaction
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-[#CC3333] mb-2">
                    20+
                  </div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-[#B71C1C] mb-2">
                    Top
                  </div>
                  <div className="text-sm text-gray-600">Quality Materials</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Renovation Types */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Renovation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From complete makeovers to specific upgrades, we offer
              comprehensive renovation solutions for every need and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {renovationTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 group hover:-translate-y-2"
              >
                <h3 className="text-2xl font-bold mb-4 text-[#1C1C3A] group-hover:text-[#CC3333] transition-colors duration-300">
                  {type.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {type.description}
                </p>
                <ul className="space-y-3">
                  {type.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
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
              Our Renovation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach ensuring your renovation project runs
              smoothly from start to finish.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-gradient-to-r from-[#CC3333] to-[#aa2828] text-white w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-bold mx-auto mb-6 shadow-lg">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold mb-3 text-[#1C1C3A]">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Enhanced Gallery Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Project Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A glimpse into some of our recent home renovation transformations
              across London.
            </p>
          </div>

          <div className="relative max-w-2xl mx-auto px-4 sm:px-0">
            {/* Main Slider Container */}
            <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
              {/* Image Container */}
              <div className="relative h-[350px] sm:h-[500px] md:h-[650px] lg:h-[700px] overflow-hidden">
                <div
                  className="flex transition-all duration-700 ease-out h-full"
                  style={{ transform: `translateX(-${activeSlide * 100}%)` }}
                >
                  {galleryImages.map((image, idx) => (
                    <div
                      key={idx}
                      className="w-full flex-shrink-0 relative group"
                    >
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

                      {/* Content Overlay - Always visible on mobile, hover on desktop */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-white transform translate-y-0 opacity-100 sm:translate-y-4 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 transition-all duration-500">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">
                          {image.title}
                        </h3>
                        <p className="text-gray-200 text-sm sm:text-base md:text-lg">
                          {image.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows - Smaller on mobile */}
              <button
                onClick={prevSlide}
                className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 group z-10"
              >
                <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-200" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 group z-10"
              >
                <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-200" />
              </button>

              {/* Play/Pause Button - Smaller on mobile */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="absolute top-3 sm:top-6 right-3 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-md border border-white/20 rounded-lg sm:rounded-xl flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 z-10"
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4 sm:w-5 sm:h-5" />
                ) : (
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 ml-0.5" />
                )}
              </button>

              {/* Progress Bar - Thicker on mobile */}
              <div className="absolute bottom-0 left-0 right-0 h-1 sm:h-1 bg-white/20">
                <div
                  className="h-full bg-[#CC3333] transition-all duration-300 ease-out"
                  style={{
                    width: `${
                      ((activeSlide + 1) / galleryImages.length) * 100
                    }%`,
                  }}
                ></div>
              </div>
            </div>

            {/* Dot Indicators - Larger touch targets on mobile */}
            <div className="flex justify-center mt-6 sm:mt-8 gap-2 sm:gap-3">
              {galleryImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`relative w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
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

            {/* Thumbnail Navigation - Hidden on mobile, visible on tablet+ */}
            <div className="hidden sm:grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-6 sm:mt-8">
              {galleryImages.map((image, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`relative aspect-video rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 ${
                    idx === activeSlide
                      ? "ring-2 sm:ring-4 ring-[#CC3333] ring-offset-1 sm:ring-offset-2 shadow-xl scale-105"
                      : "hover:scale-105 hover:shadow-lg opacity-70 hover:opacity-100"
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-1 sm:bottom-2 left-1 sm:left-2 right-1 sm:right-2">
                    <h4 className="text-white text-xs sm:text-sm font-semibold truncate">
                      {image.title}
                    </h4>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-[#CC3333] via-[#b62d2d] to-[#CC3333] py-16 px-8 rounded-3xl shadow-2xl">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl translate-x-40 translate-y-40"></div>

          <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-2xl backdrop-blur-sm mb-8">
              <Home className="w-10 h-10" />
            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              Ready to Transform Your Home?
            </h2>

            <p className="text-xl mb-10 leading-relaxed opacity-90">
              Contact JRS Building Company today for a free consultation and
              detailed quote for your home renovation project.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-[#CC3333] font-bold text-lg px-10 py-4 rounded-2xl hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-3" />
                <span>Call Now for Free Quote</span>
              </Link>

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
