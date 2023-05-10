"use client";

const Footer = () => {
  return (
    <div className="bg-[rgb(23,26,35)] text-sm overflow-hidden text-gray-500 px-20 md:flex-row items-center md:gap-0 gap-6 flex-col flex justify-between w-full py-12 ">
      <div className="upppercase font-bold">
        COPYRIGHT © 2022 ALL RIGHTS RESERVED
      </div>
      <div className="flex gap-8">
        <a className="uppercase font-bold cursor-pointer" href="/">
          <span> Home</span>
        </a>
        <a className="uppercase font-bold cursor-pointer" href="/#about">
          <span> About</span>
        </a>
        <a className="uppercase font-bold cursor-pointer" href="/works">
          <span> Works</span>
        </a>
        <a
          className="uppercase font-bold  opacity-50 cursor-not-allowed relative"
          href="/#kitchen"
        >
          <span> Kitchen</span>
          <div className="absolute text-xs text-[white] top-[-1.5rem] -right-6 px-2 py-1 p-1 rounded-tl-md rounded-br-md bg-[rgb(55,91,254)]">
            SOON
          </div>
        </a>
        <a className="uppercase font-bold cursor-pointer" href="/works#contact">
          <span> Contact</span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
