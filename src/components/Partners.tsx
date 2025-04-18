'use client';
import React from 'react';
import PartnerCard from '@/components/PartnerCard';
import { partnersData } from '@/lib/partnersData';
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from '@/components/ui/carousel';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const Partners = () => {
  const [api, setApi] = useState<CarouselApi>();
  const isMobile = useIsMobile();

  // Functions to control the carousel
  const scrollPrev = useCallback(() => {
    if (api) api.scrollPrev();
  }, [api]);

  const scrollNext = useCallback(() => {
    if (api) api.scrollNext();
  }, [api]);

  return (
    <section className="relative bg-[#002278] py-12 md:py-8 overflow-hidden px-4 md:px-6" id='organisation'>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-purple-500/20 rounded-full blur-[50px] md:blur-[100px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-48 md:w-96 h-48 md:h-96 bg-blue-500/20 rounded-full blur-[50px] md:blur-[100px] animate-pulse delay-700" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 md:w-96 h-48 md:h-96 bg-pink-500/20 rounded-full blur-[50px] md:blur-[100px] animate-pulse delay-1000" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Enhanced Header */}
        <div className="mb-8 md:mb-16 text-center relative">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 md:w-32 h-24 md:h-32 bg-blue-500/10 rounded-full blur-xl md:blur-2xl animate-pulse" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white animate-gradient">
              Our Trusted Partners
            </span>
          </h2>
          {/* <div className="h-1 w-24 md:w-32 mx-auto mt-3 md:mt-4 relative">
            <div className="absolute inset-0 bg-gradient-to-white from-white via-white to-White rounded-full animate-shimmer" />
          </div> */}
        </div>
        
        {/* Responsive Carousel */}
        <div className="relative group">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
              slidesToScroll: 1,
            }}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {partnersData.map((partner, index) => (
                <CarouselItem 
                  key={partner.id} 
                  className="pl-2 md:pl-4 xs:basis-full sm:basis-1/2 lg:basis-1/3 transition-all duration-300"
                >
                  <PartnerCard
                    partner={partner}
                    style={{ 
                      animationDelay: `${index * 150}ms`,
                      perspective: '1000px'
                    }}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Enhanced Navigation Buttons - Hidden on Mobile */}
            {!isMobile && (
              <>
                <button 
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-lg border border-white/10 opacity-0 group-hover:opacity-100 group-hover:-translate-x-6 transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:scale-110"
                  onClick={scrollPrev}
                >
                  <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white/80" />
                </button>
                <button 
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-lg border border-white/10 opacity-0 group-hover:opacity-100 group-hover:translate-x-6 transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:scale-110"
                  onClick={scrollNext}
                >
                  <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white/80" />
                </button>
              </>
            )}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Partners;
