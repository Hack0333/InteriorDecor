import { Link } from 'react-router-dom';
import CTA from '../components/CTA.jsx';
import { locations } from '../data/business.js';

export default function InteriorDesignerGolaghat() {
  return (
    <>
      <section className="bg-charcoal py-24 text-white transition-colors duration-300 dark:bg-dark-panel lg:py-32">
        <div className="container-lux max-w-4xl">
          <p className="section-kicker text-gold">Interior Designer in Golaghat</p>
          <h1 className="mt-4 text-5xl font-bold leading-tight sm:text-6xl">
            Interior Designer in Golaghat Assam: Premium design services
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/75 dark:text-dark-muted">
            Interior Decor provides professional interior design, false ceilings, PVC wall panels, modular kitchens and complete renovation solutions in Golaghat, Assam. We create beautiful spaces built for Assam living.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="https://wa.me/918131897816?text=Hello%20INTERIOR%20DECOR%2C%20I%20need%20interior%20design%20in%20Golaghat%2C%20Assam." className="btn-primary">
              WhatsApp in Golaghat
            </a>
            <Link to="/contact" className="btn-secondary">
              Schedule visit
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 transition-colors duration-300 dark:bg-dark-surface lg:py-28">
        <div className="container-lux grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="section-kicker">Design expertise</p>
            <h2 className="section-title">Interior design tailored for Golaghat and Assam</h2>
            <p className="mt-6 leading-8 text-charcoal/75 dark:text-dark-muted">
              Interior Decor brings professional design expertise to Golaghat, Assam. We understand Golaghat's unique building environment, climate challenges and material availability. Whether you need home renovation, office design, or commercial fit-out, we deliver designs that combine style with practical performance.
            </p>
          </div>
          <div className="grid gap-6">
            <article className="rounded-3xl border border-charcoal/10 bg-ivory p-8 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">Golaghat-specific design</h3>
              <p className="mt-4 leading-7 text-charcoal/70 dark:text-dark-muted">
                We design for Golaghat's climate and local building practices. Our team manages projects locally to ensure timely delivery and quality execution.
              </p>
            </article>
            <article className="rounded-3xl border border-charcoal/10 bg-ivory p-8 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">Weather-resistant finishes</h3>
              <p className="mt-4 leading-7 text-charcoal/70 dark:text-dark-muted">
                Moisture-resistant materials, PVC panels and waterproof ceilings keep Golaghat interiors beautiful through all seasons.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20 transition-colors duration-300 dark:bg-dark-bg lg:py-28">
        <div className="container-lux">
          <div className="max-w-4xl">
            <p className="section-kicker">Interior services</p>
            <h2 className="section-title">Complete interior design for Golaghat</h2>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            <article className="rounded-3xl border border-charcoal/10 bg-white p-8 shadow-sm transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">Residential design</h3>
              <p className="mt-4 text-charcoal/70 dark:text-dark-muted">
                Full interior design for Golaghat homes. Living rooms, bedrooms, kitchens and family spaces designed for comfort, style and durability.
              </p>
            </article>
            <article className="rounded-3xl border border-charcoal/10 bg-white p-8 shadow-sm transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">Moisture-proof systems</h3>
              <p className="mt-4 text-charcoal/70 dark:text-dark-muted">
                PVC and gypsum false ceilings resistant to Assam humidity. Wall panels that prevent dampness and moisture damage.
              </p>
            </article>
            <article className="rounded-3xl border border-charcoal/10 bg-white p-8 shadow-sm transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">Business interiors</h3>
              <p className="mt-4 text-charcoal/70 dark:text-dark-muted">
                Office, showroom and retail interior design for Golaghat. Professional layouts with modern finishes and high-impact design.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 transition-colors duration-300 dark:bg-dark-surface lg:py-28">
        <div className="container-lux">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="section-kicker">Golaghat projects</p>
              <h2 className="section-title">Why Golaghat residents choose Interior Decor</h2>
              <p className="mt-6 leading-8 text-charcoal/75 dark:text-dark-muted">
                Our team understands Golaghat and brings design expertise focused on quality, durability and beautiful results. We work with reliable local suppliers and craftspeople to deliver projects on time and within budget.
              </p>
              <p className="mt-6 leading-8 text-charcoal/75 dark:text-dark-muted">
                From the initial site visit through final handover, we maintain clear communication, transparent budgeting, and unwavering attention to your design vision.
              </p>
            </div>
            <div className="rounded-3xl border border-charcoal/10 bg-ivory p-8 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">Golaghat services</h3>
              <ul className="mt-5 space-y-3 text-charcoal/75 dark:text-dark-muted">
                <li>• Home renovation & design</li>
                <li>• Office & commercial design</li>
                <li>• Gypsum & PVC ceilings</li>
                <li>• Decorative wall panels</li>
                <li>• Modular kitchens</li>
                <li>• Turnkey projects</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20 transition-colors duration-300 dark:bg-dark-bg lg:py-28">
        <div className="container-lux max-w-4xl">
          <p className="section-kicker">Contact us</p>
          <h2 className="section-title">Connect with Interior Decor in Golaghat</h2>
          <p className="mt-6 leading-8 text-charcoal/75 dark:text-dark-muted">
            Reach out for a free consultation and site visit. We'll discuss your project, budget and timeline to create a customized interior design proposal for your Golaghat property.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href={locations.assam.phoneHref} className="btn-primary">
              Call us
            </a>
            <a href="https://wa.me/918131897816?text=Hello%20INTERIOR%20DECOR%2C%20I%20need%20interior%20design%20in%20Golaghat%2C%20Assam." className="btn-secondary">
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
