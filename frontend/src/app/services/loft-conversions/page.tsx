import React from 'react';
import {
  Home,
  TrendingUp,
  ArrowUp,
  Users,
  Bed,
  Bath,
  Briefcase,
  BookOpen,
  Heart,
  Shield,
  CheckCircle,
  Star,
  Ruler,
  Lightbulb,
  Wind,
  Sun,
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from "lucide-react";

const benefits = [
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Increase Property Value",
    description: "A professionally converted loft can add 15-25% to your property value, making it one of the smartest home investments you can make."
  },
  {
    icon: <ArrowUp className="w-6 h-6" />,
    title: "Extra Living Space",
    description: "Transform unused attic space into valuable living areas without extending your home's footprint or losing garden space."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "No Need to Move",
    description: "Create the extra space your growing family needs without the stress, expense, and upheaval of moving to a larger property."
  },
  {
    icon: <Ruler className="w-6 h-6" />,
    title: "Cost-Effective Solution",
    description: "Loft conversions typically cost significantly less than moving house or building extensions, offering excellent return on investment."
  }
];

const loftTypes = [
  {
    title: "Master Bedroom Suite",
    description: "Create a luxurious private retreat with your own ensuite bathroom and walk-in wardrobe. Perfect for parents seeking privacy and tranquility away from the main family areas.",
    features: ["Spacious bedroom area", "Private ensuite bathroom", "Built-in storage solutions", "Velux windows for natural light"]
  },
  {
    title: "Children's Bedrooms",
    description: "Give your children their own special space to grow, play, and study. Loft bedrooms offer kids a sense of independence while staying close to the family.",
    features: ["Individual or shared bedrooms", "Play area integration", "Study nooks and desks", "Fun, angled ceiling features"]
  },
  {
    title: "Home Office & Study",
    description: "Create the perfect work-from-home environment with a quiet, productive space away from household distractions. Ideal for professionals and students alike.",
    features: ["Quiet, private workspace", "Built-in desk and shelving", "High-speed internet ready", "Natural light optimization"]
  },
  {
    title: "Multi-Use Family Space",
    description: "Design a flexible area that adapts to your family's changing needs. From playrooms to teen hangouts, hobby spaces to guest accommodation.",
    features: ["Flexible room layouts", "Entertainment areas", "Hobby and craft spaces", "Guest bedroom capability"]
  }
];

const processSteps = [
  {
    step: "01",
    title: "Free Consultation",
    description: "We assess your loft space, discuss your vision, and explain what's possible within your budget and requirements."
  },
  {
    step: "02",
    title: "Structural Survey",
    description: "Our structural engineers evaluate load-bearing capacity, head height, and access requirements to ensure a safe conversion."
  },
  {
    step: "03",
    title: "Design & Planning",
    description: "We create detailed architectural plans and 3D visualizations, handling all planning permission and building regulation applications."
  },
  {
    step: "04",
    title: "Construction Phase",
    description: "Our skilled craftsmen transform your loft with minimal disruption to your daily life, providing regular progress updates."
  },
  {
    step: "05",
    title: "Final Inspection",
    description: "Quality checks, building control sign-off, and final walkthrough ensure your new loft space meets all standards and exceeds expectations."
  }
];

const whyChooseUs = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Fully Insured & Certified",
    description: "Complete peace of mind with full public liability insurance and all necessary certifications for structural work."
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "25+ Years Experience",
    description: "Decades of expertise in loft conversions across London, with hundreds of successful projects completed."
  },
  {
    icon: <CheckCircle className="w-8 h-8" />,
    title: "Building Regulations Approved",
    description: "We handle all building control applications and ensure your conversion meets current safety and building standards."
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Customer Satisfaction Guarantee",
    description: "98% customer satisfaction rate with comprehensive aftercare and warranty on all structural work completed."
  }
];

