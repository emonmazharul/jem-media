import { HeroSection } from "./component/heroSection";
import { Services } from "./component/services";
import WhyChooseUs from "./component/whyChooseUs";
import { ContactSection } from "./component/contactSection";
import HowitWorks from "./component/howitworks";

export default function Homepage() {
  return <>
    <HeroSection/>
    <Services/>
    <WhyChooseUs/>
    <HowitWorks/>
    <ContactSection/>
  </>
}

