import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Award, Code, Users, Brain } from 'lucide-react';

const highlights = [
  {
    title: "Technical Excellence",
    description: "Dive into cutting-edge data science and AI projects",
    icon: Code,
    bgImage: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
  },
  {
    title: "Community Learning",
    description: "Learn and grow together with like-minded peers",
    icon: Users,
    bgImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
  },
  {
    title: "Innovation Hub",
    description: "Transform ideas into impactful solutions",
    icon: Brain,
    bgImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
  },
  {
    title: "Recognition",
    description: "Showcase your talents and earn recognition",
    icon: Award,
    bgImage: "https://images.unsplash.com/photo-1496065187959-7f07b8353c55?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
  }
];

export default function ClubHighlightsSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % highlights.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % highlights.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + highlights.length) % highlights.length);
  };

  return (
    <div className="relative h-[500px] overflow-hidden">
      {highlights.map((highlight, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${highlight.bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="h-full flex items-center justify-center">
            <div className="text-center text-white px-4">
              <highlight.icon className="mx-auto h-16 w-16 mb-6 animate-bounce" />
              <h2 className="text-4xl font-bold mb-4 animate-fade-in">
                {highlight.title}
              </h2>
              <p className="text-xl animate-fade-in-up">
                {highlight.description}
              </p>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {highlights.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}