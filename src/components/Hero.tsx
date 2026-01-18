import { trackGetStartedClick } from '../utils/tracking';

export default function Hero() {
  return (
    <section className="mt-20 pt-12 sm:pt-16 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-accent/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-[-50%] right-[-20%] w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-12 items-center relative z-10">
        {/* Text Content */}
        <div className="space-y-4 sm:space-y-6">
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight tracking-tight animate-fade-in-up">
            Professional <span className="gradient-text">Smart Lock Setup</span> for Airbnb Hosts
          </h1>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed animate-fade-in-up animation-delay-200">
            Stop wasting hours managing keys and access codes. We'll set up and configure your smart locks so your guests get automatic access codes—every single time.
          </p>
          
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 animate-fade-in-up animation-delay-400">
            <a
              href="#services"
              onClick={trackGetStartedClick}
              className="bg-primary hover:bg-primary-dark text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30 inline-flex items-center justify-center gap-2"
            >
              View Services →
            </a>
            <a
              href="#how-it-works"
              className="bg-white hover:bg-primary-light text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg border-2 border-primary transition-all duration-300 hover:-translate-y-1 text-center"
            >
              How It Works
            </a>
          </div>
          
          <div className="flex flex-wrap gap-6 sm:gap-8 pt-2 sm:pt-4 animate-fade-in-up animation-delay-600">
            <div>
              <div className="font-display text-3xl sm:text-4xl font-extrabold text-primary">100%</div>
              <div className="text-xs sm:text-sm text-gray-600 mt-1">Remote Setup</div>
            </div>
            <div>
              <div className="font-display text-3xl sm:text-4xl font-extrabold text-primary">24hr</div>
              <div className="text-xs sm:text-sm text-gray-600 mt-1">Turnaround</div>
            </div>
            <div>
              <div className="font-display text-3xl sm:text-4xl font-extrabold text-primary">5★</div>
              <div className="text-xs sm:text-sm text-gray-600 mt-1">Rated Service</div>
            </div>
          </div>
        </div>
        
        {/* Visual - Hidden on mobile to save space */}
        <div className="hidden lg:block animate-fade-in animation-delay-400">
          <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200">
            <div className="bg-gradient-to-br from-primary-light to-primary-light rounded-2xl h-80 flex items-center justify-center text-8xl animate-float relative overflow-hidden">
              🔐
            </div>
            <div className="flex flex-wrap gap-3 mt-6">
              <div className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium text-gray-700 flex items-center gap-2">
                <span className="text-green-500">✓</span> Airbnb Integration
              </div>
              <div className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium text-gray-700 flex items-center gap-2">
                <span className="text-green-500">✓</span> Auto Codes
              </div>
              <div className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium text-gray-700 flex items-center gap-2">
                <span className="text-green-500">✓</span> Remote Access
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
