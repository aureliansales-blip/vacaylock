const testimonials = [
  {
    stars: 5,
    text: 'VacayLock saved me so much time! I was spending at least an hour every week just managing access codes. Now it\'s completely automated. Best investment I\'ve made for my rental.',
    author: 'Sarah M.',
    role: 'Airbnb Superhost, Dublin',
  },
  {
    stars: 5,
    text: 'The setup was incredibly smooth. They walked me through everything remotely and had my locks integrated with Airbnb in less than a day. Guests love the seamless check-in experience.',
    author: 'James O.',
    role: 'Property Manager, Cork',
  },
  {
    stars: 5,
    text: 'I manage 4 properties and was overwhelmed with access code management. VacayLock set up all my locks and now everything runs on autopilot. Can\'t recommend them enough!',
    author: 'Emma K.',
    role: 'Multi-property Host, Galway',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="text-primary font-bold text-sm uppercase tracking-wider mb-4">
          Testimonials
        </div>
        <h2 className="font-display text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
          Trusted by Airbnb Hosts
        </h2>
        <p className="text-xl text-gray-600">
          See what our clients say about their experience
        </p>
      </div>
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gray-100 p-8 rounded-2xl border-l-4 border-primary"
          >
            <div className="text-yellow-500 text-xl mb-4">
              {'★'.repeat(testimonial.stars)}
            </div>
            <p className="text-gray-700 italic leading-relaxed mb-6">
              "{testimonial.text}"
            </p>
            <div>
              <div className="font-semibold text-dark">{testimonial.author}</div>
              <div className="text-sm text-gray-600">{testimonial.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
