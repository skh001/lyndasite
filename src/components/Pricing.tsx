import { Check } from 'lucide-react';

export default function Pricing() {
  const services = [
    {
      name: 'Hypnose Ericksonienne',
      price: '120',
      duration: '60-90 min',
      features: ['Séance personnalisée', 'Suivi post-séance', 'Support par email']
    },
    {
      name: 'Coaching mental & PNL',
      price: '100',
      duration: '60 min',
      features: ['Techniques PNL', 'Exercices pratiques', 'Plan d\'action personnalisé']
    },
    {
      name: 'Fitness Online',
      price: '80',
      duration: '45 min',
      features: ['Séance en visio', 'Programme sur mesure', 'Suivi de progression']
    },
    {
      name: 'Fitness Outdoor',
      price: '90',
      duration: '60 min',
      features: ['En plein air', 'Exercices variés', 'Motivation & énergie']
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-gray-800 mb-4">
            <span className="font-normal text-rose-600">Tarifs</span> transparents
          </h2>
          <p className="text-gray-600 font-light max-w-2xl mx-auto">
            Des prestations de qualité à des tarifs justes et accessibles
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-rose-50 to-blue-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-rose-100"
            >
              <h3 className="text-lg font-light text-gray-800 mb-2">
                {service.name}
              </h3>
              <div className="mb-4">
                <span className="text-4xl font-light text-rose-600">{service.price}</span>
                <span className="text-gray-600 font-light"> CHF</span>
              </div>
              <p className="text-sm text-gray-500 font-light mb-4">{service.duration}</p>
              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-2">
                    <Check size={16} className="text-rose-500 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-600 font-light">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-rose-100 to-blue-100 rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-light text-gray-800 mb-4">
            Forfaits <span className="font-normal text-rose-600">multi-séances</span>
          </h3>
          <p className="text-gray-700 font-light mb-6 max-w-2xl mx-auto">
            Des tarifs préférentiels pour un accompagnement sur la durée.
            Pack de 5 séances : -10% • Pack de 10 séances : -15%
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
              }
            }}
            className="bg-rose-500 text-white px-6 py-3 rounded-full hover:bg-rose-600 transition-colors font-light"
          >
            Me contacter pour en savoir plus
          </button>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-500 font-light">
            Paiement par virement bancaire ou TWINT • Première consultation gratuite de 15 minutes
          </p>
        </div>
      </div>
    </section>
  );
}
