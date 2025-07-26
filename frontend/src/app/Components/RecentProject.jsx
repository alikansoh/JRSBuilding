"use client";

import React from "react";
import Link from "next/link";

const projects = [
  {
    title: "Kitchen Renovation",
    before: "/bath-before.jpeg",
    after: "/bath-after.jpeg",
    description: "Modern kitchen makeover with sleek cabinetry and new countertops.",
    address: "Ealing, London",
  },
  {
    title: "Loft Extension",
    before: "/stair-after.jpeg",
    after: "/stair1-after.jpeg",
    description: "Expanded living space with a bright and airy loft extension.",
    address: "Fulham, London",
  },
  {
    title: "Garden Makeover",
    before: "before.jpeg",
    after: "/after.jpeg",
    description: "Transformed outdoor space into a relaxing garden oasis.",
    address: "London, UK",
  },
];

// Custom Before/After Slider Component
function CustomCompareSlider({ before, after, title }) {
  const [sliderPosition, setSliderPosition] = React.useState(50);
  const [isDragging, setIsDragging] = React.useState(false);
  const [loaded, setLoaded] = React.useState(false);
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    const img1 = new Image();
    const img2 = new Image();
    let loadedCount = 0;

    const handleLoad = () => {
      loadedCount++;
      if (loadedCount === 2) {
        setLoaded(true);
      }
    };

    img1.onload = handleLoad;
    img2.onload = handleLoad;
    img1.src = before;
    img2.src = after;

    return () => {
      img1.onload = null;
      img2.onload = null;
    };
  }, [before, after]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    updateSliderPosition(e);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      updateSliderPosition(e);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    updateSliderPosition(e.touches[0]);
  };

  const handleTouchMove = (e) => {
    if (isDragging) {
      e.preventDefault();
      updateSliderPosition(e.touches[0]);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const updateSliderPosition = (event) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging]);

  if (!loaded) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-gray-400 font-medium space-y-3 bg-gray-50">
        <div className="text-lg">Loading {title}...</div>
        <div className="w-8 h-8 border-4 border-[#CC3333] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full overflow-hidden cursor-col-resize select-none"
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      {/* After Image (Background) */}
      <div className="absolute inset-0">
        <img 
          src={after} 
          alt="After" 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold">
          After
        </div>
      </div>

      {/* Before Image (Clipped) */}
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
      >
        <img 
          src={before} 
          alt="Before" 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold">
          Before
        </div>
      </div>

      {/* Slider Line */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-[#CC3333] shadow-lg z-10 pointer-events-none"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      />

      {/* Slider Handle */}
      <div 
        className={`absolute top-1/2 w-12 h-12 bg-[#CC3333] rounded-full border-4 border-white shadow-xl flex items-center justify-center z-20 transition-transform duration-200 ${isDragging ? 'scale-110 cursor-grabbing' : 'cursor-grab hover:scale-105'}`}
        style={{ 
          left: `${sliderPosition}%`, 
          transform: 'translate(-50%, -50%)'
        }}
      >
        <div className="flex items-center space-x-0.5">
          <div className="w-1 h-6 bg-white rounded-full"></div>
          <div className="w-1 h-6 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

export default function RecentProjects() {
  return (
    <section className="bg-[#fefefe] pt-12 pb-24 px-6 sm:px-12 lg:px-24">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#CC3333] tracking-tight mb-4 drop-shadow-md">
          Recent Projects
        </h2>
        <p className="text-gray-700 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
          Transformations we're proud of. Slide to see the difference.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-7xl mx-auto">
        {projects.map(({ title, before, after, description, address }, idx) => (
          <div
            key={`${title}-${idx}`}
            className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-500 flex flex-col overflow-hidden"
          >
            <div className="relative rounded-t-3xl overflow-hidden w-full h-[400px] sm:h-[320px] md:h-[380px] lg:h-[450px] xl:h-[500px] bg-gray-100">
              <CustomCompareSlider before={before} after={after} title={title} />
            </div>

            <div className="p-4 md:p-6 flex-grow flex flex-col">
              <h3 className="text-xl md:text-2xl font-semibold text-[#CC3333] mb-2 md:mb-3">{title}</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-3 md:mb-5">{description}</p>
              <p className="text-sm text-[#CC3333] font-semibold tracking-wide">{address}</p>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-8 md:mt-10">
        <Link href="/projects" className="relative inline-block group">
          <span className="absolute inset-0 rounded-full bg-[#CC3333] blur opacity-70 group-hover:opacity-100 transition duration-300"></span>
          <span className="relative inline-block px-10 md:px-12 py-3 text-white font-semibold text-base md:text-lg rounded-full bg-[#b32b2b] group-hover:bg-[#cc4444] shadow-lg transition-colors duration-300 uppercase tracking-wide">
            View All Projects
          </span>
        </Link>
      </div>

      {/* Call to Action */}
      <section className="relative mt-12 md:mt-16 bg-gradient-to-r from-[#cc3333] to-[#a52a2a] py-12 md:py-16 px-6 sm:px-12 lg:px-24 rounded-3xl shadow-2xl overflow-hidden">
        {/* Decorative Blur Circles */}
        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-white opacity-10 rounded-full blur-3xl z-0" />
        <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-white opacity-10 rounded-full blur-2xl z-0" />

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 md:mb-6 leading-tight drop-shadow-md">
            Let's Bring Your Vision to Life
          </h2>
          <p className="text-white/90 text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed">
            Whether it's a full renovation or a small improvement, we're here to deliver stunning results. Reach out today and let's talk about your next project.
          </p>

          <Link
            href="/contact"
            className="relative inline-block px-8 md:px-10 py-3 md:py-4 text-white font-semibold text-base md:text-lg bg-white/10 border border-white/20 rounded-full backdrop-blur hover:bg-white/20 transition-all duration-300 shadow-md hover:shadow-xl"
          >
            Get a Free quote
          </Link>
        </div>
      </section>
    </section>
  );
}