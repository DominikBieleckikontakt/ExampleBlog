"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { iconsData, navLinks } from "@/constants";

const NavBar = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className="flex md:justify-between p-8 md:px-24">
      <ul className="flex md:gap-24 max-md:justify-around max-md:w-full">
        {navLinks.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              className={`${
                item.href === pathname && "font-semibold"
              } hover:text-primary/70 duration-300`}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="gap-10 items-center hidden md:flex">
        {iconsData.map((item, index) => (
          <Link key={index} href={item.link} target="_blank">
            <Image
              width={24}
              height={24}
              className={`hover:scale-110 duration-300 cursor-pointer ${
                item.alt.includes("Tiktok") && "size-6"
              }`}
              src={item.src}
              alt={item.alt}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
