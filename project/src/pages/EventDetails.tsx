import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, MapPin, ArrowLeft } from 'lucide-react';
import { events } from '../data/mockData';
import { format } from 'date-fns';

export default function EventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = events.find(e => e.id === id);

  if (!event) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Event not found</h2>
          <button
            onClick={() => navigate('/events')}
            className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-500"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to events
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate('/events')}
          className="mb-8 inline-flex items-center text-indigo-600 hover:text-indigo-500"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to events
        </button>

        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          {event.imageUrl && (
            <img
              className="w-full h-96 object-cover"
              src={event.imageUrl}
              alt={event.title}
            />
          )}
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900">{event.title}</h1>
            
            <div className="mt-6 flex items-center space-x-6 text-gray-500">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                {format(event.date, 'PPP')}
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                {event.location}
              </div>
            </div>

            <div className="mt-8 prose prose-indigo max-w-none">
              <h2 className="text-xl font-semibold text-gray-900">About this event</h2>
              <p className="mt-4 text-gray-600">{event.description}</p>
              
              <h2 className="mt-8 text-xl font-semibold text-gray-900">What you'll learn</h2>
              <ul className="mt-4 text-gray-600">
                <li>Understanding of key concepts and methodologies</li>
                <li>Hands-on experience with industry tools</li>
                <li>Best practices and real-world applications</li>
                <li>Networking opportunities with peers and professionals</li>
              </ul>
            </div>

            <div className="mt-8">
              <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                Register for Event
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}