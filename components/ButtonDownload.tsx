import Image from "next/image";
import iconDownload from "@/public/assets/icons/icon_download.svg";

export default function ButtonDownload() {
  return (
    <button className="absolute right-[23px] top-[11px] flex h-[47px] w-[153px] items-center justify-center gap-[7px] rounded-[15px] bg-gradient-to-b from-[#FF0000] to-[#831414] text-[16px] font-[700] text-white lg:hidden">
      <Image src={iconDownload} alt="download" width={15} height={18} />
      DOWNLOAD
    </button>
  );
}
