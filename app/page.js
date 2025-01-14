"use client";

import { useEffect, useState } from "react";
// import DosAndDonts from "@/components/DosAndDonts";
import Enquirenow from "@/components/Enquirenow";
import Everythingyouneedtoknow from "@/components/Everythingyouneedtoknow";
import Footer from "@/components/Footer";
// import MahaKumbh from "@/components/MahaKumbh";
import MahaKumbhGallery from "@/components/MahaKumbhGallery";
import News from "@/components/News";
import PlanYourPilgrimage from "@/components/PlanYourPilgrimage";
// import TimingSlider from "@/components/TimingSlider";
// import TourPackages from "@/components/TourPackages";
import Image from "next/image";
import Link from "next/link";

const Frame = ({ data }) => {
  return (
    <div className="text-center flex justify-center z-50">
      <Image src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/frame1.png" alt="frame1" width={500} height={500} />
      <div className="absolute translate-y-[40px] text-[#FFF5E3] lg:translate-y-[80px]">
        <div className="text-[20px]">{data.title}</div>
        <div className="font-semibold text-2xl font-lora">{data.date}</div>
      </div>
    </div>
  );
};

export default function Home() {
  const [youtubeLink, setYoutubeLink] = useState("");
  const [isLiveOpen, setIsLiveOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navBarItems = [
    {
      name: "About",
      link: "#about-section",
    },
    // {
    //   name: "History",
    //   link: "#history-section",
    // },
    {
      name: "Plan Your Pilgrimage",
      link: "#plan-your-pilgrimage",
    },
    {
      name: "ABP Coverage",
      link: "#abp-news-coverage",
    },
    //hiding temporary
    // {
    //   name: "Do's and Don't",
    //   link: "#dos-and-donts-section",
    // },
    // {
    //   name: "Tour Packages",
    //   link: "#tour-package-section",
    // },
    {
      name: "Useful Links",
      link: "#useful-links-section",
    },
  ];
  const langOptions = [
    {
      name: "EN",
      link: "#",
    },
    {
      name: "HN",
      link: "#",
    },
  ];

  const framesData = [
    {
      title: "PAUSH PURNAMASI",
      date: "13 JANUARY 2025",
    },
    {
      title: "MAKAR SANKRANTI",
      date: "14 JANUARY 2025",
    },
    {
      title: "MAUNI AMAVASYA",
      date: "29 JANUARY 2025",
    },
    {
      title: "BASANT PANCHAMI",
      date: "3 FEBRUARY 2025",
    },
    {
      title: "MAGHI PURNAMASI",
      date: "12 FEBRUARY 2025",
    },
    {
      title: "MAHA SHIVARATRI",
      date: "26 FEBRUARY 2025",
    },
  ];

  useEffect(() => {
    const getYoutubeLink = async () => {
      try {
        const res = await fetch(
          "https://cache.abplive.com/testfeeds_english_khumb2025_tv",
          {
            cache: "force-cache",
          }
        );
        const data = await res.json();
        setYoutubeLink(data.data);
      } catch (error) {
        console.error(error);
      }
    };

    getYoutubeLink();
  }, []);

  const handleLiveIconClick = () => {
    setIsLiveOpen((prev) => !prev);
    setIsMenuOpen(false); // Ensure menu closes when live opens
  };

  const handleMenuIconClick = () => {
    setIsMenuOpen((prev) => !prev);
    setIsLiveOpen(false); // Ensure live closes when menu opens
  };

  return (
    <>
      {/**Mobile navBar */}
      <div className="flex fixed sm:hidden flex-col gap-2 bottom-0 left-0 right-0 w-full justify-center items-center text-[#6A302F] font-lora font-medium z-[999]">
        <div
          className={`w-full  ${isMenuOpen || isLiveOpen ? "flex" : "hidden"}`}
        >
          <div
            className={`w-full flex flex-col gap-3 ${
              isLiveOpen ? "" : "py-3"
            } bg-[#FFF5E3] rounded-lg  transition-opacity duration-500 z-50 bg-slate-300 ${
              isMenuOpen || isLiveOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            {isLiveOpen && youtubeLink && (
              <div className="w-full h-40 rounded-lg overflow-hidden pointer-events-auto">
                <iframe
                  src={youtubeLink}
                  width="100%"
                  height="100%"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
            )}

            {isMenuOpen &&
              navBarItems.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-center items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link href={item.link}>{item.name}</Link>
                </div>
              ))}
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="bg-[#FFF5E3] flex items-center w-full gap-3 h-auto rounded-t-2xl py-3 px-4">
            <div className="flex justify-center items-center ">
              <button className="rounded-2xl py-2 px-4 bg-[#6A302F] text-white font-merriweather">
                Enter Mahakumbh Mela
              </button>
            </div>

            <div
              className="h-14 w-14 hover:cursor-pointer"
              onClick={handleLiveIconClick}
            >
              {isLiveOpen ? (
                <Image
                  src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/icons/close-live-yt.svg"
                  alt="live-icon"
                  width={100}
                  height={100}
                  className={`object-contain w-full h-full  transition-opacity duration-500 ${
                    isLiveOpen ? "opacity-100" : "opacity-0"
                  }`}
                />
              ) : (
                <Image
                  src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/icons/live-yt.svg"
                  alt="live-icon"
                  width={100}
                  height={100}
                  className={`object-contain w-full h-full  transition-opacity duration-500 ${
                    isLiveOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
              )}
            </div>
            <div
              className="text-xl hover:cursor-pointer"
              onClick={handleMenuIconClick}
            >
              <p>{isMenuOpen ? "Close" : "Menu"}</p>
            </div>
          </div>
        </div>
      </div>
      {/** nav bar */}
      <div className="hidden lg:fixed lg:flex flex-col gap-2 bottom-8 w-full justify-center items-center text-[#6A302F] font-lora md:text-xs xl:text-base  font-medium z-[999]">
        <div
          className={`w-full  justify-end items-center ${
            isLiveOpen ? "flex" : "hidden"
          }`}
        >
          {youtubeLink && (
            <div
              className={`w-56 h-40  mr-36 rounded-lg opacity-0 transition-opacity duration-500 ${
                isLiveOpen ? "opacity-100" : ""
              }`}
            >
              <iframe
                src={youtubeLink}
                width="100%"
                height="100%"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
          )}
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="bg-[#FFF5E3CC] flex md:gap-3 xl:gap-8 xl:w-auto h-auto rounded-2xl py-3 px-4 md:w-[85%]">
            {navBarItems.map((item, index) => (
              <div key={index} className="flex justify-center items-center">
                <Link href={item.link}>{item.name}</Link>
              </div>
            ))}
            {/* <div className="flex justify-center items-center gap-5 md:ml-0 xl:ml-4">
            {langOptions.map((item, index) => (
              <div key={index} className="flex justify-center items-center">
                <Link href={item.link}>{item.name}</Link>
              </div>
            ))}
          </div> */}
            <div className="flex justify-center items-center ">
              <button className="rounded-2xl py-2 px-4 bg-[#6A302F] text-white font-merriweather">
                Enter Mahakumbh Mela
              </button>
            </div>
          </div>
          <div className="ml-2 flex flex-row-reverse w-[10%]">
            <div
              className="md:w-12 md:h-12 xl:w-16 xl:h-16 hover:cursor-pointer"
              onClick={handleLiveIconClick}
            >
              {isLiveOpen ? (
                <Image
                  src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/icons/close-live-yt.svg"
                  alt="live-icon"
                  width={100}
                  height={100}
                  className={`object-contain w-full h-full opacity-0 transition-opacity duration-500 ${
                    isLiveOpen ? "opacity-100" : ""
                  }`}
                />
              ) : (
                <Image
                  src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/icons/live-yt.svg"
                  alt="live-icon"
                  width={100}
                  height={100}
                  className={`object-contain w-full h-full opacity-0 transition-opacity duration-500 ${
                    isLiveOpen ? "" : "opacity-100"
                  }`}
                />
              )}
            </div>
            {/* <div className="md:w-12 md:h-12 xl:w-16 xl:h-16">
            <Image
              src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/icons/help.svg"
              alt="help-icon"
              width={100}
              height={100}
              className="object-contain w-full h-full"
            />
          </div> */}
          </div>
        </div>
      </div>
      <div className="overflow-x-hidden">
        <div className="bg-[url('https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/hero-bg.svg')] bg-cover bg-center xs:h-[80vh] lg:h-screen">
          {/*logo section for mobile */}
          <div className="flex w-full lg:hidden justify-between p-3">
            <div className="flex flex-row lg:items-center gap-2 lg:gap-6 ">
              <div className="z-10 w-24 h-12 lg:h-auto lg:w-24">
                <Image
                  src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/ABP.png"
                  alt="ABP logo"
                  width={80}
                  height={80}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="w-14 h-12 lg:w-24 lg:h-auto z-10">
                <Image
                  src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/new kumbh logo 1.svg"
                  alt="Kumbh logo"
                  width={80}
                  height={80}
                  className="object-contain w-full h-full hover:scale-125 cursor-pointer"
                />
              </div>
            </div>
            <div className="relative w-32 h-20 lg:w-40 lg:h-32">
              <div className="absolute inset-0">
                <Image
                  src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/icons/day-to-go.svg"
                  alt="day-to-go-icon"
                  width={100}
                  height={100}
                  className="object-contain h-full w-full"
                />
              </div>
              <div className="absolute inset-0">
                <Image
                  src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/gifs/stars.gif"
                  alt="overlay-gif"
                  width={100}
                  height={100}
                  className="object-contain h-full w-full"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between px-3 lg:px-6 py-5">
            <div className="hidden lg:flex flex-row lg:items-center gap-2 lg:gap-6 ">
              <div className="z-10 w-14 h-12 lg:h-auto lg:w-24">
                <Image
                  src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/ABP.png"
                  alt="ABP logo"
                  width={80}
                  height={80}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="w-14 h-12 lg:w-24 lg:h-auto z-10">
                <Link href="https://kumbh.gov.in" target="_blank">
                  <Image
                    src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/new kumbh logo 1.svg"
                    alt="Kumbh logo"
                    width={80}
                    height={80}
                    className="object-contain w-full h-full hover:scale-125 cursor-pointer"
                  />
                </Link>
              </div>
            </div>

            <div className="text-[#FFF5E3] text-center text-4xl -mt-9 lg:-mt-0  flex justify-center lg:text-4xl leading-[37px] lg:leading-[60px] font-thin">
              <p className="w-[70%] lg:w-auto">
                THE PRESTIGIOUS PRAYAGRAJ <br /> MAHAKUMBH MELA 2025
              </p>
            </div>

            <div className="hidden lg:block relative w-40 h-32">
              <div className="absolute inset-0">
                <Image
                  src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/icons/day-to-go.svg"
                  alt="day-to-go-icon"
                  width={100}
                  height={100}
                  className="object-contain h-full w-full"
                />
              </div>
              <div className="absolute inset-0">
                <Image
                  src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/gifs/stars.gif"
                  alt="overlay-gif"
                  width={100}
                  height={100}
                  className="object-contain h-full w-full"
                />
              </div>
            </div>
          </div>

          <div>
            <Image
              src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/cloud.svg"
              alt="cloud"
              width={500}
              height={500}
              className="w-[20%]"
            />
            <Image
              src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/image 12.svg"
              alt="image 12"
              width={500}
              height={500}
              className="w-[35%] xs:translate-y-[-50px] lg:w-[25%] lg:translate-y-[-220px] absolute right-0"
            />
            <div className="flex flex-row">
              <Image
                src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/land 1.svg"
                alt="land 1"
                width={500}
                height={500}
                className="w-[75%] absolute translate-y-10 lg:w-[45%] "
              />
              <Image
                src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/image 7.svg"
                alt="image 7"
                width={500}
                height={500}
                className="w-[58%] absolute translate-y-32 z-20 -left-14 lg:-left-0 lg:w-[38%] lg:translate-y-72"
              />
              <Image
                src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/image 7.svg"
                alt="image 7"
                width={500}
                height={500}
                className="w-[32%] left-[14%] absolute translate-y-72"
              />
              <Image
                src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/image 6.svg"
                alt="image 6"
                width={500}
                height={500}
                className="w-[45%] left-[15%] z-40 absolute translate-y-[275px] lg:left-[40%] lg:w-[35%] lg:translate-y-[450px]"
              />
              <Image
                src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/image 8.svg"
                alt="image 8"
                width={500}
                height={500}
                className="w-[42%] left-[30%] z-30 absolute translate-y-[250px] lg:w-[32%] lg:translate-y-[400px]"
              />
              <Image
                src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/flower left.svg"
                alt="flower left"
                width={500}
                height={500}
                className="w-[60%] absolute z-30 translate-y-32 -left-20 lg:translate-y-60 lg:w-[30%] lg:-left-0"
              />
              <Image
                src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/flower right.svg"
                alt="flower right"
                width={500}
                height={500}
                className="w-[60%] absolute translate-y-28 right-0 z-40 lg:w-[30%] lg:translate-y-48 "
              />
              <Image
                src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/land 2.svg"
                alt="land 2"
                width={500}
                height={500}
                className="w-[75%] absolute right-0 translate-y-10  lg:translate-y-auto lg:w-[45%]"
              />
              <Image
                src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/image 12.svg"
                alt="image 12"
                width={500}
                height={500}
                className="w-[48%] absolute right-0 translate-y-32 z-20 lg:-right-0 lg:translate-y-60 lg:z-0"
              />
              <div className="w-[100%] lg:w-[52%] absolute xs:top-[35%] lg:left-[25%]  lg:top-[26%]">
                <Image
                  src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/saint_frame.webp"
                  alt="saint frame"
                  width={500}
                  height={500}
                  className="relative w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}

        <div className="bg-[#FFF5E3] py-10 pt-16 lg:pt-32 mt-0 lg:mt-32">
          <Image
            src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/water-hand 1.svg"
            alt="water hand 1"
            width={500}
            height={500}
            className="absolute w-[40%] right-0 mt-96 z-40 lg:w-[20%] lg:mt-40"
          />
          <Image
            src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/water-hand 2.svg"
            alt="water hand 2"
            width={500}
            height={500}
            className="absolute w-[40%] mt-96 z-40 lg:w-[20%] lg:mt-40"
          />

          <div className="flex justify-center items-center flex-col">
            <Link
              href="https://kumbh.gov.in"
              className="w-[50%] mb-10 lg:mb-0 lg:w-[30%] "
              target="_blank"
            >
              <Image
                src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/new kumbh logo 1.svg"
                alt="new kumbh logo"
                width={500}
                height={500}
                className="cursor-pointer"
              />
            </Link>
            <div
              id="about-section"
              className="text-[#6A302F] text-center font-normal text-3xl translate-y-[-40px]"
            >
              GET RID OF ALL YOUR SINS-
              <br />
              HOLY SNAN DATES
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-10 z-50 mt-40 lg:mt-0">
            {framesData.map((frame, index) => (
              <Frame key={index} data={frame} />
            ))}
          </div>

          <div className="flex flex-row items-center justify-center gap-5 mt-10">
            <Image
              src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/diamond.svg"
              alt="diamond"
              width={32}
              height={32}
              className="w-8"
            />
            <div
              className="text-[#6A302F] underline text-xl lg:text-2xl cursor-pointer"
              onClick={() =>
                window.open("https://kumbh.gov.in/en/bathingdates", "_blank")
              }
            >
              BOOK YOUR SNAN DATES
            </div>
            <Image
              src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/diamond.svg"
              alt="diamond"
              width={32}
              height={32}
              className="w-8"
            />
          </div>

          <div className="border-[#87C0F0] border-t border-r border-l mx-10 rounded-t-3xl mt-10 border-b-transparent pb-[60px] lg:pb-[200px]">
            <div className="flex flex-col items-center px-10 gap-10 justify-center text-center mt-10 lg:flex-row">
              <div className="text-center">
                <div className="uppercase text-[#6A302F] text-4xl">
                  humanity <br /> Gathering
                </div>
                <div className="text-xs text-[#222] mt-2 font-lora">
                  It’s the world’s largest peaceful congregation, attracting
                  millions of devotees, saints, and tourists. All coming
                  together for a shared spiritual experience.
                </div>
              </div>

              <div className="text-center">
                <div className="uppercase text-[#6A302F] text-4xl">
                  Spiritual
                  <br /> Significance
                </div>
                <div className="text-xs text-[#222] mt-2 font-lora">
                  Maha Kumbh Mela is a major Hindu pilgrimage believed to
                  cleanse sins and bring spiritual growth through ritual
                  bathing.
                </div>
              </div>

              <div className="text-center">
                <div className="uppercase text-[#6A302F] text-4xl">
                  Continuous
                  <br /> Cycle
                </div>
                <div className="text-xs text-[#222] mt-2 font-lora">
                  Held every 12 years at four holy river locations (Prayagraj,
                  Haridwar, Ujjain, and Nashik) based on astrological
                  alignments.
                </div>
              </div>
            </div>
          </div>

          <div>
            <Image
              src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/media room- tv.svg"
              alt="media room tv"
              width={420}
              height={420}
              className="absolute w-[250px] left-[12%] xs:w-[80%] xs:left-[10%] lg:w-[420px] lg:left-[38%] m-auto z-50 translate-y-[0px] xs:translate-y-[-10px] lg:translate-y-[-40px]"
            />
            <Image
              src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/sadhu 1.svg"
              alt="sadhu"
              width={250}
              height={250}
              className="absolute w-[130px] xs:w-[40%] left-[25%] translate-y-[30px] xs:translate-y-[30px] lg:w-[220px] lg:left-[42%] m-auto z-40 lg:translate-y-[-0px]"
            />
          </div>
        </div>
        <div>
          {/**To make the river cover div */}
          <div className="block -mt-10 lg:mt-0 lg:hidden relative w-full h-64 ">
            <Image
              src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/river.svg"
              alt="river"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 w-full h-full"
            />
          </div>
          <Image
            src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/river.svg"
            alt="river"
            width={500}
            height={500}
            className="translate-y-[-10px] w-full hidden lg:block"
          />
          <Image
            src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/mask.svg"
            alt="mask"
            width={500}
            height={500}
            className="absolute w-full z-50 translate-y-[-30px] xs:translate-y-[-20px] lg:translate-y-[-130px]"
          />
        </div>

        {/**ABP News Coverage section */}
        <News />
        {/*MahaKumbh Gallery section */}
        <MahaKumbhGallery />
        {/* Plane your pilgrimage section */}
        <PlanYourPilgrimage />
        {/*History section */}
        {/**hiding temporary */}
        {/* <TimingSlider /> */}
        {/**hiding temporary */}
        {/* <MahaKumbh /> */}

        {/**Do's and Don'ts section */}
        {/**hiding temporary */}
        {/* <DosAndDonts /> */}

        {/**Tour Packages section */}
        {/**hiding temporary */}
        {/* <TourPackages /> */}

        {/*Useful Links section */}

        <Everythingyouneedtoknow />

        <Enquirenow />

        <Footer />
      </div>
    </>
  );
}
