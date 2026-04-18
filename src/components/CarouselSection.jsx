import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

import card1 from "../assets/cards/card1.jpg";
import card2 from "../assets/cards/card2.jpg";
import card3 from "../assets/cards/card3.jpg";
import card4 from "../assets/cards/card4.jpg";
import card5 from "../assets/cards/card5.jpg";

export default function CarouselSection() {
  const cards = [
    { img: card1, title: "+20% curiosity" },
    { img: card2, title: "+21% critical thinking" },
    { img: card3, title: "+15% collaboration, commitment and compassion" },
    { img: card4, title: "76% of students increased independence" },
    { img: card5, title: "+32% confidence" },
  ];

  return (
    <section className="bg-[#F4F0E8] py-14 sm:py-20 relative overflow-hidden">

      {/* Dot Pattern */}
      <div className="absolute top-8 sm:top-10 left-0 w-[180px] sm:w-[330px] h-[160px] sm:h-[250px] bg-[radial-gradient(#22D8E8_2px,transparent_2px)] [background-size:16px_16px]"></div>

      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8">

        {/* Main Box */}
        <div className="bg-[#18BFD1] px-4 sm:px-6 md:px-12 py-10 sm:py-14 relative z-10">

          {/* Heading + Arrows */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 sm:gap-8">

            {/* Left Text */}
            <div className="max-w-[850px]">
              <h2 className="text-white text-2xl sm:text-3xl md:text-5xl font-light uppercase tracking-wide leading-tight">
                Think Unprompted
              </h2>

              <p className="text-white/95 mt-4 sm:mt-5 text-sm sm:text-base md:text-lg leading-7 sm:leading-8 max-w-[760px]">
                We partnered with Boston College to measure that impact. After
                two years, our research showed that children who used thinking
                routines demonstrated measurable growth in all these areas.
              </p>
            </div>

            {/* Arrows */}
            <div className="flex gap-3 lg:mb-2 shrink-0">

              {/* PREV */}
              <button className="prevBtn w-12 h-12 sm:w-[62px] sm:h-[62px] rounded-full bg-[#D8DEE3] flex items-center justify-center hover:scale-105 transition duration-300">
                <ArrowLeft
                  size={22}
                  strokeWidth={1.8}
                  className="text-[#6B7280]"
                />
              </button>

              {/* NEXT */}
              <button className="nextBtn w-12 h-12 sm:w-[62px] sm:h-[62px] rounded-full bg-[#39E7EF] flex items-center justify-center hover:scale-105 transition duration-300">
                <ArrowRight
                  size={22}
                  strokeWidth={1.8}
                  className="text-[#0B1E4F]"
                />
              </button>

            </div>

          </div>

          {/* Slider */}
          <div className="mt-10 sm:mt-14">
            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: ".prevBtn",
                nextEl: ".nextBtn",
              }}
              spaceBetween={18}
              slidesPerView={1.1}
              breakpoints={{
                640: { slidesPerView: 1.4, spaceBetween: 20 },
                768: { slidesPerView: 2.2, spaceBetween: 22 },
                1024: { slidesPerView: 3.2, spaceBetween: 25 },
                1400: { slidesPerView: 4.1, spaceBetween: 25 },
              }}
            >
              {cards.map((card, i) => (
                <SwiperSlide key={i}>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-md">

                    <img
                      src={card.img}
                      alt="card"
                      className="w-full h-[220px] sm:h-[260px] md:h-[300px] object-cover"
                    />

                    <div className="px-4 sm:px-6 py-6 sm:py-8 min-h-[130px] sm:min-h-[150px] flex items-start justify-center text-center">
                      <h3 className="text-[#111] text-lg sm:text-xl md:text-2xl font-semibold leading-tight">
                        {card.title}
                      </h3>
                    </div>

                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Bottom Button */}
          <div className="mt-10 sm:mt-12">
            <button
              onClick={() =>
                document.getElementById("report").scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="bg-[#0B1E4F] text-white px-7 sm:px-10 py-3 sm:py-4 rounded-full text-xs sm:text-sm font-semibold tracking-wide hover:scale-105 transition"
            >
              READ THE REPORT
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}