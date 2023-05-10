"use client";

import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full flex items-center xl:pt-14 pt-5 justify-between">
      <div className="relative cursor-pointer group w-fit">
        <Image
          src="/logo.svg"
          alt="logo"
          width={20}
          height={20}
          className="group-hover:rotate-90 duration-700 delay-100 transition-transform undefined"
          style={{ width: "75px" }}
        />
        <div className="absolute text-white  top-[calc(30%+3px)] text-lg  left-[calc(25%+6px)]  font-[900]">
          ME
        </div>
      </div>
      <div className="sm:hidden relative flex">
        <div className="bg-[rgb(35,40,54)] rounded-tl-[16px] cursor-pointer p-2 text-gray-400 rounded-br-[16px]">
          <svg
            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-akl4zk"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="MenuIcon"
          >
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
          </svg>
        </div>
      </div>
      <div className="sm:flex hidden items-center text-white font-bold gap-10">
        <a className="uppercase cursor-pointer" href="/">
          <span> Home</span>
        </a>
        <a className="uppercase cursor-pointer" href="/#about">
          <span> About</span>
        </a>
        <a className="uppercase cursor-pointer" href="/#works">
          <span> Works</span>
        </a>
        <a
          className="uppercase  opacity-50 cursor-not-allowed relative"
          href="/#kitchen"
        >
          <span> Kitchen</span>
          <div className="absolute text-xs top-[-1.5rem] -right-6 px-2 py-1 rounded-tl-md rounded-br-md bg-[rgb(55,91,254)]">
            SOON
          </div>
        </a>
        <a className="uppercase cursor-pointer" href="/#contact">
          <span> Contact</span>
        </a>
      </div>
    </div>
  );
};

export default Header;
