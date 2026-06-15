import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import FloatingActions from './components/FloatingActions.jsx';
import SEO from './components/SEO.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import PortfolioPage from './pages/PortfolioPage.jsx';
import TestimonialsPage from './pages/TestimonialsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import BlogPostPage from './pages/BlogPostPage.jsx';
import LocalLandingPage from './pages/LocalLandingPage.jsx';
import InteriorDesignerDimapur from './pages/InteriorDesignerDimapur.jsx';

function PageShell({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      {children}
    </motion.main>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <>
      <SEO />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageShell><Home /></PageShell>} />
          <Route path="/about" element={<PageShell><About /></PageShell>} />
          <Route path="/services" element={<PageShell><ServicesPage /></PageShell>} />
          <Route path="/portfolio" element={<PageShell><PortfolioPage /></PageShell>} />
          <Route path="/testimonials" element={<PageShell><TestimonialsPage /></PageShell>} />
          <Route path="/blog" element={<PageShell><BlogPage /></PageShell>} />
          <Route path="/blog/:slug" element={<PageShell><BlogPostPage /></PageShell>} />
          <Route path="/services/interior-designer-dimapur" element={<PageShell><InteriorDesignerDimapur /></PageShell>} />
          <Route path="/contact" element={<PageShell><ContactPage /></PageShell>} />
          <Route path="/locations/:slug" element={<PageShell><LocalLandingPage /></PageShell>} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <FloatingActions />
    </>
  );
}
