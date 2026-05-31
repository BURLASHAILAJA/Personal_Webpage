import DataFlowCanvas from './components/DataFlowCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import WhyMe from './components/WhyMe';
import Services from './components/Services';
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
        <Expertise />
        <Certifications />
        <Projects />
        <TechStack />
        <WhyMe />
        <Services />
        <Impact />
        <Contact />
      </main>
      <Chatbot />
      <Footer />
    </>
  );
}
