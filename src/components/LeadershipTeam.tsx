import React, { useState } from 'react';
import { ChevronRight, GraduationCap, Star, Users, Trophy } from 'lucide-react';
import { LeadershipData } from '../types';

interface LeadershipTeamProps {
  data: LeadershipData;
}

export default function LeadershipTeam({ data }: LeadershipTeamProps) {
  const [selectedLeader, setSelectedLeader] = useState<string | null>(null);

  const roleEmojis: { [key: string]: string } = {
    'President': '👑',
    'Vice President': '⭐',
    'Secretary': '📝',
    'Treasurer': '💰',
    'Technical Lead': '💻',
    'Design Lead': '🎨',
    'PR & Management Lead': '🤝',
    'Content Lead': '✍️',
    'HOD': '🎓',
    'Faculty Coordinator': '👨‍🏫'
  };

  return (
    <div className="space-y-16">
      {/* Faculty Section */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 flex items-center mb-8">
          <GraduationCap className="h-8 w-8 mr-2 text-blue-600" />
          Faculty Leadership
        </h3>

        <div className="grid gap-8 md:grid-cols-2">
          {data.faculty.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex items-center space-x-4">
                <div className="relative group">
                  <img
                    className="h-24 w-24 rounded-full object-cover ring-4 ring-blue-100 transition-transform duration-300 group-hover:scale-110"
                    src={member.image}
                    alt={member.name}
                  />
                  <div className="absolute inset-0 rounded-full bg-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 flex items-center">
                    {member.name} {roleEmojis[member.role]}
                  </h4>
                  <p className="text-blue-600">{member.role}</p>
                  <p className="mt-2 text-gray-600">{member.department}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Student Leadership Section */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 flex items-center mb-8">
          <Users className="h-8 w-8 mr-2 text-blue-600" />
          Student Leadership
        </h3>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data.studentLeadership.map((leader) => (
            <div key={leader.name} className="relative">
              <div
                className={`bg-white rounded-lg shadow-lg p-6 transform transition-all duration-500 
                  ${selectedLeader === leader.name ? 'scale-105 shadow-2xl' : 'hover:scale-105 hover:shadow-xl'}`}
              >
                <div className="relative group cursor-pointer" onClick={() => setSelectedLeader(leader.name === selectedLeader ? null : leader.name)}>
                  <div className="flex flex-col items-center">
                    <div className="relative">
                      <img
                        className="h-32 w-32 rounded-full object-cover ring-4 ring-blue-100 transition-transform duration-300 group-hover:scale-110"
                        src={leader.image}
                        alt={leader.name}
                      />
                      <div className="absolute inset-0 rounded-full bg-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    </div>
                    <h4 className="mt-4 text-xl font-semibold text-gray-900 flex items-center">
                      {leader.name} {roleEmojis[leader.role]}
                    </h4>
                    <p className="text-blue-600">{leader.role}</p>
                    <p className="mt-2 text-gray-600 text-center">{leader.bio}</p>
                    {leader.team && (
                      <button
                        className="mt-4 flex items-center text-blue-600 hover:text-blue-500 transition-colors duration-300"
                      >
                        <span>View Team</span>
                        <ChevronRight className={`h-5 w-5 ml-1 transform transition-transform duration-300 
                          ${selectedLeader === leader.name ? 'rotate-90' : ''}`} />
                      </button>
                    )}
                  </div>
                </div>

                {/* Team Members Section */}
                {selectedLeader === leader.name && leader.team && (
                  <div className="mt-6 space-y-4 animate-fadeIn">
                    <h5 className="font-semibold text-gray-900">Team Members</h5>
                    <div className="grid gap-4">
                      {leader.team.map((member, index) => (
                        <div
                          key={member.name}
                          className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg transform transition-all duration-300 hover:scale-102 hover:bg-gray-100"
                          style={{
                            animation: `slideIn 0.3s ease-out ${index * 0.1}s both`
                          }}
                        >
                          <img
                            className="h-10 w-10 rounded-full object-cover"
                            src={member.image}
                            alt={member.name}
                          />
                          <div>
                            <p className="font-medium text-gray-900">{member.name}</p>
                            <p className="text-sm text-gray-600">{member.position}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}