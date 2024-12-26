import React from 'react';
import { Calendar, MapPin, Check } from 'lucide-react';
import { Event } from '../types';
import { format } from 'date-fns';

interface EventCardProps {
  event: Event;
  isCompleted?: boolean;
}

export default function EventCard({ event, isCompleted = false }: EventCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group">
      <div className="relative">
        {event.imageUrl && (
          <img
            className="h-48 w-full object-cover transform transition-transform duration-300 group-hover:scale-110"
            src={event.imageUrl}
            alt={event.title}
          />
        )}
        {isCompleted && (
          <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full flex items-center">
            <Check className="h-4 w-4 mr-1" />
            Completed
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
          {event.title}
        </h3>
        <p className="mt-2 text-gray-600 line-clamp-2">{event.description}</p>
        <div className="mt-4 space-y-2">
          <div className="flex items-center text-gray-500">
            <Calendar className="h-5 w-5 mr-2 text-blue-500" />
            {format(event.date, 'PPP')}
          </div>
          <div className="flex items-center text-gray-500">
            <MapPin className="h-5 w-5 mr-2 text-blue-500" />
            {event.location}
          </div>
        </div>
      </div>
    </div>
  );
}