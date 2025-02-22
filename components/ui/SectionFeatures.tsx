"use client";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

import CardFeature from "../CardFeature";
import Button from "../Button";
import iconSent from "@/public/assets/icons/icon_sent.svg";

export default function SectionFeatures() {
  const [emblaRef] = useEmblaCarousel();
  return (
    <section className="bg-gradient-to-b from-black to-[#450505] py-[99px]">
      <div className="mx-auto max-w-[1118px]">
        <p className="font-700 mx-auto mb-[25px] w-[218px] text-center text-[40px] leading-[52px] md:w-full">
          Enjoy our Unique Features
        </p>
        <div
          className="ml-[35px] overflow-hidden py-[23px] lg:hidden"
          ref={emblaRef}
        >
          <div className="flex">
            <CardFeature />
            <CardFeature />
            <CardFeature />
            <CardFeature />
          </div>
        </div>
        <div className="hidden grid-cols-2 lg:grid">
          <CardFeature />
          <CardFeature />
          <CardFeature />
          <CardFeature />
          <CardFeature />
          <CardFeature />
        </div>
        <Button classButton="mx-auto mt-[20px] h-[70px]">
          <Image src={iconSent} alt="sent" />
          JOIN NOW
        </Button>
      </div>
    </section>
  );
}
