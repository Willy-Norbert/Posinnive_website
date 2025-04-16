// src/components/Navbar.tsx
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  return (
    <header className="bg-white text-black  shadow-2xl w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex justify-center">
          <Link href="/" className="flex items-center gap-2 shrink-0">
          <img
            src="https://www.posinnove.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-posinnove.b835c3c0.png&w=384&q=75"
            alt="Design Helpers logo"
            className="h-8 w-auto object-contain"
          />
          <span className="text-lg font-semibold text-platformGray-800">
          
          </span>
        </Link>

            <nav className="hidden xl:ml-6 md:flex md:space-x-8 justify-center">
              <Link
                href="#how-it-works"
                className="text-platformGray-500 hover:text-platformGray-900 px-3 py-2 text-sm font-medium"
              >
                Explore Program
              </Link>
              <Link
                href="#features"
                className="text-platformGray-500 hover:text-platformGray-900 px-3 py-2 text-sm font-medium"
              >
                Learners
              </Link>
              <Link
                href="#projects"
                className="text-platformGray-500 hover:text-platformGray-900 px-3 py-2 text-sm font-medium"
              >
               Organisation
              </Link>
              <Link
                href="#blogs"
                className="text-platformGray-500 hover:text-platformGray-900 px-3 py-2 text-sm font-medium"
              >
                Blogs
              </Link>
            </nav>
          </div>
          <div className="flex items-center">
            <Button variant="default" className='bg-slate-300 text-blue-900' size="sm">Get Started</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
