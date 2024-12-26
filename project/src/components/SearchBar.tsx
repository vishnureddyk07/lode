import React, { useState, useRef, useMemo } from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  suggestions?: string[];
}

export default function SearchBar({ value, onChange, placeholder = 'Search...', suggestions = [] }: SearchBarProps) {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredSuggestions = useMemo(() => {
    if (!value || !suggestions.length) return [];
    return suggestions.filter(item =>
      item.toLowerCase().includes(value.toLowerCase())
    );
  }, [value, suggestions]);

  return (
    <div className="relative">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className={`h-5 w-5 transition-colors duration-200 ${
            isFocused ? 'text-indigo-500' : 'text-gray-400'
          }`} />
        </div>
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          className={`block w-full pl-10 pr-10 py-3 border rounded-lg leading-5 bg-white 
            placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 
            focus:border-indigo-500 transition-all duration-200 ${
              isFocused ? 'shadow-lg' : 'shadow-sm'
            }`}
          placeholder={placeholder}
        />
        {value && (
          <button
            onClick={() => onChange('')}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            <X className="h-5 w-5 text-gray-400 hover:text-gray-600" />
          </button>
        )}
      </div>

      {isFocused && filteredSuggestions.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200">
          <ul className="py-1">
            {filteredSuggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => {
                  onChange(suggestion);
                  inputRef.current?.blur();
                }}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-700"
              >
                {suggestion}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}