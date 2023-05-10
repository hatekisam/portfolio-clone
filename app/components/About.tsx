"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "../globals.css";

const About = () => {
  return (
    <div
      id="about"
      className="flex pt-[25rem] pb-[5rem] md:gap-10 md:flex-row flex-col items-center relative justify-between"
    >
      <div className="w-[28rem] relative">
        <div className="md:hidden flex absolute -top-24 md:items-start items-center md:w-auto w-full gap-2 flex-col">
          <div className="text-[rgb(54,91,254)] backbone text-2xl">Know Me</div>
          <div className="font-bold text-5xl text-white">About</div>
        </div>
        <div className="imageToEdit">
          <div></div>
          <img className="min-w-full" src="/profile.jpeg" />
        </div>
        <div className=" absolute uppercase rounded-tl-[20px] w-[9rem] right-0 overflow-y-hidden sm:-right-14 -bottom-10 rounded-br-[20px] bg-[rgb(46,77,218)] outline-none p-2">
          <div className="carousel carousel-slider" style={{ width: "100%" }}>
            <div className="flex gap-4 flex-col pt-7 items-center justify-center">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                color="white"
                height="50"
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "white" }}
              >
                <path d="M8 7.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1z"></path>
                <path d="M8 16a.5.5 0 0 1-.5-.5v-1.293l-.646.647a.5.5 0 0 1-.707-.708L7.5 12.793v-1.51l-2.053-1.232-1.348.778-.495 1.85a.5.5 0 1 1-.966-.26l.237-.882-1.12.646a.5.5 0 0 1-.5-.866l1.12-.646-.883-.237a.5.5 0 1 1 .258-.966l1.85.495L5 9.155v-2.31l-1.4-.808-1.85.495a.5.5 0 1 1-.259-.966l.884-.237-1.12-.646a.5.5 0 0 1 .5-.866l1.12.646-.237-.883a.5.5 0 1 1 .966-.258l.495 1.849 1.348.778L7.5 4.717v-1.51L6.147 1.854a.5.5 0 1 1 .707-.708l.646.647V.5a.5.5 0 0 1 1 0v1.293l.647-.647a.5.5 0 1 1 .707.708L8.5 3.207v1.51l2.053 1.232 1.348-.778.495-1.85a.5.5 0 1 1 .966.26l-.236.882 1.12-.646a.5.5 0 0 1 .5.866l-1.12.646.883.237a.5.5 0 1 1-.26.966l-1.848-.495-1.4.808v2.31l1.4.808 1.849-.495a.5.5 0 1 1 .259.966l-.883.237 1.12.646a.5.5 0 0 1-.5.866l-1.12-.646.236.883a.5.5 0 1 1-.966.258l-.495-1.849-1.348-.778L8.5 11.283v1.51l1.354 1.353a.5.5 0 0 1-.707.708l-.647-.647V15.5a.5.5 0 0 1-.5.5zm2-6.783V6.783l-2-1.2-2 1.2v2.434l2 1.2 2-1.2z"></path>
              </svg>
              <div className="font-bold text-sm text-white text-center">
                Love <br />
                Snowflake
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-3 xl:max-w-[42rem] w-full sm:max-w-[60%] flex-col">
        <div className="md:flex hidden gap-2 flex-col">
          <div className="text-[rgb(54,91,254)] backbone text-5xl">Know Me</div>
          <div className="font-bold text-5xl text-white">About</div>
        </div>
        <div className="text-gray-300 flex flex-col gap-4 text-xl leading-8">
          <p className="md:text-left text-center">
            I'm a Front-End Developer located in Rwanda. I have a serious
            passion for UI effects, animations and creating intuitive, dynamic
            user experiences.
          </p>
          <p className="md:text-left text-center">
            My main experience is in front-end development but I also have a
            passion for design. Given that producing a modern website requires
            the combination of design, server technology, and the layer that
            users interacts with. I believe having experience in both design and
            development allows for making the most optimal user experiences.
          </p>
          <p className="md:text-left text-center">
            I've built products for companies and businesses around the globe
            ranging from marketing websites to complex solutions and enterprise
            apps with focus on fast, elegant and accessible user experiences.
            I'm{" "}
          </p>
          <div className="flex gap-5 mt-4 flex-col">
            <div className="font-bold text-2xl text-white">Best Skills</div>
            <div className="flex items-center gap-4 flex-wrap">
              <div className="rounded-tl-[20px] hover:scale-110 transition-all duration-500 hover:bg-[rgb(54,91,254)] text-white bg-[rgb(37,43,61)] cursor-pointer px-4 py-3 rounded-br-[20px]">
                React
              </div>
              <div className="rounded-tl-[20px] hover:scale-110 transition-all duration-500 hover:bg-[rgb(54,91,254)] text-white bg-[rgb(37,43,61)] cursor-pointer px-4 py-3 rounded-br-[20px]">
                Vue
              </div>
              <div className="rounded-tl-[20px] hover:scale-110 transition-all duration-500 hover:bg-[rgb(54,91,254)] text-white bg-[rgb(37,43,61)] cursor-pointer px-4 py-3 rounded-br-[20px]">
                React Native
              </div>
              <div className="rounded-tl-[20px] hover:scale-110 transition-all duration-500 hover:bg-[rgb(54,91,254)] text-white bg-[rgb(37,43,61)] cursor-pointer px-4 py-3 rounded-br-[20px]">
                Flutter
              </div>
              <div className="rounded-tl-[20px] hover:scale-110 transition-all duration-500 hover:bg-[rgb(54,91,254)] text-white bg-[rgb(37,43,61)] cursor-pointer px-4 py-3 rounded-br-[20px]">
                NEXT
              </div>
              <div className="rounded-tl-[20px] hover:scale-110 transition-all duration-500 hover:bg-[rgb(54,91,254)] text-white bg-[rgb(37,43,61)] cursor-pointer px-4 py-3 rounded-br-[20px]">
                Laravel
              </div>
              <div className="rounded-tl-[20px] hover:scale-110 transition-all duration-500 hover:bg-[rgb(54,91,254)] text-white bg-[rgb(37,43,61)] cursor-pointer px-4 py-3 rounded-br-[20px]">
                JAVA
              </div>
              <div className="rounded-tl-[20px] hover:scale-110 transition-all duration-500 hover:bg-[rgb(54,91,254)] text-white bg-[rgb(37,43,61)] cursor-pointer px-4 py-3 rounded-br-[20px]">
                KOTLIN
              </div>
              <div className="rounded-tl-[20px] hover:scale-110 transition-all duration-500 hover:bg-[rgb(54,91,254)] text-white bg-[rgb(37,43,61)] cursor-pointer px-4 py-3 rounded-br-[20px]">
                SWIFT
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
