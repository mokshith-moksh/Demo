"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNavbar from "./MobNav";
import GlobalSearch from "../search/GlobalSearch";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <nav className="flex bg-[#feffff] border-b-2 border-b-black justify-between shadow-light-300 fixed z-50 w-full gap-5 p-3 dark:shadow-none sm:px-12 rounded-b-lg">
      <Link href="/" className="flex gap-2">
        <Image
          src="https://education-in-russia.com/img/bottom-logo.fd354e12.svg"
          width={200}
          height={100}
          alt="DevFlow"
        />
      </Link>
      <GlobalSearch />
      <div className="gap-12 justify-center items-center text-black hidden lg:flex">
        <Link
          href="/"
          className="nav-link hover:text-blue-600 transition-all duration-300"
        >
          Education in Russia
        </Link>
        <Link
          href="/"
          className="nav-link hover:text-blue-600 transition-all duration-300"
        >
          Life in Russia
        </Link>
        <Link
          href="/"
          className="nav-link hover:text-blue-600 transition-all duration-300"
        >
          What to do
        </Link>
        <Link
          href="/"
          className="nav-link hover:text-blue-600 transition-all duration-300"
        >
          Why Russia
        </Link>
      </div>

      <div className="flex justify-between gap-5 pt-2">
        <div className="left-4">
          <Button>Login</Button>
        </div>
        <MobileNavbar />
      </div>

      {/* mobileNaviagtionBar */}
    </nav>
  );
};

export default Navbar;

<style jsx>{`
  .nav-link {
    transition: all 0.3s ease;
  }

  .nav-link:hover {
    transform: scale(1.05); /* Optional: Slightly scale up the link on hover */
  }
`}</style>;
