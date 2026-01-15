export default function FinalCTA() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white text-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-[-50%] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-primary/15 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
          Ready to Automate Your Guest Access?
        </h2>
        <p className="text-xl mb-10 opacity-90 leading-relaxed">
          Join hundreds of Airbnb hosts who've eliminated the hassle of manual key management. Get started today and have your smart locks professionally set up within 24 hours.
        </p>
        <a
          href="https://www.fiverr.com/vacaylock"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-accent hover:bg-accent-dark text-white px-12 py-5 rounded-xl font-semibold text-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/50"
        >
          Get Started Now →
        </a>
      </div>
    </section>
  );
}
