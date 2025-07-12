import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Club Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-lg font-bold">ML Club</div>
                <div className="text-sm text-slate-400">SRET</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm w-[70%]">
              Empowering students with machine learning knowledge and building the next generation of AI innovators.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-slate-400 hover:text-white transition-colors text-sm">About Us</Link>
              <Link to="/team" className="block text-slate-400 hover:text-white transition-colors text-sm">Our Team</Link>
              <Link to="/events" className="block text-slate-400 hover:text-white transition-colors text-sm">Events</Link>
              {/* <Link to="/projects" className="block text-slate-400 hover:text-white transition-colors text-sm">Projects</Link> */}
              {/* <Link to="/resources" className="block text-slate-400 hover:text-white transition-colors text-sm">Resources</Link> */}
            </div>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get Involved</h3>
            <div className="space-y-2">
              {/* <Link to="/blog" className="block text-slate-400 hover:text-white transition-colors text-sm">Read Our Blog</Link> */}
              <Link to="/gallery" className="block text-slate-400 hover:text-white transition-colors text-sm">View Gallery</Link>
              {/* <Link to="/contact" className="block text-slate-400 hover:text-white transition-colors text-sm">Contact Us</Link> */}
            </div>
          </div>

          {/* Contact Info */}
          {/* <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-slate-400" />
                <span className="text-slate-400">mlclub@srfoe.edu.in</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-slate-400" />
                <span className="text-slate-400">+91 98765 43210</span>
              </div>
              <div className="flex items-start space-x-3 text-sm">
                <MapPin className="h-4 w-4 text-slate-400 mt-0.5" />
                <span className="text-slate-400">Sri Ramachandra Faculty of Engineering and Technology, Chennai, Tamil Nadu</span>
              </div>
            </div>
          </div> */}
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © 2025 Sri Ramachandra Faculty of Engineering and Technology Machine Learning Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;