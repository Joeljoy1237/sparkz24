import Credits from "@/widgets/Credits";
import Footer from "@/widgets/Footer";
import SliderEvents from "@/widgets/SliderEvents";
import About from "@widgets/About";
import LandingPage from "@widgets/LandingPage/view";

export default function Home() {
  return (
    <>
      <LandingPage />
      {/* <SliderEvents/> */}
      <About />
      <Footer/>
      <Credits/>
    </>
  );
}
