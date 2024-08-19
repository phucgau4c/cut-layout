import Image from "next/image";

type InputProps = {
  icon: string;
  placeholder: string;
  classInput?: string;
  children: React.ReactNode;
};

export default function InputWidthdraw({
  icon,
  placeholder,
  classInput,
  children,
}: InputProps) {
  return (
    <div className="relative mt-[30px]">
      {children}
      <input
        type="text"
        className={`${classInput} mt-16px h-[56px] w-full rounded-r-[58px] rounded-bl-[100px] bg-gradient-to-r from-[#fff] to-[#ffd3d3] py-[10px] pl-[80px] text-[20px] font-[400] text-[#d7d7d7] placeholder-[#d7d7d7]`}
        placeholder={placeholder}
      />
      <Image
        src={icon}
        alt="wallet"
        className="absolute bottom-[10px] left-[35px]"
      />
    </div>
  );
}
