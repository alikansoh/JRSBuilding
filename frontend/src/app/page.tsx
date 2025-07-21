import Image from "next/image";
import Hero from "./Components/Hero"
import WhyUs from './Components/whyUs'
import OurServices from './Components/OurServices'

export default function Home() {
  return (
<div className="mt-30">
   <Hero/>
   <WhyUs/>
   <OurServices/>

    </div>  );
}
