import { Link } from 'react-router-dom';
import CTA from '../components/CTA.jsx';
import { locations } from '../data/business.js';

export default function InteriorDesignerAssam() {
  return (
    <>
      <section className="bg-charcoal py-24 text-white transition-colors duration-300 dark:bg-dark-panel lg:py-32">
        <div className="container-lux max-w-4xl">
          <p className="section-kicker text-gold">Interior Designer in Assam</p>
          <h1 className="mt-4 text-5xl font-bold leading-tight sm:text-6xl">
            Interior Designer in Assam: Premium design across Lahorijan, Bokajan & Karbi Anglong
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/75 dark:text-dark-muted">
            Interior Decor brings expert interior design to Assam with offices in Lahorijan, serving Bokajan, Karbi Anglong, Golaghat and nearby regions. We create modern interiors, modular kitchens, false ceilings, PVC wall panels and commercial fit-outs designed for Assam's climate and lifestyle.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="https://wa.me/918131897816?text=Hello%20INTERIOR%20DECOR%2C%20I%20would%20like%20a%20free%20consultation%20in%20Assam." className="btn-primary">
              Talk with an Assam designer
            </a>
            <Link to="/portfolio" className="btn-secondary">
              View completed projects
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 transition-colors duration-300 dark:bg-dark-surface lg:py-28">
        <div className="container-lux grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="section-kicker">Why choose Interior Decor in Assam</p>
            <h2 className="section-title">Local expertise in Lahorijan, Bokajan & surrounding regions</h2>
            <p className="mt-6 leading-8 text-charcoal/75 dark:text-dark-muted">
              Choosing an interior designer in Assam means working with someone who understands the local climate, humidity levels, materials, timelines and culture. Interior Decor combines design thinking with practical execution so your home or office reflects contemporary style and long-term performance in the Assam climate.
            </p>
          </div>
          <div className="grid gap-6">
            <article className="rounded-3xl border border-charcoal/10 bg-ivory p-8 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">Assam-focused design process</h3>
              <p className="mt-4 leading-7 text-charcoal/70 dark:text-dark-muted">
                From the first site visit to final handover, we manage every step in Assam. Our process reduces delays, keeps budgets transparent and ensures finishes arrive on time from reliable suppliers.
              </p>
            </article>
            <article className="rounded-3xl border border-charcoal/10 bg-ivory p-8 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">Built for Assam climate</h3>
              <p className="mt-4 leading-7 text-charcoal/70 dark:text-dark-muted">
                We specify moisture-resistant materials, ventilation-aware designs, waterproof finishes and humidity-smart layouts so Assam interiors stay beautiful, comfortable and low-maintenance.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20 transition-colors duration-300 dark:bg-dark-bg lg:py-28">
        <div className="container-lux">
          <div className="max-w-4xl">
            <p className="section-kicker">Services across Assam</p>
            <h2 className="section-title">Interior design services tailored for Assam homes and businesses</h2>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            <article className="rounded-3xl border border-charcoal/10 bg-white p-8 shadow-sm transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">Interior design</h3>
              <p className="mt-4 text-charcoal/70 dark:text-dark-muted">
                Full-service interior design for living rooms, bedrooms, kitchens and commercial spaces that balance style, function and durability for Assam residents.
              </p>
            </article>
            <article className="rounded-3xl border border-charcoal/10 bg-white p-8 shadow-sm transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">Moisture-proof ceilings</h3>
              <p className="mt-4 text-charcoal/70 dark:text-dark-muted">
                PVC, gypsum and POP false ceiling designs that resist Assam humidity, improve lighting, hide services and create polished interior finishes.
              </p>
            </article>
            <article className="rounded-3xl border border-charcoal/10 bg-white p-8 shadow-sm transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">Modular kitchens</h3>
              <p className="mt-4 text-charcoal/70 dark:text-dark-muted">
                Custom modular kitchen design with BWP marine plywood that resists moisture and humidity damage, perfect for Assam's weather conditions.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 transition-colors duration-300 dark:bg-dark-surface lg:py-28">
        <div className="container-lux">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="section-kicker">Serving Assam regions</p>
              <h2 className="section-title">Why Assam residents choose Interior Decor</h2>
              <p className="mt-6 leading-8 text-charcoal/75 dark:text-dark-muted">
                Our team serves Lahorijan, Bokajan, Karbi Anglong, Golaghat and surrounding Assam regions with expertise in local construction practices, materials and climate challenges. We combine premium glass, local stone, weather-resistant timber and specialized ceiling systems to create spaces that feel right for Assam living.
              </p>
              <p className="mt-6 leading-8 text-charcoal/75 dark:text-dark-muted">
                When you work with us, you get a designer who understands Assam supply chains, trusted labour partners, municipal processes and on-site logistics. That local advantage keeps your project moving forward with better results and fewer delays.
              </p>
            </div>
            <div className="rounded-3xl border border-charcoal/10 bg-ivory p-8 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">Assam project focus</h3>
              <ul className="mt-5 space-y-3 text-charcoal/75 dark:text-dark-muted">
                <li>• Comfortable, climate-aware living spaces</li>
                <li>• Moisture-resistant materials & finishes</li>
                <li>• Efficient storage & organization</li>
                <li>• Commercial offices & retail spaces</li>
                <li>• Turnkey interior projects</li>
                <li>• Expert renovation planning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20 transition-colors duration-300 dark:bg-dark-bg lg:py-28">
        <div className="container-lux max-w-4xl">
          <p className="section-kicker">Service coverage</p>
          <h2 className="section-title">Serving Lahorijan, Bokajan, Karbi Anglong, Golaghat & more</h2>
          <p className="mt-6 leading-8 text-charcoal/75 dark:text-dark-muted">
            Interior Decor provides complete interior design and renovation services across Assam. Our Lahorijan office serves clients throughout the region including:
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-charcoal/10 bg-white p-6 dark:border-white/10 dark:bg-dark-card">
              <h3 className="font-semibold text-charcoal dark:text-dark-text">Service areas</h3>
              <ul className="mt-4 space-y-2 text-charcoal/70 dark:text-dark-muted">
                <li>✓ Lahorijan</li>
                <li>✓ Bokajan</li>
                <li>✓ Karbi Anglong</li>
                <li>✓ Golaghat</li>
              </ul>
            </div>
            <div className="rounded-lg border border-charcoal/10 bg-white p-6 dark:border-white/10 dark:bg-dark-card">
              <h3 className="font-semibold text-charcoal dark:text-dark-text">Services offered</h3>
              <ul className="mt-4 space-y-2 text-charcoal/70 dark:text-dark-muted">
                <li>✓ Interior design & decoration</li>
                <li>✓ False ceilings (all types)</li>
                <li>✓ PVC wall panels & cladding</li>
                <li>✓ Modular kitchens</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
