import Button from "../Button";
import CardPlay from "../CardPlay";
import card1 from "@/public/assets/imgs/image_cactus-removebg-preview 3.svg";
import iconSent from "@/public/assets/icons/icon_sent.svg";
import Image from "next/image";

export default function SectionPlay() {
  return (
    <div className="bg-gradient-to-l from-[#E70404] to-[#850202] pb-[90px] pt-[65px]">
      <div className="lg:mx-auto lg:max-w-[1105px]">
        <div className="mx-auto text-white">
          <p className="mb-9px text-center text-[40px] font-[700]">Play</p>

          <div className="mb-[12px] text-center text-[20px] font-[400] lg:flex lg:justify-center">
            <p>Your Favourite Online</p>
            <p>Poker Games</p>
          </div>
          <div className="flex flex-wrap justify-center font-pathway lg:flex-nowrap">
            <CardPlay image={card1} alt="catus1" title="Texas Hold'em" />
            <CardPlay image={card1} alt="catus1" title="Texas Hold'em" />
            <CardPlay image={card1} alt="catus1" title="Texas Hold'em" />
            <CardPlay image={card1} alt="catus1" title="Texas Hold'em" />
          </div>
        </div>
        <Button classButton="mx-auto mt-[20px] h-[70px]">
          <Image src={iconSent} alt="sent" />
          JOIN NOW
        </Button>
      </div>
    </div>
  );
}
