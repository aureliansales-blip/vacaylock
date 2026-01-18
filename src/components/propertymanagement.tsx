const platforms = [
  { icon: '🏨', name: 'Guesty' },
  { icon: '🧹', name: 'Tidy' },
  { icon: '🏠', name: 'Airbnb' },
  { icon: '🏡', name: 'VRBO' },
  { icon: '🛏️', name: 'Booking.com' },
  { icon: '📊', name: 'Hospitable' },
];

export default function PropertyManagement() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="text-primary font-bold text-sm uppercase tracking-wider mb-4">
          Property Management Systems
        </div>
        <h2 className="font-display text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
          Sync With Your Favorite PMS Platforms
        </h2>
        <p className="text-xl text-gray-600">
          Automatic integration with leading property management and booking platforms
        </p>
      </div>
      
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {platforms.map((platform, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary"
          >
            <div className="text-4xl mb-3">{platform.icon}</div>
            <div className="font-display text-sm font-bold text-dark">
              {platform.name}
            </div>
          </div>
        ))}
      </div>
      
      <div className="max-w-4xl mx-auto mt-12 text-center">
        <p className="text-gray-600 leading-relaxed">
          Don't see your platform? We support most major property management systems and booking platforms. 
          <a href="#contact" className="text-primary font-semibold hover:underline ml-1">
            Contact us
          </a> to confirm compatibility.
        </p>
      </div>
    </section>
  );
}
