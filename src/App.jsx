import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ParticleField from './components/ParticleField';
import Hero from './sections/Hero';
import WhatWeBuild from './sections/WhatWeBuild';
import WorkShowcase from './sections/WorkShowcase';
import TheTeam from './sections/TheTeam';
import Footer from './sections/Footer';
import TerminalContactModal from './components/TerminalContactModal';
import NotFound404 from './components/NotFound404';
import CareersPage from './pages/CareersPage';

function HomePage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  return (
    <>
      <ParticleField />
      <Navbar onContactClick={openContactModal} />
      <Hero onContactClick={openContactModal} />
      <WhatWeBuild />
      <WorkShowcase />
      <TheTeam />
      <Footer onContactClick={openContactModal} />
      <TerminalContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
