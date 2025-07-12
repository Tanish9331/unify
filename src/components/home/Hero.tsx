
import React, { useEffect, useRef } from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';

// AI Grid Background with animated circles
const AIGridBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 opacity-30">
      <div className="absolute w-[300px] h-[300px] top-1/4 left-[10%] rounded-full bg-gradient-to-r from-sky-500/20 to-cyan-400/10 blur-md"></div>
      <div className="absolute w-[400px] h-[400px] bottom-1/3 right-[15%] rounded-full bg-gradient-to-r from-blue-500/15 to-sky-400/10 blur-lg"></div>
      <div className="absolute w-[200px] h-[200px] top-2/3 left-[25%] rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-400/10 blur-md"></div>
      <div className="absolute w-[350px] h-[350px] top-1/3 right-[30%] rounded-full bg-gradient-to-r from-sky-500/15 to-cyan-500/10 blur-lg"></div>
    </div>
  );
};

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative pt-24 pb-32 px-6 md:px-12 overflow-hidden">
      <AIGridBackground />
      
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute left-0 right-0 bottom-0 h-[60%] bg-gradient-to-t from-sky-500/5 to-transparent dark:from-sky-900/10"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <div>
          <span className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-sky-500/10 text-sky-600 dark:bg-sky-400/10 dark:text-sky-400 font-medium mb-4">
            <Sparkles size={16} className="animate-pulse" />
            Simple • Precise • Elegant
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-balance">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-600 via-sky-500 to-sky-400 dark:from-sky-400 dark:via-sky-300 dark:to-sky-200">
            Convert Units with
          </span> 
          <br />
          <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-sky-600 via-sky-500 to-sky-400 dark:from-sky-400 dark:via-sky-300 dark:to-sky-200">
            Precision & Elegance
            <svg className="absolute -bottom-2 left-0 w-full h-2 text-sky-500/50 dark:text-sky-400/50" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 10C47.5 4 93 1.5 138.5 2C184 2.5 229.5 4 275 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          A beautifully designed unit converter that transforms complex calculations into a seamless experience. Fast, accurate, and intuitive.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 mb-16">
          <a 
            href="#converter" 
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-sky-500 to-blue-500 text-white font-medium transition-all hover:scale-105 hover:shadow-lg"
          >
            Start Converting
          </a>
          <a 
            href="#about" 
            className="px-6 py-3 rounded-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg text-foreground font-medium transition-all hover:scale-105"
          >
            Learn More
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#converter" className="flex flex-col items-center text-foreground hover:text-sky-500 dark:hover:text-sky-400 transition-colors">
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown size={20} className="text-sky-500 dark:text-sky-400 animate-pulse" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
