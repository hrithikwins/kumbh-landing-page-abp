"use client";
import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";
import { useIntl } from 'react-intl';
// import "./styles.css"; // Custom CSS for arrows or styling

const Card = ({ data }) => {
  return (
    <div>
      <Link href={data.permalinks} target="_blank">
        <Image
          src={data.thumbnail_image_url}
          alt={data.title}
          width={400}
          height={200}
        />

        <div className="text-2xl  py-2">{data.title}</div>

        <div className="text-sm font-lora">{data.excerpt}</div>
      </Link>
    </div>
  );
};

const MySwiper = () => {
  const prevRef = useRef(null); // Ref for the previous button
  const nextRef = useRef(null); // Ref for the next button
  const [dynamicNewsData, setDynamicNewsData] = useState([]);
const intl = useIntl();
  const newsData = [
    {
      title:
        "13 जनवरी से हो रहा महाकुंभ का आगाज, रेलवे के इस ऐप में जानें अपनी यात्रा से जुड़ी हर डिटेल",
      description:
        "Kumbh Rail Seva App: 'कुंभ रेल सेवा' ऐप में प्रयागराज में शुरू हो रहे महाकुंभ से जुड़ी हर जानकारी डिटेल में मिलेगी. इसमें ट्रेन के साथ प्रयागराज में ठहरने के लिए होटल-लॉज तक के बारे में जान सकेंगे.",
      image: "/images/abp-news/news-1.png",
    },
    {
      title:
        "महाकुंभ में होटल बुकिंग के नाम पर फर्जी वेबसाइट बनाकर हो रही ठगी, सरगना समेत साइबर ठग गिरफ्तार",
      description:
        "Maha Kumbh 2025: डीसीपी सिटी अभिषेक भारती के मुताबिक प्रयागराज साइबर क्राइम थाना पुलिस द्वारा पकड़े़ गए साइबर ठगों के गिरोह का सरगना बिहार का रहने वाला है.",
      image: "/images/abp-news/news-2.png",
    },
    {
      title:
        "महाकुंभ 2025 में स्नान की प्रमुख तिथियां क्या हैं? अभी से नोट कर लें ये शुभ डेट",
      description:
        "Mahakumbh 2025: महाकुंभ का आयोजन संगम नगरी प्रयागराज में साल 2025 में होने जा रहा है. जानतें हैं प्रमुख तिथियों के बारे में जब आप महाकुंभ में स्नान कर सकते हैं.",
      image: "/images/abp-news/news-3.png",
    },
    {
      title:
        "महाकुंभ 2025 को प्लास्टिक फ्री बनाने के लिए श्राद्धलुओं को दिलाई गई शपथ, जूट के थैले का वितरण",
      description:
        "Kumbh Mela 2025: 13 जनवरी से शुरू हो रहे महाकुंभ को दिव्य, भव्य. सुरक्षित और डिजिटल के साथ ही प्लास्टिक फ्री व ग्रीन कुंभ के तौर पर भी आयोजित करने की तैयारी में है. इसको लेकर सरकार सक्रिय है.",
      image: "/images/abp-news/news-4.png",
    },
    {
      title:
        "13 जनवरी से हो रहा महाकुंभ का आगाज, रेलवे के इस ऐप में जानें अपनी यात्रा से जुड़ी हर डिटेल",
      description:
        "Kumbh Rail Seva App: 'कुंभ रेल सेवा' ऐप में प्रयागराज में शुरू हो रहे महाकुंभ से जुड़ी हर जानकारी डिटेल में मिलेगी. इसमें ट्रेन के साथ प्रयागराज में ठहरने के लिए होटल-लॉज तक के बारे में जान सकेंगे.",
      image: "/images/abp-news/news-1.png",
    },
    {
      title:
        "महाकुंभ में होटल बुकिंग के नाम पर फर्जी वेबसाइट बनाकर हो रही ठगी, सरगना समेत साइबर ठग गिरफ्तार",
      description:
        "Maha Kumbh 2025: डीसीपी सिटी अभिषेक भारती के मुताबिक प्रयागराज साइबर क्राइम थाना पुलिस द्वारा पकड़े़ गए साइबर ठगों के गिरोह का सरगना बिहार का रहने वाला है.",
      image: "/images/abp-news/news-2.png",
    },
    {
      title:
        "महाकुंभ 2025 में स्नान की प्रमुख तिथियां क्या हैं? अभी से नोट कर लें ये शुभ डेट",
      description:
        "Mahakumbh 2025: महाकुंभ का आयोजन संगम नगरी प्रयागराज में साल 2025 में होने जा रहा है. जानतें हैं प्रमुख तिथियों के बारे में जब आप महाकुंभ में स्नान कर सकते हैं.",
      image: "/images/abp-news/news-3.png",
    },
    {
      title:
        "महाकुंभ 2025 को प्लास्टिक फ्री बनाने के लिए श्राद्धलुओं को दिलाई गई शपथ, जूट के थैले का वितरण",
      description:
        "Kumbh Mela 2025: 13 जनवरी से शुरू हो रहे महाकुंभ को दिव्य, भव्य. सुरक्षित और डिजिटल के साथ ही प्लास्टिक फ्री व ग्रीन कुंभ के तौर पर भी आयोजित करने की तैयारी में है. इसको लेकर सरकार सक्रिय है.",
      image: "/images/abp-news/news-4.png",
    },
  ];

  //fetch data from the api
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(
          "https://feeds.abplive.com/testfeeds/english/maha-kumbh-2025/tag-index-news-subset30"
        );
        const newsData = await data.json();
        setDynamicNewsData(newsData);
        console.log(newsData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

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
        className="text-3xl lg:text-4xl mt-20 lg:mt-20  text-center text-[#6A302F] "
      >
        <span>{intl.formatMessage({ id: "newsSectionHeading" })}</span>
      </div>

      <div className="mt-2 text-sm text-center mb-8 font-lora">
        {" "}
        <span>{intl.formatMessage({ id: "newsSectionDescription" })}</span>
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
          nextEl: ".swiper-button-next-news",
          prevEl: ".swiper-button-prev-news",
        }}
        loop={true} // Enable infinite loop
      >
        {/* Example slides */}
        {dynamicNewsData?.sections?.length > 0 &&
          dynamicNewsData?.sections?.map((data, index) => (
            <SwiperSlide key={index}>
              <Card data={data} />
            </SwiperSlide>
          ))}
      </Swiper>
      <div className="flex flex-row justify-between items-center mt-10 w-fit gap-10 m-auto">
        <div className="swiper-button-prev-news cursor-pointer">
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
            href="https://www.abplive.com/topic/mahakumbh-2025"
            target="_blank"
          >
            <button className="bg-[#6A302F] text-sm text-white text-center px-4 py-2 rounded-xl">
             <span>{intl.formatMessage({ id: "viewAllLatestNews" })}</span>
            </button>
          </Link>
        </div>
        <div className="swiper-button-next-news cursor-pointer ">
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
