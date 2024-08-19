import chipImage from "@/public/assets/imgs/image_cactus-removebg-preview6.svg";
import Image from "next/image";

export default function CardFeature() {
  return (
    <div
      className="mx-auto flex h-[470px] w-full max-w-[490px] flex-col items-center justify-center rounded-l-[50px] bg-gradient-to-r from-[#ff0000]/30 lg:m-[10px] lg:h-[296px] lg:w-[532px] lg:flex-row"
      style={{ flex: "0 0 80%" }}
    >
      <Image src={chipImage} alt="chip" className="mb-[5px]" />
      <div className="w-[260px] lg:ml-[10px]">
        <p className="border-b-[1px] border-[#fff] font-pathway text-[32px] font-[400]">
          Instant Transactions
        </p>
        <p className="text-[20px] font-[400]">
          Enjoy seamless gaming with instant deposits and withdrawals. No delays
          in play, ensuring a smooth, swift gaming experience.
        </p>
      </div>
    </div>
  );
}
