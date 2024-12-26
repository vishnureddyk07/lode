import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-indigo-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="/src/components/AU NEXUS (1).png"
                alt="Au Nexus Logo"
                className="h-14 w-14"
              />
              <img
                src="https://cdn.prod.website-files.com/63a98d7ca37497b26e5ba22c/664c8bc69a596170390b444e_channels4_profile%20(1).jpg"
                alt="Anurag University Logo"
                className="h-14 w-auto ml-2"
              />
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md"
              >
                About
              </Link>
              <Link
                to="/events"
                className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md"
              >
                Events
              </Link>
              <Link
                to="/gallery"
                className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md"
              >
                Gallery
              </Link>
              <Link
                to="/articles"
                className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md"
              >
                Articles
              </Link>
              <Link
                to="/podcast"
                className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md"
              >
                Podcast
              </Link>
              <Link
                to="/leadership"
                className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md"
              >
                Leadership
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-indigo-500 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-white block px-3 py-2 rounded-md hover:bg-indigo-500"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white block px-3 py-2 rounded-md hover:bg-indigo-500"
            >
              About
            </Link>
            <Link
              to="/events"
              className="text-white block px-3 py-2 rounded-md hover:bg-indigo-500"
            >
              Events
            </Link>
            <Link
              to="/gallery"
              className="text-white block px-3 py-2 rounded-md hover:bg-indigo-500"
            >
              Gallery
            </Link>
            <Link
              to="/articles"
              className="text-white block px-3 py-2 rounded-md hover:bg-indigo-500"
            >
              Articles
            </Link>
            <Link
              to="/podcast"
              className="text-white block px-3 py-2 rounded-md hover:bg-indigo-500"
            >
              Podcast
            </Link>
            <Link
              to="/leadership"
              className="text-white block px-3 py-2 rounded-md hover:bg-indigo-500"
            >
              Leadership
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
