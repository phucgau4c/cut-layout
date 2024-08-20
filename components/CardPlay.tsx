import Image from "next/image";

type CardProps = {
  image: string;
  alt: string;
  title: string;
};

export default function CardPlay({ image, alt, title }: CardProps) {
  return (
    <div className="mb-[14px] ml-[14px] flex h-[280px] min-w-[174px] max-w-[265px] flex-col items-center justify-center bg-gradient-to-b from-[#6B0606] to-[#170303] px-[20px] lg:m-[5px] lg:w-full">
      <Image src={image} alt={alt} />
      <p className="text-[32px] font-[400]">{title}</p>
    </div>
  );
}
