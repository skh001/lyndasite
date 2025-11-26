import { Heart, Lock, Ear, Sparkles } from 'lucide-react';

export default function WhyChooseMe() {
  const reasons = [
    {
      icon: Heart,
      title: 'Bienveillance',
      description: 'Un accompagnement empreint de douceur et de compréhension, dans un espace sans jugement.'
    },
    {
      icon: Lock,
      title: 'Confidentialité',
      description: 'Vos échanges restent strictement confidentiels. Votre confiance est sacrée.'
    },
    {
      icon: Ear,
      title: 'Écoute active',
      description: 'Je prends le temps de vous écouter réellement, pour comprendre vos besoins profonds.'
    },
    {
      icon: Sparkles,
      title: 'Approche personnalisée',
      description: 'Chaque séance est adaptée à votre rythme, vos objectifs et votre singularité.'
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-gray-800 mb-4">
            Pourquoi me <span className="font-normal text-rose-600">choisir</span> ?
          </h2>
          <p className="text-gray-600 font-light max-w-2xl mx-auto">
            Un accompagnement fondé sur des valeurs humaines et professionnelles
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-rose-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-rose-100"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-xl shadow-md">
                  <reason.icon className="text-rose-500" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-light text-gray-800 mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-rose-100 to-blue-100 rounded-3xl p-8 text-center">
          <p className="text-xl text-gray-700 font-light leading-relaxed">
            Mon engagement : vous accompagner avec <span className="font-normal text-rose-600">authenticité</span>,
            <span className="font-normal text-blue-600"> professionnalisme</span> et
            <span className="font-normal text-rose-600"> humanité</span>
          </p>
        </div>
      </div>
    </section>
  );
}
