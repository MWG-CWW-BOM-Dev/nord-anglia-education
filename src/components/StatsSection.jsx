import statsImg1 from "../assets/stats/stats1.jpg";
import statsImg2 from "../assets/stats/stats2.jpg";
import statsImg3 from "../assets/stats/stats3.jpg";

export default function StatsSection() {
  return (
    <section className="bg-[#072C63] text-white overflow-hidden rounded-bl-[60px] md:rounded-bl-[100px] py-0">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-y-14 sm:gap-y-20 gap-x-12 items-center">

          {/* LEFT TOP CONTENT */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight uppercase">
              Deep Learning <br /> For Humans
            </h2>

            <p className="mt-6 text-sm md:text-base leading-7 md:leading-8 text-white/80">
              We combine world-class teaching and curricula with innovative
              technology and modern facilities to create learning experiences like no
              other. Through engaging lessons and meaningful challenges, students are
              encouraged to explore ideas, ask questions, and think deeply every day.
            </p>

            <p className="mt-5 text-sm md:text-base leading-7 md:leading-8 text-white/80">
              This ability to pause, reflect, adjust, and try again is known as
              metacognition. It helps children understand how they learn best,
              strengthens problem-solving skills, and builds the confidence needed to
              succeed both inside and outside the classroom.
            </p>

            <button
              onClick={() =>
                document.getElementById("enquiry").scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="mt-8 border border-cyan-400 text-cyan-400 px-6 sm:px-8 py-3 rounded-full text-sm md:text-base hover:bg-cyan-400 hover:text-[#072C63] transition"
            >
              ENQUIRE NOW
            </button>
          </div>

          {/* RIGHT TOP IMAGE */}
          <div className="flex justify-center">
            <img
              src={statsImg2}
              alt="student"
              className="w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] md:w-[460px] md:h-[460px] rounded-full object-cover"
            />
          </div>

          {/* LEFT BOTTOM IMAGE */}
          <div className="flex justify-center">
            <img
              src={statsImg1}
              alt="student"
              className="w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] md:w-[520px] md:h-[520px] rounded-full object-cover"
            />
          </div>

          {/* RIGHT STATS CIRCLES */}
          <div className="relative h-[420px] sm:h-[500px] md:h-[550px] w-full flex justify-center items-center overflow-hidden">

            {/* BLUE CIRCLE */}
            <div className="absolute top-[20px] left-[20px] sm:left-[60px] md:left-[80px] w-[150px] h-[150px] sm:w-[190px] sm:h-[190px] md:w-[210px] md:h-[210px] rounded-full bg-[#B8F2FF] text-[#072C63] flex flex-col justify-center items-center text-center z-20">
              <span className="text-3xl sm:text-5xl md:text-6xl font-bold leading-none">+20%</span>
              <span className="text-lg sm:text-2xl md:text-3xl font-medium mt-1">Curiosity</span>
            </div>

            {/* YELLOW CIRCLE */}
            <div className="absolute top-[110px] left-[120px] sm:left-[190px] md:top-[130px] md:left-[230px] w-[210px] h-[210px] sm:w-[250px] sm:h-[250px] md:w-[280px] md:h-[280px] rounded-full bg-[#FFD400] text-[#072C63] flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-8 z-10">
              <span className="text-4xl sm:text-6xl md:text-7xl font-bold leading-none">96%</span>

              <p className="text-[10px] sm:text-[13px] md:text-[16px] leading-4 sm:leading-5 mt-2 md:mt-3 font-medium">
                By the end of the research,
                <br />
                up to 96% of teachers
                <br />
                agreed that this way of
                <br />
                teaching and learning
                <br />
                helps students succeed -
                <br />
                not just academically,
                <br />
                beyond school.
              </p>
            </div>

            {/* PINK CIRCLE */}
            <div className="absolute top-[250px] left-[10px] sm:left-[20px] md:top-[270px] md:left-[30px] w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[250px] md:h-[250px] rounded-full bg-[#FF3E73] text-white flex flex-col justify-center items-center text-center px-4 sm:px-5 z-30">
              <span className="text-base sm:text-xl md:text-2xl">At least</span>

              <span className="text-4xl sm:text-6xl md:text-7xl font-bold leading-none mt-1">40%</span>

              <span className="text-lg sm:text-2xl md:text-3xl font-medium leading-tight mt-1">
                growth across
                <br />
                all skills
              </span>
            </div>

          </div>

          {/* LEFT TEXT */}
          <div>
            <p className="mt-6 text-sm md:text-base leading-7 md:leading-8 text-white/80">
              In the classroom, questions became more thoughtful, explanations became
              clearer, and students showed greater determination when faced with
              challenges. They learned to pause, reflect, and explore different ways
              of solving problems, helping them build confidence and independence in
              their everyday learning journey.
            </p>

            <p className="mt-5 text-sm md:text-base leading-7 md:leading-8 text-white/80">
              The lesson is clear: children still need to learn how to think, not
              just what to think. By developing curiosity, resilience, and
              self-awareness, students gain lifelong skills that prepare them to
              adapt, make better decisions, and succeed in a rapidly changing world.
            </p>

            <button
              onClick={() =>
                document.getElementById("enquiry").scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="mt-8 border border-cyan-400 text-cyan-400 px-6 sm:px-8 py-3 rounded-full text-sm md:text-base hover:bg-cyan-400 hover:text-[#072C63] transition"
            >
              ENQUIRE NOW
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <img
              src={statsImg3}
              alt="student"
              className="w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] md:w-[460px] md:h-[460px] rounded-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}