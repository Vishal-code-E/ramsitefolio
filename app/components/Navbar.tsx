import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="shrink-0">
            <h1 className="text-xl font-bold text-gray-900">Ram Portfolio</h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#about" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                About
              </a>
              <a href="#projects" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                Projects
              </a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;