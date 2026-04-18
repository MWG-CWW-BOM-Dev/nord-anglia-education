import { useState } from "react";

export default function EnquirySection() {
  const [formData, setFormData] = useState({
    school: "",
    firstName: "",
    lastName: "",
    email: "",
    nationality: "",
    countryCode: "",
    phone: "",
    visit: "",
    children: "",
    marketing: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!formData.school) newErrors.school = "Please select a school";
    if (!formData.firstName.trim()) newErrors.firstName = "First name required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name required";

    if (!formData.email.trim()) {
      newErrors.email = "Email required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }

    if (!formData.nationality)
      newErrors.nationality = "Please select nationality";

    if (!formData.countryCode.trim())
      newErrors.countryCode = "Code required";

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter valid 10 digit number";
    }

    if (!formData.visit) newErrors.visit = "Please choose an option";

    if (!formData.children)
      newErrors.children = "Please select children count";

    if (!formData.marketing)
      newErrors.marketing = "Please accept this checkbox";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Form Submitted Successfully!");
      console.log(formData);
    }
  };

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

        <p className="mt-3 text-gray-700 text-sm md:text-base leading-6">
          Fill in your details to find your nearest school and arrange a call
          with our admissions team.
        </p>

        {/* Form Box */}
        <div className="mt-8 md:mt-10 bg-white rounded-[22px] md:rounded-[28px] shadow-md overflow-hidden">

          <form onSubmit={handleSubmit}>
            <div className="p-4 sm:p-6 md:p-10 grid md:grid-cols-2 gap-5 md:gap-6">

              {/* School */}
              <div>
                <select
                  name="school"
                  value={formData.school}
                  onChange={handleChange}
                  className={`w-full h-12 md:h-14 px-4 text-sm md:text-base border rounded-sm ${
                    errors.school ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="">Please select...</option>
                  <option value="School A">School A</option>
                  <option value="School B">School B</option>
                </select>

                <div className="h-5 mt-1">
                  <p className="text-red-500 text-xs md:text-sm">{errors.school}</p>
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
                  className={`w-full h-12 md:h-14 px-4 text-sm md:text-base border rounded-sm ${
                    errors.firstName ? "border-red-500" : "border-gray-300"
                  }`}
                />

                <div className="h-5 mt-1">
                  <p className="text-red-500 text-xs md:text-sm">{errors.firstName}</p>
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
                  className={`w-full h-12 md:h-14 px-4 text-sm md:text-base border rounded-sm ${
                    errors.lastName ? "border-red-500" : "border-gray-300"
                  }`}
                />

                <div className="h-5 mt-1">
                  <p className="text-red-500 text-xs md:text-sm">{errors.lastName}</p>
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
                  className={`w-full h-12 md:h-14 px-4 text-sm md:text-base border rounded-sm ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />

                <div className="h-5 mt-1">
                  <p className="text-red-500 text-xs md:text-sm">{errors.email}</p>
                </div>
              </div>

              {/* Nationality */}
              <div>
                <select
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleChange}
                  className={`w-full h-12 md:h-14 px-4 text-sm md:text-base border rounded-sm ${
                    errors.nationality
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                >
                  <option value="">Nationality</option>
                  <option value="India">India</option>
                  <option value="UK">UK</option>
                  <option value="USA">USA</option>
                  <option value="UAE">UAE</option>
                </select>

                <div className="h-5 mt-1">
                  <p className="text-red-500 text-xs md:text-sm">
                    {errors.nationality}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div>
                <div className="grid grid-cols-[80px_1fr] sm:grid-cols-[90px_1fr] gap-3">
                  <input
                    type="text"
                    name="countryCode"
                    placeholder="+91"
                    value={formData.countryCode}
                    onChange={handleChange}
                    className={`h-12 md:h-14 px-3 text-sm md:text-base border rounded-sm ${
                      errors.countryCode
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />

                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`h-12 md:h-14 px-4 text-sm md:text-base border rounded-sm ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                </div>

                <div className="h-5 mt-1">
                  <p className="text-red-500 text-xs md:text-sm">
                    {errors.countryCode || errors.phone}
                  </p>
                </div>
              </div>

              {/* Visit */}
              <div className="md:col-span-2">
                <p className="mb-3 text-sm md:text-base">
                  Would you like to request a visit?
                </p>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="visit"
                      value="Yes"
                      checked={formData.visit === "Yes"}
                      onChange={handleChange}
                    />
                    Yes
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="visit"
                      value="No"
                      checked={formData.visit === "No"}
                      onChange={handleChange}
                    />
                    No
                  </label>
                </div>

                <div className="h-5 mt-1">
                  <p className="text-red-500 text-xs md:text-sm">{errors.visit}</p>
                </div>
              </div>

              {/* Children */}
              <div className="md:col-span-2">
                <p className="mb-3 text-sm md:text-base">
                  Number of children <span className="text-red-500">*</span>
                </p>

                <select
                  name="children"
                  value={formData.children}
                  onChange={handleChange}
                  className={`w-full md:w-[48%] h-12 md:h-14 px-4 text-sm md:text-base border rounded-sm ${
                    errors.children
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                >
                  <option value="">Please select...</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>

                <div className="h-5 mt-1">
                  <p className="text-red-500 text-xs md:text-sm">{errors.children}</p>
                </div>
              </div>

              {/* Checkbox */}
              <div className="md:col-span-2 pt-2">
                <label className="flex items-start gap-3 sm:gap-4 cursor-pointer">

                  <input
                    type="checkbox"
                    name="marketing"
                    checked={formData.marketing}
                    onChange={handleChange}
                    className="hidden peer"
                  />

                  <div
                    className={`w-6 h-6 sm:w-8 sm:h-8 border flex items-center justify-center mt-1 shrink-0 ${
                      errors.marketing
                        ? "border-red-500"
                        : "border-gray-400"
                    } peer-checked:bg-[#0B1E4F] peer-checked:border-[#0B1E4F]`}
                  >
                    {formData.marketing && (
                      <span className="text-white text-xs sm:text-sm">✓</span>
                    )}
                  </div>

                  <span className="text-xs sm:text-sm text-gray-700 leading-6 sm:leading-7">
                    Please tick this box to give us your permission to send you
                    information which may be regarded as direct marketing in
                    relation to our school.
                  </span>
                </label>

                <p className="mt-3 text-xs sm:text-sm">
                  View our{" "}
                  <span className="underline cursor-pointer">
                    Privacy Policy
                  </span>{" "}
                  for further details
                </p>

                <div className="h-5 mt-1">
                  <p className="text-red-500 text-xs md:text-sm">
                    {errors.marketing}
                  </p>
                </div>
              </div>

            </div>

            {/* Bottom CTA */}
            <div className="bg-[#22D8E8] py-4 md:py-5 flex justify-center">
              <button
                type="submit"
                className="bg-[#0B1E4F] text-white px-8 sm:px-10 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide hover:scale-105 transition"
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