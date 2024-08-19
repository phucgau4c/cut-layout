import Image from "next/image";

import Button from "../Button";
import InputForm from "../InputForm";
import iconSend from "@/public/assets/icons/icon_sent.svg";

export default function FormLg() {
  return (
    <div className="mt-[100px] hidden min-w-[290px] max-w-[460px] rounded-[20px] bg-black/60 p-[20px] lg:mr-[20px] lg:block">
      <form className="">
        <p className="mb-[20px] text-center text-[32px] font-[700]">
          Join the club
        </p>
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
        <Button classButton="h-[56px] mx-auto">
          <Image src={iconSend} alt="join now" /> JOIN NOW!
        </Button>
      </form>
    </div>
  );
}
