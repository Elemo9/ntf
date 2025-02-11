import Landing from "./_components/Landing";
import UnlockTheFutureOfInnovation from "./_components/UnlockTheFutureOfInnovation";
import WhyAttendOTF2025 from "./_components/WhyAttendLTF2025";
import ForExhibitors from "./_components/ForExhibitors";
import SponsorshipOpportunities from "./_components/SponsorshipOpportunities";
import PitchYourProduct from "./_components/PitchYourProduct";
//import StayUpdated from "./_components/StayUpdated";
import EventOutcomes from "./_components/Eventoutcomes";
import Footer from "./_components/Footer";
import Workshop from "./_components/Workshop";
import InterdisciplinaryProjectCompetition from "./_components/InterdisciplinaryProjectCompetition";

export default function Home() {
  return (
    <div className="w-full h-fit">
      <Landing />      
      <UnlockTheFutureOfInnovation />
      <Workshop />
      <InterdisciplinaryProjectCompetition />
      <WhyAttendOTF2025 />
      <ForExhibitors />
      <SponsorshipOpportunities />
      <PitchYourProduct />
      <EventOutcomes />
      <Footer />
    </div>
  );
}
