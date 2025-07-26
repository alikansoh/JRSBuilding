"use client";

import React from 'react';
import {
  Zap,
  Home,
  Building,
  Lightbulb,
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
  Wrench,
  Eye,
  Settings
} from "lucide-react";

const renovationElectricalServices = [
  {
    title: "Complete House Rewiring During Renovations",
    description: "As part of your house renovation project, we provide complete electrical rewiring services. Our electricians work alongside our building team to install new electrical circuits, consumer units, and wiring systems that meet current regulations and your renovation needs.",
    keywords: ["house rewiring renovation", "electrical installation renovation", "new build electrical"]
  },
  {
    title: "Kitchen & Bathroom Electrical Installations",
    description: "During kitchen and bathroom renovations, we handle all electrical requirements including cooker circuits, under-cabinet lighting, extractor fans, electric showers, and heated towel rails. All work coordinated with plumbing and tiling phases.",
    keywords: ["kitchen electrical renovation", "bathroom electrical installation", "renovation electrical work"]
  },
  {
    title: "Extension & Loft Conversion Electrical Work",
    description: "For house extensions and loft conversions, we design and install complete electrical systems including lighting circuits, power outlets, heating controls, and connection to your main electrical supply as part of the overall renovation project.",
    keywords: ["extension electrical work", "loft conversion electrical", "renovation electrical design"]
  },
  {
    title: "Lighting Design & Installation for Renovations",
    description: "Transform your renovated spaces with professional lighting design and installation. We install ceiling lights, spotlights, LED strips, outdoor lighting, and smart lighting systems as part of your renovation project.",
    keywords: ["renovation lighting design", "LED lighting installation", "smart home electrical"]
  },
  {
    title: "Electrical Upgrades During Refurbishments",
    description: "Modernize your electrical systems during property refurbishments. We upgrade consumer units, install additional circuits for modern appliances, add USB sockets, and ensure all electrical work meets current building regulations.",
    keywords: ["electrical upgrades renovation", "consumer unit upgrade", "modern electrical systems"]
  },
  {
    title: "New Build Electrical Installations",
    description: "Complete electrical installations for new build properties including first fix and second fix electrical work, coordinated with construction phases. From foundation electrical work to final testing and certification.",
    keywords: ["new build electrical", "first fix electrical", "construction electrical work"]
  }
];

const renovationPhases = [
  {
    phase: "Planning & Design Phase",
    description: "Working with our building team to plan electrical layouts, lighting design, and power requirements for your renovation project.",
    tasks: ["Electrical system design", "Building regulations consultation", "Circuit planning", "Material specifications"]
  },
  {
    phase: "First Fix Electrical Work",
    description: "Installing cables, back boxes, and conduits during the construction phase, coordinated with other trades.",
    tasks: ["Cable installation", "Consumer unit installation", "Circuit wiring", "Earthing and bonding"]
  },
  {
    phase: "Second Fix Electrical Work",
    description: "Final electrical installations after plastering and decorating, including switches, sockets, and light fittings.",
    tasks: ["Switch and socket installation", "Light fitting installation", "Electrical testing", "Certification"]
  }
];

const whyChooseUs = [
  {
    icon: <Building className="w-6 h-6" />,
    title: "Integrated Building Services",
    description: "Our electricians work as part of our complete building team, ensuring seamless coordination with other trades during your renovation."
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Experienced Electricians",
    description: "All electrical work carried out by experienced electricians as part of our comprehensive building team."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Project Management Included",
    description: "Electrical work fully coordinated with your renovation timeline, managed by our experienced project managers."
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Complete Renovation Service",
    description: "One contractor for your entire renovation including electrical, plumbing, building work, and finishing trades."
  }
];

