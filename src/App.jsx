import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import DisciplinesPage from './pages/DisciplinesPage';
import SchedulePage from './pages/SchedulePage';
import StoriesPage from './pages/StoriesPage';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-background min-h-screen text-foreground font-sans antialiased overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/disciplinas" element={<DisciplinesPage />} />
          <Route path="/horarios" element={<SchedulePage />} />
          <Route path="/historias" element={<StoriesPage />} />
          <Route path="/contacto" element={<ContactPage />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
