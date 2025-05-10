'use client';

import React, { useEffect, useState } from 'react';
import { cn } from '@/utils/utils';
import { Card } from '@/components/ui/card';
import { Partner } from '@/Data/partnersData';
import { ArrowUpRight } from 'lucide-react';

interface PartnerCardProps {
  partner: Partner;
  className?: string;
  style?: React.CSSProperties;
}

interface DotPosition {
  top: string;
  left: string;
  animationDuration: string;
  animationDelay: string;
}

const PartnerCard = ({ partner, className, style }: PartnerCardProps) => {
  const [dots, setDots] = useState<DotPosition[]>([]);

  useEffect(() => {
    const generatedDots = Array.from({ length: 5 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDuration: `${2 + Math.random() * 3}s`,
      animationDelay: `${Math.random() * 2}s`,
    }));
    setDots(generatedDots);
  }, []);

  return (
    <Card
      className={cn(
        "group relative bg-white/5 backdrop-blur-lg border-white/10 p-6 rounded-2xl transition-all duration-700",
        "hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_50px_rgba(255,255,255,0.1)] overflow-hidden",
        "transform hover:translate-z-10 hover:scale-105 hover:rotate-y-5",
        className
      )}
      style={style}
    >
      {/* Dynamic Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {dots.map((dot, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              top: dot.top,
              left: dot.left,
              animation: `float ${dot.animationDuration} linear infinite`,
              animationDelay: dot.animationDelay,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Enhanced Logo Display */}
        <div className="h-16 flex items-center mb-6 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shine" />
          <img
            src={partner.logo}
            alt={`${partner.name} logo`}
            className="max-h-full w-auto group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-110"
          />
        </div>

        {/* Enhanced Text Content */}
        <h3 className="text-white text-xl font-semibold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-200 transition-all duration-700">
          {partner.name}
        </h3>
        <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-700">
          {partner.description}
        </p>
      </div>

      {/* Interactive Arrow */}
      <div className="absolute top-4 right-4 transform translate-x-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700">
        <ArrowUpRight className="w-5 h-5 text-purple-300" />
      </div>

      {/* Hover Effect Corner */}
      <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent transform rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </Card>
  );
};

export default PartnerCard;
