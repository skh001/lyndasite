import { Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4"
    >
      <div className="max-w-6xl mx-auto text-center space-y-8 animate-fade-in">
        <div className="inline-flex items-center space-x-2 bg-rose-100/50 px-4 py-2 rounded-full mb-4">
          <Sparkles className="text-rose-500" size={20} />
          <span className="text-rose-800 font-light text-sm">
            Praticienne certifiée en Suisse 🇨🇭
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-800 leading-tight">
          Reprenez le contrôle de votre{' '}
          <span className="text-rose-600 font-normal">esprit</span>,<br />
          de votre <span className="text-blue-500 font-normal">énergie</span> et de votre{' '}
          <span className="text-rose-400 font-normal">corps</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
          Praticienne certifiée en <strong>Hypnose Ericksonienne & PNL</strong>
          <br />
          Coach bien-être & mentale • Fitness coaching online & en plein air
        </p>

        <div className="pt-6">
          <button
            onClick={scrollToBooking}
            className="bg-gradient-to-r from-rose-400 to-rose-500 text-white px-8 py-4 rounded-full text-lg font-light hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Prendre rendez-vous
          </button>
        </div>

        <p className="text-sm text-gray-500 font-light pt-4">
          Séances d'hypnose, PNL, bien-être, fitness en ligne ou en plein air – en Suisse
        </p>

        <div className="pt-12 max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video bg-gradient-to-br from-rose-200 via-blue-100 to-rose-100">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4 p-8">
                <div className="text-6xl">🧘‍♀️</div>
                <p className="text-gray-600 font-light">Harmonie • Sérénité • Transformation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
