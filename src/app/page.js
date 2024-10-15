import Image from "next/image";
import { HeroSection } from "./component/heroSection";
import { Services } from "./component/services";
import WhyChooseUs from "./component/whyChooseUs";
import { ContactSection } from "./component/contactSection";
import HowitWorks from "./component/howitworks";
import { PagePopUp } from "./component/markettingPopUp";


export default function Homepage() {
  return <>
    <PagePopUp/>
    <HeroSection/>
    <Services/>
    <WhyChooseUs/>
    <HowitWorks/>
    <ContactSection/>
  </>
}

