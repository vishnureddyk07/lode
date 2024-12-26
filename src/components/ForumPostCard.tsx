import React from 'react';
import { MessageSquare, User, Clock } from 'lucide-react';
import { ForumPost } from '../types';
import { format } from 'date-fns';

interface ForumPostCardProps {
  post: ForumPost;
}

export default function ForumPostCard({ post }: ForumPostCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between">
        <div className="text-sm text-indigo-600">{post.category}</div>
        <div className="flex items-center text-sm text-gray-500">
          <MessageSquare className="h-4 w-4 mr-1" />
          {post.replies.length} replies
        </div>
      </div>
      <h3 className="mt-2 text-xl font-semibold text-gray-900">{post.title}</h3>
      <p className="mt-2 text-gray-600">{post.content}</p>
      <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center">
          <User className="h-4 w-4 mr-1" />
          {post.author.name}
        </div>
        <div className="flex items-center">
          <Clock className="h-4 w-4 mr-1" />
          {format(post.createdAt, 'PP')}
        </div>
      </div>
    </div>
  );
}