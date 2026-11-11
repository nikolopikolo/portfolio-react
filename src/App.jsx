import React, { useState, useEffect } from 'react';
import { ToastProvider } from './components/common/Toast';
import ProgressBar from './components/common/ProgressBar';
import CommandPalette from './components/common/CommandPalette';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const [paletteOpen, setPaletteOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setPaletteOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <ToastProvider>
      <div className="portfolio-app">
        {/* Top Reading Progress Bar */}
        <ProgressBar />

        {/* Top Navigation */}
        <Navbar onOpenPalette={() => setPaletteOpen(true)} />

        {/* Main Page Content */}
        <main id="main-content">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Global Developer Command Palette */}
        <CommandPalette isOpen={paletteOpen} onClose={() => setPaletteOpen(false)} />
      </div>
    </ToastProvider>
  );
}

export default App;
