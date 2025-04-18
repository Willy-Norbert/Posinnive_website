"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLinks = () => (
    <nav className="space-y-4 md:space-y-0 md:space-x-8">
      <Link
        href="#explore"
        className="block md:inline-block text-platformGray-500 hover:text-platformGray-900 px-3 py-2 text-sm font-medium transition-all duration-300 relative after:absolute after:w-full after:h-0.5 after:bg-cyan-400 after:bottom-0 after:left-0 after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300"
      >
        Explore Program
      </Link>
      <Link
        href="#learners"
        className="block md:inline-block text-platformGray-500 hover:text-platformGray-900 px-3 py-2 text-sm font-medium transition-all duration-300 relative after:absolute after:w-full after:h-0.5 after:bg-cyan-400 after:bottom-0 after:left-0 after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300"
      >
        Learners
      </Link>
      <Link
        href="#organisation"
        className="block md:inline-block text-platformGray-500 hover:text-platformGray-900 px-3 py-2 text-sm font-medium transition-all duration-300 relative after:absolute after:w-full after:h-0.5 after:bg-cyan-400 after:bottom-0 after:left-0 after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300"
      >
        Organisation
      </Link>
      <Link
        href="#about"
        className="block md:inline-block text-platformGray-500 hover:text-platformGray-900 px-3 py-2 text-sm font-medium transition-all duration-300 relative after:absolute after:w-full after:h-0.5 after:bg-cyan-400 after:bottom-0 after:left-0 after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300"
      >
        About us
      </Link>
      <Link
        href="#blogs"
        className="block md:inline-block text-platformGray-500 hover:text-platformGray-900 px-3 py-2 text-sm font-medium transition-all duration-300 relative after:absolute after:w-full after:h-0.5 after:bg-cyan-400 after:bottom-0 after:left-0 after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300"
      >
        Blogs
      </Link>
      <Link
        href="#faq"
        className="block md:inline-block text-platformGray-500 hover:text-platformGray-900 px-3 py-2 text-sm font-medium transition-all duration-300 relative after:absolute after:w-full after:h-0.5 after:bg-cyan-400 after:bottom-0 after:left-0 after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300"
      >
        FAQ
      </Link>
    </nav>
  );

  return (
    <header 
      className={`bg-white text-black w-full sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-md' : ''
      }`}
      style={{ 
        filter: isScrolled 
          ? 'drop-shadow(0 4px 6px rgba(34, 211, 238, 0.2))' 
          : 'drop-shadow(0 0px 3px rgba(34, 211, 238, 0.5))' 
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2 shrink-0 transition-transform duration-300 hover:scale-105">
            <img
              src="https://www.posinnove.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-posinnove.b835c3c0.png&w=384&q=75"
              alt="Posinnove logo"
              className="h-8 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <NavLinks />
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="md:hidden transition-transform duration-200 hover:bg-cyan-50 hover:text-cyan-600"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white border-l border-cyan-100">
                <SheetHeader>
                  <SheetTitle className="text-cyan-700">Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col mt-8">
                  <NavLinks />
                  <div className="mt-8 space-y-4">
                    <Button 
                      variant="default" 
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-900 text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-200"
                      size="sm"
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <div className="hidden md:block">
            <Button 
              variant="default" 
              className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-200" 
              size="sm"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
