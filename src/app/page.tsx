import Image from "next/image";
import Landing from "./_components/Landing";
import UnlockTheFutureOfInnovation from "./_components/UnlockTheFutureOfInnovation";
import WhyAttendOTF2025 from "./_components/WhyAttendOTF2025";
import ForExhibitors from "./_components/ForExhibitors";
import SponsorshipOpportunities from "./_components/SponsorshipOpportunities";
import PitchYourProduct from "./_components/PitchYourProduct";
import StayUpdated from "./_components/StayUpdated";
import StudentOutcomes from "./_components/StudentOutcomes";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <div className="w-full h-fit">
      <Landing />      
      <UnlockTheFutureOfInnovation />
      <WhyAttendOTF2025 />
      <ForExhibitors />
      <SponsorshipOpportunities />
      <PitchYourProduct />
      <StudentOutcomes />
      <StayUpdated />
      <Footer />
    </div>
  );
}
