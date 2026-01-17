import { trackServiceClick, trackFiverrClick } from '../utils/tracking';

const services = [
  {
    name: 'Single Lock Setup',
    tagline: 'Perfect for getting started',
    price: '$100',
    priceNote: '1 smart lock',
    features: [
      'Setup 1 smart lock',
      'Basic configuration',
      'WiFi connection & firmware updates',
      'Basic instructions',
      'Email support',
      '2-day delivery',
    ],
    cta: 'Get Started',
    href: 'https://www.fiverr.com/vacaylock',
    popular: false,
  },
  {
    name: 'Full Property Setup',
    tagline: 'For complete property automation',
    price: '$200',
    priceNote: 'up to 3 locks',
    features: [
      'Setup up to 3 smart locks',
      'Complete configuration',
      'Platform integration',
      '30-minute consultation call',
      'Detailed user manual',
      '3-day delivery',
    ],
    cta: 'Get Started',
    href: 'https://www.fiverr.com/vacaylock',
    popular: true,
  },
  {
    name: 'Complete Automation',
    tagline: 'Full automation for serious hosts',
    price: '$300',
    priceNote: 'unlimited locks',
    features: [
      'Setup unlimited smart locks',
      'Full automation workflows',
      'Multi-platform integration',
      'Comprehensive training session',
      'Priority support',
      '5-day delivery',
    ],
    cta: 'Get Started',
    href: 'https://www.fiverr.com/vacaylock',
    popular: false,
  },
  {
    name: 'Enterprise',
    tagline: 'For property managers & large portfolios',
    price: 'Custom',
    priceNote: 'project pricing',
    features: [
      'Custom project scope',
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
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="text-primary font-bold text-sm uppercase tracking-wider mb-4">
          Services
        </div>
        <h2 className="font-display text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
          Choose Your Package
        </h2>
        <p className="text-xl text-gray-600">
          Professional smart lock setup tailored to your needs
        </p>
      </div>
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-8">
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
            <div className="p-8 bg-gradient-to-br from-primary-light/30 to-white border-b border-gray-200">
              <h3 className="font-display text-3xl font-extrabold text-primary mb-2">
                {service.name}
              </h3>
              <p className="text-gray-600">{service.tagline}</p>
            </div>
            
            <div className="p-8">
              <div className="mb-6">
                <div className="text-gray-600 text-sm mb-2">{service.priceNote}</div>
                <div className="font-display text-5xl font-extrabold text-dark">
                  {service.price}
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 pb-4 border-b border-gray-200 last:border-0">
                    <span className="text-green-500 text-xl flex-shrink-0 mt-0.5">✓</span>
                    <span className="text-gray-700">{feature}</span>
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
                className="block w-full text-center bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30"
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
