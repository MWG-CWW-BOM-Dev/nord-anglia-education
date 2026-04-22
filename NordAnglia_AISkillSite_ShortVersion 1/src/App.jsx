import Hero from "./components/Hero";
import VideoBlock from "./components/VideoBlock";
import EnquirySection from "./components/EnquirySection";
import CarouselSection from "./components/CarouselSection";

function App() {
  return (
    <>
      <Hero />
      <VideoBlock />
      <div className="bg-lightblue">
        <CarouselSection />
        <EnquirySection />
      </div>
    </>
  );
}

export default App;