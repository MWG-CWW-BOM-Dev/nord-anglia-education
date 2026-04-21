import { useEffect } from "react";

export default function ReadReportSection() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://nordangliaeducation.tfaforms.net/js/iframe_resize_helper.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="report" className="bg-[#DFF5FA] pt-0 pb-0">
      <div className="bg-[#072C63] rounded-br-[60px] sm:rounded-br-[90px] md:rounded-br-[120px] py-14 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-[1400px] mx-auto">

          {/* Heading */}
          <h3 className="text-white text-3xl sm:text-4xl md:text-6xl font-light uppercase leading-tight">
            Read The Report
          </h3>

          {/* Subtitle */}
          <p className="text-white/90 mt-4 text-sm sm:text-base md:text-xl leading-6 md:leading-8 max-w-[900px]">
            Enter your email address and get access to a copy of our thinking
            routines study.
          </p>

          {/* Form Box */}
          <div className="mt-8 sm:mt-10 md:mt-12 bg-white rounded-[20px] sm:rounded-[24px] md:rounded-[28px] overflow-hidden shadow-lg">

            {/* Iframe Form */}
            <div className="p-4 sm:p-6 md:p-8">
              <p>
                <iframe
                  title="Read Report Form"
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
      </div>
    </section>
  );
}