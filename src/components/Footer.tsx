import React from 'react';
import { Heart, Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">RiceGuard</h3>
            <p className="text-gray-400 text-sm">
              Advanced rice disease detection using machine learning technology to help farmers identify and treat diseases early.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-green-300 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-green-300 transition-colors">Disease Guide</a></li>
              <li><a href="#" className="hover:text-green-300 transition-colors">Treatment Protocols</a></li>
              <li><a href="#" className="hover:text-green-300 transition-colors">Research Papers</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-green-300 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-green-300 transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-green-300 transition-colors">Partners</a></li>
              <li><a href="#" className="hover:text-green-300 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Subscribe to our newsletter for updates
            </p>
            <div className="mt-2 flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-700 text-white px-3 py-2 text-sm rounded-l outline-none flex-1"
              />
              <button className="bg-green-600 hover:bg-green-700 px-3 py-2 text-sm rounded-r transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} RiceGuard. All rights reserved.
          </p>
          <div className="flex items-center mt-4 md:mt-0">
            <span className="text-gray-400 text-sm flex items-center">
              Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> for rice farmers worldwide
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;