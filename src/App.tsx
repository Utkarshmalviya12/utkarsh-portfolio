import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Pricing from './components/Pricing';
import WhyChooseMe from './components/WhyChooseMe';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Performance from './components/Performance';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <Pricing />
      <WhyChooseMe />
      <Process />
      <Portfolio />
      <Performance />
      <Testimonials />
      <Contact />
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}

export default App;
