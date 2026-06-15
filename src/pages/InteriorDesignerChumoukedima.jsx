import { Link } from 'react-router-dom';
import CTA from '../components/CTA.jsx';
import { business } from '../data/business.js';

export default function InteriorDesignerChumoukedima() {
  return (
    <>
      <section className="bg-charcoal py-24 text-white transition-colors duration-300 dark:bg-dark-panel lg:py-32">
        <div className="container-lux max-w-4xl">
          <p className="section-kicker text-gold">Interior Designer Chumoukedima</p>
          <h1 className="mt-4 text-5xl font-bold leading-tight sm:text-6xl">
            Interior Designer Chumoukedima: elegant interiors for homes, offices and shops
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/75 dark:text-dark-muted">
            Interior Decor brings interior design services to Chumoukedima with a focus on clean finishes, durable materials and layouts that fit local living patterns. We create interiors that feel modern, practical and well-suited to the broader Dimapur-Nagaland region.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href={business.whatsapp} className="btn-primary">
              Chat with a Chumoukedima designer
            </a>
            <Link to="/portfolio" className="btn-secondary">
              Browse completed projects
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 transition-colors duration-300 dark:bg-dark-surface lg:py-28">
        <div className="container-lux grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="section-kicker">Design services for Chumoukedima</p>
            <h2 className="section-title">Interiors designed for Chumoukedima homes and businesses</h2>
            <p className="mt-6 leading-8 text-charcoal/75 dark:text-dark-muted">
              Our Chumoukedima projects take into account local site conditions, traffic patterns and family needs. We plan interiors with practical storage, beautiful ceiling details and finishes that deliver calm and comfort.
            </p>
            <p className="mt-6 leading-8 text-charcoal/75 dark:text-dark-muted">
              We design from first principles: your lifestyle, property layout and local climate. That means interiors that look polished and work for everyday living.
            </p>
          </div>
          <div className="rounded-3xl border border-charcoal/10 bg-ivory p-8 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
            <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">Chumoukedima interior services</h3>
            <ul className="mt-5 space-y-3 text-charcoal/75 dark:text-dark-muted">
              <li>• Full interior design for living rooms and bedrooms</li>
              <li>• Modular kitchen design and installation</li>
              <li>• False ceiling and wall panel solutions</li>
              <li>• Commercial interiors for retail, office and clinic spaces</li>
              <li>• Local project coordination and supervision</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20 transition-colors duration-300 dark:bg-dark-bg lg:py-28">
        <div className="container-lux">
          <div className="max-w-4xl">
            <p className="section-kicker">What makes Chumoukedima projects special</p>
            <h2 className="section-title">Design decisions that improve local homes and workspaces</h2>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            <article className="rounded-3xl border border-charcoal/10 bg-white p-8 shadow-sm transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">Focus on comfort</h3>
              <p className="mt-4 leading-7 text-charcoal/70 dark:text-dark-muted">
                Chumoukedima interiors are designed for daily living and family comfort with good circulation, natural light and calming materials.
              </p>
            </article>
            <article className="rounded-3xl border border-charcoal/10 bg-white p-8 shadow-sm transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">Practical finishes</h3>
              <p className="mt-4 leading-7 text-charcoal/70 dark:text-dark-muted">
                We specify finishes that are durable, easy to clean and resilient enough for Nagaland weather, including moisture-resistant wall panels and sturdy cabinetry.</p>
            </article>
            <article className="rounded-3xl border border-charcoal/10 bg-white p-8 shadow-sm transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">Local delivery</h3>
              <p className="mt-4 leading-7 text-charcoal/70 dark:text-dark-muted">
                Our team works with local contractors and suppliers to deliver on-site support in Chumoukedima, keeping timelines and communication clear.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 transition-colors duration-300 dark:bg-dark-surface lg:py-28">
        <div className="container-lux max-w-6xl">
          <p className="section-kicker">Interior design for Chumoukedima neighbourhoods</p>
          <h2 className="section-title">Homes and workspaces we support in the area</h2>

          <div className="mt-12 space-y-8">
            <article className="rounded-3xl border border-charcoal/10 bg-ivory p-8 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">Residential remodels</h3>
              <p className="mt-4 leading-7 text-charcoal/70 dark:text-dark-muted">
                We deliver residential remodels with improved traffic flow, better storage and refined finishes for Chumoukedima families.</p>
            </article>
            <article className="rounded-3xl border border-charcoal/10 bg-ivory p-8 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">Small business interiors</h3>
              <p className="mt-4 leading-7 text-charcoal/70 dark:text-dark-muted">
                Local shops and boutiques benefit from our commercial interior design, which includes display walls, customer seating and efficient back-of-house layouts.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20 transition-colors duration-300 dark:bg-dark-bg lg:py-28">
        <div className="container-lux max-w-5xl">
          <p className="section-kicker">Chumoukedima interior process</p>
          <h2 className="section-title">How we execute design projects in Chumoukedima</h2>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            <article className="rounded-3xl border border-charcoal/10 bg-white p-8 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">1. Needs assessment</h3>
              <p className="mt-4 text-charcoal/75 dark:text-dark-muted">
                We start by understanding your goals, timeline and the way you want the space to feel and function.</p>
            </article>
            <article className="rounded-3xl border border-charcoal/10 bg-white p-8 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">2. Design development</h3>
              <p className="mt-4 text-charcoal/75 dark:text-dark-muted">
                Our team develops layouts, finish options and product selections that align with your taste and local project requirements.</p>
            </article>
            <article className="rounded-3xl border border-charcoal/10 bg-white p-8 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">3. Delivery and closeout</h3>
              <p className="mt-4 text-charcoal/75 dark:text-dark-muted">
                We oversee installation from start to finish and hand over a completed interior that is ready to use.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 transition-colors duration-300 dark:bg-dark-surface lg:py-28">
        <div className="container-lux max-w-5xl">
          <p className="section-kicker">Interior Designer Chumoukedima FAQs</p>
          <h2 className="section-title">Questions Chumoukedima clients ask most often</h2>

          <div className="mt-10 grid gap-5">
            <details className="rounded-3xl border border-charcoal/10 bg-ivory p-6 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <summary className="cursor-pointer text-lg font-bold text-charcoal dark:text-dark-text">Do you design homes in Chumoukedima?</summary>
              <p className="mt-4 leading-8 text-charcoal/75 dark:text-dark-muted">
                Yes. We design homes in Chumoukedima with practical layouts, attractive finishes and quality execution.</p>
            </details>
            <details className="rounded-3xl border border-charcoal/10 bg-ivory p-6 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <summary className="cursor-pointer text-lg font-bold text-charcoal dark:text-dark-text">Can you work with local Chumoukedima contractors?</summary>
              <p className="mt-4 leading-8 text-charcoal/75 dark:text-dark-muted">
                Yes. We work with trusted local trades and suppliers to deliver reliable results in Chumoukedima.</p>
            </details>
            <details className="rounded-3xl border border-charcoal/10 bg-ivory p-6 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <summary className="cursor-pointer text-lg font-bold text-charcoal dark:text-dark-text">What interior services are available in Chumoukedima?</summary>
              <p className="mt-4 leading-8 text-charcoal/75 dark:text-dark-muted">
                We offer interior design, modular kitchens, false ceilings, wall panels and commercial fit-outs for Chumoukedima properties.</p>
            </details>
            <details className="rounded-3xl border border-charcoal/10 bg-ivory p-6 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <summary className="cursor-pointer text-lg font-bold text-charcoal dark:text-dark-text">How do I schedule a Chumoukedima design visit?</summary>
              <p className="mt-4 leading-8 text-charcoal/75 dark:text-dark-muted">
                Contact us via WhatsApp or phone and we will arrange a convenient time to visit your Chumoukedima property.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-20 text-white transition-colors duration-300 dark:bg-dark-panel lg:py-28">
        <div className="container-lux max-w-4xl text-center">
          <p className="section-kicker text-gold">Ready to design in Chumoukedima?</p>
          <h2 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl">Start your Chumoukedima interior project with Interior Decor</h2>
          <p className="mx-auto mt-6 max-w-3xl text-white/70 dark:text-dark-muted">
            We bring local insight, practical planning and polished execution to Chumoukedima interiors across homes, businesses and boutique spaces.</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a href={business.whatsapp} className="btn-primary">
              Book a Chumoukedima consultation
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
