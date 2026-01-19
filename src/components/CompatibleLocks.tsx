const locks = [
  { logo: '/schlage-logo-noTag.svg', name: 'Schlage' },
  { logo: '/logo-new.png', name: 'Yale' },
  { logo: '/logoSvg.svg', name: 'August' },
  { logo: '/Kwikset_logo.png', name: 'Kwikset' },
  { logo: '/c4f9967d-243c-4d50-802b-c0befec78196.png', name: 'Level Lock' },
  { logo: '/aqara_logo.svg', name: 'Aqara', invert: true },
  { logo: '/eufy_logo.png', name: 'Eufy' },
  { logo: '/igloo_logo.svg', name: 'igloohome' },
  { logo: '/ttlock_logo.png', name: 'TTLock' },
  { logo: '/ultraloq_logo.svg', name: 'Ultraloq' },
  { logo: '/tedee_logo.png', name: 'Tedee' },
  { logo: '/lockly_logo.svg', name: 'Lockly' },
];

export default function CompatibleLocks() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12 lg:mb-16">
        <div className="text-primary font-bold text-sm uppercase tracking-wider mb-3 sm:mb-4">
          Compatible Devices
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 leading-tight">
          Works With All Major Smart Lock Brands
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600">
          We're experts in setting up and integrating the most popular smart locks for vacation rentals
        </p>
      </div>
      
      {/* Mobile: Horizontal Scroll */}
      <div className="md:hidden">
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory px-4 -mx-4 scrollbar-hide">
          {locks.map((lock, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl text-center shadow-md min-w-[160px] snap-center flex-shrink-0 flex flex-col items-center justify-center"
            >
              <div className="h-16 w-full flex items-center justify-center mb-3">
                <img 
                  src={lock.logo} 
                  alt={`${lock.name} logo`}
                  className={`max-h-full max-w-full object-contain ${lock.invert ? 'invert' : ''}`}
                />
              </div>
              <div className="font-display text-sm font-bold text-dark">
                {lock.name}
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-gray-500 mt-3">← Swipe to see all {locks.length} brands →</p>
      </div>

      {/* Tablet: 3 columns + 3 columns (2 rows) */}
      <div className="hidden md:grid lg:hidden max-w-5xl mx-auto">
        <div className="grid grid-cols-3 gap-4 mb-4">
          {locks.slice(0, 3).map((lock, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center justify-center"
            >
              <div className="h-16 w-full flex items-center justify-center mb-4">
                <img 
                  src={lock.logo} 
                  alt={`${lock.name} logo`}
                  className={`max-h-full max-w-full object-contain ${lock.invert ? 'invert' : ''}`}
                />
              </div>
              <div className="font-display text-sm font-bold text-dark">
                {lock.name}
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-4 mb-4">
          {locks.slice(3, 6).map((lock, index) => (
            <div
              key={index + 3}
              className="bg-white p-6 rounded-2xl text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center justify-center"
            >
              <div className="h-16 w-full flex items-center justify-center mb-4">
                <img 
                  src={lock.logo} 
                  alt={`${lock.name} logo`}
                  className={`max-h-full max-w-full object-contain ${lock.invert ? 'invert' : ''}`}
                />
              </div>
              <div className="font-display text-sm font-bold text-dark">
                {lock.name}
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-4 mb-4">
          {locks.slice(6, 9).map((lock, index) => (
            <div
              key={index + 6}
              className="bg-white p-6 rounded-2xl text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center justify-center"
            >
              <div className="h-16 w-full flex items-center justify-center mb-4">
                <img 
                  src={lock.logo} 
                  alt={`${lock.name} logo`}
                  className={`max-h-full max-w-full object-contain ${lock.invert ? 'invert' : ''}`}
                />
              </div>
              <div className="font-display text-sm font-bold text-dark">
                {lock.name}
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
          {locks.slice(9).map((lock, index) => (
            <div
              key={index + 9}
              className="bg-white p-6 rounded-2xl text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center justify-center"
            >
              <div className="h-16 w-full flex items-center justify-center mb-4">
                <img 
                  src={lock.logo} 
                  alt={`${lock.name} logo`}
                  className={`max-h-full max-w-full object-contain ${lock.invert ? 'invert' : ''}`}
                />
              </div>
              <div className="font-display text-sm font-bold text-dark">
                {lock.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: 4 columns + 4 columns + 4 columns (3 rows) */}
      <div className="hidden lg:grid max-w-7xl mx-auto">
        <div className="grid grid-cols-4 xl:grid-cols-6 gap-6 mb-6">
          {locks.slice(0, 6).map((lock, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center justify-center"
            >
              <div className="h-16 w-full flex items-center justify-center mb-4">
                <img 
                  src={lock.logo} 
                  alt={`${lock.name} logo`}
                  className={`max-h-full max-w-full object-contain ${lock.invert ? 'invert' : ''}`}
                />
              </div>
              <div className="font-display text-sm font-bold text-dark">
                {lock.name}
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-4 xl:grid-cols-6 gap-6">
          {locks.slice(6).map((lock, index) => (
            <div
              key={index + 6}
              className="bg-white p-6 rounded-2xl text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center justify-center"
            >
              <div className="h-16 w-full flex items-center justify-center mb-4">
                <img 
                  src={lock.logo} 
                  alt={`${lock.name} logo`}
                  className={`max-h-full max-w-full object-contain ${lock.invert ? 'invert' : ''}`}
                />
              </div>
              <div className="font-display text-sm font-bold text-dark">
                {lock.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
