import statsImg1 from "../assets/stats/stats1.jpg";
import statsImg2 from "../assets/stats/stats2.jpg";
import statsImg3 from "../assets/stats/stats3.jpg";

export default function StatsSection() {
  return (
    <section className="bg-[#072C63] text-white overflow-hidden rounded-bl-[60px] md:rounded-bl-[100px] mt-[-150px]">
      <div className="max-w-[1450px] mx-auto">

        {/* ── ROW 1: Text left | Image right ── */}
        <div className="grid lg:grid-cols-2 items-center mt-20">

          {/* Left: text */}
          <div className="px-6 sm:px-10 md:px-16 py-16 md:py-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight uppercase">
              Deep Learning<br />For Humans
            </h2>

            <p className="mt-6 text-sm md:text-base leading-7 md:leading-8 text-white/75">
              We combine world-class teaching and curricula with cutting-edge
              technology and modern facilities to create learning experiences like
              no other. We embed 'thinking routines' into daily learning, encouraging
              students to pause, reflect and explain how they have been thinking,
              rather than rushing to an answer. Simple routines like 'See, think,
              wonder' inspire children to think more deeply at every opportunity.
            </p>

            <p className="mt-5 text-sm md:text-base leading-7 md:leading-8 text-white/75">
              That ability – to pause, reflect, adjust, and try again – is known as
              metacognition, and it has a dramatic impact on children's learning and
              development.
            </p>

            <button
              onClick={() =>
                document.getElementById("report")?.scrollIntoView({ behavior: "smooth" })
              }
              className="mt-8 border border-cyan-400 text-cyan-400 px-7 py-3 rounded-full text-sm md:text-base hover:bg-cyan-400 hover:text-[#072C63] transition-all duration-200"
            >
              READ THE REPORT
            </button>
          </div>

          {/* Right: image bleeding to the right edge */}
          <div className="relative flex justify-end items-center pr-0 py-10 md:py-0">
            
            <img
              src={statsImg2}
              alt="student"
              className="w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] md:w-[480px] md:h-[480px] rounded-full object-cover"
              style={{ marginRight: "-40px" }}
            />
          </div>
        </div>

        {/* ── ROW 2: Image left (bleeding) | Stats circles right ── */}
        <div className="grid lg:grid-cols-2 items-center">

          {/* Left: large image bleeding to the left edge */}
          <div className="relative flex justify-start items-center pl-0 py-10 md:py-0">
            
            <img
              src={statsImg1}
              alt="student"
              className="w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] md:w-[520px] md:h-[520px] rounded-full object-cover"
              style={{ marginLeft: "-40px" }}
            />
          </div>

          {/* Right: overlapping stat circles */}
          <div className="relative h-[420px] sm:h-[500px] md:h-[580px] flex items-center">

            {/* LIGHT BLUE CIRCLE – top left */}
            <div
              className="absolute z-20 rounded-full bg-[#B8F2FF] text-[#072C63] flex flex-col justify-center items-center text-center"
              style={{
                width: "clamp(130px, 22vw, 210px)",
                height: "clamp(130px, 22vw, 210px)",
                top: "10%",
                left: "0%",
              }}
            >
              <span className="text-4xl sm:text-5xl md:text-6xl font-bold leading-none">+20%</span>
              <span className="text-base sm:text-xl md:text-2xl font-semibold mt-1">Curiosity</span>
            </div>

            {/* YELLOW CIRCLE – center / overlapping */}
            <div
              className="absolute z-10 rounded-full bg-[#FFD400] text-[#072C63] flex flex-col justify-center items-center text-center px-5"
              style={{
                width: "clamp(180px, 30vw, 280px)",
                height: "clamp(180px, 30vw, 280px)",
                top: "20%",
                left: "28%",
              }}
            >
              <span className="text-5xl sm:text-6xl md:text-7xl font-bold leading-none">96%</span>
              <p className="text-[10px] sm:text-xs md:text-sm leading-4 sm:leading-5 mt-2 font-medium">
                By the end of the research,<br />
                up to 96% of teachers<br />
                agreed that this way of<br />
                teaching and learning<br />
                helps students succeed -<br />
                not just academically,<br />
                beyond school.
              </p>
            </div>

            {/* RED/PINK CIRCLE – bottom left, overlapping both */}
            <div
              className="absolute z-30 rounded-full bg-[#FF3E73] text-white flex flex-col justify-center items-center text-center px-4"
              style={{
                width: "clamp(160px, 26vw, 250px)",
                height: "clamp(160px, 26vw, 250px)",
                bottom: "8%",
                left: "2%",
              }}
            >
              <span className="text-sm sm:text-base md:text-lg font-medium">At least</span>
              <span className="text-5xl sm:text-6xl md:text-7xl font-bold leading-none">40%</span>
              <span className="text-sm sm:text-lg md:text-xl font-semibold leading-tight mt-1">
                growth across<br />all skills
              </span>
            </div>

          </div>
        </div>

        {/* ── ROW 3: Text left | Image right (bleeding) ── */}
        <div className="grid lg:grid-cols-2 items-center">

          {/* Left: text */}
          <div className="px-6 sm:px-10 md:px-16 py-16 md:py-24">
            <p className="text-sm md:text-base leading-7 md:leading-8 text-white/75">
              In the classroom, questions became more thoughtful, explanations became
              clearer, and there was a greater determination to keep going when things
              felt difficult. Perhaps most importantly of all, children reported feeling
              more confident when navigating uncertainty.
            </p>

            <p className="mt-5 text-sm md:text-base leading-7 md:leading-8 text-white/75">
              The lesson is clear. Children still need to learn how to think. Not just
              to succeed in exams, and not just to keep up with change. But to face
              uncertainty with confidence, to make decisions without shortcuts, and to
              believe they can work things out, even when the answer isn't immediate.
              These are lifelong skills we're helping students to develop. And they're
              the skills AI can't match.
            </p>

            <button
              onClick={() =>
                document.getElementById("touch")?.scrollIntoView({ behavior: "smooth" })
              }
              className="mt-8 border border-cyan-400 text-cyan-400 px-7 py-3 rounded-full text-sm md:text-base hover:bg-cyan-400 hover:text-[#072C63] transition-all duration-200"
            >
              KEEP IN TOUCH
            </button>
          </div>

          {/* Right: image bleeding right */}
          <div className="relative flex justify-end items-center pr-0 py-10 md:py-0">
            <img
              src={statsImg3}
              alt="student"
              className="w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] md:w-[480px] md:h-[480px] rounded-full object-cover"
              style={{ marginRight: "-40px" }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}