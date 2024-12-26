import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { pastEvents, futureEvents } from '../data/mockData';
import EventCard from '../components/EventCard';
import { Tabs, Tab } from '../components/Tabs';

export default function Events() {
  const [activeTab, setActiveTab] = useState('upcoming');

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <Calendar className="mx-auto h-12 w-12 text-blue-600 mb-4" />
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Events Calendar
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Join us for workshops, hackathons, and networking events
          </p>
        </div>

        <div className="mt-12">
          <Tabs activeTab={activeTab} onChange={setActiveTab}>
            <Tab id="upcoming" label="Upcoming Events">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {futureEvents.map((event, index) => (
                  <div
                    key={event.id}
                    className="transform transition-all duration-500 hover:scale-105"
                    style={{
                      animation: `fade-slide-up 0.5s ease-out ${index * 0.1}s both`
                    }}
                  >
                    <Link to={`/events/${event.id}`}>
                      <EventCard event={event} />
                    </Link>
                  </div>
                ))}
              </div>
            </Tab>
            <Tab id="past" label="Past Events">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {pastEvents.map((event, index) => (
                  <div
                    key={event.id}
                    className="transform transition-all duration-500 hover:scale-105 opacity-80 hover:opacity-100"
                    style={{
                      animation: `fade-slide-up 0.5s ease-out ${index * 0.1}s both`
                    }}
                  >
                    <Link to={`/events/${event.id}`}>
                      <EventCard event={event} isCompleted />
                    </Link>
                  </div>
                ))}
              </div>
            </Tab>
          </Tabs>
        </div>

        <div className="mt-12 text-center animate-fade-in">
          <Link
            to="/about"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
          >
            Learn more about our community
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}