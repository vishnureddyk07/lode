import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { User, Clock, ArrowLeft } from 'lucide-react';
import { articles } from '../data/mockData';
import { format } from 'date-fns';

export default function ArticleDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = articles.find(a => a.id === id);

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Article not found</h2>
          <button
            onClick={() => navigate('/articles')}
            className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-500"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to articles
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate('/articles')}
          className="mb-8 inline-flex items-center text-indigo-600 hover:text-indigo-500"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to articles
        </button>

        <article className="bg-white rounded-lg shadow-xl overflow-hidden">
          {article.imageUrl && (
            <img
              className="w-full h-96 object-cover"
              src={article.imageUrl}
              alt={article.title}
            />
          )}
          <div className="p-8">
            <div className="text-sm text-indigo-600">{article.category}</div>
            <h1 className="mt-2 text-3xl font-bold text-gray-900">{article.title}</h1>
            
            <div className="mt-6 flex items-center space-x-6 text-gray-500">
              <div className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                {article.author.name}
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                {format(article.createdAt, 'PPP')}
              </div>
            </div>

            <div className="mt-8 prose prose-indigo max-w-none">
              <p className="text-gray-600">{article.content}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}