import Hero from '../components/Hero.jsx';
import TrustStats from '../components/TrustStats.jsx';
import Services from '../components/Services.jsx';
import WhyChooseUs from '../components/WhyChooseUs.jsx';
import Portfolio from '../components/Portfolio.jsx';
import Testimonials from '../components/Testimonials.jsx';
import CTA from '../components/CTA.jsx';
import Contact from '../components/Contact.jsx';

export default function Home() {
  return (
    <>
      <Hero />
      <section className="bg-white py-20 transition-colors duration-300 dark:bg-dark-surface lg:py-28">
        <div className="container-lux">
          <div className="max-w-4xl">
            <p className="section-kicker">About Us</p>
            <h2 className="section-title">Professional interior design from Dimapur to Kohima</h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-charcoal/80 dark:text-dark-muted">
              Based near Airport Junction, Dimapur, INTERIOR DECOR delivers premium residential and commercial interior design services across Dimapur, Chümoukedima, and Kohima. We combine thoughtful space planning with local insight to create modular kitchens, living rooms, bedrooms, and office interiors that feel elegant, livable, and distinctly Nagaland.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-ivory py-20 transition-colors duration-300 dark:bg-dark-bg lg:py-28">
        <div className="container-lux">
          <div className="max-w-4xl">
            <p className="section-kicker">Core Design Services</p>
            <h2 className="section-title">Solutions for modern kitchens, luxury homes, and productive workspaces</h2>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            <article className="rounded-3xl border border-charcoal/10 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-dark-card">
              <h2 className="text-2xl font-bold text-charcoal dark:text-dark-text">Modern Modular Kitchen Design</h2>
              <p className="mt-4 text-sm leading-7 text-charcoal/70 dark:text-dark-muted">
                Tailored kitchen layouts with smart storage, premium finishes, and durable fittings designed for Dimapur homes and modern Nagaland lifestyles.
              </p>
            </article>
            <article className="rounded-3xl border border-charcoal/10 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-dark-card">
              <h2 className="text-2xl font-bold text-charcoal dark:text-dark-text">Luxury Living Room & Bedroom Decor</h2>
              <p className="mt-4 text-sm leading-7 text-charcoal/70 dark:text-dark-muted">
                Curated living spaces and private retreats that balance comfort, texture, and elegant details for families across Dimapur and nearby towns.
              </p>
            </article>
            <article className="rounded-3xl border border-charcoal/10 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-dark-card">
              <h2 className="text-2xl font-bold text-charcoal dark:text-dark-text">Commercial Office Space Optimization</h2>
              <p className="mt-4 text-sm leading-7 text-charcoal/70 dark:text-dark-muted">
                Efficient office planning and polished workplace design for businesses in Dimapur, Chümoukedima, Kohima, and the wider Nagaland region.
              </p>
            </article>
          </div>
        </div>
      </section>
      <TrustStats />
      <Services limit={8} />
      <WhyChooseUs />
      <Portfolio featured />
      <Testimonials />
      <CTA />
      <Contact />
    </>
  );
}
