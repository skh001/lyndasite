import { Brain, Sparkles, Heart, Shield, Target, Zap } from 'lucide-react';

export default function Specializations() {
  const specializations = [
    { icon: Brain, label: 'Hypnose', color: 'text-purple-500' },
    { icon: Sparkles, label: 'PNL', color: 'text-yellow-500' },
    { icon: Heart, label: 'Gestion du stress', color: 'text-rose-500' },
    { icon: Shield, label: 'Confiance en soi', color: 'text-blue-500' },
    { icon: Target, label: 'Blocages émotionnels', color: 'text-pink-500' },
    { icon: Zap, label: 'Motivation sportive', color: 'text-orange-500' }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-rose-50/30 to-blue-50/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-gray-800 mb-4">
            Mes <span className="font-normal text-rose-600">spécialisations</span>
          </h2>
          <p className="text-gray-600 font-light max-w-2xl mx-auto">
            Des domaines d'expertise variés pour un accompagnement complet et personnalisé
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {specializations.map((spec, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-rose-100 group"
            >
              <spec.icon
                className={`${spec.color} mb-4 group-hover:scale-110 transition-transform`}
                size={36}
              />
              <h3 className="text-lg font-light text-gray-800">{spec.label}</h3>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-block bg-white px-8 py-4 rounded-full shadow-lg">
            <p className="text-gray-700 font-light">
              <span className="text-rose-600 font-normal">Harmonie mentale</span> •
              <span className="text-blue-600 font-normal"> Équilibre émotionnel</span> •
              <span className="text-rose-600 font-normal"> Bien-être global</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
