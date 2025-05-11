import React from 'react';
import Image from 'next/image';
const HowItWorks: React.FC = () => {
  return (
<section className="py-16 md:py-24 px-4 lg:px-8"id='how-it-works'>
  <div className="max-w-7xl mx-auto  p-8 "><h2 className="text-3xl container font-bold text-black mb-6 text-start">How It Works</h2></div>
  <div className="max-w-7xl mx-auto bg-gray-100 p-8 rounded-2xl">
    

    <div className="grid grid-cols-12 gap-6">

      {/* Step 1 */}
      <div className="col-span-12 md:col-span-4 flex flex-col items-start text-center p-4">
        <div className="flex items-center mb-2">
          <div className="bg-gray-200 text-black rounded-full w-8 h-8 flex items-center justify-center mr-2 font-semibold">
            1
          </div>
          <h3 className="text-lg font-semibold text-black">Tell Us Your Needs</h3>
        </div>
        <p className="text-sm px-12 text-gray-600 mb-3">Fill out a quick form.</p>
        <div className="w-full h-56 overflow-hidden rounded-xl">
          <Image
            src="/images/Rectangle4.png" 
            alt="Tell Us Your Needs"
            width={400}
            height={300}
            loading="lazy"
            priority={false}
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Step 2 */}
      <div className="col-span-12 md:col-span-4 flex flex-col items-start text-center p-4">
        <div className="flex items-center mb-2">
          <div className="bg-yellow-300 text-black rounded-full w-8 h-8 flex items-center justify-center mr-2 font-semibold">
            2
          </div>
          <h3 className="text-lg font-semibold text-black">We Match You with Talent</h3>
        </div>
        <p className="text-sm text-gray-600 px-12 mb-3">A skilled team starts working.</p>
        <div className="w-full h-56 overflow-hidden rounded-xl">
          <Image
            src="/images/Rectangle5.png" // replace with your image path
            alt="We Match You with Talent"
            loading="lazy"
            priority={false}
            width={400}
            height={300}
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Step 3 */}
      <div className="col-span-12 md:col-span-4 flex flex-col items-start text-center p-4">
        <div className="flex items-start mb-2">
          <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2 font-semibold">
            3
          </div>
          <h3 className="text-lg font-semibold text-black">Get Your Solution</h3>
        </div>
        <p className="text-sm text-gray-600 px-8 mb-3">We deliver high-quality results affordably.</p>
        <div className="w-full h-56 overflow-hidden rounded-xl">
          <Image
            src="/images/Rectangle6.png" // replace with your image path
            alt="Get Your Solution"
            loading="lazy"
            priority={false}
            width={400}
            height={300}
            className="object-cover rounded-lg"
          />
        </div>
      </div>

    </div>

    <div className="mt-12 text-center">
      <button className="bg-blue-900 text-white px-6 py-3 rounded hover:bg-blue-800">
        Propose Project
      </button>
    </div>
  </div>
</section>


  );
};

export default HowItWorks;
