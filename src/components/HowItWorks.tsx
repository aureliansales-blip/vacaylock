const steps = [
  {
    number: 1,
    title: 'Book & Consult',
    description: 'Choose your package and schedule a brief consultation call to discuss your property and smart lock model.',
  },
  {
    number: 2,
    title: 'Remote Setup',
    description: 'We\'ll guide you through initial lock installation (if needed) and handle all WiFi, app, and platform configurations remotely.',
  },
  {
    number: 3,
    title: 'Integration',
    description: 'We connect your smart locks to Airbnb, VRBO, or your property management system for automatic code generation.',
  },
  {
    number: 4,
    title: 'Training & Launch',
    description: 'You get complete training, documentation, and ongoing support. Your guests start getting automatic access codes immediately.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="text-primary font-bold text-sm uppercase tracking-wider mb-4">
          Process
        </div>
        <h2 className="font-display text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
          How It Works
        </h2>
        <p className="text-xl text-gray-600">
          From consultation to fully automated guest access in 4 simple steps
        </p>
      </div>
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step) => (
          <div key={step.number} className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent text-white rounded-full flex items-center justify-center font-display text-3xl font-extrabold mx-auto mb-6 shadow-lg shadow-primary/30">
              {step.number}
            </div>
            <h3 className="font-display text-xl font-bold mb-3 text-dark">
              {step.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
