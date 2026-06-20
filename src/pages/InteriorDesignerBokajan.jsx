import { Link } from 'react-router-dom';
import CTA from '../components/CTA.jsx';
import { locations } from '../data/business.js';

export default function InteriorDesignerBokajan() {
  return (
    <>
      <section className="bg-charcoal py-24 text-white transition-colors duration-300 dark:bg-dark-panel lg:py-32">
        <div className="container-lux max-w-4xl">
          <p className="section-kicker text-gold">Interior Designer in Bokajan</p>
          <h1 className="mt-4 text-5xl font-bold leading-tight sm:text-6xl">
            Interior Designer in Bokajan Assam: Beautiful homes & commercial spaces
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/75 dark:text-dark-muted">
            Interior Decor serves Bokajan, Assam with professional interior design, false ceilings, PVC wall panels, modular kitchens and complete renovation solutions. We create spaces designed for Assam's climate and lifestyle.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="https://wa.me/918131897816?text=Hello%20INTERIOR%20DECOR%2C%20I%20need%20interior%20design%20in%20Bokajan%2C%20Assam." className="btn-primary">
              WhatsApp in Bokajan
            </a>
            <Link to="/contact" className="btn-secondary">
              Book consultation
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 transition-colors duration-300 dark:bg-dark-surface lg:py-28">
        <div className="container-lux grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="section-kicker">Interior design in Bokajan</p>
            <h2 className="section-title">Expert design tailored to Bokajan and Assam</h2>
            <p className="mt-6 leading-8 text-charcoal/75 dark:text-dark-muted">
              Interior Decor brings expert design services to Bokajan, Assam. We understand the local building practices, climate challenges and material availability in Bokajan. Whether you're building a home, renovating an office, or creating a commercial space, we deliver designs that work beautifully for Assam living.
            </p>
          </div>
          <div className="grid gap-6">
            <article className="rounded-3xl border border-charcoal/10 bg-ivory p-8 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">Bokajan-specific design</h3>
              <p className="mt-4 leading-7 text-charcoal/70 dark:text-dark-muted">
                We design homes, offices and retail spaces that work for Bokajan's climate. Our team manages projects locally with attention to local suppliers and building practices.
              </p>
            </article>
            <article className="rounded-3xl border border-charcoal/10 bg-ivory p-8 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">Climate-aware materials</h3>
              <p className="mt-4 leading-7 text-charcoal/70 dark:text-dark-muted">
                PVC panels, waterproof ceilings and moisture-resistant finishes keep Bokajan interiors beautiful in the humid Assam climate.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20 transition-colors duration-300 dark:bg-dark-bg lg:py-28">
        <div className="container-lux">
          <div className="max-w-4xl">
            <p className="section-kicker">Services for Bokajan</p>
            <h2 className="section-title">Complete interior design services in Bokajan</h2>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            <article className="rounded-3xl border border-charcoal/10 bg-white p-8 shadow-sm transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">Residential design</h3>
              <p className="mt-4 text-charcoal/70 dark:text-dark-muted">
                Full-service interior design for Bokajan homes including living spaces, kitchens, bedrooms and family areas designed for comfort and style.
              </p>
            </article>
            <article className="rounded-3xl border border-charcoal/10 bg-white p-8 shadow-sm transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">False ceilings</h3>
              <p className="mt-4 text-charcoal/70 dark:text-dark-muted">
                Moisture-resistant PVC and gypsum false ceilings designed for Assam humidity. Clean finishes with modern lighting integration.
              </p>
            </article>
            <article className="rounded-3xl border border-charcoal/10 bg-white p-8 shadow-sm transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">Modular kitchens</h3>
              <p className="mt-4 text-charcoal/70 dark:text-dark-muted">
                Custom modular kitchens for Bokajan with moisture-resistant BWP marine plywood and premium fittings.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 transition-colors duration-300 dark:bg-dark-surface lg:py-28">
        <div className="container-lux">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="section-kicker">Serving Bokajan</p>
              <h2 className="section-title">Why Bokajan residents choose Interior Decor</h2>
              <p className="mt-6 leading-8 text-charcoal/75 dark:text-dark-muted">
                Our team understands Bokajan's unique environment and brings design expertise focused on practical, beautiful interiors. We work with local suppliers and craftspeople to deliver projects on time and within budget.
              </p>
              <p className="mt-6 leading-8 text-charcoal/75 dark:text-dark-muted">
                From initial consultation to final handover, we manage every step of the design process in Bokajan with transparency, attention to detail and commitment to quality.
              </p>
            </div>
            <div className="rounded-3xl border border-charcoal/10 bg-ivory p-8 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">Our Bokajan services</h3>
              <ul className="mt-5 space-y-3 text-charcoal/75 dark:text-dark-muted">
                <li>• Home interior design & decoration</li>
                <li>• Office & commercial interiors</li>
                <li>• False ceiling installation</li>
                <li>• PVC & WPC wall panels</li>
                <li>• Modular kitchen design</li>
                <li>• Complete home renovations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20 transition-colors duration-300 dark:bg-dark-bg lg:py-28">
        <div className="container-lux max-w-4xl">
          <p className="section-kicker">Contact Interior Decor</p>
          <h2 className="section-title">Reach out for your Bokajan interior project</h2>
          <p className="mt-6 leading-8 text-charcoal/75 dark:text-dark-muted">
            Contact us for a free consultation and site visit in Bokajan. We'll discuss your design goals, budget and timeline to create a proposal tailored to your needs.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href={locations.assam.phoneHref} className="btn-primary">
              Call us
            </a>
            <a href="https://wa.me/918131897816?text=Hello%20INTERIOR%20DECOR%2C%20I%20need%20interior%20design%20in%20Bokajan%2C%20Assam." className="btn-secondary">
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
