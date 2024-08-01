import { iconsData } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-24 max-w-[45rem] mx-auto">
      <hr />
      <div className="flex justify-center mt-10">
        <div className="flex gap-12 my-5 items-center justify-center">
          {iconsData.map((item, index) => (
            <Link href={item.link} key={index} target="_blank">
              <Image
                src={item.src}
                alt={item.alt}
                width={36}
                height={36}
                className={`hover:scale-110 duration-300 cursor-pointer ${
                  item.alt.includes("Tiktok") && "size-8"
                }`}
              />
            </Link>
          ))}
        </div>
      </div>
      <p className="text-center font-light mb-16">
        Apperance of the website was inspired on{" "}
        <Link
          className="font-semibold hover:text-primary/80 duration-300"
          href="https://makelifeeasier.pl"
          target="_blank"
        >
          makelifeeasier
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
