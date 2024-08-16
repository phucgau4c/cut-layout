import iconBitcoin from "@/public/assets/icons/icon_bitcoin.svg";
import Image from "next/image";
import React from "react";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export default function SelectCoin() {
  return <Select options={options} />;
}
