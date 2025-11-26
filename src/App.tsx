import Header from './components/Header';
import Hero from './components/Hero';
import Booking from './components/Booking';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Specializations from './components/Specializations';
import WhyChooseMe from './components/WhyChooseMe';
import Process from './components/Process';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-blue-50">
      <Header />
      <Hero />
      <Booking />
      <Testimonials />
      <About />
      <Specializations />
      <WhyChooseMe />
      <Process />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
