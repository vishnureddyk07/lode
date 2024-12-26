import { Article } from '../types';

export const articles: Article[] = [
  {
    id: '1',
    title: 'Getting Started with Python for Data Science',
    content: 'A comprehensive guide to Python basics for data science. Learn about data structures, pandas, numpy, and more.',
    author: {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Technical Lead',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'
    },
    createdAt: new Date('2024-03-01'),
    category: 'Tutorial',
    imageUrl: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935'
  },
  {
    id: '2',
    title: 'Machine Learning Fundamentals',
    content: 'Understanding the basics of machine learning algorithms and their applications in real-world scenarios.',
    author: {
      id: '2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'AI Researcher',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330'
    },
    createdAt: new Date('2024-03-10'),
    category: 'Education',
    imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4'
  },
  {
    id: '3',
    title: 'Deep Learning with PyTorch',
    content: 'Explore deep learning concepts using PyTorch framework. Build neural networks from scratch.',
    author: {
      id: '3',
      name: 'Mike Johnson',
      email: 'mike@example.com',
      role: 'ML Engineer',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e'
    },
    createdAt: new Date('2024-03-15'),
    category: 'Deep Learning',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3'
  }
];