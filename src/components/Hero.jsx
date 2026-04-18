import heroImg from "../assets/hero.jpg";

export default function Hero() {
  return (
    <section className="pt-20 bg-[#28D8E8] overflow-hidden">
      <div className="max-w-[1600px] mx-auto">

        {/* Main Hero Box */}
        <div className="bg-[#28D8E8] rounded-br-[120px] px-4 md:px-8 lg:px-12 pt-6 pb-10 relative">

          {/* Top Heading */}
          <div className="relative z-10">
            <h1 className="text-[#082C63] font-bold leading-none text-[70px] sm:text-[90px] md:text-[140px] lg:text-[180px]">
              Skills
            </h1>

            <h2 className="absolute top-5 sm:top-8 md:top-10 lg:top-14 left-[145px] sm:left-[190px] md:left-[310px] lg:left-[430px] text-white font-semibold leading-none text-[32px] sm:text-[46px] md:text-[72px] lg:text-[100px]">
              AI CAN’T MATCH
            </h2>
          </div>

          {/* Hero Image */}
          <div className="-mt-3 relative z-0">
            <img
              src={heroImg}
              alt="Student"
              className="w-full h-[130px] sm:h-[210px] md:h-[60px] lg:h-[760px] object-cover"
            />

            {/* Capsule Text */}
            <div className="absolute inset-0 flex items-center justify-center px-4">
              <div className="border-2 border-white rounded-full px-8 sm:px-14 md:px-24 py-3 md:py-5 text-white font-semibold text-[24px] sm:text-[36px] md:text-[58px] lg:text-[72px] backdrop-blur-[2px]">
                Think unprompted
              </div>
            </div>
          </div>

          {/* Bottom Text */}
          <div className="grid md:grid-cols-2 gap-8 pt-8 px-2 md:px-8 text-[#0B2D63]">
            <p className="text-xs sm:text-sm md:text-base leading-6">
              We know AI is transforming the world, enabling us to get answers
              faster than ever. But this raises some big questions. When answers
              are everywhere, will children still be able to think for
              themselves? Will they compete with AI, or direct it? What will
              their role be?
            </p>

            <p className="text-xs sm:text-sm md:text-base leading-6">
              At Nord Anglia, we pride ourselves on teaching skills AI can’t
              match. By making your child more conscious of the way they think,
              learn and solve problems, we help them develop the human qualities
              they will need in the future.
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center pt-8">
            <button
              onClick={() =>
                document.getElementById("enquiry").scrollIntoView({
                  behavior: "smooth",
                })
              }

              className="bg-[#0B2D63] text-white px-10 py-3 rounded-full text-xs md:text-sm font-semibold tracking-wide hover:scale-105 transition duration-300">

              ENQUIRE NOW
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}