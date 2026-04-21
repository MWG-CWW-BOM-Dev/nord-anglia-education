import { useEffect } from "react";

export default function EnquirySection() {
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
    <section
      id="enquiry"
      className="bg-[#F5F1E8] py-16 sm:py-24 md:py-32 relative overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">

        {/* Heading */}
        <h2 className="text-[#111] text-3xl sm:text-4xl md:text-5xl font-semibold uppercase">
          Enquire Now
        </h2>

        {/* Subtitle */}
        <p className="mt-3 text-gray-700 text-sm md:text-base leading-6 max-w-[700px]">
          Fill in your details to find your nearest school and arrange a call
          with our admissions team.
        </p>

        {/* Form Box */}
        <div className="mt-8 md:mt-10 bg-white rounded-[22px] md:rounded-[28px] shadow-md overflow-hidden">

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