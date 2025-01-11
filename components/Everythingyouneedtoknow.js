"use client";
import Image from "next/image";
import React, { useState } from "react";

const Frame = ({ title, subtitle, icon }) => {
  return (
    <div className="text-center flex justify-center z-50">
      <img src="/frame1.png" alt="frame" className="h-48" />
      <div className="absolute translate-y-[40px] text-[#FFF5E3]">
        <div className="flex justify-center">
          <Image src={icon} alt={title} width={50} height={50} />
        </div>
        <div className="text-[20px]">{title}</div>
        <div className="text-xs max-w-72 mt-2">{subtitle}</div>
      </div>
    </div>
  );
};

const services = [
  {
    title: "How to Reach",
    subtitle:
      "Find detailed information on how to travel to Prayagraj using trains, flights, and buses.",
    icon: "/images/useful-links/how-to-reach.svg",
  },
  {
    title: "Where to Stay",
    subtitle: "Details about Tent City and Hotels.",
    icon: "/images/useful-links/where-to-stay.svg",
  },
  {
    title: "Direction to Ghats",
    subtitle:
      "Discover the different ghats in Prayagraj and find their locations on Google Maps.",
    icon: "/images/useful-links/direction-to-ghat.svg",
  },
  {
    title: "Tourist Guide",
    subtitle:
      "Displaying the rich heritage and spirituality of Prayagraj for pilgrims and visitors.",
    icon: "/images/useful-links/tourist-guide.svg",
  },
  {
    title: "Visitor's Guide",
    subtitle: "How to reach Prayagraj from other major cities of India.",
    icon: "/images/useful-links/visitor-guide.svg",
  },
  {
    title: "Mela Attractions",
    subtitle: "All the list of attractions you will find in Kumbh Mela area.",
    icon: "/images/useful-links/mela-attraction.svg",
  },
  {
    title: "Nearby Attractions",
    subtitle:
      "Explore nearby destinations to visit while you are in Prayagraj for the Maha Kumbh Mela.",
    icon: "/images/useful-links/nearby-attraction.svg",
  },
  {
    title: "Food and Things",
    subtitle:
      "Discover the culinary delights offered in Prayagraj, and in the Kumbh Mela.",
    icon: "/images/useful-links/food-and-thing.svg",
  },
];

const travel = [
  {
    title: "Where to Stay",
    subtitle:
      "Displaying the rich heritage and spirituality of Prayagraj for pilgrims and visitors",
    icon: "/images/useful-links/where-to-stay.svg",
  },
  {
    title: "Where to Stay",
    subtitle:
      "Displaying the rich heritage and spirituality of Prayagraj for pilgrims and visitors",
    icon: "/images/useful-links/where-to-stay.svg",
  },
  {
    title: "Where to Stay",
    subtitle:
      "Displaying the rich heritage and spirituality of Prayagraj for pilgrims and visitors",
    icon: "/images/useful-links/where-to-stay.svg",
  },
  {
    title: "Where to Stay",
    subtitle:
      "Displaying the rich heritage and spirituality of Prayagraj for pilgrims and visitors",
    icon: "/images/useful-links/where-to-stay.svg",
  },
  {
    title: "Where to Stay",
    subtitle:
      "Displaying the rich heritage and spirituality of Prayagraj for pilgrims and visitors",
    icon: "/images/useful-links/where-to-stay.svg",
  },
];

const food = [
  {
    title: "Mela Attractions",
    subtitle: "All the list of attractions you will find in Kumbh Mela area",
    icon: "/images/useful-links/mela-attraction.svg",
  },
  {
    title: "Mela Attractions",
    subtitle: "All the list of attractions you will find in Kumbh Mela area",
    icon: "/images/useful-links/mela-attraction.svg",
  },
  {
    title: "Mela Attractions",
    subtitle: "All the list of attractions you will find in Kumbh Mela area",
    icon: "/images/useful-links/mela-attraction.svg",
  },
];

