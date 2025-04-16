 "use client";
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useInterval } from '@/hooks/useInterval';

const OurWork: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [api, setApi] = useState<any>(null);
  
  const projects = [
    {
      category: "WEB DESIGN & DEVELOPMENT",
      image: "/images/project-1.png",
      title: "E-commerce platform for local artisans featuring modern UI and secure payment processing",
      link: "#"
    },
    {
      category: "MOBILE APP DEVELOPMENT",
      image: "/images/project-2.png",
      title: "Fitness tracking app with personalized workout plans and nutrition guidance for users",
      link: "#"
    },
    {
      category: "UX/UI DESIGN RESEARCH",
      image: "/images/project-3.png",
      title: "User experience research and redesign for a healthcare portal improving patient access",
      link: "#"
    }
  ];
  
  // Auto-slide functionality
  useInterval(() => {
    if (api) {
      api.scrollNext();
    }
  }, 5000);
  
  // Update active index when carousel changes
  useEffect(() => {
    if (!api) return;
    
    const onSelect = () => {
      setActiveIndex(api.selectedScrollSnap());
    };
    
    api.on("select", onSelect);
    
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-platformGray-100 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold text-platformGray-900 mb-2">Quality Results</h3>
              <p className="text-sm text-platformGray-600">Professional-grade work from top students</p>
            </div>
            <div className="bg-platformGray-100 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold text-platformGray-900 mb-2">Affordable Rates</h3>
              <p className="text-sm text-platformGray-600">High-quality deliverables at competitive prices</p>
            </div>
            <div className="bg-platformGray-100 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold text-platformGray-900 mb-2">Fast Turnaround</h3>
              <p className="text-sm text-platformGray-600">Quick project completion with dedicated teams</p>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-platformGray-900 text-center">
            Our Work
          </h2>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          setApi={setApi}
          className="w-full relative"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {projects.map((project, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/3 transition-opacity duration-300">
                <div className="border border-platformGray-200 rounded-lg overflow-hidden h-full">
                  <div className="bg-platformGray-100 p-2">
                    <span className="text-xs font-medium text-platformGray-600">{project.category}</span>
                  </div>
                  <div className="p-4">
                    <div className="h-48 bg-platformGray-200 rounded mb-4 flex items-center justify-center">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="max-w-full max-h-full object-cover"
                      />
                    </div>
                    <p className="text-sm text-platformGray-800 mb-4">{project.title}</p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full text-platformBlue border-platformBlue hover:bg-platformBlue hover:text-white"
                    >
                      View Project
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border border-platformGray-200 z-10" />
          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border border-platformGray-200 z-10" />
        </Carousel>
        
        <div className="flex justify-center mt-8 space-x-2">
          {projects.map((_, index) => (
            <span 
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === index 
                  ? "w-8 bg-platformBlue" 
                  : "w-2 bg-platformGray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWork;
