import React from 'react';
import { Target, Book, Users } from 'lucide-react';
import FacultyNote from '../components/faculty/FacultyNote';
import CoreTeamNote from '../components/team/CoreTeamNote';

export default function About() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        {/* Faculty Note Section */}
        <FacultyNote />

        {/* Core Team Note Section */}
        <CoreTeamNote />

        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About Au Nexus
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-500">
              Au Nexus is a student-led data science club dedicated to fostering innovation,
              learning, and collaboration in the field of data science and artificial intelligence.
              We provide a platform for students to explore their interests, develop skills, and
              connect with industry professionals.
            </p>
            
            <div className="mt-12 space-y-10">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <Target className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Our Mission</h3>
                  <p className="mt-2 text-base text-gray-500">
                    To empower students with the knowledge and skills needed to excel in the
                    data-driven world of tomorrow.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <Book className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Our Vision</h3>
                  <p className="mt-2 text-base text-gray-500">
                    To create a thriving community of data science enthusiasts who drive
                    innovation and make meaningful contributions to society.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <Users className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Our Community</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Join a diverse group of students passionate about data science, machine
                    learning, and artificial intelligence.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 lg:mt-0">
            <img
              className="rounded-lg shadow-xl"
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
              alt="Team collaboration"
            />
          </div>
        </div>
      </div>
    </div>
  );
}