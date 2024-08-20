import Image from "next/image";

type IconDownload = {
  icon: string;
  alt: string;
  classCss?: string;
};

export default function IconDownload({ icon, alt, classCss }: IconDownload) {
  return (
    <Image
      className={`${classCss} md:m-[5px] lg:min-w-[200px]`}
      src={icon}
      alt={alt}
    />
  );
}
