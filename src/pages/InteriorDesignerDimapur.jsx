import { Link } from 'react-router-dom';
import CTA from '../components/CTA.jsx';
import { business } from '../data/business.js';

export default function InteriorDesignerDimapur() {
  return (
    <>
      <section className="bg-charcoal py-24 text-white transition-colors duration-300 dark:bg-dark-panel lg:py-32">
        <div className="container-lux max-w-4xl">
          <p className="section-kicker text-gold">Interior Designer Dimapur</p>
          <h1 className="mt-4 text-5xl font-bold leading-tight sm:text-6xl">
            Interior Designer Dimapur: Local expertise for premium homes and businesses
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/75 dark:text-dark-muted">
            Interior Decor is the trusted Dimapur interior design partner for Airport Junction, 3rd Mile, AOC, New Market and surrounding neighbourhoods. Our expert team designs modern interiors, modular kitchens, false ceilings, PVC wall panels and commercial fit-outs that are built for Nagaland living.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href={business.whatsapp} className="btn-primary">
              Talk with a Dimapur designer
            </a>
            <Link to="/portfolio" className="btn-secondary">
              View Dimapur projects
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 transition-colors duration-300 dark:bg-dark-surface lg:py-28">
        <div className="container-lux grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="section-kicker">Why choose Interior Decor in Dimapur</p>
            <h2 className="section-title">A local interior designer with Dimapur experience, service and craft</h2>
            <p className="mt-6 leading-8 text-charcoal/75 dark:text-dark-muted">
              Choosing an interior designer in Dimapur means working with someone who understands the local climate, materials, timelines and culture. Interior Decor combines design thinking with practical execution so your home or office reflects contemporary style and long-term performance in Nagaland.
            </p>
          </div>
          <div className="grid gap-6">
            <article className="rounded-3xl border border-charcoal/10 bg-ivory p-8 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">Dimapur-local design process</h3>
              <p className="mt-4 leading-7 text-charcoal/70 dark:text-dark-muted">
                From the first site visit to final handover, we manage every step in Dimapur. Our process reduces delays, keeps budgets clear and ensures finishes arrive on time from local suppliers.
              </p>
            </article>
            <article className="rounded-3xl border border-charcoal/10 bg-ivory p-8 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">Built for Nagaland homes</h3>
              <p className="mt-4 leading-7 text-charcoal/70 dark:text-dark-muted">
                We specify moisture-resistant materials, smart lighting, efficient storage and climate-aware finishes so Dimapur interiors stay beautiful, comfortable and easy to maintain.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20 transition-colors duration-300 dark:bg-dark-bg lg:py-28">
        <div className="container-lux">
          <div className="max-w-4xl">
            <p className="section-kicker">Services for Dimapur homes and businesses</p>
            <h2 className="section-title">Interior design services tailored for Dimapur and Nagaland</h2>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            <article className="rounded-3xl border border-charcoal/10 bg-white p-8 shadow-sm transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">Interior design</h3>
              <p className="mt-4 text-charcoal/70 dark:text-dark-muted">
                Full-service interior design for living rooms, bedrooms, kitchens and commercial spaces that balance style, function and durability for Dimapur residents.
              </p>
            </article>
            <article className="rounded-3xl border border-charcoal/10 bg-white p-8 shadow-sm transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">False ceiling solutions</h3>
              <p className="mt-4 text-charcoal/70 dark:text-dark-muted">
                Gypsum, PVC and POP false ceiling designs that improve lighting, hide services and create a polished interior finish for Dimapur properties.
              </p>
            </article>
            <article className="rounded-3xl border border-charcoal/10 bg-white p-8 shadow-sm transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">Modular kitchens</h3>
              <p className="mt-4 text-charcoal/70 dark:text-dark-muted">
                Custom modular kitchen design and installation for compact Dimapur flats, duplex homes, and family kitchens that perform beautifully every day.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 transition-colors duration-300 dark:bg-dark-surface lg:py-28">
        <div className="container-lux">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="section-kicker">Local interior design focus</p>
              <h2 className="section-title">Why Dimapur homeowners trust Interior Decor</h2>
              <p className="mt-6 leading-8 text-charcoal/75 dark:text-dark-muted">
                Our team has completed dozens of Dimapur projects across Airport Junction, 3rd Mile, New Market and the Nagaland University area. We combine Indonesian glass, local stone, premium timber textures and specialised ceiling systems to create spaces that feel uniquely local and professionally finished.
              </p>
              <p className="mt-6 leading-8 text-charcoal/75 dark:text-dark-muted">
                When you work with us, you get a designer who knows Dimapur supply chains, local labour partners, municipal approvals and on-site logistics. That local advantage keeps your project moving forward with less wasted time and better final results.
              </p>
            </div>
            <div className="rounded-3xl border border-charcoal/10 bg-ivory p-8 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">Project goals for Dimapur interiors</h3>
              <ul className="mt-5 space-y-3 text-charcoal/75 dark:text-dark-muted">
                <li>• Comfortable living spaces for family life</li>
                <li>• Efficient kitchen layouts using modular storage</li>
                <li>• Durable finishes for Nagaland weather</li>
                <li>• High-end false ceiling and wall panel detailing</li>
                <li>• Reliable handover with quality checks</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20 transition-colors duration-300 dark:bg-dark-bg lg:py-28">
        <div className="container-lux max-w-5xl">
          <p className="section-kicker">Our Dimapur design process</p>
          <h2 className="section-title">From consultation to completion in Dimapur</h2>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            <article className="rounded-3xl border border-charcoal/10 bg-white p-8 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">1. Local design consultation</h3>
              <p className="mt-4 text-charcoal/70 dark:text-dark-muted">
                We begin with a Dimapur site visit, measurements and a design brief that captures your priorities, budget and lifestyle. This guarantees the right design direction from the start.
              </p>
            </article>
            <article className="rounded-3xl border border-charcoal/10 bg-white p-8 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">2. Detailed planning</h3>
              <p className="mt-4 text-charcoal/70 dark:text-dark-muted">
                Our team prepares plans, mood boards, material samples and transparent cost estimates tailored for Dimapur. You can review finishes before we begin work.
              </p>
            </article>
            <article className="rounded-3xl border border-charcoal/10 bg-white p-8 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">3. Trusted installation</h3>
              <p className="mt-4 text-charcoal/70 dark:text-dark-muted">
                We oversee installation, local trades, material delivery and quality checks so your interior stays on schedule and matches the design intent.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 transition-colors duration-300 dark:bg-dark-surface lg:py-28">
        <div className="container-lux">
          <p className="section-kicker">Interior Designer Dimapur services</p>
          <h2 className="section-title">What makes our Dimapur interior design service different</h2>
          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <article className="space-y-4 rounded-3xl border border-charcoal/10 bg-ivory p-8 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">Climate-smart materials</h3>
              <p className="text-charcoal/75 dark:text-dark-muted">
                We recommend materials designed for Nagaland humidity and seasonal change, including moisture-resistant PVC panels, gypsum systems with proper ventilation, durable flooring and locally sourced finish hardware.
              </p>
            </article>
            <article className="space-y-4 rounded-3xl border border-charcoal/10 bg-ivory p-8 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">Personalized local styling</h3>
              <p className="text-charcoal/75 dark:text-dark-muted">
                Your Dimapur interior should feel modern, warm and locally grounded. We use understated luxury, layered lighting, refined textures and smart storage to create spaces that feel custom to your family.
              </p>
            </article>
          </div>
          <div className="mt-10 rounded-3xl border border-charcoal/10 bg-white p-8 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
            <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">Project specialties</h3>
            <ul className="mt-5 grid gap-3 text-charcoal/75 dark:text-dark-muted">
              <li>• Modular Kitchen Design for compact Dimapur spaces</li>
              <li>• False Ceiling Design and Installation</li>
              <li>• PVC Wall Panels and Feature Walls</li>
              <li>• Residential Interiors for homes and apartments</li>
              <li>• Commercial Interiors for offices, shops and clinics</li>
              <li>• Full interior contracting support from concept to handover</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20 transition-colors duration-300 dark:bg-dark-bg lg:py-28">
        <div className="container-lux max-w-5xl">
          <p className="section-kicker">Real Dimapur results</p>
          <h2 className="section-title">Interior Decor Dimapur projects that deliver results</h2>

          <div className="mt-12 space-y-10">
            <article className="rounded-3xl border border-charcoal/10 bg-white p-8 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">Airport Junction apartment upgrade</h3>
              <p className="mt-4 leading-7 text-charcoal/70 dark:text-dark-muted">
                We redesigned a two-bedroom apartment near Airport Junction with a modular kitchen, hidden storage, layered false ceiling lighting and a warm living room palette. The client now enjoys a home that is easier to clean, brighter and more connected to daily life.
              </p>
            </article>
            <article className="rounded-3xl border border-charcoal/10 bg-white p-8 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">3rd Mile boutique retail fit-out</h3>
              <p className="mt-4 leading-7 text-charcoal/70 dark:text-dark-muted">
                For a retail space in 3rd Mile, Interior Decor delivered a premium interior with custom louvers, accent wall panels, backlit ceilings and a clean circulation plan that supports both product display and customer comfort.
              </p>
            </article>
            <article className="rounded-3xl border border-charcoal/10 bg-white p-8 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">Kohima road office renovation</h3>
              <p className="mt-4 leading-7 text-charcoal/70 dark:text-dark-muted">
                We transformed an office near Kohima Road with efficient meeting zones, functional work desks, custom wall panels and indirect ceiling lighting that improves focus and professionalism.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 transition-colors duration-300 dark:bg-dark-surface lg:py-28">
        <div className="container-lux max-w-5xl">
          <p className="section-kicker">Interior Designer Dimapur FAQs</p>
          <h2 className="section-title">Frequently asked questions about Dimapur interior design</h2>

          <div className="mt-10 space-y-5">
            <details className="rounded-3xl border border-charcoal/10 bg-ivory p-6 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <summary className="cursor-pointer text-lg font-bold text-charcoal dark:text-dark-text">How much does an interior designer in Dimapur charge?</summary>
              <p className="mt-4 leading-8 text-charcoal/75 dark:text-dark-muted">
                Design fees vary based on the project scope, material choices and whether you need full-service execution. Typical Dimapur projects begin with a fixed consultation and design proposal, followed by transparent pricing for interiors, modular kitchens, false ceilings and finishes.
              </p>
            </details>

            <details className="rounded-3xl border border-charcoal/10 bg-ivory p-6 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <summary className="cursor-pointer text-lg font-bold text-charcoal dark:text-dark-text">Do you offer modular kitchen design in Dimapur?</summary>
              <p className="mt-4 leading-8 text-charcoal/75 dark:text-dark-muted">
                Yes. We design and install modular kitchens for Dimapur homes, including bespoke cabinets, durable countertops, smart storage and lighting solutions optimized for local kitchens.</p>
            </details>

            <details className="rounded-3xl border border-charcoal/10 bg-ivory p-6 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <summary className="cursor-pointer text-lg font-bold text-charcoal dark:text-dark-text">Can you handle false ceiling work in Nagaland?</summary>
              <p className="mt-4 leading-8 text-charcoal/75 dark:text-dark-muted">
                Absolutely. Interior Decor installs gypsum, PVC and POP false ceilings across Dimapur and Nagaland, with designs that support lighting, air circulation and long-term finish quality.</p>
            </details>

            <details className="rounded-3xl border border-charcoal/10 bg-ivory p-6 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <summary className="cursor-pointer text-lg font-bold text-charcoal dark:text-dark-text">How do I book a consultation with a Dimapur interior designer?</summary>
              <p className="mt-4 leading-8 text-charcoal/75 dark:text-dark-muted">
                Contact us by WhatsApp, phone or the enquiry form. We schedule a site visit, review your goals and share a design proposal with clear timelines and cost estimates.</p>
            </details>

            <details className="rounded-3xl border border-charcoal/10 bg-ivory p-6 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <summary className="cursor-pointer text-lg font-bold text-charcoal dark:text-dark-text">What makes Interior Decor different from other Dimapur designers?</summary>
              <p className="mt-4 leading-8 text-charcoal/75 dark:text-dark-muted">
                Our local Dimapur team combines technical execution, refined design sensibility and a commitment to quality. We handle material sourcing, local approvals and project coordination so you receive a streamlined interior experience.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-20 text-white transition-colors duration-300 dark:bg-dark-panel lg:py-28">
        <div className="container-lux max-w-4xl text-center">
          <p className="section-kicker text-gold">Ready to start your Dimapur interior project?</p>
          <h2 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl">Work with a trusted Interior Designer Dimapur residents recommend</h2>
          <p className="mx-auto mt-6 max-w-3xl text-white/70 dark:text-dark-muted">
            Interior Decor helps you design, build and finish residential and commercial interiors in Dimapur with clarity, craftsmanship and local support. Let’s create a space that reflects your lifestyle and delivers long-term value.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a href={business.whatsapp} className="btn-primary">
              Schedule your Dimapur consultation
            </a>
            <Link to="/contact" className="btn-secondary">
              Contact our Dimapur team
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
