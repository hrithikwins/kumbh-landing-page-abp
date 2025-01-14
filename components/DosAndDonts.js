"use client";
import Image from "next/image";
import React, { useState } from "react";

const Dos = [
  "Please check on the website for movement plan, accommodation, key event dates etc. and download the mobile app",
  "Please check on the website for movement plan, accommodation, key event dates etc. and download the mobile app",
  "Please check on the website for movement plan, accommodation, key event dates etc. and download the mobile app",
  "Please check on the website for movement plan, accommodation, key event dates etc. and download the mobile app",
  "Please check on the website for movement plan, accommodation, key event dates etc. and download the mobile app",
  "Please check on the website for movement plan, accommodation, key event dates etc. and download the mobile app",
  "Please check on the website for movement plan, accommodation, key event dates etc. and download the mobile app",
  "Please check on the website for movement plan, accommodation, key event dates etc. and download the mobile app",
  "Please check on the website for movement plan, accommodation, key event dates etc. and download the mobile app",
  "Please check on the website for movement plan, accommodation, key event dates etc. and download the mobile app",
  "Please check on the website for movement plan, accommodation, key event dates etc. and download the mobile app",
  "Please check on the website for movement plan, accommodation, key event dates etc. and download the mobile app",
];

const donts = [
  "Inform the Police or Mela Administration if any unidentified or suspicious object is found",
  "Inform the Police or Mela Administration if any unidentified or suspicious object is found",
  "Inform the Police or Mela Administration if any unidentified or suspicious object is found",
  "Inform the Police or Mela Administration if any unidentified or suspicious object is found",
  "Inform the Police or Mela Administration if any unidentified or suspicious object is found",
  "Inform the Police or Mela Administration if any unidentified or suspicious object is found",
  "Inform the Police or Mela Administration if any unidentified or suspicious object is found",
  "Inform the Police or Mela Administration if any unidentified or suspicious object is found",
  "Inform the Police or Mela Administration if any unidentified or suspicious object is found",
  "Inform the Police or Mela Administration if any unidentified or suspicious object is found",
  "Inform the Police or Mela Administration if any unidentified or suspicious object is found",
  "Inform the Police or Mela Administration if any unidentified or suspicious object is found",
];

const DosAndDonts = () => {
  const [active, setActive] = useState(true);

  return (
    <div className="text-center py-10">
      <div
        id="dos-and-donts-section"
        className="flex justify-center text-2xl  lg:text-3xl mt-4  text-[#6A302F]"
      >
        <p className="w-[80%] lg:w-full">
          {" "}
          Embrace the Gods (Do's) and Avoid the Demons (Don'ts)
        </p>
      </div>

      <div className="flex justify-center text-center text-xs mt-4 font-lora">
        <p className="w-[80%] lg:w-full">
          The Sacred Do's and the Forbidden Don'ts : A Guide to Navigating
          Prayagraj Mahakumbh 2025
        </p>
      </div>

      <div className="w-fit m-auto my-10 px-2 py-2 rounded-md bg-[#FFF5E3] flex flex-row gap-4 font-medium">
        <div
          onClick={() => {
            setActive(true);
          }}
          className={
            active
              ? "w-28 cursor-pointer bg-[#6A302F] text-xs py-2 text-white rounded-md"
              : "w-28 cursor-pointer bg-white text-xs py-2 text-[#792D12] rounded-md"
          }
        >
          Do's
        </div>
        <div
          onClick={() => {
            setActive(false);
          }}
          className={
            !active
              ? "w-28 cursor-pointer bg-[#6A302F] text-xs py-2 text-white rounded-md "
              : "w-28 cursor-pointer bg-white text-xs py-2 text-[#792D12] rounded-md"
          }
        >
          Don'ts
        </div>
      </div>

      <div className="my-10 px-10">
        {active ? (
          <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-4 gap-10">
            {Dos.map((item, index) => {
              return (
                <div
                  className="text-left bg-[#FFF5E3] px-4 py-2 text-sm h-24 flex flex-row items-center justify-end border-2 border-solid border-[#787060] font-lora"
                  key={index}
                >
                  {item}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="grid grid-flow-row  grid-cols-1 lg:grid-cols-4 gap-10">
            {donts.map((item, index) => {
              return (
                <div
                  className="text-left bg-[#FFF5E3] px-4 py-2 text-sm h-24 flex flex-row items-center justify-end border-2 border-solid border-[#787060] font-lora"
                  key={index}
                >
                  {item}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* <div className="bg-gradient-to-r from-[#FED7CF] via-white to-white absolute -z-40  h-[400px] w-full "></div> */}
      <div className="absolute -z-[100] w-full h-[500px] -mt-20 -ml-40 lg:-mt-36 lg:-ml-60">
        <div className="bg-radial-gradient  h-full w-[60%]"></div>
      </div>
      <div className="flex flex-row items-center justify-between z-30 mt-32">
        <Image
          src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/images/do-and-dont/snake-head.png"
          alt="snake-head"
          width={300}
          height={300}
          className="z-30 absolute translate-y-[-50px] w-[200px] right-14 lg:w-auto lg:h-auto lg:translate-y-[-250px] lg:right-40 "
        />
        <img
          src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/dondont1 1.svg"
          className="z-30 absolute translate-y-[-0px] lg:translate-y-[-90px]"
        />
        /
        <img
          src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/image 31.svg"
          className="z-40 translate-y-[60px] -left-60 absolute"
        />
        <img
          src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/image 33.svg"
          className="z-40 translate-y-[60px] -right-10"
        />
        <img
          src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/water1 1.svg"
          className="w-full absolute  translate-y-[60px] z-20"
        />
      </div>
    </div>
  );
};

export default DosAndDonts;
