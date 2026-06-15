import { Link } from 'react-router-dom';
import CTA from '../components/CTA.jsx';
import { business } from '../data/business.js';

export default function ModularKitchenDimapur() {
  return (
    <>
      <section className="bg-charcoal py-24 text-white transition-colors duration-300 dark:bg-dark-panel lg:py-32">
        <div className="container-lux max-w-4xl">
          <p className="section-kicker text-gold">Modular Kitchen Dimapur</p>
          <h1 className="mt-4 text-5xl font-bold leading-tight sm:text-6xl">
            Modular Kitchen Dimapur: Smart kitchens designed for local homes
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/75 dark:text-dark-muted">
            Interior Decor creates modular kitchens in Dimapur that combine elegant materials, efficient layouts and durable finishes. Whether you need a compact kitchen for a city apartment or a luxury kitchen for a family home, we design cabinetry, storage and workflows that fit your daily life.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href={business.whatsapp} className="btn-primary">
              Request a kitchen design quote
            </a>
            <Link to="/portfolio" className="btn-secondary">
              View kitchen projects
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 transition-colors duration-300 dark:bg-dark-surface lg:py-28">
        <div className="container-lux grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="section-kicker">Your local Dimapur kitchen designer</p>
            <h2 className="section-title">Modular kitchens created for the Nagaland lifestyle</h2>
            <p className="mt-6 leading-8 text-charcoal/75 dark:text-dark-muted">
              The best Dimapur kitchens combine storage, durability and stylish finishes. Interior Decor designs modular kitchens with customised cabinets, corrosion-resistant hardware and surfaces that perform well in the local climate.
            </p>
            <p className="mt-6 leading-8 text-charcoal/75 dark:text-dark-muted">
              We leverage local suppliers, maintain clear timelines and ensure every kitchen is coordinated with electrical, plumbing and ceiling design to deliver a smooth installation experience.
            </p>
          </div>
          <div className="rounded-3xl border border-charcoal/10 bg-ivory p-8 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
            <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">Our modular kitchen services</h3>
            <ul className="mt-5 space-y-3 text-charcoal/75 dark:text-dark-muted">
              <li>• Full modular kitchen design and space planning</li>
              <li>• Cabinetry, drawers and storage systems</li>
              <li>• Countertops, backsplashes and service wall finishes</li>
              <li>• Kitchen lighting and concealed channels</li>
              <li>• Local installation and on-site supervision</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20 transition-colors duration-300 dark:bg-dark-bg lg:py-28">
        <div className="container-lux">
          <div className="max-w-4xl">
            <p className="section-kicker">Modular kitchen benefits</p>
            <h2 className="section-title">Why choose a modular kitchen in Dimapur</h2>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            <article className="rounded-3xl border border-charcoal/10 bg-white p-8 shadow-sm transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">Space efficiency</h3>
              <p className="mt-4 leading-7 text-charcoal/70 dark:text-dark-muted">
                Modular kitchens make the most of every centimeter. Our designs create clever storage, pull-out units and compact workflows ideal for Dimapur apartments and smaller homes.
              </p>
            </article>
            <article className="rounded-3xl border border-charcoal/10 bg-white p-8 shadow-sm transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">Durable materials</h3>
              <p className="mt-4 leading-7 text-charcoal/70 dark:text-dark-muted">
                We specify finishes that resist humidity, heat and everyday wear. Local kitchens need resilient faces, sturdy hardware and easy-to-clean surfaces.
              </p>
            </article>
            <article className="rounded-3xl border border-charcoal/10 bg-white p-8 shadow-sm transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">Smart workflows</h3>
              <p className="mt-4 leading-7 text-charcoal/70 dark:text-dark-muted">
                Our kitchen layouts are built around how Dimapur families use the space. We plan zones for prepping, cooking, washing and storage so the kitchen works beautifully every day.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 transition-colors duration-300 dark:bg-dark-surface lg:py-28">
        <div className="container-lux max-w-6xl">
          <p className="section-kicker">Modular kitchen process in Dimapur</p>
          <h2 className="section-title">How we deliver your modular kitchen</h2>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            <article className="rounded-3xl border border-charcoal/10 bg-ivory p-8 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">1. Kitchen consultation</h3>
              <p className="mt-4 text-charcoal/75 dark:text-dark-muted">
                We start with a site visit, kitchen measurements and detailed discussion about your cooking habits, storage needs and preferred finishes.
              </p>
            </article>
            <article className="rounded-3xl border border-charcoal/10 bg-ivory p-8 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">2. Layout and visuals</h3>
              <p className="mt-4 text-charcoal/75 dark:text-dark-muted">
                Our design proposal includes kitchen layouts, cabinet elevations, finish samples and a budget estimate so you can visualise the space before work begins.
              </p>
            </article>
            <article className="rounded-3xl border border-charcoal/10 bg-ivory p-8 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">3. Installation and delivery</h3>
              <p className="mt-4 text-charcoal/75 dark:text-dark-muted">
                We coordinate manufacture, delivery and on-site assembly with Dimapur installers to ensure your modular kitchen is fitted accurately and functions well.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20 transition-colors duration-300 dark:bg-dark-bg lg:py-28">
        <div className="container-lux max-w-5xl">
          <p className="section-kicker">Kitchen styles we design</p>
          <h2 className="section-title">Modular kitchen solutions for Dimapur families</h2>

          <div className="mt-12 space-y-8">
            <article className="rounded-3xl border border-charcoal/10 bg-white p-8 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">Contemporary kitchen layouts</h3>
              <p className="mt-4 leading-7 text-charcoal/70 dark:text-dark-muted">
                Contemporary kitchens focus on clean lines, neutral palettes and efficient storage. We use handle-less cabinets, stone-look counters and subtle lighting to create a modern Dimapur kitchen.
              </p>
            </article>
            <article className="rounded-3xl border border-charcoal/10 bg-white p-8 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">Compact kitchen solutions</h3>
              <p className="mt-4 leading-7 text-charcoal/70 dark:text-dark-muted">
                Small kitchens can feel generous with the right planning. We design compact kitchens with tall cabinets, pull-out pantry units and corner storage to maximise functionality.
              </p>
            </article>
            <article className="rounded-3xl border border-charcoal/10 bg-white p-8 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <h3 className="text-2xl font-bold text-charcoal dark:text-dark-text">Family kitchen designs</h3>
              <p className="mt-4 leading-7 text-charcoal/70 dark:text-dark-muted">
                For family homes, we create warm, highly functional kitchens with dedicated appliance zones, work triangles and easy-to-clean surfaces that stand up to daily cooking.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 transition-colors duration-300 dark:bg-dark-surface lg:py-28">
        <div className="container-lux max-w-5xl">
          <p className="section-kicker">Modular Kitchen Dimapur FAQs</p>
          <h2 className="section-title">Common questions about modular kitchens in Dimapur</h2>

          <div className="mt-10 grid gap-5">
            <details className="rounded-3xl border border-charcoal/10 bg-ivory p-6 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <summary className="cursor-pointer text-lg font-bold text-charcoal dark:text-dark-text">What is the cost of a modular kitchen in Dimapur?</summary>
              <p className="mt-4 leading-8 text-charcoal/75 dark:text-dark-muted">
                Costs vary by cabinet finish, hardware, countertop material and kitchen size. We provide a transparent estimate after the first site visit so you can make decisions with confidence.</p>
            </details>
            <details className="rounded-3xl border border-charcoal/10 bg-ivory p-6 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <summary className="cursor-pointer text-lg font-bold text-charcoal dark:text-dark-text">How long does a modular kitchen take to install?</summary>
              <p className="mt-4 leading-8 text-charcoal/75 dark:text-dark-muted">
                From design approval to installation, a modular kitchen in Dimapur usually takes 4 to 8 weeks depending on custom details and material availability.</p>
            </details>
            <details className="rounded-3xl border border-charcoal/10 bg-ivory p-6 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <summary className="cursor-pointer text-lg font-bold text-charcoal dark:text-dark-text">Can you integrate appliances into my kitchen design?</summary>
              <p className="mt-4 leading-8 text-charcoal/75 dark:text-dark-muted">
                Yes. We design with your appliances in mind and provide openings, support and services for ovens, chimneys, refrigerators, dishwashers and other kitchen equipment.</p>
            </details>
            <details className="rounded-3xl border border-charcoal/10 bg-ivory p-6 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <summary className="cursor-pointer text-lg font-bold text-charcoal dark:text-dark-text">What materials are best for local kitchen walls?</summary>
              <p className="mt-4 leading-8 text-charcoal/75 dark:text-dark-muted">
                We recommend splashback tiles or waterproof wall panels behind the stove and wash area, with durable paint or laminate finishes on adjacent walls to resist humidity and cooking splatters.</p>
            </details>
            <details className="rounded-3xl border border-charcoal/10 bg-ivory p-6 transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
              <summary className="cursor-pointer text-lg font-bold text-charcoal dark:text-dark-text">How do I start a modular kitchen project in Dimapur?</summary>
              <p className="mt-4 leading-8 text-charcoal/75 dark:text-dark-muted">
                Reach out by WhatsApp or phone and we will book a time to visit your property, measure the space and discuss your requirements before creating a kitchen design proposal.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-20 text-white transition-colors duration-300 dark:bg-dark-panel lg:py-28">
        <div className="container-lux max-w-4xl text-center">
          <p className="section-kicker text-gold">Ready for a Dimapur modular kitchen?</p>
          <h2 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl">Build a smart kitchen with Interior Decor</h2>
          <p className="mx-auto mt-6 max-w-3xl text-white/70 dark:text-dark-muted">
            Our Dimapur kitchen designs deliver efficient storage, stylish finishes and reliable installation. Get a proposal tailored to your space, budget and lifestyle.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a href={business.whatsapp} className="btn-primary">
              Schedule a kitchen consultation
            </a>
            <Link to="/contact" className="btn-secondary">
              Contact our design team
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
