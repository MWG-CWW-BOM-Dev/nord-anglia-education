import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoImg from "../assets/logo.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuLinks = [
    "HOME",
    "ABOUT",
    "PROGRAMS",
    "CONTACT",
  ];

  // Close menu when scroll
  useEffect(() => {
    if (!open) return;

    const closeMenu = () => {
      setOpen(false);
    };

    window.addEventListener("wheel", closeMenu);
    window.addEventListener("touchmove", closeMenu);

    return () => {
      window.removeEventListener("wheel", closeMenu);
      window.removeEventListener("touchmove", closeMenu);
    };
  }, [open]);

  return (
    <>
      {/* MAIN NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#22D8E8]">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10">
          <div className="h-20 sm:h-24 flex items-center justify-between">

            {/* Logo */}
            <img
              src={logoImg}
              alt="Logo"
              className="h-10 sm:h-14 md:h-16 w-auto"
            />

            {/* Right */}
            <div className="flex items-center gap-2 sm:gap-4">

              {/* Hide button on mobile */}
              <button
                className="hidden sm:block bg-[#0B1E4F] text-white px-5 md:px-6 py-2.5 md:py-3 rounded-full text-xs md:text-sm font-semibold hover:scale-105 transition"
                onClick={() => console.log("Button clicked")}
              >
                FIND A SCHOOL
              </button>

              {/* Menu Button */}
              <button
                onClick={() => setOpen(true)}
                className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-[#0B1E4F] flex items-center justify-center"
              >
                <Menu className="text-white" size={24} />
              </button>

            </div>
          </div>
        </div>
      </nav>

      {/* FULLSCREEN MENU */}
      {open && (
        <div className="fixed inset-0 h-screen bg-[#22D8E8] z-[100] overflow-y-auto">

          {/* Top */}
          <div className="max-w-[1700px] mx-auto px-4 sm:px-6 md:px-12 py-6 sm:py-8 flex justify-between items-center">

            <img
              src={logoImg}
              alt="Logo"
              className="h-12 sm:h-20 md:h-24 w-auto"
            />

            <button
              onClick={() => setOpen(false)}
              className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-[#0B1E4F] flex items-center justify-center"
            >
              <X className="text-white" size={24} />
            </button>

          </div>

          {/* Content */}
          <div className="max-w-[1700px] mx-auto px-4 sm:px-6 md:px-12 pb-20">

            {/* Menu Links */}
            <div className="space-y-6 sm:space-y-8 md:space-y-10 mt-8 sm:mt-10">
              {menuLinks.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  onClick={() => setOpen(false)}
                  className="block text-[#0B1E4F] text-3xl sm:text-5xl md:text-6xl font-light uppercase hover:translate-x-2 transition"
                >
                  {item}
                </a>
              ))}
            </div>

          </div>
        </div>
      )}
    </>
  );
}