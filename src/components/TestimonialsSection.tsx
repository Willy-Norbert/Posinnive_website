'use client';

import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/utils/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useGlobalState } from '@/Context/GlobalStateContext'; // adjust path if needed

const TestimonialsCarousel: React.FC = () => {
  const {
    testimonials,
    currentTestimonialIndex,
    setCurrentTestimonialIndex,
    slideDirection,
    setSlideDirection,
  } = useGlobalState();

  const goToPrevious = () => {
    setSlideDirection('left');
    setCurrentTestimonialIndex(
      currentTestimonialIndex === 0
        ? testimonials.length - 1
        : currentTestimonialIndex - 1
    );
  };

  const goToNext = () => {
    setSlideDirection('right');
    setCurrentTestimonialIndex(
      currentTestimonialIndex === testimonials.length - 1
        ? 0
        : currentTestimonialIndex + 1
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
              key={currentTestimonialIndex}
              initial={{
                opacity: 0,
                x: slideDirection === 'right' ? 100 : -100,
              }}
              animate={{ opacity: 1, x: 0 }}
              exit={{
                opacity: 0,
                x: slideDirection === 'right' ? -100 : 100,
              }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
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
                        src={testimonials[currentTestimonialIndex].image}
                        alt={testimonials[currentTestimonialIndex].name}
                        className="object-cover w-full h-full"
                      />
                      <AvatarFallback className="text-4xl bg-blue-100 text-blue-800 w-full h-full">
                        {testimonials[currentTestimonialIndex].name.charAt(0)}
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
                    <h2 className="text-2xl font-bold text-gray-900">
                      {testimonials[currentTestimonialIndex].name}
                    </h2>
                    <p className="text-sm text-gray-600 mb-4">
                      {testimonials[currentTestimonialIndex].role} at{' '}
                      {testimonials[currentTestimonialIndex].company}
                    </p>
                    <p className="text-gray-700 mb-8 text-lg leading-relaxed ">
                      "
                      {testimonials[currentTestimonialIndex].quote}
                      "
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
