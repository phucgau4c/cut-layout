import chplay from "@/public/assets/imgs/button_download_googleplay.svg";
import appStore from "@/public/assets/imgs/button_download_appstore.svg";
import mStore from "@/public/assets/imgs/button_download_microsoftstore.svg";
import android from "@/public/assets/imgs/button_download_android.svg";
import IconDownload from "./IconDownload";

export default function DownloadGroup() {
  return (
    <div className="mx-auto flex w-[262px] flex-wrap md:w-[801px] md:justify-center lg:w-full lg:flex-nowrap xl:justify-between">
      <IconDownload classCss="mb-[9px]" icon={chplay} alt="chplay" />
      <IconDownload classCss="mb-[9px]" icon={appStore} alt="app strore" />
      <IconDownload classCss="mb-[9px]" icon={mStore} alt="microsoft store" />
      <IconDownload icon={android} alt="adndroid" />
    </div>
  );
}
