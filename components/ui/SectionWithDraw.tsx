"use client";

import Image from "next/image";

import atmImg from "@/public/assets/imgs/image_atm.svg";
import SelectCoin from "@/components/SelectCoin";
import iconWallet from "@/public/assets/icons/icon_coin-wallet.svg";
import iconCoint from "@/public/assets/icons/icon_average-price.svg";
import iconWithdraw from "@/public/assets/icons/icon_request-money.svg";
import InputWidthdraw from "../InputWithdraw";
import Label from "../Label";
import Button from "../Button";
import ParagraphBottom from "../ParagraphBottom";

export default function SectionWithDraw() {
  return (
    <section className="bg-gradient-to-b from-[#000] to-[#450505] px-[30px] pb-[85px] pt-[53px]">
      <Image
        src={atmImg}
        alt="atm"
        width={309}
        height={189}
        className="mx-auto"
      />
      <div>
        <p className="mx-auto mb-[31px] w-[263px] text-center text-[40px] font-[700]">
          Quick Withdrawal
        </p>
        <form
          action=""
          className="mx-auto min-w-[333px] max-w-[485px] text-[32px] font-[400]"
        >
          <div className="font-pathway">
            <label htmlFor="method">Choose Payout Method</label>
            <SelectCoin />
          </div>
          <InputWidthdraw icon={iconWallet} placeholder="20">
            <Label>Amount in USD:</Label>
          </InputWidthdraw>
          <InputWidthdraw icon={iconCoint} placeholder="abjl726stok">
            <Label>Receiving Wallet Address:</Label>
          </InputWidthdraw>
          <Button classButton="mx-auto mt-[43px]">
            <Image src={iconWithdraw} alt="withdraw" /> Withdrawal
          </Button>
        </form>
        <ParagraphBottom classP="mt-[31px]">
          You will receive the Dollar amount in the crypto selected. Need
          assistance? Contact us via Live Chat for instant support.
        </ParagraphBottom>
      </div>
    </section>
  );
}
