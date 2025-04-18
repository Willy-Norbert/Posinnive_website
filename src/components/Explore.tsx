"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
const Explore: React.FC = () => {
  return (
    <section className="bg-white min-h-[90vh] flex items-center" id="explore">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-5">
        <div className="lg:flex lg:items-center lg:justify-between">
          <motion.div 
            className="lg:w-1/2 lg:pr-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.p 
              className="text-sm font-light tracking-wider md:mb-2 mb-5 text-blue-900 "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Posinnove for Organizations
            </motion.p>
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6  leading-tight"
              style={{ color: '#484848' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Achieve success by leveraging students' expertise to elevate your projects.
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Find the perfect student team to help implement your ideas. They bring fresh perspectives, 
              technical skills, and innovation to make your projects stand out and reach their full potential.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <Button className="px-6 py-3 bg-blue-900 font-medium hover:bg-blue-800 transition-colors duration-300">
                Propose Project
              </Button>
              <Button
                variant="outline"
                className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white px-6 py-3 font-medium transition-all duration-300"
              >
                Book Demo
              </Button>
            </motion.div>
          </motion.div>
          <motion.div 
            className="mt-10 lg:mt-0 lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative">
              <motion.img 
                src="/python.png" 
                alt="Student collaboration" 
                className="rounded-lg  w-full"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div 
                className="absolute  md:left-88 left-28 transform -translate-x-1/2 flex items-center justify-center mb-0 mt-10 bottom-[-32px] space-x-2  rounded-full md:bottom-[-30px] "
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <img src="/images/Group.png" alt="Active Talents" className="w-14 h-14 object-contain" />
                <p className="text-gray-800 text-base font-medium">200+ Active Talents</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
