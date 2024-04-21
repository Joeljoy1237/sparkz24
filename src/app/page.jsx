import Credits from "@/widgets/Credits";
import Footer from "@/widgets/Footer";
import Partners from "@/widgets/Partners";
import SliderEvents from "@/widgets/SliderEvents";
import About from "@widgets/About";
import LandingPage from "@widgets/LandingPage/view";
import styles from '@styles/scss/landingPage.module.scss'
export default function Home() {
  return (
    <div className={styles.parent}>
      <LandingPage />
      <SliderEvents/>
      <About />
      <Partners/>
      <Footer/>
      <Credits/>
    </div>
  );
}
