import iconBitcoin from "@/public/assets/icons/icon_bitcoin.svg";
import icon from "@/public/assets/icons/icon_download.svg";
import Image from "next/image";
import poligon from "@/public/assets/icons/icon_arrowDown.svg";

import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { useState } from "react";

const people = [
  { id: 1, name: "Bitcoin", image: iconBitcoin },
  {
    id: 5,
    name: "Bitcoin",
    image: iconBitcoin,
  },
];

export default function Example() {
  const [selected, setSelected] = useState(people[1]);

  return (
    <div className="mx-auto mt-[57px] h-[56px] w-[332px]">
      <p className="mb-[16px] font-pathway text-[32px] font-[400]">
        Choose Payment Method
      </p>
      <Listbox value={selected} onChange={setSelected}>
        <div className="flex h-[56px] w-[332px] items-center justify-between rounded-r-[58px] rounded-bl-[100px] bg-gradient-to-r from-[#601414] to-[#9a0000] pr-[17px]">
          <ListboxButton className="flex pl-[35px]">
            <Image src={selected.image} alt="bitcoin" />
            <p className="my-auto ml-1">{selected.name}</p>
          </ListboxButton>
          <Image src={poligon} alt="poligon" />
        </div>
        <ListboxOptions anchor="bottom" className="mt-[20px]">
          {people.map((person) => (
            <ListboxOption
              key={person.id}
              value={person}
              className="flex h-[50px] rounded-[50px] border from-[#601414] to-[#9a0000] data-[focus]:bg-gradient-to-r"
            >
              <Image src={person.image} alt="bitcoin" />
              <p>{person.name}</p>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  );
}
