import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SearchBar({ value, onChange, placeholder }: SearchBarProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative max-w-2xl mx-auto">
      <div className={`relative transition-all duration-300 ${isFocused ? 'scale-105' : ''}`}>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition-all duration-300"
        />
        <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 transition-colors duration-300 ${
          isFocused ? 'text-blue-500' : 'text-gray-400'
        }`} />
      </div>
    </div>
  );
}