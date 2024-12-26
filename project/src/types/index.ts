// Add to the existing PodcastEpisode interface
export interface PodcastEpisode {
  id: string;
  title: string;
  description: string;
  type: 'text' | 'video';
  content?: string;
  url?: string;
  thumbnail?: string;
  duration: string;
  publishedAt: Date;
  author: User;
}