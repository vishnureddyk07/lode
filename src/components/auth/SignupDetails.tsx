import React, { useState } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { useAuth } from '../../hooks/useAuth';

interface SignupDetailsProps {
  userType: 'student' | 'faculty' | 'professional';
}

export default function SignupDetails({ userType }: SignupDetailsProps) {
  const { user } = useAuth();
  const [details, setDetails] = useState({
    department: '',
    yearOfStudy: '',
    designation: '',
    company: '',
    linkedIn: '',
    github: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    const userRef = doc(db, 'users', user.uid);
    await updateDoc(userRef, {
      ...details,
      detailsCompleted: true
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {userType === 'student' && (
        <>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Department
            </label>
            <input
              type="text"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={details.department}
              onChange={(e) => setDetails(prev => ({ ...prev, department: e.target.value }))}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Year of Study
            </label>
            <select
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={details.yearOfStudy}
              onChange={(e) => setDetails(prev => ({ ...prev, yearOfStudy: e.target.value }))}
            >
              <option value="">Select Year</option>
              <option value="1">1st Year</option>
              <option value="2">2nd Year</option>
              <option value="3">3rd Year</option>
              <option value="4">4th Year</option>
            </select>
          </div>
        </>
      )}

      {userType === 'faculty' && (
        <>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Department
            </label>
            <input
              type="text"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={details.department}
              onChange={(e) => setDetails(prev => ({ ...prev, department: e.target.value }))}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Designation
            </label>
            <input
              type="text"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={details.designation}
              onChange={(e) => setDetails(prev => ({ ...prev, designation: e.target.value }))}
            />
          </div>
        </>
      )}

      {userType === 'professional' && (
        <>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Company
            </label>
            <input
              type="text"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={details.company}
              onChange={(e) => setDetails(prev => ({ ...prev, company: e.target.value }))}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Designation
            </label>
            <input
              type="text"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={details.designation}
              onChange={(e) => setDetails(prev => ({ ...prev, designation: e.target.value }))}
            />
          </div>
        </>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700">
          LinkedIn Profile
        </label>
        <input
          type="url"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          value={details.linkedIn}
          onChange={(e) => setDetails(prev => ({ ...prev, linkedIn: e.target.value }))}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          GitHub Profile
        </label>
        <input
          type="url"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          value={details.github}
          onChange={(e) => setDetails(prev => ({ ...prev, github: e.target.value }))}
        />
      </div>

      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Complete Profile
      </button>
    </form>
  );
}