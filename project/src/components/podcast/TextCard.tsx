import React from 'react';
import { FileText, Clock, User, Calendar } from 'lucide-react';
import { format } from 'date-fns';
import { PodcastEpisode } from '../../types';

interface TextCardProps {
  content: PodcastEpisode;
}

export default function TextCard({ content }: TextCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors">
            {content.title}
          </h3>
          <p className="mt-2 text-gray-600">{content.description}</p>
        </div>
        <FileText className="h-8 w-8 text-blue-500 flex-shrink-0 ml-4" />
      </div>
      <div className="mt-4 prose prose-blue max-w-none">
        <div className="whitespace-pre-line text-gray-700">{content.content}</div>
      </div>
      <div className="mt-6 flex items-center justify-between text-sm text-gray-500 border-t pt-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            <span>{content.author.name}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{content.duration}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{format(content.publishedAt, 'MMM d, yyyy')}</span>
          </div>
        </div>
      </div>
    </div>
  );
}