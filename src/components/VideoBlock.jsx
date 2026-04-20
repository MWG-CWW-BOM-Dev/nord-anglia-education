import videoFile from "../assets/video.mp4";

export default function VideoBlock() {
  return (
    <section className="bg-white py-8 sm:py- 10 md:py-16 overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8">

        {/* Main Wrapper */}
        <div className="relative">

          {/* Dotted Pattern Bottom Left */}
          <div className="absolute -bottom-10 left-10 w-[1500px] sm:w-[100%] h-[60px] sm:h-[90px] z-0 bg-[radial-gradient(#22D8E8_1.8px,transparent_1.8px)] [background-size:10px_10px]"></div>

          {/* Video */}
          <div className="relative z-10">
            <video
              src={videoFile}
              className="w-full h-[220px] sm:h-[420px] md:h-[620px] object-cover"
              autoPlay
              muted
              loop
              playsInline
              controls
            />
          </div>

        </div>

      </div>
    </section>
  );
}