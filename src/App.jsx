import DataFlowCanvas from './components/DataFlowCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Expertise from './components/Expertise';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Certifications from './components/Certifications';
import WhyMe from './components/WhyMe';
import Impact from './components/Impact';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import { useScrollAnimations } from './hooks/useScrollAnimations';
import { useCursorGlow } from './hooks/useCursorGlow';

export default function App() {
  useScrollAnimations();
  useCursorGlow();

  return (
    <>
      <DataFlowCanvas />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Expertise />
        <Projects />
        <TechStack />
        <Certifications />
        <WhyMe />
        <Impact />
        <Contact />
      </main>
      <Chatbot />
      <Footer />
    </>
  );
}
