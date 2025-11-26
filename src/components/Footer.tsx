import { Instagram, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-white to-rose-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-light text-gray-800 mb-4">
              Lynda – <span className="font-normal text-rose-600">Rayonnement</span>
            </h3>
            <p className="text-gray-600 font-light leading-relaxed">
              Praticienne certifiée en Hypnose Ericksonienne & PNL.
              Coach bien-être, mentale et fitness en Suisse.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-light text-gray-800 mb-4">Navigation</h4>
            <nav className="space-y-2">
              {['Accueil', 'À propos', 'Tarifs', 'Réservations', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const id = item === 'Accueil' ? 'hero' :
                              item === 'À propos' ? 'about' :
                              item === 'Tarifs' ? 'pricing' :
                              item === 'Réservations' ? 'booking' : 'contact';
                    const element = document.getElementById(id);
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
                  className="block text-gray-600 hover:text-rose-600 transition-colors font-light"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-light text-gray-800 mb-4">Restons connectés</h4>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://instagram.com/lynda.rayonnement"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <Instagram className="text-rose-500" size={24} />
              </a>
              <a
                href="mailto:lynda@rayonnement.ch"
                className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <Mail className="text-rose-500" size={24} />
              </a>
            </div>
            <p className="text-sm text-gray-600 font-light">
              Suisse 🇨🇭<br />
              Séances en ligne et en personne
            </p>
          </div>
        </div>

        <div className="border-t border-rose-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-600 font-light flex items-center">
              © {currentYear} Lynda – Rayonnement. Tous droits réservés.
              <Heart size={14} className="text-rose-500 mx-1" />
            </p>
            <div className="flex space-x-6 text-sm">
              <button className="text-gray-600 hover:text-rose-600 transition-colors font-light">
                Mentions légales
              </button>
              <button className="text-gray-600 hover:text-rose-600 transition-colors font-light">
                Confidentialité
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-500 font-light italic">
            "Votre transformation commence ici"
          </p>
        </div>
      </div>
    </footer>
  );
}
