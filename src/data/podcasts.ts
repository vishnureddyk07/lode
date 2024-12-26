import { PodcastEpisode } from '../types';

export const textContent: PodcastEpisode[] = [
  {
    id: '1',
    title: 'Getting Started with Data Science',
    description: 'A comprehensive guide to beginning your journey in data science and machine learning.',
    type: 'text',
    content: `Data science is a rapidly evolving field that combines statistics, programming, and domain expertise. In this guide, we'll explore:

    1. Essential Python libraries for data science
    2. Basic statistical concepts
    3. Data visualization techniques
    4. Machine learning fundamentals
    5. Best practices for data preprocessing`,
    duration: '10 min read',
    publishedAt: new Date('2024-03-15'),
    author: {
      id: '1',
      name: 'Dr. Sarah Wilson',
      email: 'sarah@example.com',
      role: 'Data Science Lead',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330'
    }
  },
  {
    id: '2',
    title: 'Understanding Neural Networks',
    description: 'Deep dive into neural networks and their applications in modern AI.',
    type: 'text',
    content: `Neural networks are the backbone of modern AI systems. This article covers:

    1. Basic neural network architecture
    2. Different types of neural networks
    3. Training methodologies
    4. Real-world applications
    5. Future trends in deep learning`,
    duration: '15 min read',
    publishedAt: new Date('2024-03-18'),
    author: {
      id: '2',
      name: 'Prof. James Chen',
      email: 'james@example.com',
      role: 'AI Researcher',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'
    }
  }
];

export const videoContent: PodcastEpisode[] = [
  {
    id: '1',
    title: 'AU NEXUS - Data Science Club Introduction',
    description: 'Welcome to AU NEXUS! Learn about our mission, activities, and how you can be part of our journey.',
    type: 'video',
    url: 'https://www.youtube.com/embed/E69Lg2ZgOxg',
    thumbnail: 'https://img.youtube.com/vi/E69Lg2ZgOxg/maxresdefault.jpg',
    duration: '3:21',
    publishedAt: new Date('2024-03-20'),
    author: {
      id: '3',
      name: 'AU NEXUS Team',
      email: 'team@aunexus.com',
      role: 'Club Team',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'
    }
  }
];