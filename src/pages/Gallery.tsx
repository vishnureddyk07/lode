import React from 'react';

const galleryImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    title: 'Data Science Workshop',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    title: 'Team Meeting',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1558137623-ce933996c730?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    title: 'Hackathon',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1531498860502-7c67cf02f657?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    title: 'Guest Speaker',
  },
  {
    id: 5, // New Image 1
    url: 'https://images.unsplash.com/photo-1542744095-b6186592ec9a?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjc0NXwwfDF8c2VhcmNofDh8fHBob3RvY3Jhc2hpcHxlbnwwfHx8fDE2Nzk5NjA0ODg&ixlib=rb-1.2.1&q=80&w=1080',
    title: 'Annual Conference',
  },
  {
    id: 6, // New Image 2
    url: 'https://images.unsplash.com/photo-1503503298046-79e29cf914c3?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjc0NXwwfDF8c2VhcmNofDJ8fHBob3RvY3Jhc2hpcHxlbnwwfHx8fDE2Nzk5NjA0NzQ&ixlib=rb-1.2.1&q=80&w=1080',
    title: 'Networking Event',
  },
];

export default function Gallery() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Photo Gallery
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Capturing moments from our events and activities
          </p>
        </div>
        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image) => (
            <div key={image.id} className="relative group">
              <div className="relative h-64 w-full overflow-hidden rounded-lg bg-white">
                <img
                  src={image.url}
                  alt={image.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white p-4 font-medium">{image.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
