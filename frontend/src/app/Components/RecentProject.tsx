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
    <section className="relative mt-10 py-16 px-4 sm:px-8 lg:px-16 overflow-hidden bg-gradient-to-br from-[#f5f6fa] via-[#e9ecf3] to-[#dee3ec]">
      {/* Blur Circles */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-[#CC3333]/20 rounded-full blur-3xl opacity-50 z-0" />
      <div className="absolute -bottom-56 -right-44 w-[500px] h-[500px] bg-[#b32b2b]/20 rounded-full blur-2xl opacity-50 z-0" />

      {/* Header */}
      <div className="relative z-10 text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#CC3333] mb-5 tracking-tight drop-shadow-xl">
          Recent Projects
        </h2>
        <p className="text-gray-700 text-lg sm:text-xl font-medium leading-relaxed">
          Transformations we’re proud of slide to see the difference.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map(({ title, before, after, description, address }, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-500 flex flex-col overflow-hidden"
          >
            <div className="h-[280px] sm:h-[350px] rounded-t-2xl overflow-hidden relative">
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
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-700 text-base mb-4 leading-relaxed">{description}</p>
              </div>
              <p className="text-sm text-[#CC3333] font-semibold tracking-wide">{address}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="relative z-10 text-center mt-20">
        <Link href="/projects" className="relative inline-block group">
          <span className="absolute inset-0 rounded-full bg-[#CC3333] blur-md opacity-30 group-hover:opacity-70 transition duration-300"></span>
          <span className="relative inline-block px-12 py-4 text-white text-base sm:text-lg font-semibold rounded-full bg-[#b32b2b] group-hover:bg-[#cc4444] shadow-xl transition-colors duration-300 tracking-wide">
            View All Projects
          </span>
        </Link>
      </div>
    </section>
  );
}
