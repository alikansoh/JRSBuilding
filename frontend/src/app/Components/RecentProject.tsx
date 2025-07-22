"use client";

import dynamic from "next/dynamic";
import Link from "next/link";

const ReactCompareImage = dynamic(() => import("react-compare-image"), { ssr: false });

const projects = [
  {
    title: "Kitchen Renovation",
    before: "/kitchen.jpg",
    after: "/bath.jpg",
    description: "Modern kitchen makeover with sleek cabinetry and new countertops.",
    address: "Ealing, London",
  },
  {
    title: "Loft Extension",
    before: "/loft_before_small.jpg",
    after: "/loft_after_small.jpg",
    description: "Expanded living space with a bright and airy loft extension.",
    address: "Fulham, London",
  },
  {
    title: "Garden Makeover",
    before: "/garden_before_small.jpg",
    after: "/garden_after_small.jpg",
    description: "Transformed outdoor space into a relaxing garden oasis.",
    address: "London, UK",
  },
];

export default function RecentProjects() {
  return (
    <section className="bg-gradient-to-br from-white via-gray-100 to-gray-200 pt-24 pb-16 px-4 sm:px-6 lg:px-12">
      {/* Section Header */}
      <div className="text-center mb-12 max-w-2xl mx-auto px-2">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#CC3333] mb-4 tracking-tight drop-shadow-md">
          Recent Projects
        </h2>
        <p className="text-gray-700 text-base sm:text-lg font-medium">
          Transformations we’re proud of — slide to see the difference.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {projects.map(({ title, before, after, description, address }, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col overflow-hidden"
          >
            <div className="h-[240px] sm:h-[300px] relative rounded-t-2xl overflow-hidden">
              <ReactCompareImage
                leftImage={before}
                rightImage={after}
                leftImageLabel="Before"
                rightImageLabel="After"
                sliderLineWidth={4}
                sliderLineColor="#CC3333"
               
              />
            </div>
            <div className="p-4 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-700 text-sm mb-3">{description}</p>
              </div>
              <p className="text-xs text-[#CC3333] font-semibold">{address}</p>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-12">
        <Link href="/projects" className="relative inline-block group">
          <span className="absolute inset-0 rounded-full bg-[#CC3333] blur opacity-70 group-hover:opacity-100 transition duration-300"></span>
          <span className="relative inline-block px-8 py-3 text-white font-semibold text-base rounded-full bg-[#b32b2b] group-hover:bg-[#cc4444] shadow-md transition-colors duration-300">
            View All Projects
          </span>
        </Link>
      </div>

      {/* Call to Action */}
      <section className="relative mt-10 bg-gradient-to-r from-[#cc3333] to-[#a52a2a] py-12 px-4 sm:px-6 lg:px-20 rounded-2xl shadow-xl overflow-hidden">
        {/* Decorative Blur Circles */}
        <div className="absolute top-[-80px] left-[-80px] w-[250px] h-[250px] bg-white opacity-10 rounded-full blur-2xl z-0" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[280px] h-[280px] bg-white opacity-10 rounded-full blur-2xl z-0" />

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="text-white text-3xl sm:text-4xl font-extrabold mb-4 leading-tight drop-shadow-md">
            Let’s Bring Your Vision to Life
          </h2>
          <p className="text-white/90 text-base sm:text-lg mb-6 leading-relaxed">
            Whether it’s a full renovation or a small improvement, we’re here to deliver stunning results. Reach out today and let’s talk about your next project.
          </p>

          <Link
            href="/contact"
            className="inline-block px-8 py-3 text-white font-semibold text-base bg-white/10 border border-white/20 rounded-full backdrop-blur hover:bg-white/20 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </section>
  );
}
