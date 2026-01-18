import { useState, useEffect } from 'react';

const testimonials = [
  {
    stars: 5,
    text: 'VacayLock saved me so much time! I was spending at least an hour every week just managing access codes. Now it\'s completely automated. Best investment I\'ve made for my rental.',
    author: 'Sarah M.',
    role: 'Airbnb Superhost, Dublin',
  },
  {
    stars: 5,
    text: 'The setup was incredibly smooth. They walked me through everything remotely and had my locks integrated with Airbnb in less than a day. Guests love the seamless check-in experience.',
    author: 'James O.',
    role: 'Property Manager, Cork',
  },
  {
    stars: 5,
    text: 'I manage 4 properties and was overwhelmed with access code management. VacayLock set up all my locks and now everything runs on autopilot. Can\'t recommend them enough!',
    author: 'Emma K.',
    role: 'Multi-property Host, Galway',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance carousel on mobile
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12 lg:mb-16">
        <div className="text-primary font-bold text-sm uppercase tracking-wider mb-3 sm:mb-4">
          Testimonials
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 leading-tight">
          Trusted by Airbnb Hosts
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600">
          See what our clients say about their experience
        </p>
      </div>
      
      {/* Mobile Carousel */}
      <div className="lg:hidden max-w-2xl mx-auto">
        <div className="relative">
          {/* Testimonial Card */}
          <div className="bg-gray-100 p-6 sm:p-8 rounded-2xl border-l-4 border-primary min-h-[280px] sm:min-h-[260px]">
            <div className="text-yellow-500 text-xl mb-4">
              {'★'.repeat(testimonials[currentIndex].stars)}
            </div>
            <p className="text-gray-700 italic leading-relaxed mb-6 text-sm sm:text-base">
              "{testimonials[currentIndex].text}"
            </p>
            <div>
              <div className="font-semibold text-dark">{testimonials[currentIndex].author}</div>
              <div className="text-sm text-gray-600">{testimonials[currentIndex].role}</div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-primary w-6' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Grid - Hidden on Mobile */}
      <div className="hidden lg:grid max-w-7xl mx-auto grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gray-100 p-8 rounded-2xl border-l-4 border-primary"
          >
            <div className="text-yellow-500 text-xl mb-4">
              {'★'.repeat(testimonial.stars)}
            </div>
            <p className="text-gray-700 italic leading-relaxed mb-6">
              "{testimonial.text}"
            </p>
            <div>
              <div className="font-semibold text-dark">{testimonial.author}</div>
              <div className="text-sm text-gray-600">{testimonial.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
