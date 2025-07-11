
import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary/50 py-12 px-6 md:px-12 glass-enhanced">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 stagger-fade-in">
          <div className="space-y-4 slide-in-left">
            <h3 className="text-xl font-display font-bold text-foreground">
              TheUnitConverter
            </h3>
            <p className="text-muted-foreground">
              A sleek, modern unit conversion tool designed with simplicity and precision in mind.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors hover-bounce magnetic">
                <Github size={20} className="hover-rotate" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors hover-bounce magnetic">
                <Twitter size={20} className="hover-rotate" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors hover-bounce magnetic">
                <Linkedin size={20} className="hover-rotate" />
              </a>
            </div>
          </div>
          
          <div className="space-y-4 slide-up">
            <h3 className="text-lg font-semibold text-foreground">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors hover-slide magnetic">Documentation</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors hover-slide magnetic">About Units</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors hover-slide magnetic">Conversion Formulas</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors hover-slide magnetic">API</a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4 slide-in-right">
            <h3 className="text-lg font-semibold text-foreground">Subscribe</h3>
            <p className="text-muted-foreground">
              Stay updated with our latest features and conversion tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all focus-enhanced glass-enhanced"
              />
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors btn-animate hover-lift magnetic ripple">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-6 text-center text-muted-foreground slide-up">
          <p>© {currentYear} TheUnitConverter. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
