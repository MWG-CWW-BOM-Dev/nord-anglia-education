import videoFile from "../assets/final-approved/Group 164.png";

export default function VideoBlock() {
  return (
    <section className="bg-white py-8 sm:py- 10 md:py-16 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">

        {/* Main Wrapper */}
        <div className="relative">

          {/* Dotted Pattern Bottom & Bottom Left */}
          {/* <div className="absolute -bottom-5 left-5 w-[1500px] sm:w-[100%] h-[40px] sm:h-[100px] z-0 bg-[radial-gradient(#22D8E8_1.8px,transparent_1.8px)] [background-size:10px_10px]"></div> */}

          {/* Video */}
          <div className="relative z-10">
            <img
              src={videoFile}
              className="w-full h-[220px] sm:h-[420px] md:h-[620px] object-cover "
             
            />
          </div>

        </div>

      </div>
    </section>
  );
}