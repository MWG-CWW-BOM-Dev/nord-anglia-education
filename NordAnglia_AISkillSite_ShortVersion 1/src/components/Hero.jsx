import heroImg from "../assets/hero.jpg";

export default function Hero() {
  return (
    <section className="bg-[#2fd6e7] pt-20 overflow-hidden rounded-br-[120px]">
      <div className="max-w-[1900px] mx-auto" >

        {/* Main Hero Box */}
        <div className="bg-[#28D8E8] rounded-br-[120px] px-4 md:px-8 lg:px-12 pt-6 pb-10 relative ">

          {/* Top Heading */}
          <div className="relative z-20 leading-none " >

            {/* Skills */}
            <span className="block text-[#082C63] font-bold text-[70px] sm:text-[90px] md:text-[140px] lg:text-[180px]">
              Skills
            </span>

            {/* AI CAN’T MATCH */}
            <span className="absolute left-[180px] sm:left-[220px] md:left-[320px] lg:left-[480px] top-[40px] sm:top-[55px] md:top-[88px] lg:top-[100px] text-white font-semibold text-[32px] sm:text-[46px] md:text-[72px] lg:text-[100px] whitespace-nowrap z-30">
              AI CAN’T MATCH
            </span>

          </div>

          {/* Hero Image */}
          <div className="-mt-4 relative z-10">
            <img
              src={heroImg}
              alt="Student"
              className="w-full h-[180px] sm:h-[320px] md:h-[500px] lg:h-[760px] object-cover rounded-tl-[80px]"
            />

            {/* Capsule Text */}
            <div className="absolute inset-0 flex items-center justify-center px-4">
              <div className="border-2 border-white rounded-full px-8 sm:px-14 md:px-24 py-3 md:py-5 text-white font-semibold text-[24px] sm:text-[36px] md:text-[58px] lg:text-[72px] backdrop-blur-[2px]">
                Think unprompted
              </div>
            </div>
          </div>

          {/* Bottom Content */}
          <div className="bg-[#2fd6e7] px-6 sm:px-10 md:px-16 lg:px-24 py-10 lg:py-14 rounded-br-[120px]">

            {/* Title */}
            <h3 className="text-white text-start font-light uppercase tracking-wide text-[20px] sm:text-[28px] md:text-[38px] lg:text-[36px] mb-8">
              IN AN AI WORLD, HOW WILL YOUR CHILD LEARN TO THINK?
            </h3>

            {/* Paragraphs */}
            <div className="grid md:grid-cols-2 gap-8 text-[#08306a] text-sm md:text-base leading-7 max-w-[1300px] mx-auto">
              <p>
                We know AI is transforming the world, enabling us to get answers
                faster than ever. But this raises some big questions. When answers are
                everywhere, will children still be able to think for themselves? Will
                they compete with AI, or direct it? What will their role be?
              </p>

              <p>
                At Nord Anglia, we pride ourselves on teaching skills AI can’t
                match. By making your child more conscious of the way they
                think, learn and solve problems, we help them develop the human
                qualities they will need in the future.
              </p>
            </div>

            {/* Button */}
            <div className="mt-10 flex justify-start md:justify-self-start">
              <button
                onClick={() =>
                  document.getElementById("enquiry")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="bg-[#082c63] text-white px-8 md:px-10 py-3 rounded-full text-xs md:text-sm font-semibold tracking-wide hover:scale-105 transition duration-300"
              >
                ENQUIRE NOW
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
} 