
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const ComparisonSection: React.FC = () => {
  const modernFeatures = [
    "Real projects, real clients for better experience",
    "Portfolio of actual work, not classroom exercises",
    "Exposure to professional client communications",
    "Guided by industry professionals, not just theory"
  ];
  
  const traditionalFeatures = [
    "Generic workplace assignments",
    "Limited practical experience",
    "Minimal exposure to client interactions",
    "Restricted to academic environment only"
  ];
  
  return (
    <section className="bg-platformGray-800 text-white py-16 md:py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-platformGray-900 to-platformGray-800 opacity-80"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white text-platformGray-800 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-6 text-platformBlue">Modernize internships</h3>
            <ul className="space-y-4 mb-8">
              {modernFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-platformBlue mr-2 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full">Discover More</Button>
          </div>
          
          <div className="bg-platformGray-100 text-platformGray-800 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-6">Traditional internships</h3>
            <ul className="space-y-4 mb-8">
              {traditionalFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="h-5 w-5 text-platformGray-400 mr-2 flex-shrink-0 mt-0.5">•</span>
                  <span className="text-platformGray-600">{feature}</span>
                </li>
              ))}
            </ul>
            <Button variant="outline" className="w-full text-platformGray-600 border-platformGray-300">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
