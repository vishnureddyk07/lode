import { Event } from '../types';

export const futureEvents: Event[] = [
  {
    id: '1',
    title: 'Data Dive 2024',
    description:
      'Join us for an immersive data science hackathon where participants will tackle real-world challenges using advanced analytics and machine learning. This 24-hour event features mentorship from industry experts, workshops, and exciting prizes.',
    date: new Date('2024-12-20'),
    location: 'Anurag University, Main Auditorium',
    imageUrl:
      'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
    registrationLink: 'https://forms.google.com/datadive2024',
    agenda: [
      { time: '9:00 AM', activity: 'Registration & Breakfast' },
      {
        time: '10:00 AM',
        activity: 'Opening Ceremony & Problem Statement Release',
      },
      { time: '11:00 AM', activity: 'Hacking Begins' },
      { time: '4:00 PM', activity: 'Mentor Sessions' },
      { time: '8:00 PM', activity: 'Progress Check-in' },
      { time: '9:00 AM (Next Day)', activity: 'Project Submissions' },
      { time: '11:00 AM', activity: 'Presentations & Judging' },
      { time: '1:00 PM', activity: 'Awards Ceremony' },
    ],
  },
];

export const pastEvents: Event[] = [];

// Function to automatically move events from future to past based on date
export function updateEventLists() {
  const now = new Date();
  const updatedFutureEvents = futureEvents.filter((event) => event.date > now);
  const newPastEvents = futureEvents.filter((event) => event.date <= now);

  pastEvents.push(...newPastEvents);
  futureEvents.length = 0;
  futureEvents.push(...updatedFutureEvents);
}
