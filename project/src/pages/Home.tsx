import React from 'react';
import { ArrowRight, Rocket, Users, Brain, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import { events } from '../data/mockData';
import EventCard from '../components/EventCard';
import ClubHighlightsSlider from '../components/ClubHighlightsSlider';

export default function Home() {
  const upcomingEvents = events.slice(0, 3);

  return (
    <div className="bg-white">
      {/* Main Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl animate-fade-in">
                  <span className="block">Welcome to</span>
                  <span className="block text-blue-300">Au Nexus</span>
                </h1>
                <p className="mt-3 text-base text-gray-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 animate-slide-up">
                  Empowering students through data science, fostering
                  innovation, and building a community of future tech leaders.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start animate-fade-in-up">
                  <Link
                    to="/about"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10 transition-all duration-300 hover:scale-105"
                  >
                    Discover More
                  </Link>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full transform transition-transform duration-500 hover:scale-105"
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            alt="Team working on data science project"
          />
        </div>
      </div>

      {/* Club Highlights Slider */}
      <ClubHighlightsSlider />

      {/* Stats Section with Enhanced Animation */}
      <div className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Users, label: 'Active Members', value: '13+' },
              { icon: Brain, label: 'Workshops Conducted', value: '5+' },
              { icon: Trophy, label: 'Awards Won', value: '2' },
              { icon: Rocket, label: 'Projects Completed', value: '8+' },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{
                  animation: `fade-slide-up 0.5s ease-out ${index * 0.1}s`
                }}
              >
                <stat.icon className="h-8 w-8 text-blue-600 mb-4" />
                <div className="text-2xl font-bold text-blue-900">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Events Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-blue-900 sm:text-4xl">
              Upcoming Events
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Join us in our upcoming workshops, hackathons, and networking
              events.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((event) => (
              <Link
                key={event.id}
                to={`/events/${event.id}`}
                className="transform transition-all duration-300 hover:scale-105"
              >
                <EventCard event={event} />
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/events"
              className="inline-flex items-center text-blue-600 hover:text-blue-500"
            >
              View all events
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}