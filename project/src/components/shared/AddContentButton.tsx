import React from 'react';
import { Plus } from 'lucide-react';

interface AddContentButtonProps {
  onClick: () => void;
  label: string;
}

export default function AddContentButton({ onClick, label }: AddContentButtonProps) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      <Plus className="h-5 w-5 mr-2" />
      {label}
    </button>
  );
}