"use client";

const Work = () => {
  return (
    <div id="works" className="flex flex-col mb-[10rem] items-center">
      <div className="flex flex-col w-full items-center gap-7">
        <div className="text-5xl backbone text-[rgb(54,91,254)]">Fantastic</div>
        <div className="font-bold text-5xl text-white">Selected Works</div>
        <div className="w-full items-center gap-0 xl:gap-[10rem] grid grid-cols-1 sm:grid-cols-2">
          <a
            className="bg-[rgb(33,39,55)] group relative xl:h-[22rem] sm:h-[35vw] p-10 rounded-tl-[30px] rounded-br-[30px] sm:max-w-auto  max-w-[35rem] sm:w-[45vw] hover:bg-[#4445A1]"
            href="/"
          >
            <div className="flex gap-5 relative flex-col">
              <div className="flex justify-between">
                <div className="text-white font-bold text-lg ">
                  Brochat
                </div>
                <div className="font-bold text-white opacity-40">2022</div>
              </div>
              <div className="flex flex-col">
                <div className="bg-[rgba(33,39,55,0.65)] text-2xl font-medium z-50 backbone ml-auto rounded-tl-[15px] p-3 absolute top-16 right-7 text-white rounded-br-[15px]">
                  MERN Stack Chat Application
                </div>
                <img
                  className="sm:h-[30vw] group-hover:scale-110 duration-700 transition-transform xl:h-[22rem] rounded-tl-[30px] rounded-br-[30px]"
                  src="/project2.png"
                />
                <div className="bg-[rgba(33,39,55,0.65)] uppercase font-semibold text-sm mr-auto rounded-tl-[15px] p-3 absolute bottom-6 left-0 translate-x-5 text-white rounded-br-[15px]">
                  full-stack developer
                </div>
              </div>
            </div>
          </a>
          <a
            className="bg-[rgb(33,39,55)] group relative xl:h-[22rem] sm:h-[35vw] p-10 rounded-tl-[30px] rounded-br-[30px] sm:max-w-auto  max-w-[35rem] sm:w-[45vw] hover:bg-[#009971]"
            href="/"
          >
            <div className="flex gap-5 relative flex-col">
              <div className="flex justify-between">
                <div className="text-white font-bold text-lg ">Igikwe</div>
                <div className="font-bold text-white opacity-40">2022</div>
              </div>
              <div className="flex flex-col">
                <div className="bg-[rgba(33,39,55,0.65)] text-2xl font-medium z-50 backbone ml-auto rounded-tl-[15px] p-3 absolute top-16 right-7 text-white rounded-br-[15px]">
                  Mobile App with Flutter
                </div>
                <img
                  className="sm:h-[30vw] group-hover:scale-110 duration-700 transition-transform xl:h-[22rem] rounded-tl-[30px] rounded-br-[30px]"
                  src="/project2.jpg"
                />
                <div className="bg-[rgba(33,39,55,0.65)] uppercase font-semibold text-sm mr-auto rounded-tl-[15px] p-3 absolute bottom-6 left-0 translate-x-5 text-white rounded-br-[15px]">
                  mobile developer
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <a
        className="sm:mt-[14rem] hover:scale-110 transition-transform duration-700 mt-[5rem]"
        href="/works"
      >
        <button
          className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium border-tl-[16px] border-br-[16px]  css-1hw9j7s"
          tabIndex={0}
          type="button"
          style={{
            background: "rgb(31, 98, 250)",
            color: "white",
            borderRadius: "16px 0px",
            padding: "10px 25px",
            fontSize: "17px",
          }}
        >
          SEE MORE<span className="MuiTouchRipple-root css-w0pj6f"></span>
        </button>
      </a>
      <div className="text-[rgb(57,63,79)] backbone text-6xl mt-[8rem]">
        ”Doing my job well and accurate is the first on my priority list”
      </div>
    </div>
  );
};

export default Work;
