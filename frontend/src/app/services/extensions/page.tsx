"use client";

import React from 'react';
import Image from 'next/image';
import {
  Home,
  Building,
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Award,
  Shield,
  Clock,
  Settings,
  Hammer,
  Users
} from "lucide-react";

const outdoorServices = [
  {
    title: "Outdoor Summer Houses",
    description: "Custom-built outdoor summer houses and studio spaces for additional living areas, home offices, or recreational spaces with professional construction and quality materials."
  },
  {
    title: "Outdoor Paving Installation",
    description: "Expert paving services including patios, walkways, outdoor entertainment areas, and decorative paved surfaces using premium materials and professional installation techniques."
  },
  {
    title: "Pavement & Pathway Construction",
    description: "Durable pavement construction for pathways, access routes, and outdoor areas with proper foundation preparation and weather-resistant materials for long-lasting results."
  },
  {
    title: "Outdoor Living Spaces",
    description: "Complete outdoor living space construction combining structures and paved areas to create functional, beautiful outdoor environments for relaxation and entertainment."
  }
];

const constructionProcess = [
  {
    phase: "Design & Planning",
    description: "We assess your property requirements, discuss your needs, and create designs that maximize functionality while ensuring proper planning permissions and building regulations compliance.",
    tasks: ["Site assessment", "Design consultation", "Planning requirements", "Material selection"]
  },
  {
    phase: "Foundation & Construction",
    description: "Professional construction including proper foundations, structural work, and installation using quality materials and experienced tradespeople for lasting results.",
    tasks: ["Foundation preparation", "Structural construction", "Professional installation", "Quality material fitting"]
  },
  {
    phase: "Finishing & Completion",
    description: "Complete finishing including final installations, surface treatments, quality inspections, and project handover with maintenance guidance for your new outdoor construction.",
    tasks: ["Final installations", "Surface finishing", "Quality inspection", "Project handover"]
  }
];

const whyChooseUs = [
  {
    icon: <Building className="w-6 h-6" />,
    title: "Construction Specialists",
    description: "Experienced outdoor construction specialists with expertise in both building structures and professional paving installations for residential and commercial projects."
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Quality Materials",
    description: "We use only premium materials and professional construction methods to ensure your outdoor structures and paving provide years of reliable service and aesthetic appeal."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Planning & Compliance",
    description: "Complete handling of planning requirements and building regulations to ensure your project complies with all necessary standards and local authority requirements."
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Professional Installation",
    description: "Efficient construction process with experienced project management, delivering high-quality results on schedule with minimal disruption to your property."
  }
];

