"use client";

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

interface FaqItem {
  question: string;
  answer: string;
}

const FaqSection: React.FC = () => {
  const faqs: FaqItem[] = [
    {
      question: "What is Posinnove?",
      answer: "Posinnove is a project-based learning platform that connects learners with real-world projects aligned with industry needs. By integrating Posinnove, your institution can enhance student employability through hands-on experience and industry-relevant skills.",
    },
    {
      question: "How can our organization benefit from Posinnove?",
      answer: "Your organization can submit real-world projects that align with your business needs. Our vetted learners will work on them as part of their learning journey. You benefit by receiving innovative solutions and access to trained digital talent.",
    },    {
      question: " How do we track the project’s progress?",
      answer: "Organizations receive regular updates and can interact with the assigned learners and mentors through our platform. We facilitate a feedback loop to ensure project success. ",
    },    {
      question: "How are learners selected for our projects?",
      answer: "Posinnove selects learners who have completed foundational training and are ready to work on industry-level projects. We ensure a good match between learner skills and your project needs.",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24" id='faq'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold relative z-10 inline-block">
            Frequent Asked Questions
          </h2>
          {/* bending angle line */}
          <div className="flex items-center justify-center space-x-0.1 py-3 hue-rotate-15 ">
          <div className="w-6 h-0.5 bg-blue-900 transform rotate-[45deg] origin-right" />
          <div className="w-90 h-0.5 bg-blue-900 rotate-[-2deg] origin-left" />
        </div>
      </div>
      <hr className='p-1 border-gray-200 ' />
        <div className="grid md:grid-cols-3 p-7 gap-6 ">
          <div className="md:col-span-2 h-[400px] overflow-y-scroll pr-2 scrollbar-custom">
            {faqs.map((faq, index) => (
              <div key={index} className={`rounded-md border mb-4 transition-all ${index === 0 ? "bg-gray-100 border-gray-300" : "border-gray-200"}`}>
                <Accordion type="single" collapsible>
                  <AccordionItem value={`item-${index}`} className="border-none">
                    <AccordionTrigger className="px-4 bg-gray-100 py-4 font-medium text-left text-sm text-gray-800">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 bg-gray-100 pt-0 text-sm text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ))}
          </div>
          <div className="hidden md:block h-[400px]">
            <img
              src="/Rectangle7.png"
              alt="Girl on swing"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
        <hr className='border-gray-200 border-1'/>
      </div>
   {/* Custom Scrollbar */}
      <style jsx>{`
        .custom-scroll {
          scrollbar-width: thin;
          scrollbar-color: #1a181b #f4f4f4;
          overflow-y: scroll;
        }

        .custom-scroll::-webkit-scrollbar {
          width: 12px;
        }

        .custom-scroll::-webkit-scrollbar-track {
          background: #f4f4f4;
          border-radius: 9999px;
          position: relative;
        }

        .custom-scroll::-webkit-scrollbar-thumb {
          background-color: #1a181b;
          border-radius: 9999px;
          border: 2px solid #f4f4f4;
        }

        .custom-scroll::-webkit-scrollbar-button:single-button {
          display: block;
          height: 16px;
          background-color: #f4f4f4;
        }

        .custom-scroll::-webkit-scrollbar-button:single-button:vertical:decrement {
          background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg width='8' height='8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='0,6 4,2 8,6' fill='%23000000'/%3E%3C/svg%3E");
        }

        .custom-scroll::-webkit-scrollbar-button:single-button:vertical:increment {
          background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg width='8' height='8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='0,2 4,6 8,2' fill='%23000000'/%3E%3C/svg%3E");
        }
      `}</style>
    
    </section>
  );
};

export default FaqSection;