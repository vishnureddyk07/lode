import React, { useRef, useState } from 'react';
import { Upload, X } from 'lucide-react';
import { useStorage } from '../../hooks/useStorage';

interface FileUploadProps {
  path: string;
  accept?: string;
  onUploadComplete: (url: string) => void;
}

export default function FileUpload({ path, accept, onUploadComplete }: FileUploadProps) {
  const fileInput = useRef<HTMLInputElement>(null);
  const { progress, error, url, uploadFile } = useStorage(path);
  const [isDragging, setIsDragging] = useState(false);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFile(files[0]);
    }
  };

  const handleFile = async (file: File) => {
    await uploadFile(file);
    if (url) {
      onUploadComplete(url);
    }
  };

  return (
    <div
      className={`border-2 border-dashed rounded-lg p-6 text-center ${
        isDragging ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300'
      }`}
      onDragOver={(e) => {
        e.preventDefault();
        setIsDragging(true);
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
    >
      <input
        type="file"
        ref={fileInput}
        className="hidden"
        accept={accept}
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFile(file);
        }}
      />

      <Upload className="mx-auto h-12 w-12 text-gray-400" />
      <p className="mt-2 text-sm text-gray-600">
        Drag and drop your file here, or{' '}
        <button
          type="button"
          className="text-indigo-600 hover:text-indigo-500"
          onClick={() => fileInput.current?.click()}
        >
          browse
        </button>
      </p>

      {progress > 0 && progress < 100 && (
        <div className="mt-4">
          <div className="h-2 bg-gray-200 rounded-full">
            <div
              className="h-2 bg-indigo-600 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-2 text-sm text-gray-600">{Math.round(progress)}% uploaded</p>
        </div>
      )}

      {error && (
        <div className="mt-4 text-red-600 text-sm flex items-center justify-center">
          <X className="h-4 w-4 mr-1" />
          {error.message}
        </div>
      )}
    </div>
  );
}