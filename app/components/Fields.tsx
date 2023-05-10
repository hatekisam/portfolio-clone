"use client";

import { Tilt } from "react-tilt";
const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    2000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.01,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     false,   // Set a transition on enter/exit.
	axis:           "Y",   // What axis should be disabled. Can be X or Y.
	reset:          false,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

const Fields = () => {
  return (
    <div
      className="absolute w-1/2 top-[20rem] h-[30rem] z-50 md:flex hidden justify-center items-center right-0"
      style={{ transform: "translate(-4.09124%, -3.62805%)" }}
    >
      <Tilt options={defaultOptions} style={{ height: "100vh", width: "100vw" }}>
      {/* <img
          src="/center_box_bg.fbe10233.png"
          className="xl:w-[14rem] w-[17vw]"
        /> */}
        <div className=" w-[600px] h-[500px] flex justify-center items-center relative">
          <div className="bg-[blue] w-[200px] h-[200px]"></div>
          <div className="absolute flex-col hover:scale-125 duration-500 transition-transform h-[12rem] w-[15vw] xl:w-[12rem] flex items-center justify-center gap-5 top-8 left-32">
            <img src="/web_animation.f097ea66.svg" className="w-12 z-50" />
            <div className="z-50 text-lg text-white font-bold max-w-[5rem] text-center">
              Web Animation
            </div>
            <img
              src="/web_animation_bg.244412b4.png"
              className="absolute h-full w-full z-0"
            />
          </div>
          <div className="absolute flex-col hover:scale-125 duration-500 transition-transform h-[15rem] w-[20vw] xl:w-[15rem] flex items-center justify-center gap-5 -top-10 -right-3">
            <img
              src="/front_end_icon.6b883b32.svg"
              className="xl:w-20 w-16 z-50"
            />
            <div className="z-50 text-white font-bold max-w-[7rem] text-center">
              Front-end Development
            </div>
            <img
              src="/fe_dev_bg.42f030a0.png"
              className="absolute w-full z-0 h-full"
            />
          </div>
          <div className="absolute flex-col hover:scale-125 duration-500 transition-transform h-[13rem] w-[15vw] xl:w-[13rem] flex items-center justify-center gap-5 -bottom-5 right-[4rem]">
          <img src="/mobile_dev_icon.7330c243.svg" className="w-10 z-50" />
          <div className="z-50 text-white text-lg font-bold max-w-[7rem] text-center">
            Mobile Development
          </div>
          <img
            src="/mobile_dev_bg.e7c4475b.png"
            className="absolute w-full z-0"
          />
        </div>
        <div className="absolute flex-col hover:scale-125 duration-500 transition-transform h-[15rem] w-[14vw] xl:w-[12rem] flex items-center justify-center gap-5 -bottom-5 left-[2.5rem]">
          <img src="/interaction_icon.c697534d.svg" className="w-16 z-50" />
          <div className="z-50 text-white font-bold max-w-[7rem] text-center">
            Interaction Design
          </div>
          <img
            src="/interaction_design_bg.7ac95908.png"
            className="absolute w-full z-0"
          />
        </div>
        </div>
      </Tilt>
    </div>
  );
};

export default Fields;
