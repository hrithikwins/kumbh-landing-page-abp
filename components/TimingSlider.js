"use client";
import Image from "next/image";
import React, { useState } from "react";

const data = [
  {
    time: "~3000 BCE",
    title: "Mythological Origin",
    subTitle: "Samudra Manthan",
    image: "/images/history-demo-1.png",
    content:
      " According to Hindu mythology, gods (devas) and demons (asuras) churned the ocean to obtain the nectar of immortality (amrita).During a divine battle over the nectar, four drops fell atPrayagraj, Haridwar, Nashik, and Ujjain, making these sites sacred and forming the foundation for Kumbh Mela.",
  },
  {
    time: "7th Century CE",
    title: "Mythological Origin",
    subTitle: "Samudra Manthan",
    image:
      "https://media.istockphoto.com/id/478438644/photo/har-ki-paur-ghat-in-haridwar-during-kunbh-mela-india.jpg?s=612x612&w=0&k=20&c=zmVqjJ8W6whfi99G57dPsZhsUNavWvlAgd-UKEDxrWg=",
    content:
      " According to Hindu mythology, gods (devas) and demons (asuras) churned the ocean to obtain the nectar of immortality (amrita).During a divine battle over the nectar, four drops fell atPrayagraj, Haridwar, Nashik, and Ujjain, making these sites sacred and forming the foundation for Kumbh Mela.",
  },
  {
    time: "12th Century",
    title: "Mythological Origin",
    subTitle: "Samudra Manthan",
    image:
      "https://media.istockphoto.com/id/478438644/photo/har-ki-paur-ghat-in-haridwar-during-kunbh-mela-india.jpg?s=612x612&w=0&k=20&c=zmVqjJ8W6whfi99G57dPsZhsUNavWvlAgd-UKEDxrWg=",
    content:
      " According to Hindu mythology, gods (devas) and demons (asuras) churned the ocean to obtain the nectar of immortality (amrita).During a divine battle over the nectar, four drops fell atPrayagraj, Haridwar, Nashik, and Ujjain, making these sites sacred and forming the foundation for Kumbh Mela.",
  },
  {
    time: "18th Century",
    title: "Mythological Origin",
    image:
      "https://media.istockphoto.com/id/478438644/photo/har-ki-paur-ghat-in-haridwar-during-kunbh-mela-india.jpg?s=612x612&w=0&k=20&c=zmVqjJ8W6whfi99G57dPsZhsUNavWvlAgd-UKEDxrWg=",
    subTitle: "Samudra Manthan",
    content:
      " According to Hindu mythology, gods (devas) and demons (asuras) churned the ocean to obtain the nectar of immortality (amrita).During a divine battle over the nectar, four drops fell atPrayagraj, Haridwar, Nashik, and Ujjain, making these sites sacred and forming the foundation for Kumbh Mela.",
  },
];

