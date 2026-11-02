import { useState } from 'react';
import { About } from './components/About';
import { AccessibilityMenu } from './components/AccessibilityMenu';
import { Background } from './components/Background';
import { Certificates } from './components/Certificates';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { IconSprite } from './components/IconSprite';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { Process, Services } from './components/Services';
import { Skills } from './components/Skills';
import { Stats, TechMarquee } from './components/TechMarquee';
import { SECTIONS } from './data/contact';
import { useScroll } from './hooks/useScroll';

const SECTION_IDS = SECTIONS.map((s) => s.id);

export default function App() {
  const { progress, scrolled, showToTop, active } = useScroll(SECTION_IDS);
  const [a11yOpen, setA11yOpen] = useState(false);

  return (
    <>
      <IconSprite />
      <a className="skip" href="#conteudo">Pular para o conteúdo</a>
      <div className="progress-bar" aria-hidden="true" style={{ transform: `scaleX(${progress})` }} />
      <Background />

      <Navbar active={active} scrolled={scrolled} />

      <main id="conteudo" tabIndex={-1}>
        <Hero />
        <TechMarquee />
        <Stats />
        <Projects />
        <About />
        <Certificates onOpenA11y={() => setA11yOpen(true)} />
        <Skills />
        <Services />
        <Process />
        <Contact />
      </main>

      <Footer showToTop={showToTop} />
      <AccessibilityMenu open={a11yOpen} setOpen={setA11yOpen} />
    </>
  );
}
