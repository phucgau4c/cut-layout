import Image from "next/image";

import InputForm from "../InputForm";
import Button from "../Button";
import iconSend from "@/public/assets/icons/icon_sent.svg";

export default function FormJoin() {
  return (
    <div className="h-[502px] bg-gradient-to-b from-[#000] to-[#450505] pt-[23px]">
      <form className="mx-auto flex h-[415px] w-[331px] flex-col items-center justify-around rounded-[20px] border-[2px] bg-[#790000] bg-gradient-to-b from-[#000]/50 to-[#fff]/0 px-[20px] py-[30px] text-white">
        <p className="text-[32px] font-[700]">Join the club</p>
        <InputForm
          iconLink="/assets/icons/icon_person.svg"
          placeHolder="FullName"
        />
        <InputForm
          iconLink="/assets/icons/icon_email.svg"
          placeHolder="Email"
        />
        <InputForm
          iconLink="/assets/icons/icon_smartphone.svg"
          placeHolder="Phone"
        />
        <Button classButton="h-[56px]">
          <Image src={iconSend} alt="join now" /> JOIN NOW!
        </Button>
      </form>
    </div>
  );
}
