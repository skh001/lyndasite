import { Heart, Sparkles, Users, Shield } from 'lucide-react';

export default function About() {
  const qualities = [
    { icon: Heart, label: 'Empathie' },
    { icon: Sparkles, label: 'Transformation positive' },
    { icon: Users, label: 'Approche holistique' },
    { icon: Shield, label: 'Suivi bienveillant' }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl font-light text-gray-800 mb-6">
              Qui <span className="font-normal text-rose-600">suis-je</span> ?
            </h2>

            <div className="space-y-4 text-gray-700 font-light leading-relaxed">
              <p>
                Je suis <strong>Lynda</strong>, praticienne certifiée en <strong>Hypnose Ericksonienne</strong> et formée en <strong>PNL</strong>.
                Depuis plusieurs années, j'accompagne les personnes dans leur transformation personnelle,
                que ce soit sur le plan mental, émotionnel ou physique.
              </p>

              <p>
                Mon approche est <strong>douce, humaniste et personnalisée</strong>. Je crois profondément
                que chaque personne possède en elle les ressources nécessaires pour évoluer et s'épanouir.
                Mon rôle est de vous guider avec bienveillance vers cette découverte.
              </p>

              <p>
                En tant que <strong>coach bien-être et mentale</strong>, mais également <strong>coach fitness
                online & outdoor</strong>, je propose un accompagnement holistique qui prend en compte
                l'ensemble de votre être : corps, esprit et émotions.
              </p>

              <p>
                Que vous cherchiez à surmonter des blocages, renforcer votre confiance, gérer le stress
                ou simplement retrouver l'harmonie, je suis là pour vous accompagner à votre rythme,
                avec écoute et respect.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {qualities.map((quality, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 bg-rose-50 p-4 rounded-xl"
                >
                  <quality.icon className="text-rose-500" size={24} />
                  <span className="text-gray-700 font-light">{quality.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-rose-200 via-blue-100 to-rose-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="text-8xl">🌸</div>
                    <p className="text-gray-600 font-light px-8">
                      Photo professionnelle<br />à ajouter ici
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-rose-200 rounded-full blur-3xl opacity-50"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
