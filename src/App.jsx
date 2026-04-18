import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import VideoBlock from "./components/VideoBlock";
import StatsSection from "./components/StatsSection";
import EnquirySection from "./components/EnquirySection";
import CarouselSection from "./components/CarouselSection";
import ReadReportSection from "./components/ReadReportSection";
import KeepInTouchSection from "./components/KeepInTouchSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <VideoBlock />
      <StatsSection />
      <EnquirySection/>
      <CarouselSection/>
      <ReadReportSection/>
      <KeepInTouchSection/>
      <Footer />
    </>
  );
}

export default App;