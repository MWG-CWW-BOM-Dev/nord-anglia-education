import videoFile from "../assets/video.mp4";

export default function VideoBlock() {
  return (
    <section className="bg-white py-8 sm:py-10 md:py-16">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8">

        {/* Main Video Box */}
        <div className="relative">

          {/* Video */}
          <video
            src={videoFile}
            className="w-full h-[220px] xs:h-[260px] sm:h-[420px] md:h-[620px] object-cover rounded-md"
            autoPlay
            muted
            loop
            playsInline
            controls
          />

          {/* Cyan dotted line bottom */}
          <div className="absolute -bottom-3 sm:-bottom-5 left-4 sm:left-10 right-4 sm:right-10 h-[10px] sm:h-[12px] border-b-[4px] sm:border-b-[6px] border-dotted border-cyan-400"></div>

        </div>

      </div>
    </section>
  );
}