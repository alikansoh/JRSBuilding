"use client";

import { motion } from "framer-motion";
import { FaComments, FaDraftingCompass, FaHammer, FaCheckCircle } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";

const steps = [
  {
    number: "01",
    title: "Consultation",
    icon: <FaComments className="text-3xl text-white" />, 
    description: "We begin by discussing your ideas and understanding your goals.",
  },
  {
    number: "02",
    title: "Design & Planning",
    icon: <FaDraftingCompass className="text-3xl text-white" />, 
    description: "Our team crafts detailed plans tailored to your vision.",
  },
  {
    number: "03",
    title: "Execution",
    icon: <FaHammer className="text-3xl text-white" />, 
    description: "We bring the plan to life with expert craftsmanship.",
  },
  {
    number: "04",
    title: "Handover",
    icon: <FaCheckCircle className="text-3xl text-white" />, 
    description: "Final walkthrough and satisfaction guaranteed.",
  },
];

export default function HowWeWork() {
  return (
    <section className="relative bg-white  px-6 sm:px-12 lg:px-28 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <h2 className="text-5xl font-extrabold text-[#CC3333] mb-6 tracking-tight drop-shadow-sm">
          How We Work
        </h2>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed">
          From vision to reality — a seamless process driven by clarity, quality, and commitment.
        </p>
      </div>

      <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative flex flex-col items-center text-center w-full max-w-sm px-4"
          >
            <div className="bg-[#CC3333] w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-lg z-10">
              {step.icon}
            </div>
            <div className="text-4xl font-extrabold text-[#CC3333] mb-2 drop-shadow-md">
              {step.number}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {step.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              {step.description}
            </p>

            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute right-[-50px] top-1/2 transform -translate-y-1/2">
                <MdArrowForwardIos className="text-[#CC3333] text-3xl animate-pulse" />
              </div>
            )}

            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 left-full w-[100px] h-1 bg-[#CC3333] -z-10"></div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
