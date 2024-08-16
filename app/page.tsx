import ButtonDownload from "@/components/ButtonDownload";
import Header from "@/components/ui/Header";
import { SectionDeposit } from "@/components/ui/SectionDeposit";
import SectionFeatures from "@/components/ui/SectionFeatures";
import SectionPlay from "@/components/ui/SectionPlay";
import SectionThumbnail from "@/components/ui/SectionThumbnail";

export default function Home() {
  return (
    <>
      <Header />
      <SectionThumbnail />
      <SectionPlay />
      <SectionFeatures />
      <SectionDeposit />
    </>
  );
}
