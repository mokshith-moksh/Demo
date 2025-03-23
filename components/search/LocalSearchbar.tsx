"use client";
import Image from "next/image";
import React from "react";
import { Input } from "@/components/ui/input";
interface CustomInputProps {
  route: string;
  iconposition: string;
  imgSrc: string;
  placeholder: string;
  otherClasses: string;
}
const LocalSearchbar = ({
  iconposition,
  imgSrc,
  placeholder,
  otherClasses,
}: CustomInputProps) => {
  return (
    <div className="relative w-full ">
      <div
        className={`background-light800_darkgradient relative flex min-h-[56px] flex-1 grow items-center gap-1 rounded-xl px-4 ${otherClasses}`}
      >
        {iconposition === "left" && (
          <Image
            src={imgSrc}
            alt={"search"}
            width={24}
            height={24}
            className="cursor-pointer"
          />
        )}
        <Input
          type="text"
          placeholder={placeholder}
          onChange={() => {}}
          className={`paragraph-regular no-focus placeholder background-light800_darkgradient border-none shadow-none outline-none `}
        />
        {iconposition === "right" && (
          <Image
            src={imgSrc}
            alt={"search"}
            width={24}
            height={24}
            className="cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};

export default LocalSearchbar;
