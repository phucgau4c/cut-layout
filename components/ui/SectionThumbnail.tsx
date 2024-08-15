import ButtonDownload from "../ButtonDownload";
import DownloadGroup from "../DownloadGroup";
import LauchDate from "../LaunchDate";
import FormJoin from "./FormJoin";

export default function SectionThumbnail() {
  return (
    <section className={`relative`}>
      <ButtonDownload />
      <div
        className="h-[1106px] bg-cover bg-[center_top] bg-no-repeat"
        style={{
          backgroundImage: "url(/assets/imgs/img_background-thumbnail.svg)",
        }}
      >
        <LauchDate />
        <DownloadGroup />
      </div>
      <FormJoin />
    </section>
  );
}
