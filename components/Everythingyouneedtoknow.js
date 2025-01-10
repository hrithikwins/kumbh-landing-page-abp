"use client";
import React, { useState } from "react";



const Frame =()=>{
  return <div className="text-center flex justify-center z-50">
    <img src="/frame1.png"/>
    <div className="absolute translate-y-[40px] text-[#FFF5E3]">
      <div className="text-[20px]">PAUSH PURNAMASI</div>
      <div className="font-semibold text-2xl">13 JANUARY 2025</div>
    </div>
  </div>
}


const Everythingyouneedtoknow = () => {
  const [active, setActive] = useState("All services");

  return (
    <div className="">
      <div>
        <img src="/image 21.svg" className="w-full" />
      </div>
      <div className="bg-[#FED7CF] text-center py-10">
        <div className="font-semibold text-sm">|| Useful links ||</div>
        <div className="text-[#6A302F] text-center font-normal text-4xl mt-4">
          Everything You Need
        </div>

        <div className="mt-4">
          Explore a variety of services designed to elevate your time in
          Prayagraj. You can take advantage of the amenities listed <br /> below
          to make your visit to Prayagraj even better. Feel free to choose the
          services that suit your preferences.
        </div>
      </div>

     <div className="bg-[#FED7CF] py-10">
      <div className="w-fit m-auto px-2 py-2 rounded-md text-center bg-[#FFF5E3] flex flex-row gap-4 font-medium">
        <div
          onClick={() => {
            setActive("All services");
            console.log(active)
          }}
          className={
            active=="All services"
              ? "w-28 cursor-pointer bg-[#6A302F] text-xs py-2 text-white rounded-md"
              : "w-28 cursor-pointer bg-white text-xs py-2 text-[#792D12] rounded-md"
          }
        >
          All services
        </div>
        <div
          onClick={() => {
            setActive("Travel & Rest");
            console.log(active)
          }}
          className={
            active=="Travel & Rest"
              ? "w-28 cursor-pointer bg-[#6A302F] text-xs py-2 text-white rounded-md "
              : "w-28 cursor-pointer bg-white text-xs py-2 text-[#792D12] rounded-md"
          }
        >
          Travel & Rest
        </div>

        <div
          onClick={() => {
            setActive("Food & Attractions");
            console.log(active)
          }}
          className={
            active=="Food & Attractions"
              ? "w-28 cursor-pointer bg-[#6A302F] text-xs py-2 text-white rounded-md "
              : "w-28 cursor-pointer bg-white text-xs py-2 text-[#792D12] rounded-md"
          }
        >
          Food & Attractions
        </div>

        <div
          onClick={() => {
            setActive("All Things Kumbh");
            console.log(active)
          }}
          className={
            active=="All Things Kumbh"
              ? "w-28 cursor-pointer bg-[#6A302F] text-xs py-2 text-white rounded-md "
              : "w-28 cursor-pointer bg-white text-xs py-2 text-[#792D12] rounded-md"
          }
        >
          All Things Kumbh
        </div>
      </div>

      <div className="grid grid-flow-row grid-cols-4 mt-10 gap-10 px-10 z-50"> 
        <Frame/>
        <Frame/>
        <Frame/>
        <Frame/>
        <Frame/>
        <Frame/>
      </div>
      </div>

   

      <div>
        <img src="/image 21.svg" className="rotate-180 w-full translate-y-[-10px]" />
      </div>
    </div>
  );
};

export default Everythingyouneedtoknow;
