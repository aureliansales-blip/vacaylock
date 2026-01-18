import { useState, useEffect } from 'react';
import { trackGetStartedClick } from '../utils/tracking';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-sm' 
          : 'bg-white/95 backdrop-blur-lg border-b border-gray-200'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-xl">
            🔐
          </div>
          <span className="font-display text-2xl font-extrabold text-primary tracking-tight">
            VacayLock
          </span>
        </div>
        <a
          href="#contact"
          onClick={trackGetStartedClick}
          className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
        >
          Get Started
        </a>
      </nav>
    </header>
  );
}
