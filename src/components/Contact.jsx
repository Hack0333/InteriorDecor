import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { business, locations } from "../data/business.js";

export default function Contact() {
  const fieldClass =
    "border border-charcoal/15 bg-ivory px-5 py-4 text-charcoal outline-none transition-colors duration-300 placeholder:text-charcoal/45 focus:border-gold dark:border-white/10 dark:bg-dark-card dark:text-dark-text dark:placeholder:text-dark-muted/60";

  const LocationCard = ({ location, title }) => (
    <div className="bg-ivory p-6 transition-colors duration-300 dark:bg-dark-card sm:p-8">
      <h3 className="text-xl font-bold text-charcoal dark:text-dark-text">
        {title}
      </h3>
      <div className="mt-6 grid gap-5">
        <a
          href={location.phoneHref}
          className="flex gap-4 text-charcoal hover:text-gold dark:text-dark-muted dark:hover:text-gold"
        >
          <FaPhoneAlt className="mt-1 shrink-0 text-gold" />
          {location.phone}
        </a>
        <a
          href={business.whatsapp}
          className="flex gap-4 text-charcoal hover:text-gold dark:text-dark-muted dark:hover:text-gold"
        >
          <FaWhatsapp className="mt-1 shrink-0 text-gold" />
          WhatsApp Consultation
        </a>
        <p className="flex gap-4 leading-7 text-charcoal/75 dark:text-dark-muted">
          <FaMapMarkerAlt className="mt-1 shrink-0 text-gold" />
          {location.address}
        </p>
        {location.plusCode && location.plusCode !== "N/A" && (
          <p className="flex gap-4 leading-7 text-charcoal/75 dark:text-dark-muted">
            <FaMapMarkerAlt className="mt-1 shrink-0 text-gold" />
            Plus Code: {location.plusCode}
          </p>
        )}
      </div>
      <div className="mt-6">
        <h4 className="font-semibold text-charcoal dark:text-dark-text">
          Get Directions
        </h4>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          <a
            href={location.directions}
            className="btn-primary px-4 py-3 text-xs"
            target="_blank"
            rel="noreferrer"
          >
            Open Maps
          </a>
          <a
            href={location.phoneHref}
            className="btn-primary px-4 py-3 text-xs"
          >
            Call Now
          </a>
        </div>
      </div>
      <iframe
        title={`INTERIOR DECOR ${title} Google Map`}
        src={location.mapEmbed}
        loading="lazy"
        className="mt-5 h-64 w-full border-0 grayscale-[15%] dark:grayscale dark:invert dark:hue-rotate-180"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );

  return (
    <section className="bg-white py-20 transition-colors duration-300 dark:bg-dark-surface lg:py-28">
      <div className="container-lux">
        <div className="mb-16">
          <p className="section-kicker">Contact INTERIOR DECOR</p>
          <h2 className="section-title">Serving Nagaland & Assam</h2>
          <p className="mt-4 text-lg text-charcoal/75 dark:text-dark-muted">
            Book a site visit or free interior consultation at our offices in
            Dimapur, Nagaland and Lahorijan, Assam.
          </p>
        </div>

        <div className="mb-16 grid gap-10 lg:grid-cols-2">
          <div>
            <p className="section-kicker">Send us a Message</p>
            <h3 className="mt-2 text-2xl font-bold text-charcoal dark:text-dark-text">
              Get a Free Consultation
            </h3>
            <form className="mt-8 grid gap-4" name="contact">
              <input
                className={fieldClass}
                type="text"
                placeholder="Name"
                aria-label="Name"
                required
              />
              <input
                className={fieldClass}
                type="tel"
                placeholder="Phone"
                aria-label="Phone"
                required
              />
              <input
                className={fieldClass}
                type="email"
                placeholder="Email"
                aria-label="Email"
                required
              />
              <textarea
                className={`${fieldClass} min-h-36`}
                placeholder="Message"
                aria-label="Message"
              />
              <button className="btn-primary w-fit" type="submit">
                Send Enquiry
              </button>
            </form>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-lg bg-gold/10 p-5 dark:bg-gold/5">
              <p className="font-semibold text-charcoal dark:text-dark-text">
                General Enquiries
              </p>
              {/* <p className="mt-2 flex gap-4 text-charcoal/75 dark:text-dark-muted">
                <FaEnvelope className="mt-1 shrink-0 text-gold" />
                interiordecor816@gmail.com
              </p> */}
              <a
                href="mailto:interiordecor816@gmail.com?subject=Interior%20Design%20Enquiry"
                className="mt-2 flex gap-4 text-charcoal hover:text-gold dark:text-dark-muted dark:hover:text-gold"
              >
                <FaEnvelope className="mt-1 shrink-0 text-gold" />
                interiordecor816@gmail.com
              </a>
            </div>
            <p className="text-sm text-charcoal/60 dark:text-dark-muted/70">
              We provide premium interior design, false ceilings, PVC wall
              panels, WPC cladding, gypsum board solutions, and complete turnkey
              interior projects across Nagaland and Assam.
            </p>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <LocationCard
            location={locations.nagaland}
            title="Dimapur, Nagaland"
          />
          <LocationCard location={locations.assam} title="Lahorijan, Assam" />
        </div>
      </div>
    </section>
  );
}
