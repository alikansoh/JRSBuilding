"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import {
  ChefHat,
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
  Lightbulb,
  Zap,
  Utensils
} from "lucide-react";

const kitchenServices = [
  {
    title: "Complete Kitchen Design & Installation",
    description: "Full kitchen design service from initial consultation through to final installation. We create bespoke kitchen layouts that maximize space, functionality, and style while coordinating all trades including plumbing, electrical, and carpentry work.",
    keywords: ["kitchen design", "kitchen installation", "bespoke kitchens"],
    image: "/kitchen.jpeg"
  },
  {
    title: "Kitchen Cabinet & Worktop Installation",
    description: "Professional installation of kitchen cabinets, worktops, and storage solutions. We work with all materials including granite, quartz, wood, and laminate surfaces, ensuring perfect fitting and finishing to the highest standards.",
    keywords: ["kitchen cabinets", "worktop installation", "kitchen storage"],
    image: "/kit2.jpeg"
  },
  {
    title: "Kitchen Appliance Integration",
    description: "Complete appliance installation and integration including built-in ovens, hobs, dishwashers, and refrigeration units. All electrical and plumbing connections handled by our qualified tradespeople as part of the renovation.",
    keywords: ["kitchen appliances", "appliance integration", "built-in appliances"],
    image: "/kit3.jpeg"
  }
];

const kitchenGallery = [
  {
    image: "/kitchen-work-1.jpg",
    title: "Modern Kitchen Renovation",
    description: "Complete kitchen transformation with island unit and integrated appliances in contemporary home."
  },
  {
    image: "/kitchen-work-2.jpg",
    title: "Traditional Kitchen Remodel",
    description: "Classic kitchen design with shaker-style cabinets and granite worktops in period property renovation."
  },
  {
    image: "/kitchen-work-3.jpg",
    title: "Open Plan Kitchen Extension",
    description: "Kitchen remodeling as part of rear extension project creating open plan living space."
  }
];

const renovationPhases = [
  {
    phase: "Design & Planning Phase",
    description: "Working with you to create the perfect kitchen design that meets your needs, budget, and lifestyle. We handle space planning, material selection, and coordinate with building regulations.",
    tasks: ["Kitchen layout design", "Material and appliance selection", "Building regulations approval", "Project timeline planning"]
  },
  {
    phase: "Structural & Services Phase",
    description: "Preparing the space with any necessary structural work, electrical upgrades, and plumbing modifications before kitchen installation begins.",
    tasks: ["Wall removal or construction", "Electrical circuit installation", "Plumbing modifications", "Flooring preparation"]
  },
  {
    phase: "Kitchen Installation Phase",
    description: "Professional installation of your new kitchen including cabinets, worktops, appliances, and all finishing touches to create your dream cooking space.",
    tasks: ["Cabinet installation", "Worktop fitting", "Appliance integration", "Tiling and decoration"]
  }
];

const whyChooseUs = [
  {
    icon: <Building className="w-6 h-6" />,
    title: "Complete Project Management",
    description: "Our kitchen remodeling is part of our complete building service, ensuring all trades are coordinated and the project runs smoothly from start to finish."
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Experienced Kitchen Specialists",
    description: "Our team includes experienced kitchen fitters, carpenters, and designers who understand both traditional and contemporary kitchen installations."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Quality Materials & Workmanship",
    description: "We use only high-quality materials and provide comprehensive guarantees on all kitchen installation work and appliances."
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Efficient Installation Process",
    description: "Streamlined installation process with minimal disruption to your daily routine, managed by our experienced project coordinators."
  }
];

const additionalServices = [
  {
    title: "Kitchen Extensions & Structural Work",
    description: "Kitchen remodeling as part of house extensions or structural alterations. We handle building work, planning permissions, and create larger kitchen spaces.",
    keywords: ["kitchen extension", "structural alterations", "planning permission"]
  },
  {
    title: "Kitchen Electrical & Plumbing Upgrades", 
    description: "Complete electrical and plumbing upgrades to support modern kitchen appliances and lighting. All work carried out by qualified electricians and plumbers.",
    keywords: ["kitchen electrical work", "kitchen plumbing", "appliance connections"]
  },
  {
    title: "Kitchen Flooring & Tiling Services",
    description: "Professional flooring installation and wall tiling services as part of your kitchen remodel. We work with all materials including ceramic, porcelain, and natural stone.",
    keywords: ["kitchen flooring", "kitchen tiling", "splashback installation"]
  }
];

