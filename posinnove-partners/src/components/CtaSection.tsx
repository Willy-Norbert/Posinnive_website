
import React from 'react';
import { Button } from '@/components/ui/button';

const CtaSection: React.FC = () => {
  return (
    <section className="bg-platformBlue text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-0">
            Elevate your business with the expertise of student talent.
          </h2>
          <Button className="bg-white text-platformBlue hover:bg-platformGray-100">
            Submit your project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
