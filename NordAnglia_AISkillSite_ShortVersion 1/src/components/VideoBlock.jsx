import videoSrc from "../assets/video.mp4";
import thumbnailSrc from "../assets/thumbnail.png";

export default function VideoBlock() {
  return (
    <section className="bg-white py-8 sm:py- 10 md:py-16 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">

        {/* Main Wrapper */}
        <div className="relative">

          {/* Video */}
          <div className="relative z-10 video-container">
            <video
              className="w-full h-[220px] sm:h-[420px] md:h-[620px] object-cover shadow-lg"
              poster={thumbnailSrc}
              autoPlay
              muted
              loop
              playsInline
              controls="true"
              paused
            >
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

      </div>
    </section>
  );
}