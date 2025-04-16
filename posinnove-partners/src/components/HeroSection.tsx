
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2 lg:pr-12">
            <p className="text-sm text-platformGray-500 mb-2">The new way to hire for your projects</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-platformGray-900 mb-4">
              Achieve success by leveraging students' expertise to elevate your projects.
            </h1>
            <p className="text-platformGray-600 mb-8 max-w-2xl">
              Find the perfect student team to help implement your ideas. They bring fresh perspectives, 
              technical skills, and innovation to make your projects stand out and reach their full potential.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="px-6 py-3 font-medium">Explore Projects</Button>
              <Button variant="outline" className="px-6 py-3 font-medium">
                Learn More
              </Button>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 lg:w-1/2">
            <img 
              src="/lovable-uploads/9a0990c3-9b63-46c5-8a9a-255c879d3ba4.png" 
              alt="Student collaboration" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