export default function LoftConversionPage() {
  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="mt-20 max-w-7xl mx-auto px-4 pt-24 pb-20 text-[#1C1C3A]">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="inline-flex items-center space-x-2 bg-red-50 px-4 py-2 rounded-full mb-6">
              <Home className="w-4 h-4 text-[#CC3333]" />
              <span className="text-sm font-semibold text-[#CC3333] uppercase tracking-wide">Loft Conversions</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Expand Your
              <span className="block text-[#CC3333] bg-gradient-to-r from-[#CC3333] to-[#aa2828] bg-clip-text text-transparent">
                Living Space
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Transform your unused loft into beautiful, functional living space. Add value to your home 
              while creating the extra room your family needs – all without moving house or losing garden space.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="inline-flex items-center bg-[#CC3333] text-white font-bold px-8 py-4 rounded-2xl hover:bg-[#aa2828] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                <span>Get Free Consultation</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="inline-flex items-center border-2 border-[#CC3333] text-[#CC3333] font-bold px-8 py-4 rounded-2xl hover:bg-[#CC3333] hover:text-white transition-all duration-300">
                <span>View Gallery</span>
              </button>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Building Regs Approved</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-blue-500" />
                <span>Fully Insured</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#CC3333]/20 to-transparent rounded-3xl blur-3xl"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-[#1C1C3A] mb-2">Why Choose Loft Conversion?</h3>
                <p className="text-gray-600">Smart home expansion solution</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#1C1C3A]">Up to 25% Value Increase</div>
                    <div className="text-sm text-gray-600">Best ROI home improvement</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <ArrowUp className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#1C1C3A]">Extra Living Space</div>
                    <div className="text-sm text-gray-600">Without losing garden</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#1C1C3A]">No Need to Move</div>
                    <div className="text-sm text-gray-600">Stay in your neighborhood</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">The Benefits of Loft Conversion</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover why loft conversion is the smartest way to expand your home and enhance your lifestyle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 group hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-[#CC3333] to-[#aa2828] rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#1C1C3A] group-hover:text-[#CC3333] transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* What We Create Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Transform Your Loft Into</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From master suites to home offices, we create beautiful, functional spaces tailored to your family&apos;s needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {loftTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 group">
                <h3 className="text-2xl font-bold mb-4 text-[#1C1C3A] group-hover:text-[#CC3333] transition-colors duration-300">
                  {type.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {type.description}
                </p>
                <ul className="space-y-3">
                  {type.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Key Features Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-[#1C1C3A]">What Makes Our Loft Conversions Special</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Every detail is carefully planned to maximize space, light, and functionality while maintaining structural integrity.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-[#CC3333] to-[#aa2828] rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                  <Sun className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#1C1C3A]">Natural Light Optimization</h3>
                <p className="text-gray-600">Strategically placed Velux windows and roof lights flood your new space with natural light, creating bright, airy rooms.</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-[#CC3333] to-[#aa2828] rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                  <Wind className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#1C1C3A]">Superior Insulation</h3>
                <p className="text-gray-600">High-performance insulation keeps your loft comfortable year-round while reducing energy bills and noise transfer.</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-[#CC3333] to-[#aa2828] rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                  <Lightbulb className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#1C1C3A]">Smart Space Design</h3>
                <p className="text-gray-600">Clever use of eaves storage, built-in furniture, and dormer windows maximizes every inch of available space.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Our Loft Conversion Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial consultation to final completion, we guide you through every step of your loft transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-gradient-to-r from-[#CC3333] to-[#aa2828] text-white w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-bold mx-auto mb-6 shadow-lg">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold mb-3 text-[#1C1C3A]">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Why Choose JRS Building?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trust London&apos;s leading loft conversion specialists for your home transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-[#CC3333] to-[#aa2828] rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#1C1C3A]">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-[#CC3333] via-[#b62d2d] to-[#CC3333] py-16 px-8 rounded-3xl shadow-2xl">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl translate-x-40 translate-y-40"></div>

          <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-2xl backdrop-blur-sm mb-8">
              <ArrowUp className="w-10 h-10" />
            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              Ready to Expand Your Home?
            </h2>

            <p className="text-xl mb-10 leading-relaxed opacity-90">
              Transform your unused loft space into the room you&apos;ve always dreamed of. 
              Contact us today for a free consultation and discover your loft&apos;s potential.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="inline-flex items-center bg-white text-[#CC3333] font-bold text-lg px-10 py-4 rounded-2xl hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
                <Phone className="w-5 h-5 mr-3" />
                <span>Free Loft Assessment</span>
              </button>

              <div className="flex flex-col sm:flex-row items-center gap-4 text-white/90">
                <div className="flex items-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <span>info@jrsbuilding.co.uk</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5" />
                  <span>Serving All London Areas</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}