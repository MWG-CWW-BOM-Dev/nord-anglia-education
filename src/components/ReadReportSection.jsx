import { useState } from "react";

export default function ReadReportSection() {
  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    lastName: "",
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

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter valid email";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Read Report Form:", formData);
      alert("Request Submitted!");
    }
  };

  return (
    <section
      id="report"
      className="bg-[#DFF5FA] pt-0 pb-0"
    >
      <div className="bg-[#072C63] rounded-br-[60px] sm:rounded-br-[90px] md:rounded-br-[120px] py-14 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-[1400px] mx-auto">

          {/* Heading */}
          <h3 className="text-white text-3xl sm:text-4xl md:text-6xl font-light uppercase leading-tight">
            Read The Report
          </h3>

          <p className="text-white/90 mt-4 text-sm sm:text-base md:text-xl leading-6 md:leading-8 max-w-[900px]">
            Enter your email address and get access to a copy of our thinking
            routines study.
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="mt-8 sm:mt-10 md:mt-12 bg-white rounded-[20px] sm:rounded-[24px] md:rounded-[28px] overflow-hidden shadow-lg"
          >

            {/* Inputs */}
            <div className="p-4 sm:p-6 md:p-12 grid md:grid-cols-2 gap-5 sm:gap-6 md:gap-8">

              {/* Title */}
              <div>
                <select
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className={`w-full h-12 sm:h-14 md:h-16 px-4 sm:px-5 text-sm sm:text-base md:text-xl rounded-sm border ${
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

              {/* First Name */}
              <div>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full h-12 sm:h-14 md:h-16 px-4 sm:px-5 text-sm sm:text-base md:text-xl rounded-sm border ${
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

              {/* Last Name */}
              <div>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name/Surname"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full h-12 sm:h-14 md:h-16 px-4 sm:px-5 text-sm sm:text-base md:text-xl rounded-sm border ${
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

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full h-12 sm:h-14 md:h-16 px-4 sm:px-5 text-sm sm:text-base md:text-xl rounded-sm border ${
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
            <div className="bg-[#22D8E8] py-4 sm:py-5 md:py-6 flex justify-center">
              <button
                type="submit"
                className="bg-[#0B1E4F] text-white px-8 sm:px-12 md:px-14 py-3 sm:py-4 rounded-full text-xs sm:text-sm font-semibold tracking-wide hover:scale-105 transition"
              >
                SEND ENQUIRY
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
}