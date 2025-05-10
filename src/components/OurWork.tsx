"use client";
import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image'; 

// Updated project data to match the image
const projects = [
  {
    category: 'UI/UX desdesign', // Matches text in the image
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    title: 'Develop a website page and application you have in mind. Work with our top tier web designers and programmers.',
    projectsCount: '12+ Web Projects finished',
    ctaText: 'See the work'
  },
  {
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    title: 'Create intuitive and beautiful user interfaces that enhance the user experience of your digital products.',
    projectsCount: '20+ Web Projects finished',
    ctaText: 'See the work'
  },
  {
    category: 'Mobile Apps',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    title: 'Develop mobile applications for iOS and Android platforms with our expert development team.',
    projectsCount: '15+ Mobile Projects finished',
    ctaText: 'See the work'
  },
  {
    category: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334',
    title: 'Build powerful online stores that drive sales and provide excellent customer experiences.',
    projectsCount: '8+ E-commerce Projects finished',
    ctaText: 'See the work'
  },
  {
    category: 'UI/UX desdesign', // Matches text in the image
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    title: 'Develop a website page and application you have in mind. Work with our top tier web designers and programmers.',
    projectsCount: '12+ Web Projects finished',
    ctaText: 'See the work'
  },
  {
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    title: 'Create intuitive and beautiful user interfaces that enhance the user experience of your digital products.',
    projectsCount: '20+ Web Projects finished',
    ctaText: 'See the work'
  },
  {
    category: 'Mobile Apps',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    title: 'Develop mobile applications for iOS and Android platforms with our expert development team.',
    projectsCount: '15+ Mobile Projects finished',
    ctaText: 'See the work'
  },
  {
    category: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334',
    title: 'Build powerful online stores that drive sales and provide excellent customer experiences.',
    projectsCount: '8+ E-commerce Projects finished',
    ctaText: 'See the work'
  },
  {
    category: 'UI/UX desdesign', // Matches text in the image
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    title: 'Develop a website page and application you have in mind. Work with our top tier web designers and programmers.',
    projectsCount: '12+ Web Projects finished',
    ctaText: 'See the work'
  },
  {
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    title: 'Create intuitive and beautiful user interfaces that enhance the user experience of your digital products.',
    projectsCount: '20+ Web Projects finished',
    ctaText: 'See the work'
  },
  {
    category: 'Mobile Apps',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    title: 'Develop mobile applications for iOS and Android platforms with our expert development team.',
    projectsCount: '15+ Mobile Projects finished',
    ctaText: 'See the work'
  },
  {
    category: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334',
    title: 'Build powerful online stores that drive sales and provide excellent customer experiences.',
    projectsCount: '8+ E-commerce Projects finished',
    ctaText: 'See the work'
  },
];

export default function ProjectCarousel() {
  // Fixed configuration for sliding exactly one item at a time
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    dragFree: false,
    align: 'start',
    slidesToScroll: 1
  });
  
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    
    // Set up autoplay
    const autoplayInterval = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, 4000);
    
    onSelect();

    return () => {
      clearInterval(autoplayInterval);
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="bg-white py-18 md:py-24" id='about'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 md:mb-16 text-center relative">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">Our Work</h2 >
        <p style={{ color:'#484848' }}>Those are Project which fully completed by students from Colleges and universities and It paffectily working  </p>
        </div>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex-shrink-0  w-full md:w-1/3 min-w-0 px-2"
              >
                {/* Card styled to match the image exactly */}
                <div className="rounded-3xl shadow-md h-full flex flex-col overflow-hidden bg-gray-100 border-2  border-gray-400">
                  {/* Category tag - rounded pill with exact color from image */}
                  <div className="p-4">
                    <span className="inline-block bg-[#E6AE4D] text-white text-xs font-medium px-8 py-1.5 rounded-sm">
                      {project.category}
                    </span>
                  </div>

                  {/* Image container with specified dimensions */}
                  <div className="px-4">
                    <div className="relative w-full h-48 rounded-lg overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        loading='lazy'
                        priority={false}
                        width={400}
                        height={300}
                        unoptimized={true}
                        
                      />
                    </div>
                  </div>

                  {/* Text content */}
                  <div className="p-4 flex flex-col justify-between flex-1">
                    {/* Description text with exact styling */}
                    <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                      {project.title}
                    </p>
                    
                    {/* Project count with bold styling */}
                    <div>
                      <p className="text-sm font-bold text-black mb-4">
                        {project.projectsCount}
                      </p>
                      
                      {/* CTA button with exact blue color from image */}
                      <button className="w-full bg-[#0A3283] text-white rounded-md py-2.5 px-5 text-sm font-medium hover:opacity-90 transition">
                        {project.ctaText}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center mt-8 space-x-3">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                selectedIndex === index ? 'w-8 bg-[#8d8e8e]' : 'w-2 bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
