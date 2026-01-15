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
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="text-primary font-bold text-sm uppercase tracking-wider mb-4">
          The Problem
        </div>
        <h2 className="font-display text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
          Managing Guest Access Shouldn't Be This Hard
        </h2>
        <p className="text-xl text-gray-600">
          Every Airbnb host knows these frustrations all too well
        </p>
      </div>
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {problems.map((problem, index) => (
          <div
            key={index}
            className="bg-gray-100 p-8 rounded-2xl border-2 border-transparent hover:border-primary transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10"
          >
            <div className="text-5xl mb-4">{problem.icon}</div>
            <h3 className="font-display text-xl font-bold mb-3 text-dark">
              {problem.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{problem.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
