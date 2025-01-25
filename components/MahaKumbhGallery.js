"use client";
import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";
import { useIntl } from "react-intl";
import { useLocale } from './contexts/LocaleContext';

// import "./styles.css"; // Custom CSS for arrows or styling

const Card = ({ data }) => {
  return (
    <div>
      <Link href={data.permalinks} target="_blank">
        <div className="relative w-full h-[200px]">
          <Image
            src={data.thumbnail_image_url}
            alt={data.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="text-base font-[600] py-2">{data.title}</div>
      </Link>
    </div>
  );
};


  const galleryData = [
    {
      title: "महाकुंभ में गंगा स्नान का मिलेगा पूरा पुण्य, ध्यान रखें ये नियम",
      image: "/images/gallery-data/image-1.svg",
    },
    {
      title:
        "Mahakumbh 2025: महाकुंभ में महिला बटुक करेंगी गंगा आरती, कैसी है ग्राउंड पर तैयारियां? | ABP News",
      image: "/images/gallery-data/image-2.svg",
    },
    {
      title:
        "Maha Kumbh Mela 2025 : प्रधानमंत्री ने देखा...महाकुंभ की महातैयारी, संगम तट पर संतों से",
      image: "/images/gallery-data/image-3.svg",
    },
    {
      title: "महाकुंभ में गंगा स्नान का मिलेगा पूरा पुण्य, ध्यान रखें ये नियम",
      image: "/images/gallery-data/image-1.svg",
    },
    {
      title:
        "Mahakumbh 2025: महाकुंभ में महिला बटुक करेंगी गंगा आरती, कैसी है ग्राउंड पर तैयारियां? | ABP News",
      image: "/images/gallery-data/image-2.svg",
    },
    {
      title:
        "Maha Kumbh Mela 2025 : प्रधानमंत्री ने देखा...महाकुंभ की महातैयारी, संगम तट पर संतों से",
      image: "/images/gallery-data/image-3.svg",
    },
  ];


const MahaKumbhGallery = () => {
  const prevRef = useRef(null); // Ref for the previous button
  const nextRef = useRef(null); // Ref for the next button
  const [dynamicGalleryData, setDynamicGalleryData] = useState([]);
  const intl = useIntl();
    const { locale } = useLocale();

  //fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resPics = await fetch(
          "https://feeds.abplive.com/testfeeds/"+ (locale == "en" ? "english" : "hindi") + "/maha-kumbh-2025/tag-index-gallery-subset30"
        );
        const resVideos = await fetch(
          "https://feeds.abplive.com/testfeeds/"+ (locale == "en" ? "english" : "hindi") + "/maha-kumbh-2025/tag-index-video-subset30"
        );
        const videosData = await resVideos.json();
        const picsData = await resPics.json();
        setDynamicGalleryData([...picsData.sections, ...videosData.sections]);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, [locale]);

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
      <div>
        <Image
          src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/image 29.svg"
          alt="flower-left"
          width={200}
          height={200}
          className="absolute translate-y-[-150px] w-[12.5rem] left-0 lg:w-[20.5rem] lg:translate-y-[-12.5rem]"
        />
        <Image
          src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/image 30.svg"
          alt="flower-right"
          width={200}
          height={200}
          className="absolute translate-y-[-150px] w-[12.5rem] right-0 lg:w-[20.5rem] lg:translate-y-[-12.5rem]"
        />
      </div>
      <div className="text-4xl  text-center text-[#6A302F] pt-20 mt-40 lg:pt-0">
        <span>
          {intl.formatMessage({ id: "galleryHeading" }, { lineBreak: <br /> })}
        </span>
      </div>

      <div className="mt-2 text-sm text-center mb-8 font-lora">
        {" "}
        <span>
          {intl.formatMessage(
            { id: "galleryDescription" },
            { lineBreak: <br /> }
          )}
        </span>
      </div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20} // Space between slides
        slidesPerView={4} // Number of slides visible at a time
        breakpoints={{
          // Adjust slides per view based on screen width
          0: {
            slidesPerView: 1, // 1 slide on mobile
          },
          768: {
            slidesPerView: 2, // 2 slides on tablets
          },
          1024: {
            slidesPerView: 4, // 4 slides on laptops and larger screens
          },
        }}
        navigation={{
          nextEl: ".swiper-button-next-gallery",
          prevEl: ".swiper-button-prev-gallery",
        }}
        loop={true} // Enable infinite loop
      >
        {/* Example slides */}
        {dynamicGalleryData?.length > 0 &&
          dynamicGalleryData?.map((data, index) => (
            <SwiperSlide key={index}>
              <Card data={data} />
            </SwiperSlide>
          ))}
      </Swiper>
      <div className="flex flex-row justify-between items-center mb-14 lg:mb-0 mt-10 w-fit gap-10 m-auto">
        <div className="swiper-button-prev-gallery cursor-pointer">
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
          <Link
            href="https://news.abplive.com/topic/mahakumbh-2025"
            target="_blank"
          >
            <button className="variant-1">
              <span>
                {intl.formatMessage(
                  { id: "viewAllGalleryUpdates" },
                  { lineBreak: <br /> }
                )}
              </span>
            </button>
          </Link>
        </div>
        <div className="swiper-button-next-gallery cursor-pointer ">
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

export default MahaKumbhGallery;
