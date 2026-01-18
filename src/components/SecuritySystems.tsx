const systems = [
  { 
    name: 'RemoteLock',
    description: 'Enterprise-grade access control platform',
    logo: '🔐'
  },
  { 
    name: 'Seam',
    description: 'Universal smart lock API integration',
    logo: '🔗'
  },
];

export default function SecuritySystems() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="text-primary font-bold text-sm uppercase tracking-wider mb-4">
          Security Systems
        </div>
        <h2 className="font-display text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
          Integrate With Leading Access Control Platforms
        </h2>
        <p className="text-xl text-gray-600">
          We configure your smart locks to work seamlessly with enterprise security systems
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        {systems.map((system, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-gray-50 to-white p-10 rounded-2xl border-2 border-gray-200 hover:border-primary shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="text-6xl mb-6 text-center">{system.logo}</div>
            <h3 className="font-display text-2xl font-bold text-dark mb-3 text-center">
              {system.name}
            </h3>
            <p className="text-gray-600 text-center leading-relaxed">
              {system.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
