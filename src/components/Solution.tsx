import { useState, useEffect, useRef } from 'react';

const features = [
  {
    icon: '🎯',
    title: 'Automatic Access Codes',
    description: 'Your guests receive unique access codes automatically when they book. Codes expire after checkout—no manual work required.',
  },
  {
    icon: '🔗',
    title: 'Seamless Integration',
    description: 'Direct integration with Airbnb, VRBO, and major booking platforms. Everything syncs automatically.',
  },
  {
    icon: '📲',
    title: 'Remote Management',
    description: 'Control your locks from anywhere. Grant access to cleaners, contractors, or yourself—all from your phone.',
  },
  {
    icon: '🛡️',
    title: 'Enhanced Security',
    description: 'Time-limited codes, activity logs, and instant notifications. Know exactly who enters and when.',
  },
  {
    icon: '⚡',
    title: 'Fast Implementation',
    description: 'Most setups completed in 24 hours. We handle all the technical complexity remotely—no on-site visit needed.',
  },
  {
    icon: '🎓',
    title: 'Training Included',
    description: 'Complete walkthrough and documentation so you\'re confident managing your system.',
  },
];

export default function Solution() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Track scroll position to update current index
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollPosition = container.scrollLeft;
      const containerWidth = container.offsetWidth;
      const newIndex = Math.round(scrollPosition / containerWidth);
      setCurrentIndex(Math.min(newIndex, features.length - 1));
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary to-primary-dark text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 100 0 L 0 0 0 100' fill='none' stroke='white' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="text-accent font-bold text-sm uppercase tracking-wider mb-3 sm:mb-4">
            The Solution
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 leading-tight">
            We Handle Everything So You Don't Have To
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/90">
            Professional smart lock setup and configuration done 100% remotely in under 24 hours
          </p>
        </div>
        
        {/* Mobile: Horizontal Scroll */}
        <div className="md:hidden">
          <div 
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{
              WebkitOverflowScrolling: 'touch',
              paddingLeft: '1rem',
              paddingRight: '1rem',
              marginLeft: '-1rem',
              marginRight: '-1rem'
            }}
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 snap-center flex-shrink-0"
                style={{ width: 'calc(100vw - 3rem)' }}
              >
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="font-display text-lg font-bold mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-white/90 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
          
          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {features.map((_, index) => (
              <div
                key={index}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-accent w-6'
                    : 'bg-white/30 w-1.5'
                }`}
              />
            ))}
          </div>
          
          <p className="text-center text-xs text-white/60 mt-3">← Swipe to see all features →</p>
        </div>

        {/* Tablet & Desktop: Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md p-5 sm:p-6 lg:p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{feature.icon}</div>
              <h3 className="font-display text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