const allThings = [
  {
    title: "Nearby Attractions",
    subtitle:
      "Explore nearby destinations to visit while you are in Prayagraj for the Maha Kumbh Mela",
    icon: "/images/useful-links/nearby-attraction.svg",
  },
  {
    title: "Nearby Attractions",
    subtitle:
      "Explore nearby destinations to visit while you are in Prayagraj for the Maha Kumbh Mela",
    icon: "/images/useful-links/nearby-attraction.svg",
  },
  {
    title: "Nearby Attractions",
    subtitle:
      "Explore nearby destinations to visit while you are in Prayagraj for the Maha Kumbh Mela",
    icon: "/images/useful-links/nearby-attraction.svg",
  },
];

const Everythingyouneedtoknow = () => {
  const [active, setActive] = useState("All services");

  return (
    <div className="">
      <div>
        <img src="/image 21.svg" className="w-full" />
      </div>

      <div>
        <img
          src="image 29.svg"
          className="absolute translate-y-[-300px] left-0"
        />
        <img
          src="image 30.svg"
          className="absolute translate-y-[-300px] right-0"
        />
      </div>
      <div className="bg-[#FED7CF] text-center py-10">
        <div className="font-semibold text-sm">|| Useful links ||</div>
        <div
          id="useful-links-section"
          className="text-[#6A302F] text-center font-normal text-4xl mt-4"
        >
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
              console.log(active);
            }}
            className={
              active == "All services"
                ? "w-28 cursor-pointer bg-[#6A302F] text-xs py-2 text-white rounded-md"
                : "w-28 cursor-pointer bg-white text-xs py-2 text-[#792D12] rounded-md"
            }
          >
            All services
          </div>
          <div
            onClick={() => {
              setActive("Travel & Rest");
              console.log(active);
            }}
            className={
              active == "Travel & Rest"
                ? "w-28 cursor-pointer bg-[#6A302F] text-xs py-2 text-white rounded-md "
                : "w-28 cursor-pointer bg-white text-xs py-2 text-[#792D12] rounded-md"
            }
          >
            Travel & Rest
          </div>

          <div
            onClick={() => {
              setActive("Food & Attractions");
              console.log(active);
            }}
            className={
              active == "Food & Attractions"
                ? "w-28 cursor-pointer bg-[#6A302F] text-xs py-2 text-white rounded-md "
                : "w-28 cursor-pointer bg-white text-xs py-2 text-[#792D12] rounded-md"
            }
          >
            Food & Attractions
          </div>

          <div
            onClick={() => {
              setActive("All Things Kumbh");
              console.log(active);
            }}
            className={
              active == "All Things Kumbh"
                ? "w-28 cursor-pointer bg-[#6A302F] text-xs py-2 text-white rounded-md "
                : "w-28 cursor-pointer bg-white text-xs py-2 text-[#792D12] rounded-md"
            }
          >
            All Things Kumbh
          </div>
        </div>

        <div className="grid grid-flow-row grid-cols-4 mt-10 gap-10 px-10 z-50">
          {active == "All services"
            ? services.map((item, index) => {
                return (
                  <Frame
                    key={index}
                    title={item.title}
                    subtitle={item.subtitle}
                    icon={item.icon}
                  />
                );
              })
            : null}

          {active == "Travel & Rest"
            ? travel.map((item, index) => {
                return (
                  <Frame
                    key={index}
                    title={item.title}
                    subtitle={item.subtitle}
                    icon={item.icon}
                  />
                );
              })
            : null}

          {active == "Food & Attractions"
            ? food.map((item, index) => {
                return (
                  <Frame
                    key={index}
                    title={item.title}
                    subtitle={item.subtitle}
                    icon={item.icon}
                  />
                );
              })
            : null}

          {active == "All Things Kumbh"
            ? allThings.map((item, index) => {
                return (
                  <Frame
                    key={index}
                    title={item.title}
                    subtitle={item.subtitle}
                    icon={item.icon}
                  />
                );
              })
            : null}
        </div>
      </div>

      <div>
        <img
          src="/image 21.svg"
          className="rotate-180 w-full translate-y-[-10px]"
        />
      </div>
    </div>
  );
};

export default Everythingyouneedtoknow;
