import { FaStar } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { testimonials } from "../data/testimonials.js";

export default function Testimonials() {
  const swiperRef = useRef(null);
  return (
    <section className="bg-ivory py-20 transition-colors duration-300 dark:bg-dark-bg lg:py-28">
      <div className="container-lux">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-kicker">Featured Customer Reviews</p>
          <h2 className="section-title">
            Trusted by homeowners and businesses across Nagaland.
          </h2>
          <p className="mt-3 text-sm text-charcoal/70 dark:text-dark-muted">
            Rated 5 stars on the review app for quality service and premium
            results.
          </p>
        </div>

        <div className="mt-12">
          <Swiper
            modules={[Autoplay, Pagination]}
            loop={true}
            speed={6000} 
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            allowTouchMove={true}
            pagination={{
              clickable: true,
            }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.name} className="pb-12">
                {/* <article className="h-full border border-charcoal/10 bg-white p-7 shadow-sm transition-colors duration-300 dark:border-white/10 dark:bg-dark-card"> */}
                <article className="h-full rounded-2xl border border-gray-200 bg-white p-7 shadow-md transition hover:shadow-lg dark:border-white/10 dark:bg-dark-card">
                  <div className="flex gap-1 text-gold">
                    {Array.from({ length: item.rating }).map((_, index) => (
                      <FaStar key={index} />
                    ))}
                  </div>
                  <p className="mt-6 leading-8 text-charcoal/75 dark:text-dark-muted">
                    “{item.review}”
                  </p>
                  <div className="mt-8 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="grid h-12 w-12 place-items-center rounded-full bg-blue-500 font-bold text-white">
                        {item.name.charAt(0)}
                      </div>

                      <div>
                        <h3 className="font-bold text-charcoal dark:text-dark-text">
                          {item.name}
                        </h3>

                        <p className="text-sm text-charcoal/60 dark:text-dark-muted">
                          {item.date}
                        </p>
                      </div>
                    </div>

                    <FcGoogle size={24} />
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
