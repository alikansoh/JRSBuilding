"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Droplets,
  Home,
  Building,
  Wrench,
  Shield,
  CheckCircle,
  Star,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Clock,
  Award,
  AlertTriangle,
  Settings,
  Thermometer,
  Zap,
  Bath
} from "lucide-react";

const plumbingServices = [
  {
    title: "Bathroom Plumbing During Renovations",
    description: "Complete bathroom plumbing services as part of your renovation project. We install new bathroom suites, shower systems, underfloor heating, and all associated pipework coordinated with your bathroom renovation timeline.",
    keywords: ["bathroom plumbing renovation", "shower installation", "bathroom suite plumbing"],
    image: "/plumbing2.jpeg"
  },
  {
    title: "Kitchen Plumbing & Appliance Connections",
    description: "Kitchen plumbing installations during renovations including sink connections, dishwasher plumbing, washing machine connections, and gas cooker installations. All work coordinated with kitchen fitting schedules.",
    keywords: ["kitchen plumbing renovation", "appliance connections", "sink installation"],
    image: "/plumbing4.jpeg"
  },
  {
    title: "Central Heating & Boiler Installations",
    description: "Central heating system installations and boiler replacements as part of renovation projects. We install new heating systems, radiators, and underfloor heating coordinated with building work timelines.",
    keywords: ["boiler installation renovation", "central heating systems", "radiator installation"],
    image: "/plumbing1.jpeg"
  }
];



const renovationPhases = [
  {
    phase: "Planning & Design Phase",
    description: "Working with our building team to plan plumbing layouts, heating systems, and water supply requirements for your renovation project.",
    tasks: ["Plumbing system design", "Heating system planning", "Water pressure assessment", "Drainage planning"]
  },
  {
    phase: "First Fix Plumbing",
    description: "Installing pipework, waste connections, and heating circuits during the construction phase, coordinated with building work.",
    tasks: ["Hot and cold water pipework", "Central heating pipework", "Waste pipe installation", "Gas pipe installation"]
  },
  {
    phase: "Second Fix Plumbing",
    description: "Final plumbing installations after building work completion, including fixture fitting and system commissioning.",
    tasks: ["Bathroom suite installation", "Kitchen appliance connections", "Radiator installation", "System testing and commissioning"]
  }
];

const whyChooseUs = [
  {
    icon: <Building className="w-6 h-6" />,
    title: "Integrated Building Services",
    description: "Our plumbers work as part of our complete building team, ensuring seamless coordination with other trades during your renovation."
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Experienced Plumbing Team",
    description: "All plumbing work carried out by experienced plumbers with extensive knowledge of renovation projects and building work."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Fully Insured & Guaranteed",
    description: "All plumbing work comes with comprehensive guarantees and full public liability insurance for your peace of mind."
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Project Coordination",
    description: "Plumbing work fully coordinated with your renovation timeline, managed by our experienced project managers."
  }
];

const additionalServices = [
  {
    title: "Extension & New Build Plumbing",
    description: "Complete plumbing installations for house extensions and new build properties. From first fix plumbing through to final connections, all coordinated with construction phases.",
    keywords: ["extension plumbing", "new build plumbing", "construction plumbing"]
  },
  {
    title: "Plumbing Repairs & Maintenance", 
    description: "Emergency plumbing repairs and routine maintenance as part of our renovation aftercare service. We handle leaks, blockages, and plumbing issues that arise during projects.",
    keywords: ["plumbing repairs", "emergency plumber", "plumbing maintenance"]
  },
  {
    title: "Drainage & Waste Systems",
    description: "New drainage installations and waste system connections for renovations and extensions. We handle soil pipes, waste connections, and external drainage work.",
    keywords: ["drainage installation", "waste systems", "soil pipe installation"]
  }
];

