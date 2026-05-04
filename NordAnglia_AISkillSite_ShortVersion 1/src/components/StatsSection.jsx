import statsImg1 from "../assets/final-approved/grid1.png";
import statsImg2 from "../assets/final-approved/grid2.png";
import statsImg3 from "../assets/final-approved/Group 162.png";
import stats2stats from "../assets/stats2-stats.png";
import provenimpactimg from "../assets/final-approved/provenimpactimg.png";
import provenimpactimgmob from "../assets/final-approved/provenimpactimg_mob.png";

export default function StatsSection() {
  return (
    <>
    <section className="bg-[#113052] text-white overflow-hidden rounded-bl-[60px] md:rounded-bl-[100px] mt-[-150px] stats-section">
      <div className="max-w-[1280px] mx-auto">

        {/* ===================== ROW 1 ===================== */}
        <div className="stats1-parent">

          {/* LEFT CONTENT */}
          <div className="stats1-child textual-content">
            <h2 className=""> The future isn’t just about what children know - <br className="brremove"/>but how they think </h2>
            <p className=""> Today’s children are growing up in a world where<br className="brremove"/> information is limitless. </p>
            <p className=""> So the real question isn’t: Can they find the answer?<br />It’s: Can they understand it, challenge it, and use it wisely?</p>
            <p className="">Parents want to know their child will think for themselves, make confident decisions, and thrive - even when there’s no obvious answer. To have critical thinking skills, great judgement, and the knowledge they’ll thrive in the world they’re living in.</p>
            <p className="">That’s exactly what we develop at Nord Anglia schools.</p>
         
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
           <div className="stats2-child textual-content">
            <h2 className="">We don’t just teach<br className="brremove"/> answers. We teach<br className="brremove"/> thinking.</h2>
            <p className=""> Our students learn how to reflect, question, and solve<br className="brremove"/> problems independently. </p>
            <p className=""> Through structured “thinking routines” embedded into<br className="brremove"/> daily learning, they:</p>
            <p className="">• Pause and consider before responding<br></br>• Explore ideas from multiple perspectivesbr<br></br>• Explain their thinking clearly</p>
            <p className="">Simple approaches like “See, think, wonder” encourage<br className="brremove"/> deeper thinking every day - building curiosity, resilience,<br className="brremove"/> and independence.</p>
          
          </div>

        </div>

       <div className="sectionproven">
      <h3 className="">
                Proven impact in the classroom
              </h3>

              <p>Our research with Boston College showed measurable improvements in the skills that matter most:</p>

              <div className="provenimg">
         <img src={provenimpactimg} alt="proven" className="provenimpactimg w-full object-cover desktop-only" />   

          <img src={provenimpactimgmob} alt="proven" className="provenimpactimg w-full object-cover mobile-only" />   
         
         
         
         </div>

         <div className="endtext">And they’re essential skills for the future, according to the World Economic Forum.</div>
       


        </div>

          </div>
    </section>
        
 <section className="overflow-hidden rounded-bl-[60px] md:rounded-bl-[100px] mt-[-150px] stats-section">
      <div className="max-w-[1280px] mx-auto">
        {/* ===================== ROW 3 ===================== */}
        <div className="stats3-parent">

          {/* LEFT CONTENT */}
          <div className="stats3-child textual-content">
            <h2 className=""> Confidence in an<br className="brremove"/> uncertain world</h2>
            <p className=""> When children learn how to think, they gain the<br className="brremove"/> confidence to:</p>
            <p className="">•	Solve problems independently<br />•	Adapt when things change<br />•	Keep going when things get difficult<br />•	Make decisions without relying on shortcuts</p>
            <p className="">This is what prepares them not just for exams - but for life.</p>
            {/* <button
              onClick={() =>
                document
                  .getElementById("enquiry")
                  ?.scrollIntoView({ behavior: "smooth" })
              }

              className="stats3-cta">
              KEEP IN TOUCH </button> */}
          </div>

          {/* RIGHT IMAGE */}
          <div className="stats3-child relative">
            <img src={statsImg3} alt="student" className="" />
          </div>
        </div>




      </div>
    </section>
    </>
  );
}