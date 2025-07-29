export const metadata = {
  metadataBase: new URL("https://jrs-building.co.uk"),
  title: "Our Services | JRS Building Company",
  description:
    "Discover expert building and renovation services by JRS Building Company in London. From home extensions to new builds, we deliver quality craftsmanship.",
  openGraph: {
    title: "Our Services | JRS Building Company",
    description:
      "Discover expert building and renovation services by JRS Building Company in London. From home extensions to new builds, we deliver quality craftsmanship.",
    url: "/services",
    siteName: "JRS Building Company",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "JRS Building Company Services",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
};


import {
  Building2,
  Layers3,
  Hammer,
  Bath,
  MoveRight,
  Warehouse,
  PlugZap,
  Contact2,
  Droplets,
  ArrowRight,
  Star,
} from "lucide-react";
import Link from "next/link";
const services = [
  {
    icon: <Layers3 className="w-8 h-8" />,
    title: "Home Renovations",
    desc: "Complete property transformations tailored to your vision, lifestyle, and needs. We handle every detail for a stunning result.",
    color: "from-red-500 to-red-600",
    bgColor: "from-red-50 to-red-100",
    features: [
      "Full property makeover",
      "Custom design solutions",
      "Project management",
    ],
    link: "/services/home-renovations",
  },
  {
    icon: <MoveRight className="w-8 h-8" />,
    title: "Loft Conversions",
    desc: "Expand your living space with functional and stylish loft conversions. Ideal for creating bedrooms, offices, or play areas.",
    color: "from-blue-500 to-blue-600",
    bgColor: "from-blue-50 to-blue-100",
    features: [
      "Space optimization",
      "Natural light solutions",
      "Building regulations",
    ],
    link: "/services/loft-conversions",
  },
  {
    icon: <Hammer className="w-8 h-8" />,
    title: "Kitchen Remodeling",
    desc: "Modern, functional kitchens crafted with precision. From design to final fit-out, we make cooking spaces shine.",
    color: "from-green-500 to-green-600",
    bgColor: "from-green-50 to-green-100",
    features: ["Custom cabinetry", "Premium appliances", "Smart storage"],
    link: "/services/kitchen-remodeling",
  },
  {
    icon: <Bath className="w-8 h-8" />,
    title: "Bathroom Upgrades",
    desc: "Beautiful bathrooms that combine comfort, style, and smart layouts. We renovate with premium materials and craftsmanship.",
    color: "from-purple-500 to-purple-600",
    bgColor: "from-purple-50 to-purple-100",
    features: [
      "Luxury finishes",
      "Wet room solutions",
      "Accessibility options",
    ],
    link: "/services/bathroom-upgrades",
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Extensions & Additions",
    desc: "Add value and space to your home with seamless property extensions that blend perfectly with your existing design.",
    color: "from-orange-500 to-orange-600",
    bgColor: "from-orange-50 to-orange-100",
    features: [
      "Planning permission",
      "Structural design",
      "Seamless integration",
    ],
    link: "/services/extensions",
  },
  {
    icon: <Warehouse className="w-8 h-8" />,
    title: "Commercial Fit-Outs",
    desc: "Professional, brand-aligned commercial interiors built for performance. Perfect for retail, offices, and more.",
    color: "from-teal-500 to-teal-600",
    bgColor: "from-teal-50 to-teal-100",
    features: ["Brand alignment", "Functional design", "Fast turnaround"],
    link: "/services/Commercial-Fit-Outs",
  },
  {
    icon: <PlugZap className="w-8 h-8" />,
    title: "Electrical Services",
    desc: "From lighting installations to full rewiring, our certified electricians deliver safe, efficient electrical solutions tailored to your property.",
    color: "from-yellow-500 to-yellow-600",
    bgColor: "from-yellow-50 to-yellow-100",
    features: [
      "Certified electricians",
      "Safety compliance",
      "Smart home systems",
    ],
    link: "/services/Electrical-services",
  },
  {
    icon: <Droplets className="w-8 h-8" />,
    title: "Plumbing Services",
    desc: "Reliable plumbing for kitchens, bathrooms, and utility spaces. We handle repairs, installations, and emergency fixes with care.",
    color: "from-cyan-500 to-cyan-600",
    bgColor: "from-cyan-50 to-cyan-100",
    features: ["Emergency repairs", "New installations", "Water efficiency"],
    link: "/services/Plumbing-services",
  },
];

export default function ServicesPage() {
  return (
    <section>
    
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen">
      <section className="mt-20 max-w-7xl mx-auto px-4 pt-24 pb-20 text-[#1C1C3A]">
        {/* Hero Section */}
        <div className="text-center mb-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#CC3333]/5 to-transparent rounded-3xl blur-3xl"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center space-x-2 bg-[#CC3333]/10 px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 text-[#CC3333]" />
              <span className="text-sm font-semibold text-[#CC3333] uppercase tracking-wide">
                Premium Building Services
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              Our Building
              <span className="block text-[#CC3333] bg-gradient-to-r from-[#CC3333] to-[#aa2828] bg-clip-text text-transparent">
                Services
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
              Discover how{" "}
              <strong className="text-[#CC3333]">JRS Building Company</strong>{" "}
              transforms London homes and commercial properties through expert
              construction and renovation services.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-700 border border-gray-100 transform hover:-translate-y-2"
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>

              {/* Content */}
              <div className="relative z-10 p-8">
                {/* Icon with enhanced styling */}
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 group-hover:text-[#CC3333] transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.desc}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <div className="w-1.5 h-1.5 bg-[#CC3333] rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Link */}
                <Link
                  href={service.link}
                  className="inline-flex items-center text-[#CC3333] font-bold hover:text-[#aa2828] transition-colors duration-300 group/link"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>

              {/* Hover decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/20 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-700"></div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-[#CC3333] via-[#b62d2d] to-[#CC3333] py-16 px-8 rounded-3xl shadow-2xl">
          {/* Background Decorations */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl translate-x-40 translate-y-40"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white/20 rounded-full"></div>

          <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-2xl backdrop-blur-sm mb-8">
              <Contact2 className="w-10 h-10 animate-pulse" />
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Let&apos;s Bring Your Project to Life
            </h2>

            {/* Description */}
            <p className="text-xl md:text-2xl mb-10 leading-relaxed opacity-90 font-medium">
              Contact <strong>JRS Building Company</strong> today for a
              personalised quote and expert advice. We&apos;re ready to build
              your vision.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center bg-white text-[#CC3333] font-bold text-lg px-10 py-4 rounded-2xl hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-5 h-5 ml-3 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>

              <div className="flex items-center space-x-4 text-white/80">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Free Consultation</span>
                </div>
                <div className="w-px h-4 bg-white/30"></div>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Fast Response</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
    </section>
  );
}
