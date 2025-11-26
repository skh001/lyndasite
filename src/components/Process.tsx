import { MessageCircle, Target, Sparkles, TrendingUp } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      icon: MessageCircle,
      title: 'Discussion',
      description: 'Nous échangeons librement pour comprendre votre situation et vos attentes.'
    },
    {
      icon: Target,
      title: 'Objectifs',
      description: 'Ensemble, nous définissons des objectifs clairs et atteignables.'
    },
    {
      icon: Sparkles,
      title: 'Séance adaptée',
      description: 'Je crée une séance sur mesure, adaptée à vos besoins spécifiques.'
    },
    {
      icon: TrendingUp,
      title: 'Suivi',
      description: 'Un accompagnement continu pour ancrer les changements dans la durée.'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-blue-50/30 to-rose-50/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-gray-800 mb-4">
            Processus d'<span className="font-normal text-rose-600">accompagnement</span>
          </h2>
          <p className="text-gray-600 font-light max-w-2xl mx-auto">
            Un parcours structuré et bienveillant en 4 étapes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-rose-100 h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-gradient-to-br from-rose-100 to-blue-100 p-4 rounded-full mb-4">
                    <step.icon className="text-rose-600" size={32} />
                  </div>
                  <div className="bg-rose-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-light mb-3">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-light text-gray-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 font-light text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-rose-200 to-blue-200"></div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 font-light text-lg max-w-3xl mx-auto leading-relaxed">
            Chaque parcours est unique. Je m'adapte à votre rythme et à vos besoins
            pour créer un accompagnement qui vous ressemble.
          </p>
        </div>
      </div>
    </section>
  );
}
