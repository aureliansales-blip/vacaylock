const locks = [
  { logo: '/schlage-logo-noTag.svg', name: 'Schlage' },
  { logo: '/logo-new.png', name: 'Yale' },
  { logo: '/logoSvg.svg', name: 'August' },
  { logo: '/Kwikset_logo.png', name: 'Kwikset' },
  { logo: '/c4f9967d-243c-4d50-802b-c0befec78196.png', name: 'Level Lock' },
  { logo: '/aqara_logo.svg', name: 'Aqara' },
];

export default function CompatibleLocks() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="text-primary font-bold text-sm uppercase tracking-wider mb-4">
          Compatible Devices
        </div>
        <h2 className="font-display text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
          Works With All Major Smart Lock Brands
        </h2>
        <p className="text-xl text-gray-600">
          We're experts in setting up and integrating the most popular smart locks for vacation rentals
        </p>
      </div>
      
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {locks.map((lock, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center justify-center"
          >
            <div className="h-16 w-full flex items-center justify-center mb-4">
              <img 
                src={lock.logo} 
                alt={`${lock.name} logo`}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="font-display text-sm font-bold text-dark">
              {lock.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
