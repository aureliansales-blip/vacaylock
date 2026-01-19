import { useState } from 'react';
import { trackServiceClick, trackFiverrClick } from '../utils/tracking';

const services = [
  {
    name: 'Essential',
    tagline: 'Perfect for single-property hosts',
    price: '$149',
    priceNote: 'per lock',
    features: [
      'Complete smart lock setup & configuration',
      'Airbnb integration with auto code generation',
      'WiFi connection & firmware updates',
      'Guest access code automation',
      'Mobile app training & documentation',
      '30 days of email support',
    ],
    cta: 'Get Started',
    href: 'https://www.fiverr.com/vacaylock',
    popular: false,
  },
  {
    name: 'Professional',
    tagline: 'For serious hosts with multiple properties',
    price: '$349',
    priceNote: '3-5 locks',
    features: [
      'Everything in Essential, plus:',
      'Multi-property smart lock management',
      'Integration with multiple booking platforms',
      'Cleaner & maintenance staff access setup',
      'Advanced automation workflows',
      'Priority support for 60 days',
    ],
    cta: 'Get Started',
    href: 'https://www.fiverr.com/vacaylock',
    popular: true,
  },
  {
    name: 'Enterprise',
    tagline: 'For property managers & large portfolios',
    price: 'Custom',
    priceNote: '6+ locks',
    features: [
      'Everything in Professional, plus:',
      'Centralized management dashboard',
      'Team member access controls',
      'Custom integrations & workflows',
      'Dedicated account manager',
      'Ongoing maintenance & updates',
    ],
    cta: 'Contact Us',
    href: '#contact',
    popular: false,
  },
];

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(1); // Start with Popular (Professional)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12 lg:mb-16">
        <div className="text-primary font-bold text-sm uppercase tracking-wider mb-3 sm:mb-4">
          Services
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 leading-tight">
          Choose Your Package
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600">
          Professional smart lock setup tailored to your needs
        </p>
      </div>
      
      {/* Mobile Carousel */}
      <div className="lg:hidden max-w-lg mx-auto">
        <div className="relative px-8">
          {/* Service Card */}
          <div
            className={`bg-white rounded-3xl overflow-hidden shadow-lg border-2 transition-all duration-300 ${
              services[currentIndex].popular ? 'border-primary' : 'border-transparent'
            }`}
          >
            {services[currentIndex].popular && (
              <div className="bg-primary text-white text-center py-2 font-semibold text-sm">
                MOST POPULAR
              </div>
            )}
            <div className="p-5 sm:p-6 bg-gradient-to-br from-primary-light/30 to-white border-b border-gray-200">
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-primary mb-2">
                {services[currentIndex].name}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">{services[currentIndex].tagline}</p>
            </div>
            
            <div className="p-5 sm:p-6">
              <div className="mb-4 sm:mb-6">
                <div className="text-gray-600 text-xs sm:text-sm mb-2">{services[currentIndex].priceNote}</div>
                <div className="font-display text-4xl sm:text-5xl font-extrabold text-dark">
                  {services[currentIndex].price}
                </div>
              </div>
              
              <ul className="space-y-3 mb-6">
                {services[currentIndex].features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-left">
                    <span className="text-green-500 text-lg flex-shrink-0 mt-0.5">✓</span>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href={services[currentIndex].href}
                target={services[currentIndex].href.startsWith('http') ? '_blank' : undefined}
                rel={services[currentIndex].href.startsWith('http') ? 'noopener noreferrer' : undefined}
                onClick={() => {
                  trackServiceClick(services[currentIndex].name);
                  if (services[currentIndex].href.includes('fiverr')) {
                    trackFiverrClick();
                  }
                }}
                className="block w-full text-center bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-xl font-semibold text-base transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30"
              >
                {services[currentIndex].cta} →
              </a>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors z-10"
            aria-label="Previous package"
          >
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors z-10"
            aria-label="Next package"
          >
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all ${
                  index === currentIndex 
                    ? 'w-8 h-2 rounded-full bg-primary' 
                    : 'w-2 h-2 rounded-full bg-gray-300'
                }`}
                aria-label={`Go to ${service.name} package`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Grid - Hidden on Mobile */}
      <div className="hidden lg:grid max-w-7xl mx-auto grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className={`bg-white rounded-3xl overflow-hidden shadow-lg border-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
              service.popular ? 'border-primary' : 'border-transparent hover:border-primary'
            }`}
          >
            {service.popular && (
              <div className="bg-primary text-white text-center py-2 font-semibold text-sm">
                MOST POPULAR
              </div>
            )}
            <div className="p-5 sm:p-6 lg:p-8 bg-gradient-to-br from-primary-light/30 to-white border-b border-gray-200">
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-primary mb-2">
                {service.name}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">{service.tagline}</p>
            </div>
            
            <div className="p-5 sm:p-6 lg:p-8">
              <div className="mb-4 sm:mb-6">
                <div className="text-gray-600 text-xs sm:text-sm mb-2">{service.priceNote}</div>
                <div className="font-display text-4xl sm:text-5xl font-extrabold text-dark">
                  {service.price}
                </div>
              </div>
              
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 sm:gap-3 pb-3 sm:pb-4 border-b border-gray-200 last:border-0">
                    <span className="text-green-500 text-lg sm:text-xl flex-shrink-0 mt-0.5">✓</span>
                    <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href={service.href}
                target={service.href.startsWith('http') ? '_blank' : undefined}
                rel={service.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                onClick={() => {
                  trackServiceClick(service.name);
                  if (service.href.includes('fiverr')) {
                    trackFiverrClick();
                  }
                }}
                className="block w-full text-center bg-primary hover:bg-primary-dark text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30"
              >
                {service.cta} →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
