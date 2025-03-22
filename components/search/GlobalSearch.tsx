import Image from "next/image";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/moving-border";

const GlobalSearch = () => {
  return (
    <Button
      borderRadius="1.75rem"
      className="relative w-full max-w-[600px] max-lg:hidden bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
    >
      <div className=" relative flex min-h-[56px] grow items-center gap-1 rounded-xl px-4 ">
        <Image
          src={"/assets/icons/search.svg"}
          alt={"search"}
          width={24}
          height={24}
          className="cursor-pointer"
        />
        <Input
          type="text"
          placeholder="search Globally "
          className="paragraph-regular bg-light-800 no-focus placeholder text-black border-none shadow-none outline-none border-collapse"
        />
      </div>
    </Button>
  );
};

export default GlobalSearch;
