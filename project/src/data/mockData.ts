import { Event, Article, ForumPost, User } from '../types';

const mockUser: User = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  role: 'member',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
};

export const pastEvents: Event[] = [
  {
    id: '3',
    title: 'Machine Learning Workshop',
    description: 'Introduction to machine learning algorithms and practical applications.',
    date: new Date('2024-02-15'),
    location: 'Virtual Event',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80'
  },
  {
    id: '4',
    title: 'Data Visualization Seminar',
    description: 'Learn to create compelling visualizations using modern tools.',
    date: new Date('2024-01-20'),
    location: 'Room 202, Tech Building',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80'
  },
  {
    id: '5',
    title: 'Python Programming Contest',
    description: 'Test your Python skills in this exciting competition.',
    date: new Date('2024-01-10'),
    location: 'Computer Lab',
    imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80'
  }
];

export const futureEvents: Event[] = [
  {
    id: '1',
    title: 'Data Science Workshop',
    description: 'Learn the fundamentals of data analysis and visualization.',
    date: new Date('2024-04-15'),
    location: 'Room 101, Science Building',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80'
  },
  {
    id: '2',
    title: 'AI Hackathon',
    description: 'Build innovative AI solutions in 24 hours.',
    date: new Date('2024-05-01'),
    location: 'Main Hall',
    imageUrl: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80'
  },
  {
    id: '6',
    title: 'Deep Learning Summit',
    description: 'Explore the latest advances in deep learning and neural networks.',
    date: new Date('2024-06-01'),
    location: 'Conference Center',
    imageUrl: 'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80'
  }
];

export const events = [...futureEvents, ...pastEvents];

// Rest of the mock data remains the same
export const articles = [
  {
    id: '1',
    title: 'Getting Started with Python for Data Science',
    content: 'A comprehensive guide to Python basics for data science...',
    author: mockUser,
    createdAt: new Date('2024-03-01'),
    category: 'Tutorial',
    imageUrl: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80'
  },
  {
    id: '2',
    title: 'Machine Learning Fundamentals',
    content: 'Understanding the basics of machine learning algorithms...',
    author: mockUser,
    createdAt: new Date('2024-03-10'),
    category: 'Education',
    imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80'
  }
];

export const forumPosts: ForumPost[] = [
  {
    id: '1',
    title: 'Best Resources for Learning Data Science',
    content: 'What are your recommended resources for beginners?',
    author: mockUser,
    createdAt: new Date('2024-03-15'),
    category: 'Discussion',
    replies: []
  },
  {
    id: '2',
    title: 'Python vs R for Data Analysis',
    content: 'Which one should I learn first?',
    author: mockUser,
    createdAt: new Date('2024-03-16'),
    category: 'Question',
    replies: []
  }
];