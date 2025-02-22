import Image from "next/image";

import imageMail from "@/public/assets/imgs/image_mail.svg";
import iconMail from "@/public/assets/icons/icon_envelope-dots.svg";
import mail from "@/public/assets/icons/Circled Envelope.svg";
import iconMailBtn from "@/public/assets/icons/Email.svg";
import imgWoman from "@/public/assets/imgs/image_woman2.svg";

import InputWidthdraw from "../InputWithdraw";
import Button from "../Button";

export default function SectionStay() {
  return (
    <section className="bg-gradient-to-l from-[#e70404] to-[#850202] px-[30px] pb-[88px] pt-[49px] lg:flex lg:items-center lg:justify-center lg:py-0 lg:pt-[108px]">
      <div className="relative h-[290px] lg:hidden">
        <Image
          src={imageMail}
          width={290}
          height={290}
          alt="mail"
          className="absolute left-0 right-0 m-auto"
        />
      </div>
      <Image
        src={imageMail}
        width={290}
        height={290}
        alt="mail"
        className="hidden lg:block"
        style={{ width: "30%", height: "auto", maxWidth: "50vh" }}
      />
      <div className="mt-[-50px]">
        <p className="text-center text-[40px] font-[700]">Stay in the loop</p>
        <p className="mx-auto mb-[25px] max-w-[580px] text-[20px] font-[400] leading-[36px] md:text-center">
          Never miss out on the latest news, promotions, and exiting events!
          Sign up below to receive updates directly to your inbox.
        </p>
        <div>
          <div className="lg:flex lg:justify-center">
            <Image
              src={iconMail}
              alt="mail"
              width={33}
              height={30}
              className="mx-auto lg:mx-0"
            />
            <p className="text-center text-[20px] font-[700] lg:mx-[10px]">
              Stay Connected:
            </p>
            <p className="text-center text-[20px] font-[400]">
              example@aceloungeclub.com
            </p>
          </div>

          <form action="">
            <InputWidthdraw icon={mail} placeholder="youremail@gmail.com" />
            <div className="relative mx-auto mt-[26px] max-w-[480px]">
              <textarea
                className="h-[182px] w-full rounded-r-[58px] rounded-bl-[58px] bg-gradient-to-r from-[#fff] to-[#ffd3d3] py-[10px] pl-[80px] text-[20px] font-[400] text-[#d7d7d7] placeholder-[#d7d7d7]"
                placeholder="Text message..."
              />
              <Image
                src={mail}
                alt="mail"
                className="absolute left-[35px] top-[12px]"
              />
            </div>
            <Button classButton="mx-auto mt-[26px]">
              <Image src={iconMailBtn} alt="send" className="" />
              Send
            </Button>
          </form>
        </div>
      </div>
      <Image
        src={imgWoman}
        alt="woman"
        style={{ width: "30%", height: "auto", maxWidth: "50vh" }}
        className="hidden lg:block"
      />
    </section>
  );
}