export default function OutdoorConstructionPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100 px-6 py-3 rounded-full mb-8">
              <Building className="w-5 h-5 text-[#CC3333]" />
              <span className="text-sm font-semibold text-[#CC3333] uppercase tracking-wide">Outdoor Construction</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight text-[#1C1C3A]">
              Outdoor Summer Houses & Pavement Services
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto">
              Professional outdoor construction services including custom summer houses and expert paving installations. 
              We create durable, beautiful outdoor structures and surfaces for residential and commercial properties.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="inline-flex items-center bg-[#CC3333] text-white font-bold text-lg px-10 py-5 rounded-2xl hover:bg-[#aa2828] transition-all duration-300 shadow-xl">
                <Phone className="w-6 h-6 mr-3" />
                <span>Start Your Outdoor Project</span>
                <ArrowRight className="w-6 h-6 ml-3" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          
          {/* Introduction */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#1C1C3A]">
              Professional Outdoor Construction Services
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              <p>
                Our outdoor construction services combine expertise in building custom structures with professional 
                paving and pavement installation. Whether you need additional outdoor living space with a summer house 
                or durable paving solutions for pathways and outdoor areas, we deliver quality construction that lasts.
              </p>
              
              <p>
                We specialize in outdoor summer houses for additional living space, home offices, or recreational areas, 
                alongside comprehensive paving services including patios, walkways, and outdoor entertainment spaces 
                using premium materials and professional techniques.
              </p>
              
              <p>
                Every project is managed from initial consultation through to completion, ensuring proper planning 
                permissions, quality materials, expert workmanship, and results that enhance your property&apos;s 
                functionality and value.
              </p>
            </div>
          </div>

          {/* Featured Images */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                <div className="relative h-64">
                  <Image 
                    src="/ex1.jpeg" 
                    alt="Professional outdoor construction and summer house installation"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-[#CC3333]">
                    Custom Outdoor Summer Houses
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Professional construction of outdoor summer houses and studio buildings for additional living space, 
                    home offices, or recreational areas with quality materials and expert craftsmanship.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                <div className="relative h-64">
                  <Image 
                    src="/ex2.jpeg" 
                    alt="Expert pavement and paving installation services"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-[#CC3333]">
                    Professional Pavement & Paving
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Expert paving and pavement installation including patios, walkways, outdoor entertainment areas, 
                    and decorative surfaces using premium materials and professional installation techniques.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Outdoor Services */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#1C1C3A] text-center">
              Outdoor Construction & Paving Services
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {outdoorServices.map((service, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold mb-4 text-[#CC3333]">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Construction Process */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#1C1C3A]">
              Our Construction Process
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6 mb-8">
              <p>
                Our construction process ensures quality results whether building outdoor structures or installing 
                professional paving. We manage every aspect from initial planning through to final completion, 
                delivering projects that meet your requirements and exceed expectations.
              </p>
            </div>

            <div className="space-y-8">
              {constructionProcess.map((phase, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-bold mb-4 text-[#CC3333]">
                    {phase.phase}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {phase.description}
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {phase.tasks.map((task, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-[#CC3333] mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{task}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Project Types */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#1C1C3A]">
              Types of Outdoor Construction Projects
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-[#CC3333] rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                  <Home className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#1C1C3A]">Summer Houses</h3>
                <p className="text-gray-700 leading-relaxed">
                  Custom outdoor buildings for additional living space, home offices, or recreational use with professional construction.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-[#CC3333] rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                  <Hammer className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#1C1C3A]">Paved Areas</h3>
                <p className="text-gray-700 leading-relaxed">
                  Expert installation of patios, walkways, and outdoor entertainment areas with premium paving materials.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-[#CC3333] rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#1C1C3A]">Outdoor Living</h3>
                <p className="text-gray-700 leading-relaxed">
                  Complete outdoor living spaces combining structures and paving for functional entertainment areas.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Our Service */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#1C1C3A] text-center">
              Why Choose Our Outdoor Construction Service?
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="flex items-start space-x-4 bg-gray-50 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-[#CC3333] rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-[#1C1C3A]">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Planning Information */}
          <div className="mb-16">
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <Settings className="w-8 h-8 text-blue-600 mr-4" />
                <h2 className="text-2xl font-bold text-blue-800">
                  Project Planning & Requirements
                </h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Our outdoor construction projects are planned to meet all necessary building regulations and planning 
                  requirements. We handle permissions, site preparation, and coordinate all aspects of construction 
                  to ensure compliant, high-quality results.
                </p>
                
                <p>
                  <strong>We manage:</strong> Planning permission applications where required, building regulations 
                  compliance, site surveys and preparation, material selection and sourcing, and complete project 
                  coordination from start to finish.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#CC3333] via-[#b62d2d] to-[#CC3333] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-2xl backdrop-blur-sm mb-8">
            <Building className="w-10 h-10" />
          </div>

          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Transform Your Outdoor Space Today
          </h2>

          <p className="text-xl mb-10 leading-relaxed opacity-90 max-w-3xl mx-auto">
            Enhance your property with professional outdoor construction services. From custom summer houses to 
            expert paving installation, we deliver quality results that add value and functionality.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <button className="inline-flex items-center bg-white text-[#CC3333] font-bold text-lg px-10 py-4 rounded-2xl hover:bg-gray-100 transition-all duration-300 shadow-xl">
              <Phone className="w-5 h-5 mr-3" />
              <span>Start Your Outdoor Project</span>
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/90">
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5" />
              <span>info@jrs-building.co.uk</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5" />
              <span>Serving All London Areas</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}