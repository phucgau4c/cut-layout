import Image from "next/image";

import rocketIcon from "@/public/assets/icons/icon_rocket.svg";
import leaderboardIcon from "@/public/assets/icons/icon_leaderboard.svg";
import cupIcon from "@/public/assets/icons/icon_Trophy.svg";
import money from "@/public/assets/imgs/image_10,000-dollar.svg";

export default function LauchDate() {
  return (
    <div className="px-[35px]">
      <p className="pt-[92px] text-center text-[40px] font-[700] text-white">
        Welcome to AceLounge Club!
      </p>
      <p className="mb-[28px] text-center text-[20px] font-[700] text-white md:text-[32px]">
        Join us for the Grand Inauguration!
      </p>

      <div
        className={`m-auto mb-[43px] min-w-[323px] max-w-[500px] border-[4px] border-[#fff]/40 font-pathway`}
      >
        <div className="h-[223px] bg-black/70 pb-[20px] pl-[14px] pr-[14px] pt-[20px]">
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
        <div className="flex h-[176px] text-[32px] font-[400] text-white">
          <div className="flex flex-1 items-center justify-center bg-gradient-to-b from-[#FF0000] to-[#831414]/90">
            <p className="m-[10px] text-[48px]">20</p>
            <p className="m-[10px]">JUN</p>
          </div>
          <div className="flex flex-1 items-center justify-center bg-gradient-to-b from-[#831414] from-10% to-[#000]/90 to-90%">
            <p>2:00pm</p>
          </div>
        </div>
      </div>
    </div>
  );
}
