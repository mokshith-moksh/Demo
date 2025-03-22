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
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  width={20}
                  height={20}
                  className={`${isActive ? " " : "invert-colors"}`}
                />
                <p className={`${isActive ? "base-bold" : "base-medium"}`}>
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
              src="/assets/images/site-logo.svg"
              width={23}
              height={23}
              alt="DevFlow"
            />

            <p className="h2-bold text-dark100_light900 font-spaceGrotesk">
              Dev <span className="text-primary-500">OverFlow</span>
            </p>
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
