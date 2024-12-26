import React from 'react';
import { GraduationCap, Quote } from 'lucide-react';

export default function FacultyNote() {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white p-8 rounded-xl shadow-2xl mb-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-6">
          <GraduationCap className="h-10 w-10 mr-4" />
          <h2 className="text-2xl font-bold">Message from HOD</h2>
        </div>
        <div className="relative">
          <Quote className="absolute -left-4 -top-4 h-8 w-8 text-blue-400 opacity-50" />
          <blockquote className="pl-8 text-lg leading-relaxed">
            "At AU NEXUS, we're committed to fostering innovation and excellence in data science. 
            Our club provides students with hands-on experience and industry exposure, preparing them 
            for successful careers in technology. I'm proud to see our students taking initiative and 
            building a strong community of learners and future leaders."
          </blockquote>
          <div className="mt-6 flex items-center">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Dr. M Sriddhavi"
              className="h-12 w-12 rounded-full object-cover border-2 border-blue-400"
            />
            <div className="ml-4">
              <div className="font-semibold">Dr. M Sriddhavi</div>
              <div className="text-blue-300 text-sm">Head of Department, Data Science</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}