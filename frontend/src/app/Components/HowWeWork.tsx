"use client";

import { motion } from "framer-motion";
import {
  FaComments,
  FaDraftingCompass,
  FaHammer,
  FaCheckCircle,
} from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";

const steps = [
  {
    number: "01",
    title: "Consultation",
    icon: <FaComments className="text-3xl text-white" />,
    description: "We begin by discussing your ideas and understanding your goals.",
    color: "from-blue-500 to-blue-600",
    bgPattern: "bg-gradient-to-br from-blue-50 to-blue-100",
  },
  {
    number: "02",
    title: "Design & Planning",
    icon: <FaDraftingCompass className="text-3xl text-white" />,
    description: "Our team crafts detailed plans tailored to your vision.",
    color: "from-purple-500 to-purple-600",
    bgPattern: "bg-gradient-to-br from-purple-50 to-purple-100",
  },
  {
    number: "03",
    title: "Execution",
    icon: <FaHammer className="text-3xl text-white" />,
    description: "We bring the plan to life with expert craftsmanship.",
    color: "from-orange-500 to-orange-600",
    bgPattern: "bg-gradient-to-br from-orange-50 to-orange-100",
  },
  {
    number: "04",
    title: "Handover",
    icon: <FaCheckCircle className="text-3xl text-white" />,
    description: "Final walkthrough and satisfaction guaranteed.",
    color: "from-green-500 to-green-600",
    bgPattern: "bg-gradient-to-br from-green-50 to-green-100",
  },
];

export default function HowWeWork() {
  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-gray-50 pt-16 pb-20 px-6 sm:px-12 lg:px-24 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#CC3333]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto text-center mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#CC3333] tracking-tight mb-6 drop-shadow-sm">
            How We Work
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
            From vision to reality — a seamless process driven by clarity, quality, and commitment.
          </p>
        </motion.div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block relative max-w-7xl mx-auto">
        {/* Connection Line */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 via-orange-200 to-green-200 transform -translate-y-1/2 z-0"></div>
        
        <div className="relative flex items-center justify-between gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                bounce: 0.4
              }}
              viewport={{ once: true }}
              className="relative flex flex-col items-center text-center w-full max-w-xs group"
            >
              {/* Card Container */}
              <div className={`${step.bgPattern} rounded-3xl p-8 shadow-lg group-hover:shadow-2xl transition-all duration-500 border border-white/50 backdrop-blur-sm transform group-hover:-translate-y-2`}>
                {/* Icon with Enhanced Design */}
                <div className={`bg-gradient-to-r ${step.color} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-xl relative overflow-hidden group-hover:scale-110 transition-transform duration-300`}>
                  <div className="absolute inset-0 bg-white/20 rounded-2xl"></div>
                  <div className="relative z-10">
                    {step.icon}
                  </div>
                  {/* Pulse Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-white/30 opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                </div>

                {/* Step Number */}
                <div className="text-5xl font-black text-[#CC3333] mb-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                  {step.number}
                </div>

                {/* Step Title */}
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-[#CC3333] transition-colors duration-300">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-base leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow Between Steps */}
              {index < steps.length - 1 && (
                <motion.div 
                  className="absolute -right-12 top-1/2 transform -translate-y-1/2 z-20"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-gray-100">
                    <MdArrowForwardIos className="text-[#CC3333] text-xl animate-pulse" />
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden space-y-12 max-w-lg mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className={`${step.bgPattern} rounded-3xl p-8 shadow-xl border border-white/50 backdrop-blur-sm`}>
              {/* Mobile Icon */}
              <div className={`bg-gradient-to-r ${step.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                {step.icon}
              </div>

              {/* Mobile Content */}
              <div className="flex items-start space-x-4">
                <div className="text-4xl font-black text-[#CC3333] opacity-30">
                  {step.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile Connector */}
            {index < steps.length - 1 && (
              <div className="flex justify-center mt-6">
                <div className="w-1 h-8 bg-gradient-to-b from-gray-300 to-gray-400 rounded-full"></div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div 
        className="text-center mt-20 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg border border-gray-100">
          <div className="w-3 h-3 bg-[#CC3333] rounded-full animate-pulse"></div>
          <span className="text-gray-700 font-medium">Ready to start your project?</span>
          <motion.div
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <MdArrowForwardIos className="text-[#CC3333] text-lg" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}