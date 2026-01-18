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
    <section id="how-it-works" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
        <div className="text-primary font-bold text-sm uppercase tracking-wider mb-3">
          Process
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
          How It Works
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600">
          From consultation to fully automated guest access in 4 simple steps
        </p>
      </div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {steps.map((step) => (
          <div key={step.number} className="text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-primary to-accent text-white rounded-full flex items-center justify-center font-display text-xl sm:text-2xl lg:text-3xl font-extrabold mx-auto mb-3 sm:mb-4 lg:mb-6 shadow-lg shadow-primary/30">
              {step.number}
            </div>
            <h3 className="font-display text-base sm:text-lg lg:text-xl font-bold mb-2 sm:mb-3 text-dark">
              {step.title}
            </h3>
            <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
