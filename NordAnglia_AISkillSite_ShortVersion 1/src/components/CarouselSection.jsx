import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

import card1 from "../assets/final-approved/BISB_Bratislava_Oct  2024_342.png";
import card2 from "../assets/final-approved/OIC_Oxford_Sept 2025_023.png";
import card3 from "../assets/final-approved/Image_NAISAK_Al Khor_2024_072.png";
import card4 from "../assets/final-approved/ICS_Madrid_Sept_ 2025 (36).png";

export default function CarouselSection() {
  const cards = [
    { img: card1, title: "+20% curiosity" },
    { img: card2, title: "+21% critical thinking" },
    { img: card3, title: "+15% collaboration, commitment and compassion" },
    { img: card4, title: "76% of students increased independence" },
  ];

  return (
    <section className="bg-[#0D3155] pt-16 pb-8 sm:pt-20 lg:pt-24 relative overflow-hidden ml-[50px]">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between mb-10 sm:mb-14 ">
          <div>
            <h2 className="text-white text-[26px] sm:text-[34px] lg:text-[38px] font-light uppercase tracking-wide leading-tight">
              PROVEN IMPACT IN THE CLASSROOM
            </h2>

            <p className="text-white mt-4 text-xs sm:text-sm tracking-wide max-w-[760px]">
              Our research with Boston College showed measurable improvements in
              the skills that matter most:
            </p>
          </div>

          <div className="flex gap-3 sm:mt-3 sm:mr-2">
            <button
              type="button"
              aria-label="Previous classroom impact card"
              className="prevBtn w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#D8E4E9] flex items-center justify-center hover:scale-105 transition"
            >
              <ArrowLeft size={18} className="text-[#4D6472]" />
            </button>

            <button
              type="button"
              aria-label="Next classroom impact card"
              className="nextBtn w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#31D5DF] flex items-center justify-center hover:scale-105 transition"
            >
              <ArrowRight size={18} className="text-[#0D3155]" />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".prevBtn",
            nextEl: ".nextBtn",
          }}
          loop={true}
          spaceBetween={22}
          slidesPerView={1.12}
          breakpoints={{
            640: { slidesPerView: 2.05, spaceBetween: 24 },
            1024: { slidesPerView: 3.05, spaceBetween: 26 },
            1280: { slidesPerView: 4.05, spaceBetween: 28 },
          }}
        >
          {[...cards, ...cards, ...cards].map((card, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white rounded-md overflow-hidden shadow-sm">
                <img
                  src={card.img}
                  alt=""
                  className="w-full h-[265px] sm:h-[265px] lg:h-[265px] object-cover"
                />

                <div className="h-[96px] sm:h-[112px] lg:h-[128px] px-5 flex items-center justify-center text-center">
                  <h3 className="text-black text-[17px] sm:text-[20px] lg:text-[22px] font-semibold leading-tight">
                    {card.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
