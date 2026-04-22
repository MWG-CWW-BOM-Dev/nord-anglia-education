import statsImg1 from "../assets/final-approved/grid1.png";
import statsImg2 from "../assets/final-approved/grid2.png";
import statsImg3 from "../assets/final-approved/Group 162.png";
import stats2stats from "../assets/stats2-stats.png";

export default function StatsSection() {
  return (
    <section className="bg-[#072C63] text-white overflow-hidden rounded-bl-[60px] md:rounded-bl-[100px] mt-[-150px] stats-section">
      <div className="max-w-[100%] mx-auto">

        {/* ===================== ROW 1 ===================== */}
        <div className="stats1-parent">

          {/* LEFT CONTENT */}
          <div className="stats1-child textual-content">
            <h2 className=""> The future isn’t just about what children know — but how they think </h2>
            <p className=""> Today’s children are growing up in a world where information is limitless. </p>
            <p className=""> So the real question isn’t: Can they find the answer?<br />It’s: Can they understand it, challenge it, and use it wisely?</p>
            <p className="">Parents want to know their child will think for themselves, make confident decisions, and thrive - even when there’s no obvious answer.  To have critical thinking skills, great judgement, and the knowledge they’ll thrive in the world they’re living in.</p>
            <p className="">That’s exactly what we develop.</p>
            <button className="stats1-cta"> READ THE REPORT </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="stats1-child relative">
            <img src={statsImg1} alt="student" className="" />
          </div>
        </div>

        {/* ===================== ROW 2 ===================== */}
        <div className="stats2-parent">

          {/* LEFT IMAGE */}
          <div className="stats2-child relative">
            <img src={statsImg2} alt="student" className="boy" />
          </div>

          {/* RIGHT CIRCLES */}
          <div className="stats2-child relative">
            <img src={stats2stats} alt="student" className="stats2stats" />

            {/* <div className="absolute top-[12%] left-[5%] w-[220px] h-[220px] rounded-full bg-[#9BEFF4] text-[#072C63] flex flex-col justify-center items-center text-center z-20">
              <span className="text-6xl font-bold leading-none">+20%</span>
              <span className="text-3xl font-semibold">Curiosity</span>
            </div>

            <div className="absolute top-[28%] left-[28%] w-[340px] h-[340px] rounded-full bg-[#27D9E6] text-[#072C63] flex flex-col justify-center items-center text-center px-10 z-10">
              <span className="text-7xl font-bold leading-none">96%</span>
              <p className="mt-3 text-lg leading-6 font-medium">
                of teachers agreed this approach supports success not just academically, but beyond school.
              </p>
            </div>

            <div className="absolute bottom-[8%] left-[8%] w-[260px] h-[260px] rounded-full bg-[#D9F8FA] text-[#072C63] flex flex-col justify-center items-center text-center px-6 z-30">
              <span className="text-7xl font-bold leading-none">76%</span>
              <p className="mt-2 text-xl leading-6 font-medium">
                of students reported increased independence
              </p>
            </div> */}
          </div>
        </div>

        {/* ===================== ROW 3 ===================== */}
        <div className="stats3-parent">

          {/* LEFT CONTENT */}
          <div className="stats3-child textual-content">
            <h2 className=""> We don’t just teach answers. We teach thinking.</h2>
            <p className=""> Our students learn how to reflect, question, and solve problems independently.<br />Through structured “thinking routines” embedded into daily learning, they:</p>
            <p className=""> • Pause and consider before responding<br />• Explore ideas from multiple perspectives<br />• Explain their thinking clearly</p>
            <p className="">Simple approaches like “See, think, wonder” encourage deeper thinking every day — building curiosity, resilience, and independence.</p>
            <button className="stats3-cta"> KEEP IN TOUCH </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="stats3-child relative">
            <img src={statsImg3} alt="student" className="" />
          </div>
        </div>




      </div>
    </section>
  );
}