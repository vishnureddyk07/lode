import React, { useState } from 'react';
import { Video, AlertCircle } from 'lucide-react';
import VideoCard from '../components/podcast/VideoCard';
import SearchBar from '../components/podcast/SearchBar';

export default function Podcast() {
  const [searchQuery, setSearchQuery] = useState('');

  const videos = [
    {
      id: '1',
      title: 'AU NEXUS - Data Science Club Introduction',
      description: 'Welcome to AU NEXUS! Learn about our mission, activities, and how you can be part of our journey.',
      url: 'https://www.youtube.com/embed/E69Lg2ZgOxg',
      thumbnail: 'https://img.youtube.com/vi/E69Lg2ZgOxg/maxresdefault.jpg',
      duration: '3:21',
      publishedAt: new Date('2024-03-20'),
      author: {
        name: 'AU NEXUS Team',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'
      }
    }
  ];

  const filteredVideos = videos.filter(video =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    video.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <Video className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">AU NEXUS Content Hub</h1>
          <p className="text-xl text-gray-600">Watch our latest videos and stay updated with club activities</p>
        </div>

        <div className="mb-8">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search videos..."
          />
        </div>

        {filteredVideos.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 animate-fade-in">
            {filteredVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-md animate-fade-in">
            <AlertCircle className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Videos Found</h3>
            <p className="text-gray-600">
              {searchQuery ? 'No videos match your search criteria.' : 'More videos coming soon!'}
            </p>
          </div>
        )}

        <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 animate-fade-in">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Want to Contribute?</h2>
          <p className="text-gray-700">
            If you're interested in creating content for AU NEXUS or have ideas for videos,
            please reach out to our content team lead, Shainy Reddy, at content@aunexus.org
          </p>
        </div>
      </div>
    </div>
  );
}