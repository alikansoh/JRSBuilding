"use client";

import React from 'react';
import {
  Building2,
  Users,
  Briefcase,
  Store,
  Coffee,
  Wrench,
  CheckCircle,
  Star,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Clock,
  Shield,
  Award,
  Zap
} from "lucide-react";

const commercialServices = [
  {
    title: "Office Fit-Outs",
    description: "Transform your workspace with modern office fit-outs designed for productivity and employee wellbeing. From open-plan layouts to private meeting rooms, we create professional environments that reflect your brand.",
    keywords: ["office fit-out London", "workspace design", "commercial office renovation"]
  },
  {
    title: "Retail Shop Fit-Outs",
    description: "Maximize your retail potential with custom shop fit-outs that attract customers and drive sales. We specialize in creating engaging retail environments that showcase your products effectively.",
    keywords: ["retail fit-out", "shop renovation London", "commercial retail design"]
  },
  {
    title: "Restaurant & Hospitality Fit-Outs",
    description: "Create memorable dining experiences with professional restaurant fit-outs. From kitchen installations to dining area design, we handle all aspects of hospitality commercial fit-outs.",
    keywords: ["restaurant fit-out", "hospitality renovation", "commercial kitchen installation"]
  },
  
];

const whyChooseUs = [
  {
    icon: <Award className="w-6 h-6" />,
    title: "20+ Years Experience",
    description: "Extensive experience in commercial fit-outs across London with hundreds of successful projects completed."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Fully Licensed & Insured",
    description: "All work carried out by qualified tradesmen with full public liability insurance and industry certifications."
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "On-Time Project Delivery",
    description: "We understand business needs and always deliver commercial fit-out projects on schedule and within budget."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Complete Project Management",
    description: "From initial design consultation to final handover, we manage every aspect of your commercial fit-out project."
  }
];

