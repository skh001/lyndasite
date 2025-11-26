import { Star, Instagram } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sophie M.',
      text: 'Lynda a transformé ma vie. Grâce à l\'hypnose, j\'ai enfin réussi à surmonter mes blocages et retrouver confiance en moi.',
      rating: 5,
      source: 'Google'
    },
    {
      name: 'Marc L.',
      text: 'Un accompagnement bienveillant et professionnel. Les séances de coaching mental m\'ont aidé à atteindre mes objectifs.',
      rating: 5,
      source: 'Google'
    },
    {
      name: 'Emma R.',
      text: 'Les séances de fitness en plein air sont incroyables ! Lynda sait motiver et créer une atmosphère positive.',
      rating: 5,
      source: 'Instagram'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-rose-50/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-gray-800 mb-4">
            Ils me font <span className="font-normal text-rose-600">confiance</span>
          </h2>
          <p className="text-gray-600 font-light">
            Retours authentiques de mes clients
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-rose-100"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                {testimonial.source === 'Instagram' ? (
                  <Instagram size={20} className="text-pink-500" />
                ) : (
                  <span className="text-sm text-blue-600 font-light">Google</span>
                )}
              </div>
              <p className="text-gray-700 font-light mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>
              <p className="text-rose-600 font-light">– {testimonial.name}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.google.com/search?q=lynda+rayonnement"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-rose-600 hover:text-rose-700 font-light underline"
          >
            Voir tous les avis Google
          </a>
        </div>
      </div>
    </section>
  );
}
