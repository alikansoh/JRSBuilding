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
          className="bg-gray-50 p-8 rounded-lg shadow-md border border-gray-200"
        >
          <h2 className="text-2xl font-bold mb-6 text-[#1E3A5F]">Send Us a Message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
              <input type="text" id="name" className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#CC3333]" required />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <input type="email" id="email" className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#CC3333]" required />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
              <textarea id="message" rows={5} className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#CC3333]" required></textarea>
            </div>

            <button type="submit" className="bg-[#CC3333] text-white font-semibold px-6 py-2 rounded-md hover:bg-[#b62d2d] transition duration-300">
              Send Message
            </button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}