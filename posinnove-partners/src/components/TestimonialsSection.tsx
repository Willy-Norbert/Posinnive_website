
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-platformGray-900 mb-16 text-center">
          What Other employers Are Saying?
        </h2>
        
        <div className="bg-white rounded-lg shadow-md p-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <img 
                src="/images/testimonial.png" 
                alt="Heeni Nyakanjuki" 
                className="rounded-lg w-32 h-32 object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold text-platformGray-900">Heeni Nyakanjuki</h3>
              <p className="text-sm text-platformGray-600 mb-4">Director at FANCY GROUP, INC</p>
              <p className="text-platformGray-700 mb-8">
                "Working with the student team was an excellent experience. They brought fresh ideas 
                and technical skills that helped us solve a challenging problem. Their professionalism 
                exceeded our expectations and delivered real value to our business. We'll definitely use 
                this platform again for future projects."
              </p>
            </div>
          </div>
          
          <div className="flex justify-center space-x-4 mt-4">
            <button className="p-2 rounded-full border border-platformGray-300 hover:bg-platformGray-100">
              <ChevronLeft className="h-5 w-5 text-platformGray-600" />
            </button>
            <button className="p-2 rounded-full border border-platformGray-300 hover:bg-platformGray-100">
              <ChevronRight className="h-5 w-5 text-platformGray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
