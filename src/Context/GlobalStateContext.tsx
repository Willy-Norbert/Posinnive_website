
'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the structure for our testimonial
interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
}

// Define the structure for our project
interface Project {
  category: string;
  image: string;
  title: string;
  projectsCount: string;
  ctaText: string;
}

// Define what our global state will contain
interface GlobalStateContextType {
  testimonials: Testimonial[];
  currentTestimonialIndex: number;
  slideDirection: 'right' | 'left' | null;
  projects: Project[];
  selectedProjectIndex: number;
  setCurrentTestimonialIndex: (index: number) => void;
  setSlideDirection: (direction: 'right' | 'left' | null) => void;
  setSelectedProjectIndex: (index: number) => void;
}


const GlobalStateContext = createContext<GlobalStateContextType | undefined>(undefined);


const testimonialData: Testimonial[] = [
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

// Sample data for projects
const projectData = [
   {
    category: 'UI/UX desdesign', 
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    title: 'Develop a website page and application you have in mind. Work with our top tier web designers and programmers.',
    projectsCount: '12+ Web Projects finished',
    ctaText: 'See the work'
  },
  {
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    title: 'Create intuitive and beautiful user interfaces that enhance the user experience of your digital products.',
    projectsCount: '20+ Web Projects finished',
    ctaText: 'See the work'
  },
  {
    category: 'Mobile Apps',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    title: 'Develop mobile applications for iOS and Android platforms with our expert development team.',
    projectsCount: '15+ Mobile Projects finished',
    ctaText: 'See the work'
  },
  {
    category: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334',
    title: 'Build powerful online stores that drive sales and provide excellent customer experiences.',
    projectsCount: '8+ E-commerce Projects finished',
    ctaText: 'See the work'
  },
  {
    category: 'UI/UX desdesign', 
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    title: 'Develop a website page and application you have in mind. Work with our top tier web designers and programmers.',
    projectsCount: '12+ Web Projects finished',
    ctaText: 'See the work'
  },
  {
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    title: 'Create intuitive and beautiful user interfaces that enhance the user experience of your digital products.',
    projectsCount: '20+ Web Projects finished',
    ctaText: 'See the work'
  },
  {
    category: 'Mobile Apps',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    title: 'Develop mobile applications for iOS and Android platforms with our expert development team.',
    projectsCount: '15+ Mobile Projects finished',
    ctaText: 'See the work'
  },
  {
    category: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334',
    title: 'Build powerful online stores that drive sales and provide excellent customer experiences.',
    projectsCount: '8+ E-commerce Projects finished',
    ctaText: 'See the work'
  },
  {
    category: 'UI/UX desdesign', 
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    title: 'Develop a website page and application you have in mind. Work with our top tier web designers and programmers.',
    projectsCount: '12+ Web Projects finished',
    ctaText: 'See the work'
  },
  {
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    title: 'Create intuitive and beautiful user interfaces that enhance the user experience of your digital products.',
    projectsCount: '20+ Web Projects finished',
    ctaText: 'See the work'
  },
  {
    category: 'Mobile Apps',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    title: 'Develop mobile applications for iOS and Android platforms with our expert development team.',
    projectsCount: '15+ Mobile Projects finished',
    ctaText: 'See the work'
  },
  {
    category: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334',
    title: 'Build powerful online stores that drive sales and provide excellent customer experiences.',
    projectsCount: '8+ E-commerce Projects finished',
    ctaText: 'See the work'
  },
];


export const GlobalStateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<'right' | 'left' | null>(null);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  
 
  const [testimonials] = useState<Testimonial[]>(testimonialData);
  const [projects] = useState(projectData);

  const value = {
    testimonials,
    currentTestimonialIndex,
    slideDirection,
    projects,
    selectedProjectIndex,
    setCurrentTestimonialIndex,
    setSlideDirection,
    setSelectedProjectIndex,
  };

  return (
    <GlobalStateContext.Provider value={value}>
      {children}
    </GlobalStateContext.Provider>
  );
};


export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (context === undefined) {
    throw new Error('useGlobalState must be used within a GlobalStateProvider');
  }
  return context;
};
