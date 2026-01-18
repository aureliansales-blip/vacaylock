const locks = [
  { icon: '🔐', name: 'Schlage' },
  { icon: '🔒', name: 'Yale' },
  { icon: '🚪', name: 'August' },
  { icon: '🏠', name: 'Kwikset' },
  { icon: '🔓', name: 'Level Lock' },
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
      
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
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
