import { Link } from 'react-router-dom';
import CTA from '../components/CTA.jsx';
import { locations } from '../data/business.js';

export default function InteriorDesignerLahorijan() {
  return (
    <>
      <section className="bg-charcoal py-24 text-white transition-colors duration-300 dark:bg-dark-panel lg:py-32">
        <div className="container-lux max-w-4xl">
          <p className="section-kicker text-gold">Interior Designer in Lahorijan</p>
          <h1 className="mt-4 text-5xl font-bold leading-tight sm:text-6xl">
            Interior Designer in Lahorijan Assam: Modern design for homes & businesses
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/75 dark:text-dark-muted">
            Interior Decor is the trusted interior design partner in Lahorijan, Assam. Our expert team designs modern interiors, false ceilings, PVC wall panels, modular kitchens and commercial fit-outs that are built for Assam living.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href={locations.assam.phoneHref} className="btn-primary">
              Call Lahorijan office
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
            <p className="section-kicker">Why choose Interior Decor in Lahorijan</p>
            <h2 className="section-title">Local expertise with Lahorijan experience and commitment</h2>
            <p className="mt-6 leading-8 text-charcoal/75 dark:text-dark-muted">
              Choosing an interior designer in Lahorijan means working with someone who understands the local climate, materials, building practices and culture. Interior Decor combines design thinking with practical execution so your Lahorijan home or office reflects contemporary style and long-term performance.
            </p>
          </div>
          <div className="grid gap-6">
            <article className="rounded-3xl border border-charcoal/10 bg-ivory p-8 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">Lahorijan office location</h3>
              <p className="mt-4 leading-7 text-charcoal/70 dark:text-dark-muted">
                {locations.assam.address}
              </p>
              <a href={locations.assam.directions} target="_blank" rel="noreferrer" className="mt-4 inline-block text-gold hover:underline">
                Get directions on Google Maps →
              </a>
            </article>
            <article className="rounded-3xl border border-charcoal/10 bg-ivory p-8 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">Moisture-aware design</h3>
              <p className="mt-4 leading-7 text-charcoal/70 dark:text-dark-muted">
                We specify PVC panels, waterproof materials and humidity-resistant finishes so Lahorijan interiors stay fresh and beautiful in all seasons.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20 transition-colors duration-300 dark:bg-dark-bg lg:py-28">
        <div className="container-lux">
          <div className="max-w-4xl">
            <p className="section-kicker">Interior services in Lahorijan</p>
            <h2 className="section-title">Complete interior design for Lahorijan homes and businesses</h2>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            <article className="rounded-3xl border border-charcoal/10 bg-white p-8 shadow-sm transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">Home interiors</h3>
              <p className="mt-4 text-charcoal/70 dark:text-dark-muted">
                Full-service interior design for living rooms, bedrooms, kitchens and family spaces that balance style, function and durability.
              </p>
            </article>
            <article className="rounded-3xl border border-charcoal/10 bg-white p-8 shadow-sm transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">Moisture-proof ceilings</h3>
              <p className="mt-4 text-charcoal/70 dark:text-dark-muted">
                PVC and gypsum false ceiling designs that resist Assam humidity, improve lighting and create polished interior finishes.
              </p>
            </article>
            <article className="rounded-3xl border border-charcoal/10 bg-white p-8 shadow-sm transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">Commercial design</h3>
              <p className="mt-4 text-charcoal/70 dark:text-dark-muted">
                Office, showroom and retail interior design with professional layouts and high-impact finishes for Lahorijan businesses.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 transition-colors duration-300 dark:bg-dark-surface lg:py-28">
        <div className="container-lux">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="section-kicker">Lahorijan projects</p>
              <h2 className="section-title">Why Lahorijan residents trust Interior Decor</h2>
              <p className="mt-6 leading-8 text-charcoal/75 dark:text-dark-muted">
                Our team has completed numerous projects in Lahorijan and surrounding areas. We understand Assam's unique climate challenges and combine premium materials with specialized systems to create spaces that are both beautiful and built to last.
              </p>
              <p className="mt-6 leading-8 text-charcoal/75 dark:text-dark-muted">
                When you work with us in Lahorijan, you get a designer who knows local suppliers, trusted craftspeople, and on-site logistics. That local advantage keeps your project on schedule and delivers better results.
              </p>
            </div>
            <div className="rounded-3xl border border-charcoal/10 bg-ivory p-8 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">Lahorijan focus</h3>
              <ul className="mt-5 space-y-3 text-charcoal/75 dark:text-dark-muted">
                <li>• Moisture-resistant materials for Assam climate</li>
                <li>• Family-friendly home interiors</li>
                <li>• Commercial office & retail spaces</li>
                <li>• PVC panels & false ceilings</li>
                <li>• Modular kitchens</li>
                <li>• Complete renovations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20 transition-colors duration-300 dark:bg-dark-bg lg:py-28">
        <div className="container-lux max-w-4xl">
          <p className="section-kicker">Contact us</p>
          <h2 className="section-title">Connect with our Lahorijan interior design team</h2>
          <div className="mt-10 rounded-3xl border border-charcoal/10 bg-white p-8 dark:border-white/10 dark:bg-dark-card">
            <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">Lahorijan Office</h3>
            <p className="mt-4 leading-8 text-charcoal/75 dark:text-dark-muted">
              <strong>Address:</strong> {locations.assam.address}
            </p>
            <p className="mt-3 leading-8 text-charcoal/75 dark:text-dark-muted">
              <strong>Plus Code:</strong> {locations.assam.plusCode}
            </p>
            <p className="mt-3 leading-8 text-charcoal/75 dark:text-dark-muted">
              <strong>Phone:</strong> <a href={locations.assam.phoneHref} className="text-gold hover:underline">{locations.assam.phone}</a>
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href={locations.assam.directions} target="_blank" rel="noreferrer" className="btn-primary px-4 py-3 text-sm">
                View on Google Maps
              </a>
              <a href={locations.assam.phoneHref} className="btn-primary px-4 py-3 text-sm">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
