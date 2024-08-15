import Image from "next/image";

type CardProps = {
  image: string;
  alt: string;
  title: string;
};

export default function CardPlay({ image, alt, title }: CardProps) {
  return (
    <div className="m-auto flex h-[280px] w-[174px] flex-col items-center justify-center bg-gradient-to-b from-[#6B0606] to-[#170303]">
      <Image src={image} alt={alt} />
      <p className="text-[32px] font-[400]">{title}</p>
    </div>
  );
}
