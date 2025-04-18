import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle2, XCircle } from 'lucide-react';

const ComparisonSection: React.FC = () => {
  const modernFeatures = [
    "Fully remote, work with students from anywhere",
    "Individual or team-based to tackle large-scale projects",
    "Supervised by educator/professor or Posinnovate",
    "A single platform for communication, project management, and feedback"
  ];

  const traditionalFeatures = [
    "Often in-person, creating geographical limitations and commuting costs",
    "Typically individual projects only",
    "No outside accountability",
    "Requires multiple disconnected tools for tracking progress"
  ];

  return (
    <section className="w-full py-16 md:py-14 relative overflow-hidden bg-[#f5f6f7]" id='blogs'>
      {/* Background image + overlay */}
      <div className="absolute inset-0  bg-[url('/background2.png')] bg-cover bg-center bg-no-repeat "></div>
      {/* <div className="absolute inset-0 z-0 bg-white/40 backdrop-blur-sm"></div> */}

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:py-24">
        <div className="flex flex-col md:flex-row justify-center items-start">
          {/* Left Card */}
          <div className="bg-white rounded-3xl border border-[#1b1a1c] shadow-lg p-8 w-full md:w-[480px] relative z-10 md:translate-y-[-20px] md:mr-[-20px]">
            <h3 className="text-2xl font-bold text-[#4630a3] mb-6">
              Modernize internships
            </h3>
            <ul className="space-y-5 mb-8">
              {modernFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-flex items-center justify-center min-w-[24px] h-6">
                    <CheckCircle2 className="text-[#6b4eff] h-5 w-5 mr-3" />
                  </span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <Button className="w-[180px] bg-[#6b4eff] hover:bg-[#4630a3] text-white rounded-md py-2 px-4 font-medium">
              Propose Project
            </Button>
          </div>

          {/* Right Card */}
          <div className="bg-gray-200 rounded-3xl border border-[#1b1a1c] shadow-md p-8 w-full md:w-[480px] md:translate-y-[20px] z-0 mt-4 md:mt-0">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Traditional internships
            </h3>
            <ul className="space-y-5 mb-8">
              {traditionalFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-flex items-center justify-center min-w-[24px] h-6">
                    <XCircle className="text-red-500 h-5 w-5 mr-3" />
                  </span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="h-[42px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
