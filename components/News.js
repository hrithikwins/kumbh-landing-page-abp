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
      <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202412/maha-kumbh-mela-2025-143422361-16x9.jpg?VersionId=ZYyiXH2SdcCmzflRWBjWHlMR6eClM7.A" />

      <div className="text-2xl  py-2">
        13 जनवरी से हो रहा महाकुंभ का आगाज, रेलवे के इस ऐप में जानें अपनी यात्रा
        से जुड़ी हर डिटेल
      </div>

      <div className="text-sm">
        Kumbh Rail Seva App: 'कुंभ रेल सेवा' ऐप में प्रयागराज में शुरू हो रहे
        महाकुंभ से जुड़ी हर जानकारी डिटेल में मिलेगी. इसमें ट्रेन के साथ
        प्रयागराज में ठहरने के लिए होटल-लॉज तक के बारे में जान सकेंगे.
      </div>
    </div>
  );
};

const MySwiper = () => {
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
        id="abp-news-coverage-section"
        className="text-4xl mt-40  text-center text-[#6A302F] "
      >
        ABP News Coverage
      </div>

      <div className="mt-2 text-sm text-center mb-8">
        {" "}
        We bring to you the all the latest updates about the Prayagraj Maha
        Kumbh 2025
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
            View all latest news
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

export default MySwiper;
