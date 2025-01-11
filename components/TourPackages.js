"use client";
import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// import "./styles.css"; // Custom CSS for arrows or styling

const Card = () => {
  return (
    <div>
      <img
        className="w-full"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmSrHAZzOmS-0LwBn2-iSm-QYjhPCbOSgeRw&s"
      />

      <div className="text-3xl  py-2">Prayag Darshan</div>

      <div className="flex flex-row gap-2 items-center justify-start">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M7 3V1H9V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V9H20V5H17V7H15V5H9V7H7V5H4V19H10V21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7ZM17 12C14.7909 12 13 13.7909 13 16C13 18.2091 14.7909 20 17 20C19.2091 20 21 18.2091 21 16C21 13.7909 19.2091 12 17 12ZM11 16C11 12.6863 13.6863 10 17 10C20.3137 10 23 12.6863 23 16C23 19.3137 20.3137 22 17 22C13.6863 22 11 19.3137 11 16ZM16 13V16.4142L18.2929 18.7071L19.7071 17.2929L18 15.5858V13H16Z"
            fill="black"
          />
        </svg>
        1 day
      </div>
    </div>
  );
};

const TourPackages = () => {
  const prevRef = useRef(null); // Ref for the previous button
  const nextRef = useRef(null); // Ref for the next button

  useEffect(() => {
    // Delay assigning refs to ensure DOM elements are rendered
    const swiperParams = {
      navigation: {
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      },
    };
    // Return a cleanup function if needed
    return () => {};
  }, []);

  return (
    <div className="swiper-container px-10 ">
      <div
        id="tour-package-section"
        className="text-4xl  text-center text-[#6A302F]  mt-10"
      >
        Tour Packages For You
      </div>

      <div className="mt-2 text-sm text-center mb-8">
        {" "}
        Choose from a wide range of tour packages covering the grand Maha Kumbh
        Mela and nearby attractions of Prayagraj.
      </div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20} // Space between slides
        slidesPerView={4} // Number of slides visible at a time
        navigation={{
          nextEl: ".swiper-button-nextt",
          prevEl: ".swiper-button-prevv",
        }}
        loop={true} // Enable infinite loop
      >
        {/* Example slides */}
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <Card />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <Card />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <Card />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <Card />
        </SwiperSlide>
      </Swiper>
      <div className="flex flex-row justify-between items-center mt-10 w-fit gap-10 m-auto">
        <div className="swiper-button-prevv cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="45"
            viewBox="0 0 35 59"
            fill="none"
          >
            <path
              d="M21 17.5C13.7297 24.086 4.375 29.2683 0 30.7317C4.375 32.1951 12.4933 35.5884 18.9583 40.9756C26.15 46.9683 33.0556 54.6392 35 58.5417V0C35 1.46341 27.2867 11.805 21 17.5Z"
              fill="#6A302F"
            />
          </svg>
        </div>

        <div>
          <button className="bg-[#6A302F] text-sm text-white text-center px-4 py-2 rounded-xl">
            View all tour packages
          </button>
        </div>
        <div className="swiper-button-nextt cursor-pointer ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="45"
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
  );
};

export default TourPackages;
