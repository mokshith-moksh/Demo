"use client";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "@/constants/constants";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";

const NavContent = () => {
  const path = usePathname();
  return (
    <div className="flex h-full flex-col gap-5 pt-16">
      {sidebarLinks.map((item) => {
        const isActive =
          (path.includes(item.route) && item.route.length > 1) ||
          path === item.route;
        return (
          <div key={item.route} className="relative flex h-full flex-col">
            <SheetClose asChild>
              <Link
                href={item.route}
                className={` ${
                  isActive ? "primary-gradient text-light-900 rounded-lg " : ""
                } flex items-center justify-start gap-4 bg-transparent p-4  `}
              >
                <p
                  className={`${
                    isActive ? "base-bold" : "base-medium"
                  } text-lg border-b-2 border-black`}
                >
                  {item.label}
                </p>
              </Link>
            </SheetClose>
          </div>
        );
      })}
    </div>
  );
};

const MobileNavbar = () => {
  return (
    <div className="sm:hidden ">
      <Sheet>
        <SheetTrigger asChild>
          <GiHamburgerMenu className="w-8 h-8" />
        </SheetTrigger>
        <SheetContent
          side={"left"}
          className="background-light900_dark200 border-none"
        >
          <Link href="/" className="flex gap-2">
            <Image
              src="https://education-in-russia.com/img/bottom-logo.fd354e12.svg"
              width={130}
              height={130}
              alt="DevFlow"
            />
          </Link>
          <div>
            <SheetClose asChild>
              <NavContent />
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavbar;
