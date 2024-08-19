import Image from "next/image";
import iconDownload from "@/public/assets/icons/icon_download.svg";

export default function ButtonDownload() {
  return (
    <button className="flex h-[47px] w-[153px] items-center justify-center gap-[7px] rounded-[15px] bg-gradient-to-b from-[#FF0000] to-[#831414] text-[16px] font-[700] text-white">
      <Image src={iconDownload} alt="download" width={15} height={18} />
      DOWNLOAD
    </button>
  );
}
