import logo from "@/public/assets/imgs/logo.svg";
import Image from "next/image";
import Menu from "../Menu";

export default function Header() {
  return (
    <header className="flex h-[111px] items-center justify-between bg-black pl-[19px] pr-[23px]">
      <Image
        src={logo}
        alt="logo"
        width={231}
        height={64}
        className="basis-1/4"
      />
      <Menu />
      <div className="hidden basis-2/4 justify-between md:flex">
        <a href="">About us</a>
        <a href="">Quick Deposit</a>
        <a href="">Quick Withdrawal</a>
      </div>
    </header>
  );
}