const TimingSlider = () => {
  const [number, setNumber] = useState(0);

  const swiperFunction = (type) => {
    console.log(type);
    if (type) {
      if (number == data.length - 1) {
        setNumber(0);
      } else {
        setNumber(number + 1);
      }
    } else {
      if (number == 0) {
        setNumber(data.length - 1);
      } else {
        setNumber(number - 1);
      }
    }
  };

  return (
    <>
      <div className="px-10 py-10 text-center overflow-x-hidden">
        <div className="text-center text-xs">|| Sarvsidhpradh Kumbh ||</div>
        <div
          id="history-section"
          className="flex justify-center text-3xl mt-4  text-[#6A302F]"
        >
          <p className="w-[80%] lg:w-auto">
            History of (Spirituality +Humanity) Kumbh Mela
          </p>
        </div>
        <div className="mt-4 text-center text-xs font-lora">
          The Kumbh Mela has transformed from an ancient pilgrimage into a
          globally recognised event, blending spirituality,
          <br /> cultural heritage, and large-scale logistics. Its evolution
          reflects the resilience and adaptability of a deeply rooted <br />{" "}
          tradition in the modern world.
        </div>

        <div className="text-6xl lg:text-[280px] m-auto flex flex-row  text-center absolute text-[#FFF5E3] -z-30">
          {data[number].time}
        </div>
        {/*For Mobile */}
        <div className="grid lg:hidden grid-flow-row gap-6 mt-10 text-left">
          {/* Frame Image Section */}
          <div className="relative w-full h-[250px]">
            {/* Frame Image */}
            <Image
              src="/images/history-frame.png"
              alt="frame"
              layout="fill"
              objectFit="contain"
              className="z-10"
            />

            {/* Inner Image */}
            <div className="absolute inset-0 flex justify-center z-0">
              <Image
                src={data[number].image}
                alt={data[number].title}
                width={490}
                height={490}
                className="object-cover "
              />
            </div>
          </div>

          {/* Content Section */}
          <div>
            <div className="uppercase text-lg font-bold">
              {data[number].title}
            </div>
            <div className="text-[#DC581A] text-sm mt-1">
              {data[number].time}
            </div>
            <div className="font-semibold mt-2 text-base">
              {data[number].subTitle}
            </div>
            <div className="text-xs mt-2 font-lora">{data[number].content}</div>
          </div>
        </div>

        {/*For Desktop */}
        <div className="hidden lg:grid grid-flow-row grid-cols-3 gap-10 mt-20 text-left z-40">
          <div className="">
            <div className="uppercase text-2xl">{data[number].title}</div>
            <div className="text-[#DC581A] text-xl mt-1">
              {data[number].time}
            </div>
            <div className="font-semibold mt-2">{data[number].subTitle}</div>
            <div className="text-xs max-w-[400px] mt-2 font-lora">
              {data[number].content}
            </div>
          </div>

          <div className="relative w-[500px] h-[400px]">
            {/* Frame Image */}
            <Image
              src="/images/history-frame.png"
              alt="frame"
              layout="fill"
              objectFit="contain"
              className="z-10"
            />

            {/* Inner Image */}
            <div className="absolute inset-0 flex justify-center z-0">
              <Image
                src={data[number].image}
                alt={data[number].title}
                width={490}
                height={490}
                className="object-cover "
              />
            </div>
          </div>

          <div className=" flex flex-row gap-10 items-center justify-center">
            <div
              onClick={() => {
                swiperFunction(false);
              }}
              className="hover:cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="59"
                viewBox="0 0 35 59"
                fill="none"
              >
                <path
                  d="M21 17.5C13.7297 24.086 4.375 29.2683 0 30.7317C4.375 32.1951 12.4933 35.5884 18.9583 40.9756C26.15 46.9683 33.0556 54.6392 35 58.5417V0C35 1.46341 27.2867 11.805 21 17.5Z"
                  fill="#6A302F"
                />
              </svg>
            </div>

            <div
              onClick={() => {
                swiperFunction(true);
              }}
              className="hover:cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="59"
                viewBox="0 0 35 59"
                fill="none"
              >
                <path
                  d="M14 17.5C21.2703 24.086 30.625 29.2683 35 30.7317C30.625 32.1951 22.5067 35.5884 16.0417 40.9756C8.85002 46.9683 1.94444 54.6392 0 58.5417V0C0 1.46341 7.71334 11.805 14 17.5Z"
                  fill="#6A302F"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* Timing Slider */}
      <div className="relative w-full lg:mt-12 mb-12 lg:mb-32">
        <Image
          src="/images/history-steps.svg"
          alt="steps"
          layout="fill"
          objectFit="contain"
          className="absolute inset-0 w-full h-full"
        />
        <div className="relative flex justify-around items-center w-full h-full ">
          {data.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={
                  index == number
                    ? "/images/flower-active.png"
                    : "/images/flower.png"
                }
                alt={`flower-${index}`}
                width={120}
                height={120}
                className="object-contain w-[60px] h-[60px] lg:w-full lg:h-full"
              />
              <div
                className={`text-center mt-2 text-xs lg:text-3xl ${
                  index == number ? "text-[#DC581A]" : "text-black"
                }`}
              >
                {step.time}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Navigation Arrows */}
      <div className="flex lg:hidden flex-row gap-6 items-center justify-center mb-10">
        <div
          onClick={() => {
            swiperFunction(false);
          }}
          className="hover:cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="40"
            viewBox="0 0 35 59"
            fill="none"
          >
            <path
              d="M21 17.5C13.7297 24.086 4.375 29.2683 0 30.7317C4.375 32.1951 12.4933 35.5884 18.9583 40.9756C26.15 46.9683 33.0556 54.6392 35 58.5417V0C35 1.46341 27.2867 11.805 21 17.5Z"
              fill="#6A302F"
            />
          </svg>
        </div>

        <div
          onClick={() => {
            swiperFunction(true);
          }}
          className="hover:cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="40"
            viewBox="0 0 35 59"
            fill="none"
          >
            <path
              d="M14 17.5C21.2703 24.086 30.625 29.2683 35 30.7317C30.625 32.1951 22.5067 35.5884 16.0417 40.9756C8.85002 46.9683 1.94444 54.6392 0 58.5417V0C0 1.46341 7.71334 11.805 14 17.5Z"
              fill="#6A302F"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default TimingSlider;
