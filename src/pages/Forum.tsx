import React from 'react';
import { forumPosts } from '../data/mockData';
import ForumPostCard from '../components/ForumPostCard';

export default function Forum() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Community Forum
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Join the discussion with fellow data science enthusiasts
          </p>
        </div>
        <div className="mt-12 space-y-6">
          {forumPosts.map((post) => (
            <ForumPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}