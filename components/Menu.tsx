import Image from "next/image";
import menuIcon from "../public/assets/icons/icon_menu.svg";

export default function Menu() {
  return (
    <div className="h-[75px] w-[75px] gap-[10px] rounded-[10px] bg-gradient-to-b from-[#FFFFFF] to-[#CBCBCB] px-[13.5px] py-[13.5px] md:hidden">
      <Image src={menuIcon} alt="Menu" width={48} height={48} />
    </div>
  );
}