export default function PlumbingServicesPage() {
  const [activeGalleryImage, setActiveGalleryImage] = useState(0);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100 px-6 py-3 rounded-full mb-8">
              <Droplets className="w-5 h-5 text-[#CC3333]" />
              <span className="text-sm font-semibold text-[#CC3333] uppercase tracking-wide">Renovation Plumbing Services</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight text-[#1C1C3A]">
              Professional Plumbing for House Renovations
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto">
              Complete plumbing services as part of your house renovation project. Our experienced plumbers work 
              alongside our building team to deliver reliable plumbing installations for bathrooms, kitchens, extensions, and heating systems.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="inline-flex items-center bg-[#CC3333] text-white font-bold text-lg px-10 py-5 rounded-2xl hover:bg-[#aa2828] transition-all duration-300 shadow-xl">
                <Phone className="w-6 h-6 mr-3" />
                <span>Discuss Your Renovation</span>
                <ArrowRight className="w-6 h-6 ml-3" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 ">
        <div className="max-w-4xl mx-auto px-4">
          
          {/* Introduction */}
          <div className="mb-16 ">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#1C1C3A]">
              Plumbing Services Integrated with Your Renovation
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              <p>
                At JRS Building, plumbing work is seamlessly integrated into every renovation project we undertake. 
                Our experienced plumbing team works closely with our builders, electricians, and other trades to ensure 
                your renovation includes modern, efficient plumbing systems that meet all current building standards.
              </p>
              
              <p>
                Whether you&apos;re renovating a bathroom, updating your kitchen, extending your home, or undertaking a 
                complete house refurbishment, we handle all plumbing aspects as part of the overall project. This 
                integrated approach ensures better coordination, timing, and cost-effectiveness compared to hiring separate contractors.
              </p>
              
              <p>
                From initial plumbing design and planning through to testing and commissioning, our plumbing services 
                are fully coordinated with the renovation timeline. We handle everything from new installations and 
                heating systems to repairs and maintenance, all as part of your complete renovation package.
              </p>
            </div>
          </div>

          {/* Main Services Section with Images */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#1C1C3A] text-center">
              Our Main Renovation Plumbing Services
            </h2>

            <div className="space-y-12">
              {plumbingServices.map((service, index) => (
                <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100`}>
                  {/* Image Section */}
                  <div className="lg:w-1/2">
                    <div className="relative h-64 lg:h-full">
                      <Image 
                        src={service.image} 
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-4 text-[#CC3333]">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.keywords.map((keyword, idx) => (
                        <span key={idx} className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-600 border">
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Services (Text Only) */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#1C1C3A] text-center">
              Additional Plumbing Services
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {additionalServices.map((service, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold mb-4 text-[#CC3333]">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
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

       

          {/* Renovation Process */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#1C1C3A]">
              How We Integrate Plumbing Into Your Renovation
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6 mb-8">
              <p>
                Our plumbing work is carefully coordinated with all other aspects of your renovation project. 
                We follow a structured approach that ensures plumbing installations are completed at the right 
                time in the renovation process, avoiding delays and ensuring quality results.
              </p>
            </div>

            <div className="space-y-8">
              {renovationPhases.map((phase, index) => (
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

          {/* Types of Renovation Plumbing Work */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#1C1C3A]">
              Plumbing Work for Different Types of Renovations
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="w-12 h-12 bg-[#CC3333] rounded-xl flex items-center justify-center text-white mb-4">
                  <Bath className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#1C1C3A]">Bathroom Renovations</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#CC3333] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Complete bathroom suite installations</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#CC3333] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Walk-in shower and bath installations</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#CC3333] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Underfloor heating systems</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#CC3333] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Towel radiator installations</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="w-12 h-12 bg-[#CC3333] rounded-xl flex items-center justify-center text-white mb-4">
                  <Settings className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#1C1C3A]">Kitchen Renovations</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#CC3333] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Kitchen sink and tap installations</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#CC3333] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Dishwasher and washing machine connections</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#CC3333] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Gas cooker and hob connections</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#CC3333] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Water filtration system installations</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="w-12 h-12 bg-[#CC3333] rounded-xl flex items-center justify-center text-white mb-4">
                  <Home className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#1C1C3A]">House Extensions</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#CC3333] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">New plumbing systems for extensions</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#CC3333] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Connection to existing water supply</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#CC3333] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Heating system extensions</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#CC3333] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">New drainage connections</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="w-12 h-12 bg-[#CC3333] rounded-xl flex items-center justify-center text-white mb-4">
                  <Thermometer className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#1C1C3A]">Heating Systems</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#CC3333] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">New boiler installations</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#CC3333] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Central heating system upgrades</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#CC3333] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Radiator installations and replacements</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#CC3333] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Smart heating controls</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Our Integrated Service */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#1C1C3A] text-center">
              Why Choose Our Integrated Renovation Plumbing Service?
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

          {/* Emergency Plumbing */}
          <div className="mb-16">
            <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <AlertTriangle className="w-8 h-8 text-red-600 mr-4" />
                <h2 className="text-2xl font-bold text-red-800">
                  Emergency Plumbing Support During Renovations
                </h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Plumbing emergencies can disrupt renovation projects and cause significant damage. As part of our 
                  renovation service, we provide emergency plumbing support to quickly resolve any issues that arise 
                  during or after your renovation project.
                </p>
                
                <p>
                  <strong>Emergency situations we handle:</strong> Burst pipes, water leaks, heating system failures, 
                  blocked drains, and any plumbing issues that could delay your renovation or cause property damage.
                </p>
              </div>
            </div>
          </div>

          {/* Planning Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#1C1C3A]">
              Planning Plumbing Work for Your Renovation
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              <p>
                Proper planning of plumbing work is essential for successful renovations. We work with you from the 
                early planning stages to understand your plumbing needs and integrate them into the overall renovation design.
              </p>
              
              <h3 className="text-xl font-semibold text-[#1C1C3A] mt-8 mb-4">What We Consider During Planning:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Existing plumbing system condition and capacity</li>
                <li>New plumbing requirements for renovated spaces</li>
                <li>Water pressure and flow rate assessments</li>
                <li>Heating system efficiency and upgrades</li>
                <li>Building regulations and safety compliance</li>
                <li>Coordination with other trades and timelines</li>
                <li>Future maintenance and accessibility considerations</li>
              </ul>
              
              <p>
                Our integrated approach means you have one point of contact for your entire renovation, including 
                plumbing work. This eliminates coordination issues between different contractors and ensures your 
                renovation runs smoothly from start to finish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#CC3333] via-[#b62d2d] to-[#CC3333] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-2xl backdrop-blur-sm mb-8">
            <Droplets className="w-10 h-10" />
          </div>

          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Include Professional Plumbing in Your Renovation
          </h2>

          <p className="text-xl mb-10 leading-relaxed opacity-90 max-w-3xl mx-auto">
            Get expert plumbing services as part of your complete renovation package. 
            Our integrated approach ensures quality, coordination, and reliable results for your project.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <button className="inline-flex items-center bg-white text-[#CC3333] font-bold text-lg px-10 py-4 rounded-2xl hover:bg-gray-100 transition-all duration-300 shadow-xl">
              <Phone className="w-5 h-5 mr-3" />
              <span>Discuss Your Renovation Project</span>
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