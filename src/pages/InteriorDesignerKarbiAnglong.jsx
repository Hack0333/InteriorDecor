import { Link } from 'react-router-dom';
import CTA from '../components/CTA.jsx';
import { locations } from '../data/business.js';

export default function InteriorDesignerKarbiAnglong() {
  return (
    <>
      <section className="bg-charcoal py-24 text-white transition-colors duration-300 dark:bg-dark-panel lg:py-32">
        <div className="container-lux max-w-4xl">
          <p className="section-kicker text-gold">Interior Designer in Karbi Anglong</p>
          <h1 className="mt-4 text-5xl font-bold leading-tight sm:text-6xl">
            Interior Designer in Karbi Anglong: Professional design across Assam
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/75 dark:text-dark-muted">
            Interior Decor brings professional interior design services to Karbi Anglong, Assam. We create modern homes, commercial offices, false ceilings, PVC wall panels and complete renovation solutions tailored for the Assam climate.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="https://wa.me/918131897816?text=Hello%20INTERIOR%20DECOR%2C%20I%20need%20interior%20design%20in%20Karbi%20Anglong." className="btn-primary">
              Contact in Karbi Anglong
            </a>
            <Link to="/contact" className="btn-secondary">
              Free consultation
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 transition-colors duration-300 dark:bg-dark-surface lg:py-28">
        <div className="container-lux grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="section-kicker">Interior design services</p>
            <h2 className="section-title">Expert design for Karbi Anglong homes and businesses</h2>
            <p className="mt-6 leading-8 text-charcoal/75 dark:text-dark-muted">
              Interior Decor serves Karbi Anglong with professional design expertise. We combine contemporary design concepts with practical understanding of Assam's climate, materials and building practices to create spaces that are beautiful, functional and built to last.
            </p>
          </div>
          <div className="grid gap-6">
            <article className="rounded-3xl border border-charcoal/10 bg-ivory p-8 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">Karbi Anglong focus</h3>
              <p className="mt-4 leading-7 text-charcoal/70 dark:text-dark-muted">
                We deliver interior design solutions that work for Karbi Anglong. Our team manages projects locally with attention to timelines, budgets and local building practices.
              </p>
            </article>
            <article className="rounded-3xl border border-charcoal/10 bg-ivory p-8 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">Assam-ready materials</h3>
              <p className="mt-4 leading-7 text-charcoal/70 dark:text-dark-muted">
                Moisture-resistant PVC panels, waterproof ceilings and humidity-smart finishes ensure Karbi Anglong interiors stay fresh and beautiful.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20 transition-colors duration-300 dark:bg-dark-bg lg:py-28">
        <div className="container-lux">
          <div className="max-w-4xl">
            <p className="section-kicker">Design services</p>
            <h2 className="section-title">Complete interior design for Karbi Anglong</h2>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            <article className="rounded-3xl border border-charcoal/10 bg-white p-8 shadow-sm transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">Home interiors</h3>
              <p className="mt-4 text-charcoal/70 dark:text-dark-muted">
                Beautiful and functional home interior design for Karbi Anglong. Living areas, kitchens, bedrooms and family spaces designed for modern living.
              </p>
            </article>
            <article className="rounded-3xl border border-charcoal/10 bg-white p-8 shadow-sm transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">PVC wall panels</h3>
              <p className="mt-4 text-charcoal/70 dark:text-dark-muted">
                Decorative PVC wall and ceiling panels that resist Assam humidity and moisture damage. Available in fluted, 3D and wooden finishes.
              </p>
            </article>
            <article className="rounded-3xl border border-charcoal/10 bg-white p-8 shadow-sm transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">Commercial spaces</h3>
              <p className="mt-4 text-charcoal/70 dark:text-dark-muted">
                Professional office, retail and commercial interior design for Karbi Anglong businesses. Layouts designed for function and impact.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 transition-colors duration-300 dark:bg-dark-surface lg:py-28">
        <div className="container-lux">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="section-kicker">Karbi Anglong projects</p>
              <h2 className="section-title">Professional design services for Karbi Anglong</h2>
              <p className="mt-6 leading-8 text-charcoal/75 dark:text-dark-muted">
                Interior Decor brings professional design services to Karbi Anglong. We understand the region's unique characteristics and work with local partners to deliver quality interiors on schedule and within budget.
              </p>
              <p className="mt-6 leading-8 text-charcoal/75 dark:text-dark-muted">
                From initial concept to final installation, we manage every phase of your project with attention to detail, clear communication and commitment to your vision.
              </p>
            </div>
            <div className="rounded-3xl border border-charcoal/10 bg-ivory p-8 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">Services we offer</h3>
              <ul className="mt-5 space-y-3 text-charcoal/75 dark:text-dark-muted">
                <li>• Interior design & decoration</li>
                <li>• Residential renovations</li>
                <li>• Commercial interiors</li>
                <li>• False ceilings (all types)</li>
                <li>• PVC & WPC panels</li>
                <li>• Modular kitchens</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20 transition-colors duration-300 dark:bg-dark-bg lg:py-28">
        <div className="container-lux max-w-4xl">
          <p className="section-kicker">Get in touch</p>
          <h2 className="section-title">Start your Karbi Anglong interior project</h2>
          <p className="mt-6 leading-8 text-charcoal/75 dark:text-dark-muted">
            Contact Interior Decor for a free initial consultation. We'll visit your Karbi Anglong site, discuss your design goals and create a customized proposal for your project.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href={locations.assam.phoneHref} className="btn-primary">
              Call us
            </a>
            <a href="https://wa.me/918131897816?text=Hello%20INTERIOR%20DECOR%2C%20I%20need%20interior%20design%20in%20Karbi%20Anglong." className="btn-secondary">
              WhatsApp
            </a>
            <Link to="/contact" className="btn-secondary">
              Contact form
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
