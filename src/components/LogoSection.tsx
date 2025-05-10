import React from 'react';
import Image from 'next/image';

const LogoSection: React.FC = () => {
  return (
    <section className="relative bg-white py-8 md:py-12 top-[29px] overflow-hidden">
      {/* Background Images */}
      <div
  className="absolute inset-0 bg-cover bg-center min-h-[200px] border-t-1 border-cyan-400"
  style={{
    backgroundImage: 'url("/background1.png"), url("/background2.png"), url("/background3.png")',
    backgroundPosition: 'left top, center top, right top',
    backgroundSize: '33.33% 100%, 33.33% 100%, 33.33% 100%',
    backgroundRepeat: 'no-repeat',
  }}
  aria-hidden="true"
>
  {/* Corrected white transparent overlay */}
  <div
    className="w-full h-full"
    style={{ backgroundColor: 'rgba(255, 255, 256, 0.96)' }} // 20% opacity white
  ></div>
   {/* <div className="absolute inset-0 z-0 bg-white/0 backdrop-blur-sm"></div> */}
</div>


      {/* Foreground content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-platformGray-800 font-bold text-lg  mb-8">
          Used by over 400 students from various colleges and universities.
        </p>

        <div className="flex justify-center items-center space-x-16">
  {/* Logo 1 */}
  <div className="w-16 h-16 flex items-center justify-center">
    <Image
      src="/images/RCA.png" 
      alt="Logo 1" 
      className="w-full h-full object-contain"
      loading='lazy'
      priority={false} 
      width={64}
      height={64}
    />
  </div>

  {/* Logo 2 */}
  <div className="w-16 h-16 flex items-center justify-center">
    <Image
      src="/images/UR.png" 
      alt="Logo 2" 
      className="w-full h-full object-contain" 
      loading='lazy'
      priority={false}
      width={64}
      height={64}
      />
  </div>

  {/* Logo 3 */}
  <div className="w-20 h-16 flex items-center justify-center">
    <Image
      src="/images/alx.png" 
      alt="Logo 3" 
      className="w-full h-full object-contain"
      loading='lazy'
      priority={false} 
      width={80}
      height={64}
    />
  </div>
</div>

      </div>
    </section>
  );
};

export default LogoSection;
