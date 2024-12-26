import React from 'react';
import { Edit2 } from 'lucide-react';

interface EditButtonProps {
  onClick: () => void;
  className?: string;
}

export default function EditButton({ onClick, className = '' }: EditButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center px-3 py-2 border border-transparent rounded-md 
        text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
        transition-colors duration-200 ${className}`}
    >
      <Edit2 className="h-4 w-4 mr-2" />
      Edit
    </button>
  );
}