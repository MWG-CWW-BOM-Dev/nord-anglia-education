import { useEffect } from "react";
import whiteLinesPattern from "../assets/white-lines-pattern.png";
import enquirePattern from "../assets/enquire-pattern.png";

export default function EnquirySection() {
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
      id="enquiry"
      className="bg-[#0D3155] rounded-bl-[160px] py-16 sm:py-24 md:py-32 relative overflow-hidden ml-[50px] mb-[200px]"
      style={{ '--white-lines-pattern': `url(${whiteLinesPattern})`, '--enquire-pattern': `url(${enquirePattern})` }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 enquire-pattern">

        {/* Heading */}
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold uppercase">
          Enquire Now
        </h2>

        {/* Subtitle */}
        <p className="mt-3 text-white text-sm md:text-base leading-6">
          Discover how your child can develop the skills that matter most in today’s and tomorrow’s world.
        </p>

        {/* Form Box */}
        <div className="mt-8 md:mt-10 bg-white rounded-[22px] md:rounded-[28px] shadow-md overflow-hidden z-999 relative">

          {/* Iframe Form */}
          <div className="p-4 sm:p-6 md:p-8">
            <p>
              <iframe
                title="Admissions Form"
                formid="admissions_form"
                frameBorder="0"
                height="auto"
                id="formassembly_form"
                src="https://nordangliaeducation.tfaforms.net/4748620"
                width="100%"
                className="w-full min-h-[900px]"
              ></iframe>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}