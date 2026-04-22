import heroImg from "../assets/final-approved/Group 158.png";
import heroImgMobile from "../assets/final-approved/hero-mobile.png";
import Circle from "../assets/final-approved/lines-pattern.png";
import stars from "../assets/hero-stars.png";
import logo from "../assets/logo.png";
import hamburger from "../assets/hamburger.png";

export default function Hero() {
  return (
    <section className="bg-[#30CDD6]  overflow-hidden">
      <div className="max-w-[1280px] mx-auto relative">

        <header>
          <div className="flex items-center justify-between">
            <img src={logo} alt="Logo" />
            <button className="bg-[#082c63] text-white px-10 md:px-14 py-4 rounded-full text-sm md:text-base font-medium tracking-wide transition duration-300"
              onClick={() =>
                document
                  .getElementById("enquiry")
                  ?.scrollIntoView({ behavior: "smooth" })
              }>FIND A SCHOOL</button>
          </div>

        </header>

        {/* TOP TITLE */}
        <div className="px-4 sm:px-6 md:px-8 lg:px-10 pt-100 relative z-20 hero-section">
          <img src={Circle} alt="Pattern" className="header-pattern" />
          <img src={stars} alt="Pattern" className="header-stars-pattern" />
          <h1 className="hero-title text-center desktop-only">SKILLS <span className="hero-title-ai">AI CAN’T MATCH</span></h1>
          <h1 className="hero-title text-center mobile-only">SKILLS <span className="hero-title-ai">AI <span className="hero-title-ai-mobile">CAN’T MATCH</span></span></h1>
        </div>

        {/* IMAGE SECTION */}
        <div className="bg-[#30CDD6] rounded-br-[120px] overflow-hidden -mt-8 ">

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
            <div className="bg-[#30CDD6] rounded-br-[120px] absolute z-0 bottom-[50px] w-[90%] hero-bottom-content">

              {/* Heading */}
              <h3 className="text-white font-light uppercase tracking-wide text-[20px] sm:text-[28px] md:text-[38px] lg:text-[30px] leading-[1.15] mb-8">
                In a world full of AI answers, will your child learn to think?
              </h3>

              {/* Content Grid */}
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12 text-[#08306a] text-[15px] md:text-[18px] leading-8">

                {/* Left Text */}
                <p>Artificial intelligence is transforming how we learn, work, and solve problems. Answers are faster, easier, and everywhere.<br />
                  But when answers are instant, something else matters more than ever: your child’s ability to think independently, question deeply, and adapt with confidence.<br /><br />
                  At Nord Anglia Education, this isn’t just theory. It’s what we know works.
                </p>

                {/* Right Text */}
                <p>
                  We partnered with <strong>Boston College</strong> on a <strong> two-year global research project involving over 12,000 of our students</strong> to understand how children develop the skills they need for the future.
                  <br /><br />
                  The results showed clear, measurable growth in the skills AI
                  can’t replicate. <a href="#" className="font-bold text-[#113052] underline hover:text-[#FFFFFF] transition" > Find out more here </a>
                </p>
              </div>

              {/* Button */}
              <div className="mt-10 enquire-now">
                <button
                  onClick={() =>
                    document
                      .getElementById("enquiry")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="bg-[#082c63] text-white px-10 md:px-14 py-4 rounded-full text-sm md:text-base font-semibold tracking-wide transition duration-300">
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
