import { Link } from 'react-router-dom';
import CTA from '../components/CTA.jsx';
import { business } from '../data/business.js';

export default function InteriorDesignerKohima() {
  return (
    <>
      <section className="bg-charcoal py-24 text-white transition-colors duration-300 dark:bg-dark-panel lg:py-32">
        <div className="container-lux max-w-4xl">
          <p className="section-kicker text-gold">Interior Designer Kohima</p>
          <h1 className="mt-4 text-5xl font-bold leading-tight sm:text-6xl">
            Interior Designer Kohima: thoughtful interiors for homes and offices
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/75 dark:text-dark-muted">
            Interior Decor provides interior design services in Kohima for residential and commercial spaces. We bring local knowledge, premium materials and practical layouts to create interiors that are stylish, comfortable and appropriate for the Nagaland capital.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href={business.whatsapp} className="btn-primary">
              Talk to a Kohima designer
            </a>
            <Link to="/portfolio" className="btn-secondary">
              Explore our Nagaland portfolio
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 transition-colors duration-300 dark:bg-dark-surface lg:py-28">
        <div className="container-lux grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="section-kicker">Kohima interior design with local context</p>
            <h2 className="section-title">Design solutions built for Kohima residents and businesses</h2>
            <p className="mt-6 leading-8 text-charcoal/75 dark:text-dark-muted">
              Kohima interiors require an understanding of local climate, site access and lifestyle expectations. Interior Decor supports Kohima clients with design proposals that focus on comfort, usable space and finishes that sit well in the Northeast India context.
            </p>
            <p className="mt-6 leading-8 text-charcoal/75 dark:text-dark-muted">
              Whether you live near Old DC Office, Super Market Road or Naga Hospital Road, our team works with you to create interiors that are beautiful and easy to live in.
            </p>
          </div>
          <div className="rounded-3xl border border-charcoal/10 bg-ivory p-8 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
            <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">Kohima-focused services</h3>
            <ul className="mt-5 space-y-3 text-charcoal/75 dark:text-dark-muted">
              <li>• Residential interior design for Kohima homes</li>
              <li>• Office and commercial interior fit-outs</li>
              <li>• False ceiling and wall panel installations</li>
              <li>• Modular kitchen planning and execution</li>
              <li>• Material selection suitable for Nagaland climate</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20 transition-colors duration-300 dark:bg-dark-bg lg:py-28">
        <div className="container-lux">
          <div className="max-w-4xl">
            <p className="section-kicker">What makes our Kohima design service different</p>
            <h2 className="section-title">Local insight, thoughtful planning and reliable delivery</h2>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            <article className="rounded-3xl border border-charcoal/10 bg-white p-8 shadow-sm transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">Site-aware design</h3>
              <p className="mt-4 leading-7 text-charcoal/70 dark:text-dark-muted">
                We design according to Kohima site conditions, access considerations and client preferences so projects are easier to build and deliver.</p>
            </article>
            <article className="rounded-3xl border border-charcoal/10 bg-white p-8 shadow-sm transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">Material intelligence</h3>
              <p className="mt-4 leading-7 text-charcoal/70 dark:text-dark-muted">
                Kohima interiors need materials that stand up to seasonal change and indoor conditions. We recommend moisture-resistant surfaces and strong finishes for long-lasting interiors.</p>
            </article>
            <article className="rounded-3xl border border-charcoal/10 bg-white p-8 shadow-sm transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">Built for living</h3>
              <p className="mt-4 leading-7 text-charcoal/70 dark:text-dark-muted">
                Our designs focus on livability, storage and lighting so Kohima homes feel relaxed, functional and easy to maintain.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 transition-colors duration-300 dark:bg-dark-surface lg:py-28">
        <div className="container-lux max-w-6xl">
          <p className="section-kicker">Kohima interior design services</p>
          <h2 className="section-title">Interior Decor services for Kohima homes and offices</h2>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            <article className="rounded-3xl border border-charcoal/10 bg-ivory p-8 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">Residential interiors</h3>
              <p className="mt-4 text-charcoal/75 dark:text-dark-muted">
                We create living rooms, bedrooms, kitchens and dining spaces that support Kohima family life with comfortable finishes and clever storage.
              </p>
            </article>
            <article className="rounded-3xl border border-charcoal/10 bg-ivory p-8 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">Commercial interiors</h3>
              <p className="mt-4 text-charcoal/75 dark:text-dark-muted">
                From offices to clinics and retail spaces, we design practical commercial interiors that align with your brand and business goals.
              </p>
            </article>
            <article className="rounded-3xl border border-charcoal/10 bg-ivory p-8 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">False ceilings & wall panels</h3>
              <p className="mt-4 text-charcoal/75 dark:text-dark-muted">
                We install false ceilings and wall panels that enhance visual appeal while improving acoustic comfort and light control.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20 transition-colors duration-300 dark:bg-dark-bg lg:py-28">
        <div className="container-lux max-w-5xl">
          <p className="section-kicker">A Kohima design process built for result</p>
          <h2 className="section-title">How we execute interior design projects in Kohima</h2>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            <article className="rounded-3xl border border-charcoal/10 bg-white p-8 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">1. Local consultation</h3>
              <p className="mt-4 text-charcoal/75 dark:text-dark-muted">
                We begin with a Kohima site assessment and design brief to understand how your space should feel and function.
              </p>
            </article>
            <article className="rounded-3xl border border-charcoal/10 bg-white p-8 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">2. Materials selection</h3>
              <p className="mt-4 text-charcoal/75 dark:text-dark-muted">
                We select finishes and fixtures that suit Kohima conditions, with special attention to humidity management and durability.
              </p>
            </article>
            <article className="rounded-3xl border border-charcoal/10 bg-white p-8 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">3. Execution and care</h3>
              <p className="mt-4 text-charcoal/75 dark:text-dark-muted">
                Our local team oversees installation and quality control so the final interior meets both design and practical standards.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 transition-colors duration-300 dark:bg-dark-surface lg:py-28">
        <div className="container-lux max-w-5xl">
          <p className="section-kicker">Interior Designer Kohima FAQs</p>
          <h2 className="section-title">Frequently asked questions from Kohima clients</h2>

          <div className="mt-10 grid gap-5">
            <details className="rounded-3xl border border-charcoal/10 bg-ivory p-6 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <summary className="cursor-pointer text-lg font-bold text-charcoal dark:text-dark-text">Do you offer interior design services in Kohima?</summary>
              <p className="mt-4 leading-8 text-charcoal/75 dark:text-dark-muted">
                Yes. We provide interior design services for Kohima homes, offices, retail spaces and clinics with local planning and execution.</p>
            </details>
            <details className="rounded-3xl border border-charcoal/10 bg-ivory p-6 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <summary className="cursor-pointer text-lg font-bold text-charcoal dark:text-dark-text">How do I book a Kohima design consultation?</summary>
              <p className="mt-4 leading-8 text-charcoal/75 dark:text-dark-muted">
                Contact us by WhatsApp or phone to schedule a site visit. We will review your space and share a tailored design plan.</p>
            </details>
            <details className="rounded-3xl border border-charcoal/10 bg-ivory p-6 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <summary className="cursor-pointer text-lg font-bold text-charcoal dark:text-dark-text">Can you design a Kohima home with a modern style?</summary>
              <p className="mt-4 leading-8 text-charcoal/75 dark:text-dark-muted">
                Yes. We design modern interiors with simple forms, neutral palettes and warm textures that suit the Kohima lifestyle.</p>
            </details>
            <details className="rounded-3xl border border-charcoal/10 bg-ivory p-6 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <summary className="cursor-pointer text-lg font-bold text-charcoal dark:text-dark-text">Do you handle both design and execution?</summary>
              <p className="mt-4 leading-8 text-charcoal/75 dark:text-dark-muted">
                Yes. We handle design, material sourcing, local coordination and installation for a complete interior service.</p>
            </details>
            <details className="rounded-3xl border border-charcoal/10 bg-ivory p-6 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <summary className="cursor-pointer text-lg font-bold text-charcoal dark:text-dark-text">What neighborhoods in Kohima do you serve?</summary>
              <p className="mt-4 leading-8 text-charcoal/75 dark:text-dark-muted">
                We serve Kohima areas including Old DC Office, Bazaar, Super Market Road, Tobacco Market and New Minister Hill.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-20 text-white transition-colors duration-300 dark:bg-dark-panel lg:py-28">
        <div className="container-lux max-w-4xl text-center">
          <p className="section-kicker text-gold">Ready to design your Kohima interior?</p>
          <h2 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl">Partner with Interior Decor for Kohima homes and businesses</h2>
          <p className="mx-auto mt-6 max-w-3xl text-white/70 dark:text-dark-muted">
            We offer local design knowledge, material recommendations and a reliable execution approach for Kohima projects of every size.</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a href={business.whatsapp} className="btn-primary">
              Book a Kohima design consult
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
