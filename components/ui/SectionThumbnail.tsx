import ButtonDownload from "../ButtonDownload";
import DownloadGroup from "../DownloadGroup";
import LauchDate from "../LaunchDate";
import FormJoin from "./FormJoin";
import FormLg from "./FormLg";

export default function SectionThumbnail() {
  return (
    <section className={`relative`}>
      <div className="absolute right-[23px] top-[11px] lg:hidden">
        <ButtonDownload />
      </div>
      <div
        className="bg-cover bg-[center_top] bg-no-repeat pb-[66px] pt-[100px] lg:px-[20px]"
        style={{
          backgroundImage: "url(/assets/imgs/img_background-thumbnail.svg)",
        }}
      >
        <div className="mx-auto lg:max-w-[1151px]">
          <div className="justify-between lg:flex">
            <LauchDate />
            <FormLg />
          </div>
          <p className="mt-[67px] hidden text-center text-[20px] font-[400] lg:block">
            Join AceLounge Club now and experience the best in online poker. Get
            ready for a gaming experience like no other!
          </p>
          <DownloadGroup />
        </div>
      </div>
      <FormJoin />
    </section>
  );
}
