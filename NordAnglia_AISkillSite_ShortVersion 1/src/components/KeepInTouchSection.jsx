import { useEffect } from "react";
import contactImg from "../assets/final-approved/Group 163.png";

export default function KeepInTouchSection() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//nordangliaeducation.tfaforms.net/js/iframe_resize_helper.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section
      id="touch"
      className="bg-[#F4F1EA] py-16 md:py-24 overflow-hidden relative"
    >
    

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT IMAGE */}
          <div className="relative flex justify-center lg:justify-start ">
            <img
              src={contactImg}
              alt="Student"
              className="relative right-75 w-[280px] h-[280px] sm:w-[420px] sm:h-[420px] md:w-[500px] md:h-[500px] lg:w-[700px] lg:h-[700px] rounded-full object-cover"
            />
          </div>

          {/* RIGHT SIDE */}
          <div className="relative right-30 ">

            <h2 className="text-[#0B1E4F] text-[34px] sm:text-[42px] md:text-[52px] font-light uppercase leading-none">
              KEEP IN TOUCH
            </h2>

            <p className="mt-3 text-[#0B1E4F]/80 text-sm sm:text-base leading-6 max-w-[520px]">
              Enter your details to keep up to date with developments in
              education and research for your child
            </p>

            {/* FORM BOX */}
            <div className="mt-8 bg-white rounded-[8px] p-5 shadow-sm max-w-[520px]">

              <iframe
                title="Keep In Touch Form"
                formid="admissions_form"
                frameBorder="0"
                id="formassembly_form"
                src="https://nordangliaeducation.tfaforms.net/4748620"
                width="100%"
                className="w-full min-h-[430px]"
              ></iframe>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}