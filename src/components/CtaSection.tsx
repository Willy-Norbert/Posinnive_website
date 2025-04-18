
import React from 'react';
import { Button } from '@/components/ui/button';


const CtaSection: React.FC = () => {
  return (
    <section className="bg-blue-600 text-white md:py-12 py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row container-sm  justify-center p-4 md:gap-20 gap-6 items-center">
          <h2 className=" md:text-4xl text-3xl font-bold  mb-3 md:mb-0 md:text-start  text-center">
            Elevate your business with the expertise of student talent.
          </h2>
          <Button className="bg-white md:text-4xl text-black md:px-9 md:py-11 py-7 px-9 font-bold  text-xl  hover:bg-gray-100 rounded-2xl">
            Submit your project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
