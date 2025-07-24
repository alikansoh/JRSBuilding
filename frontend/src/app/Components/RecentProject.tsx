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
    <section className="bg-[#fefefe] pt-12 pb-24 px-6 sm:px-12 lg:px-24">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#CC3333] tracking-tight mb-4 drop-shadow-md">
          Recent Projects
        </h2>
        <p className="text-gray-700 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
          Transformations we’re proud of. Slide to see the difference.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map(({ title, before, after, description, address }, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-500 flex flex-col overflow-hidden"
          >
            <div className="relative h-[280px] sm:h-[350px] rounded-t-3xl overflow-hidden">
              <ReactCompareImage
                leftImage={before}
                rightImage={after}
                leftImageLabel="Before"
                rightImageLabel="After"
                sliderLineWidth={4}
                sliderLineColor="#CC3333"
              />
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-[#CC3333] mb-3">{title}</h3>
                <p className="text-gray-600 text-base leading-relaxed mb-5">{description}</p>
              </div>
              <p className="text-sm text-[#CC3333] font-semibold tracking-wide">{address}</p>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-10">
        <Link href="/projects" className="relative inline-block group">
          <span className="absolute inset-0 rounded-full bg-[#CC3333] blur opacity-70 group-hover:opacity-100 transition duration-300"></span>
          <span className="relative inline-block px-12 py-3 text-white font-semibold text-lg rounded-full bg-[#b32b2b] group-hover:bg-[#cc4444] shadow-lg transition-colors duration-300 uppercase tracking-wide">
            View All Projects
          </span>
        </Link>
      </div>

      {/* Call to Action */}
      <section className="relative mt-16 bg-gradient-to-r from-[#cc3333] to-[#a52a2a] py-16 px-6 sm:px-12 lg:px-24 rounded-3xl shadow-2xl overflow-hidden">
        {/* Decorative Blur Circles */}
        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-white opacity-10 rounded-full blur-3xl z-0" />
        <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-white opacity-10 rounded-full blur-2xl z-0" />

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="text-white text-4xl sm:text-5xl font-extrabold mb-6 leading-tight drop-shadow-md">
            Let’s Bring Your Vision to Life
          </h2>
          <p className="text-white/90 text-lg sm:text-xl mb-10 leading-relaxed">
            Whether it’s a full renovation or a small improvement, we’re here to deliver stunning results. Reach out today and let’s talk about your next project.
          </p>

          <Link
            href="/contact"
            className="relative inline-block px-10 py-4 text-white font-semibold text-lg bg-white/10 border border-white/20 rounded-full backdrop-blur hover:bg-white/20 transition-all duration-300 shadow-md hover:shadow-xl"
          >
            Get a Free quote
          </Link>
        </div>
      </section>
    </section>
  );
}