export default function ElectricalServicesPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-yellow-100 px-6 py-3 rounded-full mb-8">
              <Zap className="w-5 h-5 text-[#CC3333]" />
              <span className="text-sm font-semibold text-[#CC3333] uppercase tracking-wide">Renovation Electrical Services</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight text-[#1C1C3A]">
              Electrical Services for House Renovations
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto">
              Complete electrical services as part of your house renovation project. Our experienced electricians work 
              alongside our building team to deliver seamless electrical installations for extensions, refurbishments, and new builds.
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
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          
          {/* Introduction */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#1C1C3A]">
              Electrical Work as Part of Your Renovation Project
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              <p>
                At JRS Building, electrical work is an integral part of every renovation project we undertake. 
                Our team includes experienced electricians who work alongside our builders, plumbers, and other trades 
                to ensure your renovation includes modern, safe electrical systems that meet all current regulations.
              </p>
              
              <p>
                Whether you&apos;re renovating a single room, extending your home, or undertaking a complete house refurbishment, 
                we handle all electrical aspects as part of the overall project. This integrated approach ensures better 
                coordination, timing, and cost-effectiveness compared to hiring separate electrical contractors.
              </p>
              
              <p>
                From initial electrical design and planning through to testing and certification, our electrical services 
                are fully coordinated with the renovation timeline. We handle everything from rewiring and new circuits 
                to lighting design and smart home installations, all as part of your complete renovation package.
              </p>
            </div>
          </div>

          {/* Services Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#1C1C3A] text-center">
              Renovation Electrical Services We Provide
            </h2>

            <div className="space-y-12">
              {renovationElectricalServices.map((service, index) => (
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

          {/* Renovation Process */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#1C1C3A]">
              How We Integrate Electrical Work Into Your Renovation
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6 mb-8">
              <p>
                Our electrical work is carefully coordinated with all other aspects of your renovation project. 
                We follow a structured approach that ensures electrical installations are completed at the right 
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

          {/* Types of Renovation Electrical Work */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#1C1C3A]">
              Electrical Work for Different Types of Renovations
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4 text-[#1C1C3A]">Kitchen Renovations</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#CC3333] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Cooker and oven electrical connections</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#CC3333] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Under-cabinet LED lighting installation</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#CC3333] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Additional power sockets for appliances</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#CC3333] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Extractor fan and ventilation wiring</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4 text-[#1C1C3A]">Bathroom Renovations</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#CC3333] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Electric shower installations</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#CC3333] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Heated towel rail wiring</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#CC3333] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Bathroom lighting and mirror lights</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#CC3333] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Extractor fan and IP-rated fittings</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4 text-[#1C1C3A]">House Extensions</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#CC3333] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">New electrical circuits for extension</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#CC3333] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Heating and lighting systems</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#CC3333] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Power outlets and USB sockets</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#CC3333] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Connection to main electrical supply</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4 text-[#1C1C3A]">Loft Conversions</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#CC3333] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Complete electrical installation</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#CC3333] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Velux window electrical connections</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#CC3333] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">En-suite electrical installations</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#CC3333] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Storage and workspace electrical</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Our Integrated Service */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#1C1C3A] text-center">
              Why Choose Our Integrated Renovation Electrical Service?
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

          {/* Renovation Planning */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#1C1C3A]">
              Planning Electrical Work for Your Renovation
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              <p>
                Proper planning of electrical work is crucial for successful renovations. We work with you from the 
                early planning stages to understand your electrical needs and integrate them into the overall renovation design.
              </p>
              
              <h3 className="text-xl font-semibold text-[#1C1C3A] mt-8 mb-4">What We Consider During Planning:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Current electrical system condition and capacity</li>
                <li>New electrical requirements for renovated spaces</li>
                <li>Building regulations and safety compliance</li>
                <li>Future-proofing for smart home technology</li>
                <li>Energy efficiency and LED lighting options</li>
                <li>Coordination with other trades and timelines</li>
                <li>Minimizing disruption during renovation work</li>
              </ul>
              
              <p>
                Our integrated approach means you have one point of contact for your entire renovation, including 
                electrical work. This eliminates coordination issues between different contractors and ensures your 
                renovation runs smoothly from start to finish.
              </p>
            </div>
          </div>

          {/* Certification & Compliance */}
          <div className="mb-16">
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <Shield className="w-8 h-8 text-blue-600 mr-4" />
                <h2 className="text-2xl font-bold text-blue-800">
                  Electrical Work & Building Regulations
                </h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  All electrical work carried out during renovations must comply with current building regulations. 
                  Our experienced electricians ensure all installations meet safety requirements and work with certified 
                  professionals when required for building control approval.
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
            <Zap className="w-10 h-10" />
          </div>

          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Include Professional Electrical Work in Your Renovation
          </h2>

          <p className="text-xl mb-10 leading-relaxed opacity-90 max-w-3xl mx-auto">
            Get expert electrical services as part of your complete renovation package. 
            Our integrated approach ensures quality, coordination, and compliance with all regulations.
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