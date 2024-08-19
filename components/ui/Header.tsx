import logo from "@/public/assets/imgs/logo.svg";
import Image from "next/image";
import Menu from "../Menu";
import ButtonDownload from "../ButtonDownload";

export default function Header() {
  return (
    <header className="w-full bg-black pl-[19px] pr-[23px] lg:fixed lg:top-0 lg:z-20 lg:bg-black/70">
      <div className="mx-auto flex h-[111px] max-w-[1151px] items-center justify-between">
        <Image
          src={logo}
          alt="logo"
          width={231}
          height={64}
          className="basis-1/4"
        />
        <Menu />
        <div className="hidden basis-2/4 items-center justify-between md:flex">
          <a href="">About us</a>
          <a href="">Quick Deposit</a>
          <a href="">Quick Withdrawal</a>
          <div className="hidden lg:block">
            <ButtonDownload />
          </div>
        </div>
      </div>
    </header>
  );
}
