"use client";
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
      <div className="text-3xl mt-4  text-[#6A302F]">
        Embrace the Gods (Do's) and Avoid the Demons (Don'ts)
      </div>

      <div className="text-center text-xs mt-4">
        The Sacred Do's and the Forbidden Don'ts : A Guide to Navigating
        Prayagraj Mahakumbh 2025
      </div>

      <div className="w-fit m-auto my-10 px-2 py-2 rounded-md bg-[#FFF5E3] flex flex-row gap-4 font-medium">
        <div
        onClick={()=>{setActive(true)}}
          className={
            active
              ? "w-28 cursor-pointer bg-[#6A302F] text-xs py-2 text-white rounded-md"
              : "w-28 cursor-pointer bg-white text-xs py-2 text-[#792D12] rounded-md"
          }
        >
          Do's
        </div>
        <div
        onClick={()=>{setActive(false)}}
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
          <div className="grid grid-flow-row grid-cols-4 gap-10">
            {Dos.map((item, index) => {
              return <div className="text-left bg-[#FFF5E3] px-4 py-2 text-sm h-24 flex flex-row items-center justify-end" key={index}>{item}</div>;
            })}
          </div>
        ) : (
          <div className="grid grid-flow-row grid-cols-4 gap-10">
            {donts.map((item, index) => {
              return <div  className="text-left bg-[#FFF5E3] px-4 py-2 text-sm h-24 flex flex-row items-center justify-end" key={index}>{item}</div>;
            })}
          </div>
        )}
      </div>

      <div className="bg-gradient-to-r from-[#FED7CF] via-white to-white absolute -z-10 ">
        <img src="/dondont1 1.svg"/>
      </div>
      <div className="flex flex-row items-center justify-between z-30 mt-32">
      <img src="/image 31.svg"/>
      <img src="/image 33.svg"/>
      </div>
    </div>
  );
};

export default DosAndDonts;
