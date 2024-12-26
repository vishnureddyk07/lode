import React from 'react';
import { Users, Star } from 'lucide-react';

export default function CoreTeamNote() {
  return (
    <div className="bg-white rounded-xl shadow-xl p-8 mb-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-6">
          <Users className="h-10 w-10 mr-4 text-indigo-600" />
          <h2 className="text-2xl font-bold text-gray-900">Core Team Vision</h2>
        </div>
        <div className="space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            Under the leadership of our president, K Vishnu Vardhan Reddy, AU NEXUS is dedicated to 
            creating a vibrant community of data science enthusiasts. Our team works tirelessly to 
            organize workshops, hackathons, and networking events that bridge the gap between 
            academic learning and industry requirements.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Star,
                title: 'Innovation',
                description: 'Fostering creative solutions through data science'
              },
              {
                icon: Users,
                title: 'Community',
                description: 'Building a strong network of tech enthusiasts'
              },
              {
                icon: Star,
                title: 'Excellence',
                description: 'Striving for the highest standards in everything we do'
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <item.icon className="h-8 w-8 text-indigo-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}