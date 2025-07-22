import Image from "next/image";
import Hero from "./Components/Hero"
import WhyUs from './Components/whyUs'
import OurServices from './Components/OurServices'
import HowWeWork from './Components/HowWeWork'
import RecentProjects from "./Components/RecentProject";


export default function Home() {
  return (
<div className="mt-30">
   <Hero/>
   <WhyUs/>
   <OurServices/>
   <HowWeWork/>
   <RecentProjects/>

    </div>  );
}
