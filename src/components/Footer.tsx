import React from 'react';
import { Instagram, Linkedin, Github, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6">
            <a href="https://instagram.com/au_nexus" className="text-gray-400 hover:text-white">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com/company/au-nexus" className="text-gray-400 hover:text-white">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://github.com/au-nexus" className="text-gray-400 hover:text-white">
              <Github className="h-6 w-6" />
            </a>
            <a href="mailto:contact@au-nexus.org" className="text-gray-400 hover:text-white">
              <Mail className="h-6 w-6" />
            </a>
          </div>
          <p className="mt-8 text-center text-base text-gray-400">
            &copy; {new Date().getFullYear()} Au Nexus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}