export default function KitchenRemodelingPage() {
  const [activeGalleryImage, setActiveGalleryImage] = useState(0);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-orange-50 pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-orange-100 px-6 py-3 rounded-full mb-8">
              <ChefHat className="w-5 h-5 text-[#CC3333]" />
              <span className="text-sm font-semibold text-[#CC3333] uppercase tracking-wide">Kitchen Remodeling Services</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight text-[#1C1C3A]">
              Professional Kitchen Remodeling & Design
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto">
              Transform your kitchen with our complete remodeling service. From design consultation through to final installation, 
              we create beautiful, functional kitchens that become the heart of your home.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="inline-flex items-center bg-[#CC3333] text-white font-bold text-lg px-10 py-5 rounded-2xl hover:bg-[#aa2828] transition-all duration-300 shadow-xl">
                <Phone className="w-6 h-6 mr-3" />
                <span>Start Your Kitchen Project</span>
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
              Complete Kitchen Remodeling Solutions
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              <p>
                At JRS Building, kitchen remodeling is one of our specialist services, combining expert design, 
                quality craftsmanship, and project management to create kitchens that are both beautiful and highly functional. 
                We understand that the kitchen is the heart of the home, and our approach ensures every detail is perfect.
              </p>
              
              <p>
                Our kitchen remodeling service covers everything from initial design concepts through to final installation 
                and finishing. We work with you to understand your cooking habits, lifestyle needs, and design preferences 
                to create a kitchen that truly works for your family.
              </p>
              
              <p>
                As part of our complete building service, kitchen remodeling projects benefit from seamless coordination 
                with other trades including electrical work, plumbing, structural alterations, and decorating. This integrated 
                approach ensures your kitchen project runs smoothly and is completed to the highest standards.
              </p>
            </div>
          </div>

          {/* Main Services Section with Images */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#1C1C3A] text-center">
              Our Kitchen Remodeling Services
            </h2>

            <div className="space-y-12">
              {kitchenServices.map((service, index) => (
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
              Additional Kitchen Services
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

        

          {/* Kitchen Remodeling Process */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#1C1C3A]">
              Our Kitchen Remodeling Process
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6 mb-8">
              <p>
                Our kitchen remodeling process is designed to minimize disruption while ensuring exceptional results. 
                We work closely with you throughout every stage, from initial design concepts through to final completion 
                and handover of your new kitchen.
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

          {/* Kitchen Styles & Options */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#1C1C3A]">
              Kitchen Styles & Design Options
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="w-12 h-12 bg-[#CC3333] rounded-xl flex items-center justify-center text-white mb-4">
                  <Utensils className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#1C1C3A]">Modern & Contemporary</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#CC3333] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Sleek handleless cabinets</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#CC3333] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Quartz and granite worktops</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#CC3333] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Integrated appliances</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#CC3333] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">LED lighting systems</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="w-12 h-12 bg-[#CC3333] rounded-xl flex items-center justify-center text-white mb-4">
                  <Settings className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#1C1C3A]">Traditional & Classic</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#CC3333] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Shaker-style cabinet doors</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#CC3333] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Natural wood worktops</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#CC3333] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Range-style cooking</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#CC3333] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Classic tile splashbacks</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="w-12 h-12 bg-[#CC3333] rounded-xl flex items-center justify-center text-white mb-4">
                  <Home className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#1C1C3A]">Open Plan Kitchens</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#CC3333] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Kitchen islands and peninsulas</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#CC3333] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Breakfast bars and dining areas</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#CC3333] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Integrated living spaces</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#CC3333] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Bi-fold doors to gardens</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="w-12 h-12 bg-[#CC3333] rounded-xl flex items-center justify-center text-white mb-4">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#1C1C3A]">Smart Kitchen Technology</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#CC3333] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Smart appliance integration</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#CC3333] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Automated lighting controls</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#CC3333] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">USB charging points</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#CC3333] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Wireless device connectivity</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Our Kitchen Service */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#1C1C3A] text-center">
              Why Choose Our Kitchen Remodeling Service?
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

          {/* Project Planning */}
          <div className="mb-16">
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <AlertTriangle className="w-8 h-8 text-orange-600 mr-4" />
                <h2 className="text-2xl font-bold text-orange-800">
                  Planning Your Kitchen Remodel
                </h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Kitchen remodeling requires careful planning to ensure the best results within your budget and timeline. 
                  We work with you from the earliest stages to understand your needs, assess your space, and create a 
                  design that maximizes both functionality and aesthetic appeal.
                </p>
                
                <p>
                  <strong>Key considerations we discuss:</strong> Your cooking and entertaining style, storage requirements, 
                  appliance preferences, lighting needs, and how the kitchen connects with other areas of your home.
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
            <ChefHat className="w-10 h-10" />
          </div>

          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Create Your Dream Kitchen Today
          </h2>

          <p className="text-xl mb-10 leading-relaxed opacity-90 max-w-3xl mx-auto">
            Transform your kitchen with our complete remodeling service. From design consultation to final installation, 
            we&apos;ll create a beautiful, functional space that becomes the heart of your home.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <button className="inline-flex items-center bg-white text-[#CC3333] font-bold text-lg px-10 py-4 rounded-2xl hover:bg-gray-100 transition-all duration-300 shadow-xl">
              <Phone className="w-5 h-5 mr-3" />
              <span>Start Your Kitchen Project</span>
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