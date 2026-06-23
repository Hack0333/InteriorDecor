import { Link } from 'react-router-dom';
import { FaInstagram, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { business, locations } from '../data/business.js';
import { services } from '../data/services.js';

export default function Footer() {
  const quickLinks = [
    { label: 'About', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Portfolio', to: '/portfolio' },
    { label: 'Blog', to: '/blog' },
    { label: 'Testimonials', to: '/testimonials' },
    { label: 'Contact', to: '/contact' },
  ];

  const nagalandPages = [
    { label: 'Dimapur', slug: 'interior-designer-in-dimapur' },
    { label: 'Chümoukedima', slug: 'interior-designer-in-chumoukedima' },
    { label: 'Kohima', slug: 'interior-designer-in-kohima' },
    { label: 'Mokokchung', slug: 'interior-designer-in-mokokchung' },
    { label: 'Wokha', slug: 'interior-designer-in-wokha' },
    { label: 'Mon', slug: 'interior-designer-in-mon' },
    { label: 'Phek', slug: 'interior-designer-in-phek' },
    { label: 'Tuensang', slug: 'interior-designer-in-tuensang' },
    { label: 'Zunheboto', slug: 'interior-designer-in-zunheboto' },
    { label: 'Niuland', slug: 'interior-designer-in-niuland' },
    { label: 'Peren', slug: 'interior-designer-in-peren' },
    { label: 'Longleng', slug: 'interior-designer-in-longleng' },
    { label: 'Kiphire', slug: 'interior-designer-in-kiphire' },
    { label: 'Meluri', slug: 'interior-designer-in-meluri' },
    { label: 'Shamator', slug: 'interior-designer-in-shamator' },
  ];

  const assamPages = [
    { label: 'Lahorijan', slug: 'interior-designer-in-lahorijan' },
    { label: 'Bokajan', slug: 'interior-designer-in-bokajan' },
    { label: 'Karbi Anglong', slug: 'interior-designer-in-karbi-anglong' },
    { label: 'Golaghat', slug: 'interior-designer-in-golaghat' },
    { label: 'Numaligarh', slug: 'interior-designer-in-numaligarh' },
    { label: 'Dergaon', slug: 'interior-designer-in-dergaon' },
  ];

  const popularServices = [
    { label: 'False Ceiling Installation', slug: 'false-ceilings' },
    { label: 'PVC Wall Panels', slug: 'pvc-panels' },
    { label: 'WPC Wall Panels', slug: 'wpc-panels' },
    { label: 'Gypsum Ceiling Installation', slug: 'gypsum-ceilings' },
    { label: 'POP Ceiling Design', slug: 'pop-designs' },
    { label: 'Interior Design Services', slug: 'interior-contracting' },
    { label: 'Home Interior Design', slug: 'residential-interiors' },
    { label: 'Office Interior Design', slug: 'commercial-interiors' },
    { label: 'Commercial Interior Design', slug: 'commercial-interiors' },
    { label: 'UPVC Windows', slug: 'upvc-windows' },
    { label: 'Aluminium Doors', slug: 'aluminium-doors' },
    { label: 'Steel Railings', slug: 'steel-railings' },
    { label: 'Wall Cladding', slug: 'wpc-panels' },
    { label: 'Interior Renovation', slug: 'residential-interiors' },
    { label: 'Turnkey Interior Solutions', slug: 'interior-contracting' },
  ];

  return (
    <footer className="bg-[#262626] text-white transition-colors duration-300 dark:bg-dark-bg">
      <div className="container-lux py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="font-heading text-3xl font-bold">INTERIOR DECOR</h2>
            <p className="mt-4 leading-7 text-white/70">{business.tagline}</p>
            <p className="mt-2 text-sm text-white/60">Serving Nagaland & Assam</p>
            <div className="mt-6 flex gap-3">
              <a
                className="grid h-10 w-10 place-items-center bg-white/10 text-gold hover:bg-gold hover:text-white"
                href={business.instagram}
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                className="grid h-10 w-10 place-items-center bg-white/10 text-gold hover:bg-gold hover:text-white"
                href={business.whatsapp}
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold">Quick Links</h3>
            <div className="mt-5 grid gap-3 text-white/70">
              {quickLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="hover:text-gold"
                  onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold">Services</h3>
            <div className="mt-5 grid gap-3 text-white/70 max-h-[18rem] overflow-y-auto pr-2">
              {services.map((service) => (
                <Link key={service.slug} to={`/services#${service.anchor || service.slug}`} className="hover:text-gold">
                  {service.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold">Office Locations</h3>
            <div className="mt-5 grid gap-6 text-white/70">
              <div>
                <p className="text-sm font-semibold text-gold">Dimapur, Nagaland</p>
                <p className="mt-1 text-sm leading-6">{locations.nagaland.address}</p>
                <a className="mt-2 inline-flex items-center gap-2 text-white hover:text-gold" href={locations.nagaland.phoneHref}>
                  <FaPhoneAlt className="text-gold" /> {locations.nagaland.phone}
                </a>
              </div>

              <div>
                <p className="text-sm font-semibold text-gold">Lahorijan, Assam</p>
                <p className="mt-1 text-sm leading-6">{locations.assam.address}</p>
                <a className="mt-2 inline-flex items-center gap-2 text-white hover:text-gold" href={locations.assam.phoneHref}>
                  <FaPhoneAlt className="text-gold" /> {locations.assam.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-10">
          <h3 className="text-xl font-bold">Locations We Serve</h3>
          <div className="mt-8 grid gap-10 xl:grid-cols-3">
            <div>
              <p className="text-sm font-semibold text-gold">Nagaland</p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm text-white/70">
                {nagalandPages.map((page) => (
                  <Link key={page.slug} to={`/locations/${page.slug}`} className="hover:text-gold">
                    {page.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-gold">Assam</p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm text-white/70">
                {assamPages.map((page) => (
                  <Link key={page.slug} to={`/locations/${page.slug}`} className="hover:text-gold">
                    {page.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-gold">Popular Services</p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm text-white/70">
                {popularServices.map((service) => (
                  <Link key={service.label} to={`/services#${service.slug}`} className="hover:text-gold">
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-sm text-white/50">
        © {new Date().getFullYear()} INTERIOR DECOR. All rights reserved.
      </div>
    </footer>
  );
}
