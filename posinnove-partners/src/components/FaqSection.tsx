"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  question: string;
  answer: string;
}

const FaqSection: React.FC = () => {
  const faqs: FaqItem[] = [
    {
      question: "What is Design Helpers?",
      answer: "Design Helpers is a platform that connects businesses with talented student teams for project-based work. We help companies access fresh perspectives and specialized skills while providing students with real-world experience."
    },
    {
      question: "Why should I use Design Helpers?",
      answer: "Design Helpers provides access to skilled students, cost-effective solutions, fresh perspectives, and a risk-free way to complete projects. Our careful matching process ensures quality results."
    },
    {
      question: "How does it work?",
      answer: "Simply submit your project details, we match you with the best student team for your needs, you approve the team, and then they deliver high-quality work while you provide feedback throughout the process."
    },
    {
      question: "What kind of students do you work with?",
      answer: "We work with top-performing students from prestigious universities across various disciplines including design, development, marketing, and business. All students are vetted for skills and professionalism."
    },
    {
      question: "How much does it cost?",
      answer: "Pricing depends on project scope, duration, and skill requirements. We offer competitive rates compared to traditional agencies while maintaining professional quality standards."
    }
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-platformGray-900">
            Frequent Asked Questions
          </h2>
          <div className="w-24 h-1 bg-platformBlue mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Accordion type="single" collapsible defaultValue="item-0" className="border border-platformGray-200 rounded-lg overflow-hidden">
              {faqs.map((faq, index) => (
                <div key={index}>
                  <AccordionItem value={`item-${index}`} className="border-0">
                    <AccordionTrigger className="px-4 py-4 hover:no-underline">
                      <span className="font-medium text-platformGray-900 text-left">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 pt-0">
                      <p className="text-platformGray-600 text-sm">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                  {index < faqs.length - 1 && (
                    <Separator className="mx-4 bg-platformGray-200" />
                  )}
                </div>
              ))}
            </Accordion>
          </div>
          
          <div className="hidden md:block">
            <img 
              src="/images/faq.png" 
              alt="Students working" 
              className="rounded-lg h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
