const locks = [
  { icon: '🔐', name: 'Schlage' },
  { icon: '🔒', name: 'Yale' },
  { icon: '🚪', name: 'August' },
  { icon: '🏠', name: 'Kwikset' },
  { icon: '🔓', name: 'Level Lock' },
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
          We're experts in setting up and integrating the most popular smart locks
        </p>
      </div>
      
      {/* Mobile: Horizontal Scroll */}
      <div className="sm:hidden">
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory px-4 -mx-4">
          {locks.map((lock, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl text-center shadow-md min-w-[160px] snap-center flex-shrink-0"
            >
              <div className="text-5xl mb-3">{lock.icon}</div>
              <div className="font-display text-base font-bold text-dark">
                {lock.name}
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-gray-500 mt-3">← Swipe to see all →</p>
      </div>

      {/* Tablet: 3 Column Grid */}
      <div className="hidden sm:grid lg:hidden max-w-5xl mx-auto grid-cols-3 gap-4">
        {locks.slice(0, 3).map((lock, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="text-5xl mb-4">{lock.icon}</div>
            <div className="font-display text-lg font-bold text-dark">
              {lock.name}
            </div>
          </div>
        ))}
        {/* Show remaining 2 in second row */}
        <div className="col-span-3 grid grid-cols-2 gap-4 max-w-md mx-auto mt-2">
          {locks.slice(3).map((lock, index) => (
            <div
              key={index + 3}
              className="bg-white p-6 rounded-2xl text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-5xl mb-4">{lock.icon}</div>
              <div className="font-display text-lg font-bold text-dark">
                {lock.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: 5 Column Grid */}
      <div className="hidden lg:grid max-w-5xl mx-auto grid-cols-5 gap-6">
        {locks.map((lock, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="text-5xl mb-4">{lock.icon}</div>
            <div className="font-display text-lg font-bold text-dark">
              {lock.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
