"use client";

import imageWallet from "@/public/assets/imgs/image_wallet.svg";
import imageCoin from "@/public/assets/imgs/image_chip.svg";
import Image from "next/image";
import SelectCoin from "../SelectCoin";
import Button from "../Button";
import iconDeposit from "@/public/assets/icons/icon_request-money.svg";

export function SectionDeposit() {
  return (
    <div className="h-[696px] bg-gradient-to-l from-[#e70404] to-[#850202]">
      <div className="relative mx-auto h-[230px] w-[300px]">
        <Image className="absolute" src={imageWallet} alt="wallet" />
        <Image
          className="absolute right-[-10px] top-[110px]"
          src={imageCoin}
          alt="chip"
        />
      </div>
      <div>
        <p className="s text-center text-[40px] font-[700]">Quick Deposit</p>
        <form action="" className="mx-auto mt-[57px] h-[56px] w-[332px]">
          <label className="mb[16px] text-center font-pathway text-[32px] font-[400]">
            Choose Payment Method
          </label>
          <SelectCoin />
          <Button classButton="mx-auto mt-[37px] h-[73px]">
            <Image src={iconDeposit} alt="deposit" /> Deposit
          </Button>
        </form>
        <p className="mx-auto mt-[190px] w-[336px] text-center text-[13px] font-[400]">
          We will credit the exact amount we receive in US Dollars. Need
          assistance? Contact us via Live Chat for instant support.
        </p>
      </div>
    </div>
  );
}
