import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowDown, FaArrowRight } from 'react-icons/fa';
import { business } from '../data/business.js';

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden text-white">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1600566753151-384129cf4e3e?auto=format&fit=crop&w=1800&q=85)',
        }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />
      {/* <div className="container-lux relative flex min-h-[calc(100vh-5rem)] items-center pb-16 pt-20"> */}
        <div className="container-lux relative flex min-h-[calc(100vh-5rem)] items-center py-16 sm:pt-20 sm:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-4xl"
        >
          {/* <p className="section-kicker text-gold"> */}
          <p className="section-kicker text-xs tracking-[0.18em] text-gold sm:text-sm">
          Premium Interior Design in Nagaland and Assam.</p>
          {/* <h1 className="mt-5 text-5xl font-bold leading-[1.02] sm:text-6xl lg:text-7xl"> */}
          <h1 className="mt-5 text-3xl font-bold leading-tight sm:text-5xl lg:text-7xl">
            Transforming Spaces Across Nagaland and Assam
          </h1>
          {/* <p className="mt-4 text-xl font-semibold uppercase tracking-[0.2em] text-white/85"> */}
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-white/85 sm:text-lg sm:tracking-[0.18em]">
            Professional Interior Designers in Dimapur and Lahorijan
          </p>
          {/* <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85 sm:text-xl"> */}
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8 lg:text-xl">
            Expert residential and commercial interior design services rooted in Dimapur and Lahorijan, serving homes and offices across Nagaland and Assam with modern, functional, and meaningful spaces.
          </p>
          {/* <div className="mt-9 flex flex-col gap-4 sm:flex-row"> */}
          <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:gap-4">
            <a href={business.whatsapp} className="btn-primary">
              Get Free Consultation <FaArrowRight />
            </a>
            <Link to="/portfolio" className="btn-secondary">
              View Projects
            </Link>
          </div>
        </motion.div>
      </div>
      <a
        href="#trust"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-white/80 sm:flex"
      >
        Scroll
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
          <FaArrowDown />
        </motion.span>
      </a>
    </section>
  );
}
