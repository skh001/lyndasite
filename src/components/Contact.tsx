import { useState } from 'react';
import { Mail, MapPin, Instagram, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_ACCESS_KEY',
          ...formData
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-rose-50/30 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-gray-800 mb-4">
            <span className="font-normal text-rose-600">Contact</span>
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
            Je suis là pour vous accompagner
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-rose-100 mb-6">
              <h3 className="text-2xl font-light text-gray-800 mb-6">
                Envoyez-moi un message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-light mb-2">
                    Nom
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-rose-200 focus:outline-none focus:border-rose-400 transition-colors"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-light mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-rose-200 focus:outline-none focus:border-rose-400 transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-light mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-rose-200 focus:outline-none focus:border-rose-400 transition-colors resize-none"
                    placeholder="Parlez-moi de vous et de vos besoins..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-rose-400 to-rose-500 text-white py-3 rounded-xl hover:shadow-lg transition-all duration-300 disabled:opacity-50 flex items-center justify-center space-x-2"
                >
                  <span>{isSubmitting ? 'Envoi en cours...' : 'Envoyer'}</span>
                  <Send size={18} />
                </button>
                {submitStatus === 'success' && (
                  <p className="text-green-600 text-sm font-light text-center">
                    Message envoyé avec succès ! Je vous répondrai rapidement.
                  </p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-600 text-sm font-light text-center">
                    Une erreur s'est produite. Veuillez réessayer.
                  </p>
                )}
              </form>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-rose-50 to-blue-50 p-8 rounded-2xl shadow-lg border border-rose-100">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-white p-3 rounded-xl shadow-md">
                  <Mail className="text-rose-500" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-light text-gray-800 mb-1">Email</h4>
                  <a
                    href="mailto:lynda@rayonnement.ch"
                    className="text-rose-600 hover:text-rose-700 font-light"
                  >
                    lynda@rayonnement.ch
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-white p-3 rounded-xl shadow-md">
                  <MapPin className="text-rose-500" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-light text-gray-800 mb-1">Localisation</h4>
                  <p className="text-gray-600 font-light">Suisse 🇨🇭</p>
                  <p className="text-sm text-gray-500 font-light mt-1">
                    Séances en ligne disponibles partout
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-xl shadow-md">
                  <Instagram className="text-rose-500" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-light text-gray-800 mb-1">Instagram</h4>
                  <a
                    href="https://instagram.com/lynda.rayonnement"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-rose-600 hover:text-rose-700 font-light"
                  >
                    @lynda.rayonnement
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-rose-100 to-blue-100 p-8 rounded-2xl text-center">
              <p className="text-lg text-gray-700 font-light leading-relaxed">
                "Chaque message est une opportunité de transformation.
                Je réponds personnellement à chacune de vos demandes avec attention et bienveillance."
              </p>
              <p className="text-rose-600 font-light mt-4">– Lynda</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
