import React from 'react';
import { Clock, User } from 'lucide-react';
import { Article } from '../types';
import { format } from 'date-fns';

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {article.imageUrl && (
        <img
          className="h-48 w-full object-cover"
          src={article.imageUrl}
          alt={article.title}
        />
      )}
      <div className="p-6">
        <div className="text-sm text-indigo-600">{article.category}</div>
        <h3 className="mt-2 text-xl font-semibold text-gray-900">{article.title}</h3>
        <p className="mt-2 text-gray-600 line-clamp-3">{article.content}</p>
        <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            {article.author.name}
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {format(article.createdAt, 'PP')}
          </div>
        </div>
      </div>
    </div>
  );
}