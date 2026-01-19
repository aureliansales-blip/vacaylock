import { useState, useEffect, useRef } from 'react';

const problems = [
  {
    icon: '😰',
    title: 'Manual Code Generation',
    description: 'Spending hours creating and sending unique access codes for every single guest booking.',
  },
  {
    icon: '📱',
    title: 'Missed Messages',
    description: 'Guests arriving while you\'re asleep or busy, frantically messaging for access codes.',
  },
  {
    icon: '🔑',
    title: 'Key Management Chaos',
    description: 'Coordinating physical keys with cleaners, maintenance, and back-to-back guest turnovers.',
  },
  {
    icon: '⚙️',
    title: 'Technical Overwhelm',
    description: 'Smart locks are complicated. WiFi settings, firmware updates, app integrations—it\'s a lot.',
  },
  {
    icon: '🚪',
    title: 'Security Concerns',
    description: 'Worrying about old codes still working or unauthorized access to your property.',
  },
  {
    icon: '⏰',
    title: 'Time-Consuming Setup',
    description: 'Spending days trying to figure out smart lock installation and Airbnb integration.',
  },
];

export default function Problems() {
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
      setCurrentIndex(Math.min(newIndex, problems.length - 1));
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12 lg:mb-16">
        <div className="text-primary font-bold text-sm uppercase tracking-wider mb-3">
          The Problem
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 leading-tight">
          Managing Guest Access Shouldn't Be This Hard
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600">
          Every Airbnb host knows these frustrations all too well
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
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-2xl border-2 border-transparent snap-center flex-shrink-0"
              style={{ width: 'calc(100vw - 3rem)' }}
            >
              <div className="text-4xl mb-3">{problem.icon}</div>
              <h3 className="font-display text-lg font-bold mb-2 text-dark">
                {problem.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {problems.map((_, index) => (
            <div
              key={index}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-primary w-6'
                  : 'bg-gray-300 w-1.5'
              }`}
            />
          ))}
        </div>
        
        <p className="text-center text-xs text-gray-500 mt-3">← Swipe to see all problems →</p>
      </div>

      {/* Tablet & Desktop: Grid */}
      <div className="hidden md:grid max-w-7xl mx-auto grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {problems.map((problem, index) => (
          <div
            key={index}
            className="bg-gray-100 p-5 sm:p-6 lg:p-8 rounded-2xl border-2 border-transparent hover:border-primary transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10"
          >
            <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{problem.icon}</div>
            <h3 className="font-display text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-dark">
              {problem.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{problem.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
