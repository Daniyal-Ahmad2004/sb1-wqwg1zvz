import React from 'react';
import { Leaf } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-green-800 to-green-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Leaf className="h-8 w-8 text-green-300" />
          <div>
            <h1 className="text-2xl font-bold tracking-tight">RiceGuard</h1>
            <p className="text-sm text-green-200">Advanced Rice Disease Detection</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-green-100 hover:text-white transition-colors">
            Home
          </a>
          <a href="#" className="text-green-100 hover:text-white transition-colors">
            About
          </a>
          <a href="#" className="text-green-100 hover:text-white transition-colors">
            Learn
          </a>
          <a href="#" className="text-green-100 hover:text-white transition-colors">
            Contact
          </a>
        </nav>
        
        <button className="md:hidden text-white focus:outline-none">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;