export default function CommercialFitOutsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100 px-6 py-3 rounded-full mb-8">
              <Building2 className="w-5 h-5 text-[#CC3333]" />
              <span className="text-sm font-semibold text-[#CC3333] uppercase tracking-wide">Commercial Fit-Outs London</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight text-[#1C1C3A]">
              Professional Commercial Fit-Outs in London
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto">
              Transform your commercial space with JRS Building&apos;s expert fit-out services. We specialize in office fit-outs, 
              retail renovations, restaurant fit-outs across London and surrounding areas.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="inline-flex items-center bg-[#CC3333] text-white font-bold text-lg px-10 py-5 rounded-2xl hover:bg-[#aa2828] transition-all duration-300 shadow-xl">
                <Phone className="w-6 h-6 mr-3" />
                <span>Get Free Quote</span>
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
              Expert Commercial Fit-Out Services in London
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              <p>
                JRS Building is London&apos;s trusted commercial fit-out contractor, delivering high-quality workspace transformations 
                for businesses across all sectors. With over 20 years of experience in commercial renovations, we understand 
                the unique challenges of creating functional, attractive commercial spaces that meet your business needs.
              </p>
              
              <p>
                Our comprehensive commercial fit-out services cover everything from initial design consultation through to 
                project completion. Whether you&apos;re relocating to a new office, expanding your retail space, or renovating 
                an existing commercial property, our experienced team delivers professional results on time and within budget.
              </p>
              
              <p>
                We work with businesses of all sizes across London, from small startups requiring modern office fit-outs 
                to large corporations needing complete commercial renovations. Our portfolio includes successful projects 
                in the City, Canary Wharf, West End, and throughout Greater London.
              </p>
            </div>
          </div>

          {/* Services Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#1C1C3A] text-center">
              Our Commercial Fit-Out Services
            </h2>

            <div className="space-y-12">
              {commercialServices.map((service, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                  <h3 className="text-2xl font-bold mb-4 text-[#CC3333]">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.keywords.map((keyword, idx) => (
                      <span key={idx} className="bg-white px-3 py-1 rounded-full text-sm text-gray-600 border">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* What We Do Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#1C1C3A]">
              What&apos;s Included in Our Commercial Fit-Out Service?
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              <p>
                Our complete commercial fit-out service includes all trades and specialties needed to transform your 
                commercial space. We handle every aspect of your project from start to finish, ensuring a seamless 
                experience and exceptional results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#CC3333] mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Space planning and design consultation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#CC3333] mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Electrical installation and lighting</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#CC3333] mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Plumbing and heating systems</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#CC3333] mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Partitioning and wall construction</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#CC3333] mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Flooring installation (carpet, vinyl, wood)</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#CC3333] mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Suspended ceiling installation</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#CC3333] mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Interior decoration and painting</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#CC3333] mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Kitchen and washroom fit-outs</span>
                </div>
                
              
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#CC3333] mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Project management and coordination</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#CC3333] mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Building regulations compliance</span>
                </div>
              </div>
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#1C1C3A]">
              Our Commercial Fit-Out Process
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              <p>
                We follow a proven process for every commercial fit-out project, ensuring clear communication, 
                minimal disruption to your business operations, and delivery of exceptional results.
              </p>
              
              <h3 className="text-xl font-semibold text-[#1C1C3A] mt-8 mb-4">1. Initial Consultation & Survey</h3>
              <p>
                Our process begins with a detailed site survey and consultation to understand your business requirements, 
                budget, and timeline. We assess the existing space and discuss your vision for the new commercial fit-out.
              </p>
              
              <h3 className="text-xl font-semibold text-[#1C1C3A] mt-8 mb-4">2. Design & Planning</h3>
              <p>
                We create detailed design proposals and technical drawings, working with you to refine the plans. 
                This includes space planning, material selection, and coordination with building regulations requirements.
              </p>
              
              <h3 className="text-xl font-semibold text-[#1C1C3A] mt-8 mb-4">3. Project Execution</h3>
              <p>
                Our experienced team carries out the fit-out work with minimal disruption to your business. 
                We coordinate all trades, manage the project timeline, and maintain clear communication throughout.
              </p>
              
              <h3 className="text-xl font-semibold text-[#1C1C3A] mt-8 mb-4">4. Quality Assurance & Handover</h3>
              <p>
                Before project completion, we conduct thorough quality checks and address any final details. 
                We provide comprehensive handover documentation and ongoing support as needed.
              </p>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#1C1C3A] text-center">
              Why Choose JRS Building for Your Commercial Fit-Out?
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

          {/* Areas We Serve */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#1C1C3A]">
              Commercial Fit-Out Areas We Serve
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              <p>
                JRS Building provides professional commercial fit-out services throughout London and surrounding areas. 
                Our experienced team travels to projects across the capital, delivering consistent quality regardless of location.
              </p>
              
              <p>
                <strong>London Areas:</strong> City of London, Canary Wharf, Westminster, Camden, Islington, Hackney, 
                Tower Hamlets, Southwark, Lambeth, Wandsworth, Hammersmith & Fulham, Kensington & Chelsea, and all other London boroughs.
              </p>
              
              <p>
                <strong>Surrounding Areas:</strong> Essex, Hertfordshire, Surrey, Kent, and other Home Counties locations 
                within reasonable traveling distance of London.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#CC3333] via-[#b62d2d] to-[#CC3333] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-2xl backdrop-blur-sm mb-8">
            <Building2 className="w-10 h-10" />
          </div>

          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Ready to Transform Your Commercial Space?
          </h2>

          <p className="text-xl mb-10 leading-relaxed opacity-90 max-w-3xl mx-auto">
            Contact JRS Building today for a free consultation and detailed quote for your commercial fit-out project. 
            We&apos;re ready to help you create the perfect workspace for your business.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <button className="inline-flex items-center bg-white text-[#CC3333] font-bold text-lg px-10 py-4 rounded-2xl hover:bg-gray-100 transition-all duration-300 shadow-xl">
              <Phone className="w-5 h-5 mr-3" />
              <span>Call for Free Quote</span>
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