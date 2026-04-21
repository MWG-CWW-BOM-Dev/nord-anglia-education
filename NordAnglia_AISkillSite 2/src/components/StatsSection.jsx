import statsImg1 from "../assets/final-approved/Group 160.png";
import statsImg2 from "../assets/final-approved/Group 161.png";
import statsImg3 from "../assets/final-approved/Group 162.png";

export default function StatsSection() {
  return (
    <section className="bg-[#072C63] text-white overflow-hidden rounded-bl-[60px] md:rounded-bl-[100px] mt-[-150px]">
      <div className="max-w-[1400px] mx-auto">

        {/* ===================== ROW 1 ===================== */}
        <div className="grid lg:grid-cols-2 items-center min-h-screen mt-20">

          {/* LEFT CONTENT */}
          <div className="px-8 sm:px-12 md:px-20 lg:px-24 py-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase leading-tight tracking-tight">
              Deep Learning <br />
              For Humans
            </h2>

            <p className="mt-8 text-sm sm:text-base md:text-lg leading-8 text-white/80 max-w-[620px]">
              We combine world-class teaching and curricula with cutting-edge
              technology and modern facilities to create learning experiences
              like no other. We embed thinking routines into daily learning,
              encouraging students to pause, reflect and explain how they have
              been thinking.
            </p>

            <p className="mt-6 text-sm sm:text-base md:text-lg leading-8 text-white/80 max-w-[620px]">
              That ability — to pause, reflect, adjust and try again — is known
              as metacognition, and it has a dramatic impact on children’s
              learning and development.
            </p>

            <button className="mt-10 border border-cyan-400 text-cyan-400 px-8 py-4 rounded-full font-medium hover:bg-cyan-400 hover:text-[#072C63] transition-all duration-300">
              READ THE REPORT
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative left-50 flex justify-end items-center">
            <img
              src={statsImg1}
              alt="student"
              className="w-[340px] sm:w-[430px] md:w-[560px] lg:w-[800px] xl:w-[720px] rounded-full object-cover "
            />
          </div>
        </div>

        {/* ===================== ROW 2 ===================== */}
        <div className="grid lg:grid-cols-2 items-center min-h-screen">

          {/* LEFT IMAGE */}
          <div className="relative flex justify-start items-center">
            <img
              src={statsImg2}
              alt="student"
              className="w-[360px] sm:w-[480px] md:w-[620px] lg:w-[720px] xl:w-[800px] rounded-full object-cover ml-[-150px]"
            />
          </div>

          {/* RIGHT CIRCLES */}
          <div className="relative h-[720px] items-center">

            {/* +20 */}
            <div className="absolute top-[12%] left-[5%] w-[220px] h-[220px] rounded-full bg-[#9BEFF4] text-[#072C63] flex flex-col justify-center items-center text-center z-20">
              <span className="text-6xl font-bold leading-none">+20%</span>
              <span className="text-3xl font-semibold">Curiosity</span>
            </div>

            {/* 96 */}
            <div className="absolute top-[28%] left-[28%] w-[340px] h-[340px] rounded-full bg-[#27D9E6] text-[#072C63] flex flex-col justify-center items-center text-center px-10 z-10">
              <span className="text-7xl font-bold leading-none">96%</span>
              <p className="mt-3 text-lg leading-6 font-medium">
                of teachers agreed this approach supports success not just academically, but beyond school.
              </p>
            </div>

            {/* 76 */}
            <div className="absolute bottom-[8%] left-[8%] w-[260px] h-[260px] rounded-full bg-[#D9F8FA] text-[#072C63] flex flex-col justify-center items-center text-center px-6 z-30">
              <span className="text-7xl font-bold leading-none">76%</span>
              <p className="mt-2 text-xl leading-6 font-medium">
                of students reported increased independence
              </p>
            </div>
          </div>
        </div>

        {/* ===================== ROW 3 ===================== */}
        <div className="grid lg:grid-cols-2 items-center min-h-screen">

          {/* LEFT TEXT */}
          <div className="px-8 sm:px-12 md:px-20 lg:px-24 py-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase leading-tight max-w-[650px]">
              We Don’t Just Teach Answers. We Teach Thinking.
            </h2>

            <p className="mt-8 text-sm sm:text-base md:text-lg leading-8 text-white/80 max-w-[620px]">
              Our students learn how to reflect, question, and solve problems
              independently. Through structured thinking routines embedded into
              daily learning, they build curiosity, resilience and confidence.
            </p>

            <p className="mt-6 text-sm sm:text-base md:text-lg leading-8 text-white/80 max-w-[620px]">
              These are lifelong skills that AI cannot replace — the ability to
              think critically, communicate clearly and adapt to uncertainty.
            </p>

            <button className="mt-10 border border-cyan-400 text-cyan-400 px-8 py-4 rounded-full font-medium hover:bg-cyan-400 hover:text-[#072C63] transition-all duration-300">
              KEEP IN TOUCH
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-end items-center">
            <img
              src={statsImg3}
              alt="student"
              className="w-[340px] sm:w-[430px] md:w-[560px] lg:w-[650px] xl:w-[720px] rounded-full object-cover mr-[-120px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}