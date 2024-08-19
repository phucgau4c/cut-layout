import ButtonDownload from "@/components/ButtonDownload";
import Header from "@/components/ui/Header";
import { SectionDeposit } from "@/components/ui/SectionDeposit";
import SectionFeatures from "@/components/ui/SectionFeatures";
import SectionPlay from "@/components/ui/SectionPlay";
import SectionStay from "@/components/ui/SectionStay";
import SectionThumbnail from "@/components/ui/SectionThumbnail";
import SectionWithDraw from "@/components/ui/SectionWithDraw";

export default function Home() {
  return (
    <>
      <Header />
      <SectionThumbnail />
      <SectionPlay />
      <SectionFeatures />
      <SectionDeposit />
      <SectionWithDraw />
      <SectionStay />
    </>
  );
}
