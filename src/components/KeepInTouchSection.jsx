import { useEffect } from "react";
import contactImg from "../assets/contact.jpg";

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
      className="bg-[#F4F1EA] pt-14 sm:pt-16 md:pt-20 pb-0 overflow-hidden"
      id="touch"
    >
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 md:px-8">

        <div className="grid lg:grid-cols-2 gap-10 sm:gap-14 items-center">

          {/* LEFT IMAGE */}
          <div className="relative flex justify-center lg:justify-start">
            <img
              src={contactImg}
              alt="Student"
              className="relative z-10 w-[240px] h-[240px] sm:w-[360px] sm:h-[360px] md:w-[520px] md:h-[520px] lg:w-[620px] lg:h-[620px] rounded-full object-cover"
            />
          </div>

          {/* RIGHT SIDE */}
          <div className="pb-10">

            <h2 className="text-[#0B1E4F] text-3xl sm:text-4xl md:text-6xl font-light uppercase leading-tight">
              Keep In Touch
            </h2>

            <p className="mt-4 sm:mt-5 text-[#0B1E4F]/80 text-sm sm:text-base md:text-xl leading-7 md:leading-8 max-w-[620px]">
              Enter your details to keep up to date with developments in
              education and research for your child.
            </p>

            {/* Form Box */}
            <div className="mt-8 sm:mt-10 border-[3px] md:border-4 border-[#22D8E8] rounded-[20px] sm:rounded-[24px] md:rounded-[28px] overflow-hidden bg-white">

              {/* Iframe Form */}
              <div className="p-4 sm:p-6 md:p-8">
                <p>
                  <iframe
                    title="Keep In Touch Form"
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
      </div>
    </section>
  );
}