import React from 'react';
import { Clock, User, Calendar } from 'lucide-react';
import { format } from 'date-fns';

interface VideoCardProps {
  video: {
    id: string;
    title: string;
    description: string;
    url: string;
    thumbnail: string;
    duration: string;
    publishedAt: Date;
    author: {
      name: string;
      avatar: string;
    };
  };
}

export default function VideoCard({ video }: VideoCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
      <div className="relative aspect-video">
        <iframe
          src={video.url}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors">
          {video.title}
        </h3>
        <p className="mt-2 text-gray-600 line-clamp-2">{video.description}</p>
        <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              <span>{video.author.name}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{video.duration}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{format(video.publishedAt, 'MMM d, yyyy')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}