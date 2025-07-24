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
      <div className="max-w-7xl mx-auto text-center mb-20">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#CC3333] tracking-tight">
          Recent Projects
        </h2>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        {projects.map((project, index) => (
          <article key={index} className="flex flex-col rounded-xl overflow-hidden shadow-lg border border-gray-100">
            <div className="relative w-full h-72">
              <ReactCompareImage
                leftImage={project.before}
                rightImage={project.after}
                leftImageLabel="Before"
                rightImageLabel="After"
                sliderLineWidth={2}
                sliderLineColor="#CC3333"
                handleSize={30}
              />
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-[#CC3333] mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4 flex-grow">{project.description}</p>
              <p className="font-semibold mb-4">{project.address}</p>
              <Link
                href="#"
                className="mt-auto inline-block text-[#CC3333] font-semibold hover:text-[#990000]"
              >
                View Project
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
