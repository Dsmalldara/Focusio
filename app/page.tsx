import BenefitSection from "./SharedComps/BenefitSection";
import DiscoverSection from "./SharedComps/DiscoverSection";
import FeaturesSection from "./SharedComps/FeaturesSection";
import Homesection from "./SharedComps/Homesection";

function Home(){
  return (
  <div className=" md:max-w-[80%] mx-auto">
  <Homesection/>
  <DiscoverSection/>
  <FeaturesSection/>
  <BenefitSection/>
  </div>
  )
}
export default Home;