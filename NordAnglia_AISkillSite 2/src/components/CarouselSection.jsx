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
    <section 
      className="bg-[#1AAFC0] py-16 relative overflow-hidden carousel-section"
    >
      {/* DOT DESIGN TOP LEFT */}
      <div className="absolute top-0 left-0 w-[360px] h-[70px]" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 relative z-10">
        {/* HEADING + ARROWS */}
        <div className="flex justify-between items-start mb-10">
          {/* LEFT TEXT */}
          <div>
            <h2 className="text-white text-[42px] font-light uppercase tracking-wide leading-tight">
              PROVEN IMPACT IN THE CLASSROOM
            </h2>

            <p className="text-white mt-3 text-sm tracking-wide">
              Our research with Boston College showed measurable improvements in
              the skills that matter most
            </p>
          </div>

          {/* RIGHT BUTTONS */}
          <div className="flex gap-3 mt-4">
            {/* PREV */}
            <button className="prevBtn w-[46px] h-[46px] rounded-full bg-[#C7D0D6] flex items-center justify-center hover:scale-105 transition">
              <ArrowLeft size={20} className="text-[#6B7280]" />
            </button>

            {/* NEXT */}
            <button className="nextBtn w-[46px] h-[46px] rounded-full bg-[#2FE4F3] flex items-center justify-center hover:scale-105 transition">
              <ArrowRight size={20} className="text-[#0B1E4F]" />
            </button>
          </div>
        </div>

        {/* SLIDER */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".prevBtn",
            nextEl: ".nextBtn",
          }}
          loop={true}
          spaceBetween={18}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 2.1 },
            1024: { slidesPerView: 3.2 },
            1400: { slidesPerView: 4.2 },
          }}
        >
          {[...cards, ...cards, ...cards].map((card, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white rounded-xl overflow-hidden shadow-md">
                <img
                  src={card.img}
                  alt="card"
                  className="w-full h-[250px] object-cover"
                />

                <div className="h-[120px] px-6 flex items-center justify-center text-center">
                  <h3 className="text-black text-[20px] font-semibold leading-tight">
                    {card.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* BUTTON */}
        {/* <div className="mt-12">
          <button
           onClick={() =>
                    document
                      .getElementById("enquiry")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
           className="bg-[#0B1E4F] text-white px-10 py-4 rounded-full font-semibold tracking-wide hover:scale-105 transition">
            FOUND OUT MORE
          </button>
        </div> */}
      </div>
    </section>
  );
}