import Image from "next/image";
import React from "react";

const Enquirenow = () => {
  return (
    <div className="my-10">
      <Image
        src="/image 41.png"
        alt="right-flower"
        width={200}
        height={200}
        className="absolute -z-10 right-0 translate-y-[600px] w-[50%] lg:translate-y-36  lg:w-[40%]"
      />
      <Image
        src="/image 40.svg"
        alt="left-flower"
        width={200}
        height={200}
        className="absolute -z-10  w-[40%] translate-y-[550px] lg:w-[30%] lg:translate-y-24"
      />

      <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row justify-between items-center -z-10 px-10">
        <div className="flex flex-row items-center gap-6">
          <Image
            src="/ABP.png"
            alt="abp-logo"
            width={100}
            height={100}
            className="w-full "
          />
          <Image
            src="/new kumbh logo 1.svg"
            alt="kumbh-logo"
            width={100}
            height={100}
            className="h-20 w-20"
          />
        </div>

        <div className="flex flex-row gap-10 items-center">
          <Image
            src="/Group 49.svg"
            alt="social-1"
            width={100}
            height={100}
            className="h-14 w-14"
          />
          <Image
            src="/Group 48.svg"
            alt="social-2"
            width={100}
            height={100}
            className="h-14 w-14"
          />
          <Image
            src="/Group 47.svg"
            alt="social-3"
            width={100}
            height={100}
            className="h-14 w-14"
          />
        </div>

        <div className="flex flex-row gap-8 items-center">
          <Image
            src="/image 42.svg"
            alt="download-1"
            width={100}
            height={100}
            className="w-32"
          />
          <Image
            src="/image 43.svg"
            alt="download-2"
            width={100}
            height={100}
            className="w-32"
          />
        </div>
      </div>

      <div className="text-center flex flex-col items-center justify-center mt-10">
        <div className="flex flex-row items-center justify-center gap-5 px-2">
          <Image
            src="/diamond.svg"
            alt="diamond"
            width={32}
            height={32}
            className="w-8"
          />
          <div className="text-[#6A302F] uppercase underline text-xl lg:text-4xl">
            Visit official site of maha kumbh 2025
          </div>
          <Image
            src="/diamond.svg"
            alt="diamond"
            width={32}
            height={32}
            className="w-8"
          />
        </div>

        <div className="mt-10 lg:mt-20">
          <div className="flex justify-center font-semibold">
            <p className="w-[90%] lg:w-auto">
              Experience the Prayagraj Mahakumbh Mela 2025
            </p>
          </div>
          <button className="bg-[#6A302F] w-60 mt-4 text-sm text-white text-center px-4 py-2 rounded-xl">
            Explore our service offerings
          </button>
        </div>

        <div className="mt-10 lg:mt-20">
          <Image
            src="/Frame 10.svg"
            alt="frame"
            width={100}
            height={100}
            className="w-60 translate-x-2"
          />
        </div>
      </div>

      {/* <img src="image 41.svg" /> */}
    </div>
  );
};

export default Enquirenow;
