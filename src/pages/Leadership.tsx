import React, { useState } from 'react';
import { Users, ChevronRight, GraduationCap, Calendar } from 'lucide-react';
import { Tabs, Tab } from '../components/Tabs';
import LeadershipTeam from '../components/LeadershipTeam';
import { leadershipData2024 } from '../data/leadershipData';

export default function Leadership() {
  const [activeYear, setActiveYear] = useState('2024');

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <Users className="mx-auto h-12 w-12 text-blue-600 mb-4" />
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Leadership Team
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Meet the dedicated team behind Au Nexus
          </p>
        </div>

        <div className="mt-12">
          <Tabs activeTab={activeYear} onChange={setActiveYear}>
            <Tab id="2024" label={
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>2024</span>
              </div>
            }>
              <LeadershipTeam data={leadershipData2024} />
            </Tab>
            <Tab id="2025" label={
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>2025</span>
              </div>
            }>
              <div className="py-12 text-center">
                <h3 className="text-xl text-gray-600">
                  Leadership team for 2025 will be announced later
                </h3>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}