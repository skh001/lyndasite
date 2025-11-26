import { Calendar, Video, Mountain } from 'lucide-react';

export default function Booking() {
  const services = [
    { name: 'Hypnose Ericksonienne', icon: '🌙' },
    { name: 'Coaching mental', icon: '🧠' },
    { name: 'PNL', icon: '✨' },
    { name: 'Séance Fitness Outdoor', icon: '🏔️' },
    { name: 'Séance Fitness Online', icon: '💻' }
  ];

  return (
    <section id="booking" className="py-20 px-4 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-gray-800 mb-4">
            Réservation <span className="font-normal text-rose-600">directe</span>
          </h2>
          <p className="text-gray-600 font-light max-w-2xl mx-auto">
            Choisissez le type de séance qui vous correspond et réservez votre créneau en quelques clics
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service) => (
            <div
              key={service.name}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-rose-100"
            >
              <div className="text-4xl mb-3">{service.icon}</div>
              <h3 className="text-lg font-light text-gray-800">{service.name}</h3>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-rose-50 to-blue-50 rounded-3xl p-8 lg:p-12 shadow-xl">
          <div className="text-center mb-8">
            <Calendar className="inline-block text-rose-500 mb-4" size={40} />
            <h3 className="text-2xl font-light text-gray-800 mb-4">
              Réserver votre séance
            </h3>
            <p className="text-gray-600 font-light mb-6">
              Séances disponibles en visioconférence depuis toute la Suisse & l'étranger
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 min-h-[500px] flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="flex justify-center space-x-4 mb-6">
                <Video className="text-blue-400" size={32} />
                <Mountain className="text-rose-400" size={32} />
              </div>
              <p className="text-gray-600 font-light max-w-md">
                Pour intégrer votre calendrier Calendly, ajoutez le code d'intégration ici.
              </p>
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-rose-500 text-white px-6 py-3 rounded-full hover:bg-rose-600 transition-colors"
              >
                Accéder à Calendly
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
