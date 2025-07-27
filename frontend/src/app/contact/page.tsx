'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <section className="mt-20 max-w-6xl mx-auto px-4 py-20 text-[#1C1C3A]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid md:grid-cols-2 gap-16 items-start"
      >
        {/* Left Side: Contact Details */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg text-gray-700 mb-8">
            Have a project in mind? Get in touch with <strong>JRS Building Company</strong> for expert building services in London. Whether it’s a <strong>home extension</strong>, <strong>renovation</strong>, or <strong>new build</strong>, we’d love to hear from you.
          </p>

          <div className="space-y-4 text-lg">
            <p><strong>Phone:</strong> <a href="tel:+447912345678" className="text-[#CC3333] hover:underline">+44 7912 345678</a></p>
            <p><strong>Email:</strong> <a href="mailto:info@jrsbuilding.co.uk" className="text-[#CC3333] hover:underline">info@jrsbuilding.co.uk</a></p>
            <p><strong>Address:</strong> London, United Kingdom</p>
          </div>

          <div className="mt-10 relative w-full h-72 md:h-80 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <Image
              src="/contact.jpeg"
              alt="Recent JRS Building Company work"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="relative bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
>
  {/* Decorative background elements */}
  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#CC3333]/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#1E3A5F]/10 to-transparent rounded-full translate-y-12 -translate-x-12"></div>
  
  <div className="relative z-10">
    <div className="mb-8">
      <h2 className="text-3xl font-bold text-[#1E3A5F] mb-3">Send Us a Message</h2>
      <p className="text-gray-600">We&apos;ll get back to you within 24 hours</p>
    </div>

    <form className="space-y-6">
      <div className="group">
        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-[#CC3333] transition-colors">
          Full Name *
        </label>
        <div className="relative">
          <input 
            type="text" 
            id="name" 
            className="w-full border-2 border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:border-[#CC3333] focus:ring-4 focus:ring-[#CC3333]/10 transition-all duration-300 hover:border-gray-300 placeholder-gray-400"
            placeholder="Enter your full name"
            required 
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <span className="text-gray-400 text-sm">👤</span>
          </div>
        </div>
      </div>

      <div className="group">
        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-[#CC3333] transition-colors">
          Email Address *
        </label>
        <div className="relative">
          <input 
            type="email" 
            id="email" 
            className="w-full border-2 border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:border-[#CC3333] focus:ring-4 focus:ring-[#CC3333]/10 transition-all duration-300 hover:border-gray-300 placeholder-gray-400"
            placeholder="your.email@example.com"
            required 
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <span className="text-gray-400 text-sm">✉️</span>
          </div>
        </div>
      </div>

      <div className="group">
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-[#CC3333] transition-colors">
          Project Details *
        </label>
        <div className="relative">
          <textarea 
            id="message" 
            rows={5} 
            className="w-full border-2 border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:border-[#CC3333] focus:ring-4 focus:ring-[#CC3333]/10 transition-all duration-300 hover:border-gray-300 placeholder-gray-400 resize-vertical"
            placeholder="Tell us about your project, timeline, budget range, and any specific requirements..."
            required
          ></textarea>
          <div className="absolute top-3 right-3 pointer-events-none">
            <span className="text-gray-400 text-sm">💬</span>
          </div>
        </div>
      </div>

      <div className="pt-4">
        <button 
          type="submit" 
          className="group relative w-full bg-gradient-to-r from-[#CC3333] to-[#AA2222] text-white font-bold px-8 py-4 rounded-lg hover:from-[#AA2222] hover:to-[#992222] transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl active:scale-[0.98] shadow-lg overflow-hidden"
        >
          <span className="relative z-10 flex items-center justify-center">
            Send Message & Get Free Quote
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </span>
          
          {/* Button shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
        </button>
      </div>

      <p className="text-sm text-gray-500 text-center mt-4">
        <span className="inline-flex items-center">
          <span className="mr-1">🔒</span>
          Your information is secure and will never be shared
        </span>
      </p>
    </form>
  </div>

        </motion.div>
      </motion.div>
    </section>
  );
}