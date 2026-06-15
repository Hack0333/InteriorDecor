import { Link } from 'react-router-dom';
import CTA from '../components/CTA.jsx';
import { business } from '../data/business.js';

export default function InteriorDesignNagaland() {
  return (
    <>
      <section className="bg-charcoal py-24 text-white transition-colors duration-300 dark:bg-dark-panel lg:py-32">
        <div className="container-lux max-w-4xl">
          <p className="section-kicker text-gold">Interior Design Nagaland</p>
          <h1 className="mt-4 text-5xl font-bold leading-tight sm:text-6xl">
            Interior Design Nagaland: expert interiors for homes and businesses across the state
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/75 dark:text-dark-muted">
            Interior Decor delivers interior design services across Nagaland, including Dimapur, Kohima, Chumoukedima and surrounding towns. We create interiors that respect local culture, climate and lifestyle while offering modern finishes, material intelligence and reliable execution.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href={business.whatsapp} className="btn-primary">
              Start your Nagaland interior project
            </a>
            <Link to="/services" className="btn-secondary">
              Explore our services
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 transition-colors duration-300 dark:bg-dark-surface lg:py-28">
        <div className="container-lux grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="section-kicker">Nagaland-wide interior service</p>
            <h2 className="section-title">Interior design for every Nagaland home and business</h2>
            <p className="mt-6 leading-8 text-charcoal/75 dark:text-dark-muted">
              Our Nagaland interior design service is designed to support local material sourcing, regional weather conditions and the state’s growing demand for premium residential and commercial interiors.
            </p>
            <p className="mt-6 leading-8 text-charcoal/75 dark:text-dark-muted">
              We work with clients across Dimapur, Kohima, Chumoukedima and nearby towns, delivering interior design, modular kitchens, false ceilings and commercial fit-outs that reflect modern Nagaland living.
            </p>
          </div>
          <div className="rounded-3xl border border-charcoal/10 bg-ivory p-8 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
            <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">Nagaland design capabilities</h3>
            <ul className="mt-5 space-y-3 text-charcoal/75 dark:text-dark-muted">
              <li>• Interior design across Nagaland</li>
              <li>• Dimapur, Kohima and Chumoukedima project delivery</li>
              <li>• Local material coordination and logistics</li>
              <li>• Residential and commercial interiors</li>
              <li>• Design-ready false ceiling and kitchen planning</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20 transition-colors duration-300 dark:bg-dark-bg lg:py-28">
        <div className="container-lux">
          <div className="max-w-4xl">
            <p className="section-kicker">Design expertise across Nagaland</p>
            <h2 className="section-title">What makes our Nagaland interior design different</h2>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            <article className="rounded-3xl border border-charcoal/10 bg-white p-8 shadow-sm transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">Local material knowledge</h3>
              <p className="mt-4 leading-7 text-charcoal/70 dark:text-dark-muted">
                We work with materials and finishes that are readily available in Nagaland and suited to regional climate and construction conditions.</p>
            </article>
            <article className="rounded-3xl border border-charcoal/10 bg-white p-8 shadow-sm transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">Practical planning</h3>
              <p className="mt-4 leading-7 text-charcoal/70 dark:text-dark-muted">
                Our design process includes site assessments, local logistics planning and finish recommendations that reduce delays and deliver consistent results.</p>
            </article>
            <article className="rounded-3xl border border-charcoal/10 bg-white p-8 shadow-sm transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">Modern appeal</h3>
              <p className="mt-4 leading-7 text-charcoal/70 dark:text-dark-muted">
                We design interiors with modern layouts, layered lighting and accessible finishes so Nagaland spaces feel contemporary and inviting.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 transition-colors duration-300 dark:bg-dark-surface lg:py-28">
        <div className="container-lux max-w-6xl">
          <p className="section-kicker">Nagaland interior services</p>
          <h2 className="section-title">Interior Decor services available throughout Nagaland</h2>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            <article className="rounded-3xl border border-charcoal/10 bg-ivory p-8 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">Residential interiors</h3>
              <p className="mt-4 text-charcoal/75 dark:text-dark-muted">
                We design bedrooms, living rooms, kitchens and whole-home interiors that support daily life and family comfort.
              </p>
            </article>
            <article className="rounded-3xl border border-charcoal/10 bg-ivory p-8 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">Commercial interiors</h3>
              <p className="mt-4 text-charcoal/75 dark:text-dark-muted">
                From offices to shops, we design commercial spaces with functional flow, lighting and finish quality that reflect your brand and business needs.</p>
            </article>
            <article className="rounded-3xl border border-charcoal/10 bg-ivory p-8 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">Modular kitchens & ceilings</h3>
              <p className="mt-4 text-charcoal/75 dark:text-dark-muted">
                Our Nagaland interiors include modular kitchens, false ceilings and wall panel solutions for practical, beautiful spaces.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20 transition-colors duration-300 dark:bg-dark-bg lg:py-28">
        <div className="container-lux max-w-5xl">
          <p className="section-kicker">Design process for Nagaland projects</p>
          <h2 className="section-title">How we deliver interior work across Nagaland</h2>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            <article className="rounded-3xl border border-charcoal/10 bg-white p-8 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">1. Project consultation</h3>
              <p className="mt-4 text-charcoal/75 dark:text-dark-muted">
                We begin with your brief, site context and service requirements to define the right interior direction.</p>
            </article>
            <article className="rounded-3xl border border-charcoal/10 bg-white p-8 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">2. Design and schedules</h3>
              <p className="mt-4 text-charcoal/75 dark:text-dark-muted">
                Our proposals include layouts, finish selections and project timelines so you have clarity before work begins.</p>
            </article>
            <article className="rounded-3xl border border-charcoal/10 bg-white p-8 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">3. Execution and completion</h3>
              <p className="mt-4 text-charcoal/75 dark:text-dark-muted">
                We coordinate site execution, local trades and quality inspections to deliver finished interiors that meet your expectations.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 transition-colors duration-300 dark:bg-dark-surface lg:py-28">
        <div className="container-lux max-w-5xl">
          <p className="section-kicker">Interior Design Nagaland FAQs</p>
          <h2 className="section-title">Questions about interior design across Nagaland</h2>

          <div className="mt-10 grid gap-5">
            <details className="rounded-3xl border border-charcoal/10 bg-ivory p-6 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <summary className="cursor-pointer text-lg font-bold text-charcoal dark:text-dark-text">Do you provide interior design services throughout Nagaland?</summary>
              <p className="mt-4 leading-8 text-charcoal/75 dark:text-dark-muted">
                Yes. Interior Decor serves Nagaland clients in Dimapur, Kohima, Chumoukedima and neighboring towns with interior design and execution services.</p>
            </details>
            <details className="rounded-3xl border border-charcoal/10 bg-ivory p-6 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <summary className="cursor-pointer text-lg font-bold text-charcoal dark:text-dark-text">How do you manage projects across Nagaland?</summary>
              <p className="mt-4 leading-8 text-charcoal/75 dark:text-dark-muted">
                We plan logistics, source local materials and schedule site visits to coordinate projects across the state efficiently.</p>
            </details>
            <details className="rounded-3xl border border-charcoal/10 bg-ivory p-6 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <summary className="cursor-pointer text-lg font-bold text-charcoal dark:text-dark-text">What types of interiors do you design in Nagaland?</summary>
              <p className="mt-4 leading-8 text-charcoal/75 dark:text-dark-muted">
                We design homes, offices, shops, clinics and hospitality spaces with a focus on practical layouts and pleasing finishes.</p>
            </details>
            <details className="rounded-3xl border border-charcoal/10 bg-ivory p-6 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <summary className="cursor-pointer text-lg font-bold text-charcoal dark:text-dark-text">Can you design a modular kitchen for a Nagaland home?</summary>
              <p className="mt-4 leading-8 text-charcoal/75 dark:text-dark-muted">
                Yes. We design modular kitchens suited to Nagaland homes, including compact plans, durable finishes and efficient storage.</p>
            </details>
            <details className="rounded-3xl border border-charcoal/10 bg-ivory p-6 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <summary className="cursor-pointer text-lg font-bold text-charcoal dark:text-dark-text">How do I start an interior project in Nagaland?</summary>
              <p className="mt-4 leading-8 text-charcoal/75 dark:text-dark-muted">
                Contact us by WhatsApp or phone and we will arrange a site visit to discuss your space, budget and design goals.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-20 text-white transition-colors duration-300 dark:bg-dark-panel lg:py-28">
        <div className="container-lux max-w-4xl text-center">
          <p className="section-kicker text-gold">Ready for Nagaland interior design?</p>
          <h2 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl">Create a better interior with Interior Decor Nagaland</h2>
          <p className="mx-auto mt-6 max-w-3xl text-white/70 dark:text-dark-muted">
            We help Nagaland clients build interiors that blend thoughtful space planning, practical materials and a comfortable sense of place.</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a href={business.whatsapp} className="btn-primary">
              Schedule a Nagaland design consult
            </a>
            <Link to="/contact" className="btn-secondary">
              Contact our team
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
