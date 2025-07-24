export const metadata = {
  title: "About Us | JRS Building Company",
  description:
    "Learn more about JRS Building Company, a trusted name in UK construction. We specialise in renovations, extensions, new builds, and project management with over 20 years of experience.",
};

import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="max-w-5xl mx-auto px-4 mt-20 py-16 text-[#1C1C3A]">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">About JRS Building Company</h1>
      <p className="text-lg leading-relaxed mb-8">
        With over two decades of experience, <strong>JRS Building Company</strong> is one of the UK&apos;s most
        reliable and client-focused construction firms. Based in London, we’ve built a reputation for
        delivering high-quality workmanship across <strong>residential and commercial projects</strong>.
      </p>

      <div className="space-y-6">
        <p>
          Our team is made up of experienced builders, engineers, and project managers who are passionate
          about creating spaces that stand the test of time. From <strong>loft conversions</strong> and
          <strong> home extensions</strong> to full <strong>property renovations</strong>, we approach every
          project with professionalism and attention to detail.
        </p>

        <p>
          At JRS, we believe that clear communication and transparency are key to any successful project.
          That’s why we work closely with our clients, keeping them informed every step of the way — from
          initial planning to final handover.
        </p>

        <p>
          We’re fully insured and comply with all UK building regulations. Whether you&apos;re a homeowner,
          landlord, or business owner, JRS Building Company is your trusted partner for building excellence.
        </p>
      </div>

      <div className="mt-10 border-l-4 border-[#CC3333] pl-6 py-4 bg-gray-50">
        <p className="text-xl font-semibold text-[#1C1C3A]">
          “We don’t just build structures — we build long-term trust with every client.”
        </p>
        <span className="text-sm text-[#666] mt-2 block">– The JRS Team</span>
      </div>

      {/* Our Mission and Vision with Image on the right */}
      <div className="mt-16 md:flex md:items-start md:gap-12">
        <div className="md:flex-1">
          <h2 className="text-3xl font-bold mb-4 text-[#1E3A5F]">Our Mission</h2>
          <p className="text-gray-700 mb-10 md:mb-0">
            To provide reliable, high quality building solutions that meet our clients&apos; unique needs and exceed expectations, while maintaining the highest standards of integrity, professionalism, and safety.
          </p>

          <h2 className="text-3xl font-bold mb-4 text-[#1E3A5F]">Our Vision</h2>
          <p className="text-gray-700">
            To be the UK’s leading construction company, known for our commitment to excellence, sustainability, and customer satisfaction.
          </p>
        </div>

        <div className="relative md:w-120 md:h-100 w-full h-48 rounded-lg overflow-hidden shadow-md mt-10 md:mt-0">
          <Image
            src="/team.jpeg"
            alt="The JRS Building Company team on-site"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
