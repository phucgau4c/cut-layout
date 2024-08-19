import Image from "next/image";

import rocketIcon from "@/public/assets/icons/icon_rocket.svg";
import leaderboardIcon from "@/public/assets/icons/icon_leaderboard.svg";
import cupIcon from "@/public/assets/icons/icon_Trophy.svg";
import money from "@/public/assets/imgs/image_10,000-dollar.svg";

export default function LauchDate() {
  return (
    <div className="px-[35px] lg:w-[620px] lg:px-0">
      <p className="pt-[92px] text-center text-[40px] font-[700] text-white lg:text-left">
        Welcome to AceLounge Club!
      </p>
      <p className="mb-[28px] text-center text-[20px] font-[700] text-white md:text-[32px] lg:mb-[12px] lg:text-left">
        Join us for the Grand Inauguration!
      </p>

      <p className="mb-[17px] hidden text-[20px] font-[400] lg:block">
        We're thrilled to announce the launch of AceLounge, your ultimate
        destination for thrilling poker action!{" "}
      </p>

      <div
        className={`m-auto mb-[43px] min-w-[323px] max-w-[620px] border-[4px] border-[#fff]/40 font-pathway lg:m-0 lg:flex lg:h-[196px] lg:border-none`}
      >
        <div className="h-[223px] bg-black/70 pb-[20px] pl-[14px] pr-[14px] pt-[20px] lg:h-full lg:basis-3/4">
          <p className="flex border-b-[2px] border-[#ff0000] text-[24px] font-[400] text-white">
            LAUNCH DATE
            <span>
              <Image src={rocketIcon} alt="rocket" width={29} height={29} />
            </span>
          </p>
          <p className="flex text-[24px] font-[400] text-white">
            <Image
              src={leaderboardIcon}
              height={37}
              width={20}
              alt="leaderboard"
            />
            Tournament:
          </p>
          <p className="flex text-[24px] font-[400] text-[#FFDD40]">
            Grand Inauguration Freeroll{" "}
            <Image
              src={cupIcon}
              alt="cup icons"
              width={20}
              height={28}
              className="ml-[5px]"
            />
          </p>
          <p className="flex items-center justify-between text-[24px] font-[400] text-white">
            Prize Pool:{" "}
            <Image src={money} alt="10,000" width={191} height={59} />
          </p>
        </div>
        <div className="flex h-[176px] text-[32px] font-[400] text-white lg:h-full lg:w-full lg:basis-1/4">
          <div className="flex flex-1 items-center justify-center bg-gradient-to-b from-[#FF0000] to-[#831414]/90 lg:flex-col lg:justify-center lg:p-[10px]">
            <p className="m-[10px] text-[48px] lg:m-0">20</p>
            <p className="m-[10px] lg:mt-[-20px]">JUN</p>
          </div>
          <div className="flex flex-1 items-center justify-center bg-gradient-to-b from-[#831414] from-10% to-[#000]/90 to-90% lg:p-[10px]">
            <p>2:00pm</p>
          </div>
        </div>
      </div>
    </div>
  );
}
