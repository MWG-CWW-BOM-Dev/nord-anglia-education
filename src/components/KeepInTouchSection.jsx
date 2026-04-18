import { useState } from "react";
import contactImg from "../assets/contact.jpg";

export default function KeepInTouchSection() {
  const [formData, setFormData] = useState({
    title: "",
    lastName: "",
    firstName: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!formData.title) {
      newErrors.title = "Please select title";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name required";
    }

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter valid email";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Keep In Touch Form:", formData);
      alert("Submitted Successfully!");
    }
  };

  return (
    <section className="bg-[#F4F1EA] pt-14 sm:pt-16 md:pt-20 pb-0 overflow-hidden">
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

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="mt-8 sm:mt-10 border-[3px] md:border-4 border-[#22D8E8] rounded-[20px] sm:rounded-[24px] md:rounded-[28px] overflow-hidden bg-white"
            >

              {/* Inputs */}
              <div className="p-4 sm:p-6 md:p-8 space-y-5 sm:space-y-6">

                {/* Title */}
                <div>
                  <select
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className={`w-full h-12 sm:h-14 md:h-16 px-4 sm:px-5 text-sm sm:text-base md:text-lg rounded-sm border ${
                      errors.title
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  >
                    <option value="">Please select...</option>
                    <option value="Mr">Mr</option>
                    <option value="Ms">Ms</option>
                    <option value="Mrs">Mrs</option>
                  </select>

                  <div className="h-5 mt-1">
                    <p className="text-red-500 text-xs sm:text-sm">
                      {errors.title}
                    </p>
                  </div>
                </div>

                {/* Last Name */}
                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name/Surname"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-full h-12 sm:h-14 md:h-16 px-4 sm:px-5 text-sm sm:text-base md:text-lg rounded-sm border ${
                      errors.lastName
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />

                  <div className="h-5 mt-1">
                    <p className="text-red-500 text-xs sm:text-sm">
                      {errors.lastName}
                    </p>
                  </div>
                </div>

                {/* First Name */}
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full h-12 sm:h-14 md:h-16 px-4 sm:px-5 text-sm sm:text-base md:text-lg rounded-sm border ${
                      errors.firstName
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />

                  <div className="h-5 mt-1">
                    <p className="text-red-500 text-xs sm:text-sm">
                      {errors.firstName}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full h-12 sm:h-14 md:h-16 px-4 sm:px-5 text-sm sm:text-base md:text-lg rounded-sm border ${
                      errors.email
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />

                  <div className="h-5 mt-1">
                    <p className="text-red-500 text-xs sm:text-sm">
                      {errors.email}
                    </p>
                  </div>
                </div>

              </div>

              {/* Submit */}
              <div className="bg-[#22D8E8] py-4 sm:py-5 flex justify-center">
                <button
                  type="submit"
                  className="bg-[#0B1E4F] text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full text-xs sm:text-sm font-semibold tracking-wide hover:scale-105 transition"
                >
                  SEND ENQUIRY
                </button>
              </div>

            </form>

          </div>
        </div>
      </div>

      {/* Footer Strip */}
      <div className="mt-10 sm:mt-14 md:mt-16 bg-[#22D8E8] h-14 sm:h-16 md:h-20"></div>
    </section>
  );
}