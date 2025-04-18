
'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

// Define the structure of a testimonial
interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Henri Nyakarundi",
    role: "Director",
    company: "FANCY GROUP, INC",
    image: "/testimony.png", 
    quote: "Working with the student team was an excellent experience. They brought fresh ideas and technical skills that helped us solve a challenging problem. Their professionalism exceeded our expectations and delivered real value to our business. We'll definitely use this platform again for future projects."
  },
  {
    name: "Sarah Johnson",
    role: "CEO",
    company: "Tech Innovations Ltd",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=500",
    quote: "The students delivered exceptional work that exceeded our expectations. Their creative approach to problem-solving and technical expertise impressed our entire team. The platform made collaboration seamless, and we've already recommended it to our partners."
  },
  {
    name: "Michael Chen",
    role: "Product Manager",
    company: "Global Solutions",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=500",
    quote: "We were blown away by the quality of work from the student team. They quickly understood our challenges and delivered a solution that was both innovative and practical. Their communication was excellent throughout the project, making the whole process smooth and enjoyable."
  }
];

const TestimonialsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<'right' | 'left' | null>(null);
  
  const goToPrevious = () => {
    setSlideDirection('left');
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const goToNext = () => {
    setSlideDirection('right');
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1 
          className="text-3xl font-bold text-gray-900 mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What Other Employers Are Saying
        </motion.h1>
        
        <div className="bg-white rounded-lg px-4 md:px-8 max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentIndex}
              initial={{ opacity: 0, x: slideDirection === 'right' ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: slideDirection === 'right' ? -100 : 100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-2/5">
                  <motion.div 
                    className="relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Avatar className="w-full h-auto aspect-square max-w-[280px] rounded-lg overflow-hidden shadow-lg">
                      <AvatarImage 
                        src={testimonials[currentIndex].image} 
                        alt={testimonials[currentIndex].name}
                        className="object-cover w-full h-full" 
                      />
                      <AvatarFallback className="text-4xl bg-blue-100 text-blue-800 w-full h-full">
                        {testimonials[currentIndex].name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                  </motion.div>
                </div>
                <div className="md:w-3/5 py-6 md:py-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h2 className="text-2xl font-bold text-gray-900">{testimonials[currentIndex].name}</h2>
                    <p className="text-sm text-gray-600 mb-4">{testimonials[currentIndex].role} at {testimonials[currentIndex].company}</p>
                    <p className="text-gray-700 mb-8 text-lg leading-relaxed ">
                      "{testimonials[currentIndex].quote}"
                    </p>
                  </motion.div>
                  <div className="flex justify-center space-x-4 mt-8">
                    <motion.button 
                      onClick={goToPrevious}
                      className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ChevronLeft className="h-6 w-6 text-gray-700" />
                    </motion.button>
                    <motion.button 
                      onClick={goToNext}
                      className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ChevronRight className="h-6 w-6 text-gray-700" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
