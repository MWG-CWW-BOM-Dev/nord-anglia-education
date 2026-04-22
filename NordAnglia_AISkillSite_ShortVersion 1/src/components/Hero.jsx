import heroImg from "../assets/final-approved/Group 158.png";
import heroImgMobile from "../assets/final-approved/hero-mobile.png";
import Circle from "../assets/final-approved/lines-pattern.png";
import stars from "../assets/hero-stars.png";

export default function Hero() {
  return (
    <section className="bg-[#2fd6e7]  overflow-hidden">
      <div className="max-w-[2560px] mx-auto">

        {/* TOP TITLE */}
        <div className="px-4 sm:px-6 md:px-8 lg:px-10 pt-100 relative z-20 hero-section">
          <img src={Circle} alt="Pattern" className="header-pattern" />
          <img src={stars} alt="Pattern" className="header-stars-pattern" />
          <h1 className="hero-title text-center">SKILLS <span className="hero-title-ai">AI</span><span className="hero-title-cant-match"> CAN’T MATCH</span></h1>
        </div>

        {/* IMAGE SECTION */}
        <div className="bg-[#2fd6e7] rounded-br-[120px] overflow-hidden -mt-8 ">

          <div className="relative">

            <img
              src={heroImg}
              alt="Student"
              className="w-full object-cover desktop-only"
            />
            <img
              src={heroImgMobile}
              alt="Student"
              className="w-full object-cover mobile-only"
            />

            {/* BOTTOM CONTENT */}
            <div className="bg-[#2fd6e7]/95 backdrop-blur-sm px-6 sm:px-10 md:px-14 lg:px-20 py-8 md:py-10 lg:py-12 rounded-br-[120px] absolute z-0 bottom-[50px] w-[90%] hero-bottom-content">

              {/* Heading */}
              <h3 className="text-white font-light uppercase tracking-wide text-[20px] sm:text-[28px] md:text-[38px] lg:text-[30px] leading-[1.15] mb-8">
                IN AN AI WORLD, HOW WILL YOUR CHILD LEARN TO THINK?
              </h3>

              {/* Content Grid */}
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12 text-[#08306a] text-[15px] md:text-[18px] leading-8">

                {/* Left Text */}
                <p>
                  Artificial intelligence is transforming how we learn, work, and
                  solve problems. Answers are faster, easier, and everywhere. But
                  when answers are instant, something else matters more than ever:
                  your child’s ability to think independently, question deeply,
                  and adapt with confidence.
                  <br /><br />
                  At Nord Anglia Education, this isn’t just theory. It’s what we
                  know works.
                </p>

                {/* Right Text */}
                <p>
                  We partnered with{" "}
                  <span className="font-bold">Boston College</span> on a{" "}
                  <span className="font-bold">
                    two-year global research project involving over 12,000 of our students
                  </span>{" "}
                  to understand how children develop the skills they need for the future.
                  <br /><br />
                  The results showed clear, measurable growth in the skills AI
                  can’t replicate.{" "}
                  <a
                    href="#"
                    className="font-bold text-blue-700 underline hover:text-blue-900 transition"
                  >
                    Find out more here
                  </a>
                </p>
              </div>

              {/* Button */}
              <div className="mt-10 enquire-now">
                <button className="bg-[#082c63] text-white px-10 md:px-14 py-4 rounded-full text-sm md:text-base font-semibold tracking-wide hover:scale-105 transition duration-300">
                  ENQUIRE NOW
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
