import React, { useState } from 'react';
import ArticleCard from '../components/ArticleCard';
import SearchBar from '../components/SearchBar';
import { articles } from '../data/articles';

export default function Articles() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = articles.filter(article => 
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Articles</h2>
          <SearchBar 
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search articles..."
          />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No articles found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}