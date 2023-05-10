"use client"

import Image from "next/image"
import { Tilt } from "react-tilt";
import "../globals.css";
import Fields from "./Fields";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 5, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: false, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  glare: true,
};
const Body = () => {
  return (
    <div>
        <div className="flex pt-[15rem] relative flex-col md:items-start items-center gap-3">
        <Image
          width={100}
          height={100}
          id="animated-div"
          src="/shape_4.246bd734.png"
          className="absolute w-28 -z-10 -bottom-14 -left-5"
          alt=""
          style={{ transform: "translate(-4.87123%, -6.02134%)" }}
        />
        <Image
          width={100}
          height={100}
          id="animated-div"
          src="/shape_5.2a6b0b0e.png"
          className="absolute w-20 -bottom-32 left-[18rem]"
          alt=""
          style={{ transform: "translate(-4.87123%, -6.02134%)" }}
        />
        <Image
          width={100}
          height={100}
          id="animated-div"
          src="/shape_6.c90c5d81.png"
          className="absolute hover:scale-110 transition-transform duration-300 z-40 w-16 sm:w-32 md:bottom-[-24rem] bottom-[-15rem] right-[22rem] "
          alt=""
          style={{ transform: "translate(-4.87123%, -6.02134%)" }}
        />
        <Image
          width={100}
          height={100}
          id="animated-div"
          src="/shape_7.089005eb.png"
          className="absolute w-12 bottom-0 right-0"
          alt=""
          style={{ transform: "translate(-4.87123%, -6.02134%)" }}
        />
        <Image
          width={100}
          height={100}
          id="animated-div"
          alt=""
          src="/shape_1.eb840b22.png"
          className="md:w-28 hover:scale-125 duration-300 transition-transform w-16 absolute top-[7rem] left-12"
          style={{ transform: "translate(-4.87123%, -6.02134%)" }}
        />
        <Image
          width={100}
          height={100}
          id="animated-div"
          alt=""
          src="/shape_2.8cd526c9.png"
          className="w-14 absolute hover:scale-125 duration-300 transition-transform top-[5rem] sm:left-[36rem]"
          style={{ transform: "translate(-4.87123%, -6.02134%)" }}
        />
        <div className="flex items-center gap-2 text-5xl">
          <div>👋</div>
          <div className="text-[rgb(54,91,254)] flex gap-1 items-center">
            <span className="hover:scale-150 cursor-pointer duration-500 backbone text-6xl transition-transform">
              H
            </span>
            <span className="hover:scale-150 cursor-pointer duration-500 backbone text-6xl transition-transform">
              i
            </span>
            <span className="hover:scale-150 cursor-pointer duration-500 backbone text-6xl transition-transform">
              F
            </span>
            <span className="hover:scale-150 cursor-pointer duration-500 backbone text-6xl transition-transform">
              o
            </span>
            <span className="hover:scale-150 cursor-pointer duration-500 backbone text-6xl transition-transform">
              l
            </span>
            <span className="hover:scale-150 cursor-pointer duration-500 backbone text-6xl transition-transform">
              k
            </span>
            <span className="hover:scale-150 cursor-pointer duration-500 backbone text-6xl transition-transform">
              s
            </span>
            <span className="hover:scale-150 cursor-pointer duration-500 backbone text-6xl transition-transform">
              &nbsp;!
            </span>
          </div>
        </div>
        <div className="flex gap-3 flex-col">
          <div className="text-white text-5xl text-center font-bold">
            I`m Mugisha Yves
          </div>
          <div className="text-[rgb(54,91,254)] text-2xl">
            Front-end Engineer
          </div>
          <div className="text-gray-300 md:max-w-[35rem] md:text-left text-center font-light text-xl leading-8">
            Specialized in front-end development but also like trying out other{" "}
            <br />
            technologies in order to become more flexible.
          </div>
          <div className="flex items-center gap-10">
            <a
              className="bg-[rgb(18,79,223)] hover:scale-125 duration-1000 transition-transform cursor-pointer font-bold rounded-tl-[16px] text-white px-7 py-3 rounded-br-[16px]"
              href="/#about"
            >
              KNOW ME
            </a>
            <a className="text-gray-300 text-xl" href="/">
              Check My Resume
            </a>
          </div>
        </div>
        <Fields />
      </div>
    </div>
  )
}

export default Body