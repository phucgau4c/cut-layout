import Image from "next/image";

type IconDownload = {
  icon: string;
  alt: string;
  classCss?: string;
};

export default function IconDownload({ icon, alt, classCss }: IconDownload) {
  return <Image className={`${classCss}`} src={icon} alt={alt} />;
}
