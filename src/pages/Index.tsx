
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import UnitConverter from '@/components/converters/UnitConverter';
import DailyChallenge from '@/components/features/DailyChallenge';

const Index = () => {
  // Add scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => {
      observer.observe(el);
    });
    
    // Track conversion events (will be implemented in the UnitConverter component)
    const handleConversionComplete = (event: CustomEvent) => {
      const { conversionData } = event.detail;
      
      // Save conversion to local history
      const existingHistory = JSON.parse(localStorage.getItem('conversionHistory') || '[]');
      const newHistory = [
        {
          id: Date.now(),
          date: new Date().toISOString().split('T')[0],
          ...conversionData
        },
        ...existingHistory
      ].slice(0, 100); // Keep only the most recent 100 conversions
      
      localStorage.setItem('conversionHistory', JSON.stringify(newHistory));
    };
    
    window.addEventListener('conversion-complete', handleConversionComplete as EventListener);
    
    return () => {
      animatedElements.forEach(el => {
        observer.unobserve(el);
      });
      window.removeEventListener('conversion-complete', handleConversionComplete as EventListener);
    };
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col smooth-scroll">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <UnitConverter />
        <DailyChallenge />
        
        <section id="about" className="py-24 px-6 md:px-12 bg-secondary/30 glass-enhanced">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-on-scroll opacity-0 stagger-fade-in">
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 hover-bounce magnetic">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                About TheUnitConverter
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto slide-in-left">
                We created TheUnitConverter with a simple mission: to make unit conversions elegant, 
                intuitive, and precise.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="animate-on-scroll opacity-0 slide-in-left" style={{ transitionDelay: '100ms' }}>
                <div className="aspect-video rounded-xl overflow-hidden bg-secondary/50 flex items-center justify-center glass-enhanced hover-lift breathe">
                  <div className="text-4xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 text-shimmer">
                    TheUnitConverter
                  </div>
                </div>
              </div>
              
              <div className="space-y-6 animate-on-scroll opacity-0 slide-in-right stagger-fade-in" style={{ transitionDelay: '200ms' }}>
                <p>
                  In a world of complex calculations and confusing unit conversions, we wanted to build 
                  something that embodied simplicity and elegance while delivering precise results.
                </p>
                <p>
                  Our team of designers and developers worked to create a conversion tool that feels 
                  intuitive and looks beautiful, making the conversion process a delightful experience.
                </p>
                <p>
                  We believe that tools should be both functional and aesthetically pleasing. 
                  That's why we've paid attention to every detail, from the smooth animations to 
                  the clean interface.
                </p>
                <p className="font-medium">
                  Whether you're a student, professional, or just someone who needs to convert units occasionally,
                  TheUnitConverter is designed to make your life easier.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-20 px-6 md:px-12 glass-enhanced">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll opacity-0 stagger-fade-in">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Convert?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto slide-in-left">
              Start using our beautifully designed converter for all your unit conversion needs.
              It's fast, accurate, and completely free.
            </p>
            <a 
              href="#converter" 
              className="inline-block px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all duration-300 ease-out hover:scale-105 active:scale-95"
            >
              Try the Converter
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
