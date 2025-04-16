
import React from 'react';
import { Button } from '@/components/ui/button';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "Tell Us Your Needs",
      description: "Explain your project requirements",
      image: "/images/how-it-works-1.png"
    },
    {
      number: 2,
      title: "We Match You With Talent",
      description: "We find the perfect student team",
      image: "/images/how-it-works-2.png"
    },
    {
      number: 3,
      title: "See Your Project Deliver",
      description: "Watch your ideas come to life",
      image: "/images/how-it-works-3.png"
    }
  ];

  return (
    <section className="bg-platformGray-100 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-platformGray-900 mb-16 text-center">
          How It Works
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center">
              <div className="flex items-center mb-4">
                <div className="bg-platformBlue text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">
                  {step.number}
                </div>
                <h3 className="text-lg font-medium text-platformGray-800">{step.title}</h3>
              </div>
              <div className="bg-white rounded-lg p-4 w-full max-w-xs h-48 flex items-center justify-center mb-2">
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="max-w-full max-h-full object-cover rounded"
                />
              </div>
              <p className="text-sm text-platformGray-600 text-center">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="px-6 py-3">Explore Projects</Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
