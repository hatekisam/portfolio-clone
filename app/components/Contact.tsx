import React from "react";
import {BsGithub} from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"
import {BiCopy} from "react-icons/bi"
import CopyKeyboard from "./CopyKeyboard";
import ContactForm from "./ContactForm";
const Contact = () => {
  return (
    <div
      id="contact"
      className="bg-[rgb(35,40,54)] pt-[15rem] w-full pb-10 mt-[10rem]"
    >
      <div className="max-w-[100rem] relative sm:px-20 flex flex-col gap-16 mx-auto">
        <div className="absolute -top-[22rem] left-[4%] right-[1%] flex sm:flex-row flex-col items-center justify-center sm:gap-0 gap-5 sm:justify-between px-10 w-[87%] rounded-tl-[40px] rounded-br-[40px] h-[15rem]">
          <div className="flex pl-10 z-50 gap-3 flex-col">
            <div className="text-white font-bold text-3xl">
              DO YOU HAVE A PROJECT
            </div>
            <div className="text-[rgb(127,142,234)] text-xl font-medium">
              I`m ready for new projects
            </div>
          </div>
          <a
            className="rounded-tl-[13px] font-bold hover:scale-110 transition-transform duration-700 cursor-pointer z-50 text-white px-7 py-3 text-xl bg-[rgb(43,107,233)] rounded-br-[13px]"
            href="/#contact"
          >
            LET'S TALK
          </a>
          <img
            src="/_next/static/media/contact_pattern.0b1bba06.webp"
            className=" w-full h-[15rem] opacity-80 absolute rounded-tl-[40px] rounded-br-[40px] object-cover z-0 object-top"
            alt=""
          />
          <div className="bg-[#1c318ed5] rounded-tl-[40px] rounded-br-[40px] absolute top-0 z-40 w-full h-full "></div>
        </div>
        <div className=" flex flex-col items-center ">
          <div className="text-4xl backbone mb-3 text-[rgb(54,91,254)]">
            Let`s Talk
          </div>
          <div className="font-bold text-6xl text-white">Contact</div>
        </div>
        <div className="flex lg:flex-row flex-col w-full items-start gap-14">
          <ContactForm />
          <div className="lg:w-2/3 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <a
                href=""
                className="flex w-full h-fit rounded-lg hover:bg-[rgb(23,26,35)] duration-500 transition-all px-3 py-5 text-white items-start gap-3"
              >
                <BsGithub size={40}/>
                <div className="flex flex-col">
                  <div className="font-semibold text-lg">Github</div>
                  <div className="text-gray-500">mugishayves</div>
                </div>
              </a>
              <a
                href=""
                className="flex w-full h-fit rounded-lg hover:bg-[rgb(23,26,35)] duration-500 transition-all px-3 py-5 text-white items-start gap-3"
              >
                <BsLinkedin size={40}/>
                <div className="flex flex-col">
                  <div className="font-semibold text-lg">Linkedin</div>
                  <div className="text-gray-500">mugishayves</div>
                </div>
              </a>
              <a
                href=""
                className="flex w-full h-fit rounded-lg hover:bg-[rgb(23,26,35)] duration-500 transition-all px-3 py-5 text-white items-start gap-3"
              >
                <BsGithub size={40}/>
                <div className="flex flex-col">
                  <div className="font-semibold text-lg">Github</div>
                  <div className="text-gray-500">mugishayves</div>
                </div>
              </a>
              <a
                href=""
                className="flex w-full h-fit rounded-lg hover:bg-[rgb(23,26,35)] duration-500 transition-all px-3 py-5 text-white items-start gap-3"
              >
                <BsLinkedin size={40}/>
                <div className="flex flex-col">
                  <div className="font-semibold text-lg">Linkedin</div>
                  <div className="text-gray-500">mugishayves</div>
                </div>
              </a>
              <a
                href=""
                className="flex w-full h-fit rounded-lg hover:bg-[rgb(23,26,35)] duration-500 transition-all px-3 py-5 text-white items-start gap-3"
              >
                <BsGithub size={40}/>
                <div className="flex flex-col">
                  <div className="font-semibold text-lg">Github</div>
                  <div className="text-gray-500">mugishayves</div>
                </div>
              </a>
              <a
                href=""
                className="flex w-full h-fit rounded-lg hover:bg-[rgb(23,26,35)] duration-500 transition-all px-3 py-5 text-white items-start gap-3"
              >
                <BsLinkedin size={40}/>
                <div className="flex flex-col">
                  <div className="font-semibold text-lg">Linkedin</div>
                  <div className="text-gray-500">mugishayves</div>
                </div>
              </a>
            </div>
            <CopyKeyboard text="yvesmugisha18900@gmail.com"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
