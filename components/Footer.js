import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const footerLists = {
    list1: [
      {
        name: "Latest News Today",

        link: "https://news.abplive.com/",
      },
      {
        name: "Latest News",

        link: "https://news.abplive.com/404.html",
      },
      {
        name: "Education",

        link: "https://news.abplive.com/education",
      },
      {
        name: "Sports",

        link: "https://news.abplive.com/sports",
      },
      {
        name: "Mahakumbh",

        link: "https://news.abplive.com/topic/mahakumbh-2025",
      },
      {
        name: "Delhi Election",

        link: "https://news.abplive.com/elections/delhi-assembly-election-2025",
      },
      {
        name: "Republic Day",

        link: "https://news.abplive.com/topic/republic-day-2025",
      },
      {
        name: "Auto",

        link: "https://news.abplive.com/auto",
      },
      {
        name: "Health",
        link: "https://news.abplive.com/health",
      },
      {
        name: "Business",
        link: "https://news.abplive.com/business",
      },
      {
        name: "Latest Mobile Phones",
        link: "https://news.abplive.com/mobiles.html",
      },
    ],
    list2: [
      {
        name: "Entertainment News",
        link: "https://news.abplive.com/entertainment",
      },
      {
        name: "Visual Stories",
        link: "https://news.abplive.com/web-stories",
      },
      {
        name: "OTT",
        link: "https://news.abplive.com/entertainment/ott",
      },
      {
        name: "Celebrities",
        link: "https://news.abplive.com/entertainment/celebrities",
      },
      {
        name: "Movie Review",
        link: "https://news.abplive.com/entertainment/movie-review",
      },
      {
        name: "Web Series",
        link: "https://news.abplive.com/entertainment/web-series",
      },
      {
        name: "Movies",
        link: "https://news.abplive.com/entertainment/movies",
      },
    ],
    list3: [
      {
        name: "Sports",
        link: "https://news.abplive.com/",
      },
      {
        name: "Cricket",
        link: "https://news.abplive.com/sports/cricket",
      },
      {
        name: "ICC Ranking",
        link: "https://news.abplive.com/sports/cricket/icc-ranking.html",
      },
      {
        name: "Virat Kholi",
        link: "https://news.abplive.com/topic/virat-kohli",
      },
      {
        name: "Champions Trophy",
        link: "https://news.abplive.com/topic/champions-trophy",
      },
    ],
    list4: [
      {
        name: "Pin Code Finder",
        link: "https://news.abplive.com/pincode/uttar-pradesh.html",
      },
      {
        name: "UP Pin Codes",
        link: "https://news.abplive.com/",
      },
      {
        name: "Maharashtra Pin Codes",
        link: "https://news.abplive.com/pincode/maharashtra.html",
      },
    ],
    list5: [
      {
        name: "Weather",
        link: "https://news.abplive.com/weather",
      },
      {
        name: "Delhi Weather",
        link: "https://news.abplive.com/weather/delhi",
      },
      {
        name: "Hyderabad Weather",
        link: "https://news.abplive.com/weather/hyderabad",
      },
      {
        name: "Mumbai Weather",
        link: "https://news.abplive.com/weather/mumbai",
      },
      {
        name: "Kolkata Weather",
        link: "https://news.abplive.com/weather/kolkata",
      },
      {
        name: "Chennai Weather",
        link: "https://news.abplive.com/weather/chennai",
      },
      {
        name: "Noida Weather",
        link: "https://news.abplive.com/weather/noida",
      },
      {
        name: "Nagpur Weather",
        link: "https://news.abplive.com/weather/nagpur",
      },
    ],
    // list6: [
    //   {
    //     name: "Lifestyle",
    //     hindiName: "जीवन शैली",
    //     link: "#",
    //   },
    //   {
    //     name: "Utitlity News",
    //     hindiName: "उपयोगिता समाचार",
    //     link: "#",
    //   },
    //   {
    //     name: "Travel",
    //     hindiName: "यात्रा",
    //     link: "#",
    //   },
    //   {
    //     name: "General Knowledge",
    //     hindiName: "सामान्य ज्ञान",
    //     link: "#",
    //   },
    //   {
    //     name: "Fashion",
    //     hindiName: "पहनावा",
    //     link: "#",
    //   },
    //   {
    //     name: "Agriculture",
    //     hindiName: "कृषि",
    //     link: "#",
    //   },
    //   {
    //     name: "Health",
    //     hindiName: "स्वास्थ्य",
    //     link: "#",
    //   },
    // ],
    // list7: [
    //   {
    //     name: "Gold Price",
    //     hindiName: "सोने की कीमत",
    //     link: "#",
    //   },
    // ],
    // list8: [{ name: "Silver Price", hindiName: "चाँदी की कीमत", link: "#" }],
  };

  const footerLinks = [
    {
      name: "About Us",
      link: "https://www.abpnetwork.com/aboutus",
    },
    {
      name: "Feedback",
      link: "https://news.abplive.com/feedback",
    },
    {
      name: "Careers",
      link: "https://www.abpnetwork.com/careers",
    },
    {
      name: "Advertise with us",
      link: "/advertise-with-us",
    },
    {
      name: "Sitemap",
      link: "https://news.abplive.com/sitemap",
    },
    {
      name: "Disclaimer",
      link: "https://news.abplive.com/disclaimer",
    },
    {
      name: "Privacy Policy",
      link: "https://news.abplive.com/privacy-policy",
    },
    {
      name: "Contact Us",
      link: "https://news.abplive.com/contact-us",
    },
  ];

  const langOptions = [
    {
      label: "English",
      value: "en",
    },
    {
      label: "हिंदी",
      value: "hn",
    },
  ];

  const footerNewsLinks = {
    title: "ABP News Group Websites",
    listOfWebsites: [
      {
        name: "ABP Network",
        link: "https://www.abpnetwork.com/",
      },
      {
        name: "ABP Live",
        link: "https://news.abplive.com/",
      },
      {
        name: "ABP न्यूज़",
        link: "https://www.abplive.com/",
      },
      {
        name: "ABP আনন্দ",
        link: "https://bengali.abplive.com/",
      },
      {
        name: "ABP माझा",
        link: "https://marathi.abplive.com/",
      },
      {
        name: "ABP અસ્મિતા",
        link: "https://gujarati.abplive.com/",
      },
      {
        name: "ABP Ganga",
        link: "https://www.abplive.com/states/up-uk",
      },
      {
        name: "ABP ਸਾਂਝਾ",
        link: "https://punjabi.abplive.com/",
      },
      {
        name: "ABP நாடு",
        link: "https://tamil.abplive.com/",
      },
      {
        name: "ABP దేశం",
        link: "https://telugu.abplive.com/",
      },
    ],
  };

  const footerSocialLinks = {
    title: "Follow Us",
    links: [
      {
        name: "Twitter",
        link: "https://x.com/abplive",
        icon: "https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/icons/footer/x-twitter.svg",
      },
      {
        name: "Facebook",
        link: "https://www.facebook.com/abplive",
        icon: "https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/icons/footer/facebook.svg",
      },
      {
        name: "Threads",
        link: "https://www.threads.net/@abplivenews",
        icon: "https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/icons/footer/threads.svg",
      },
      {
        name: "YouTube",
        link: "https://www.youtube.com/@abp_live",
        icon: "https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/icons/footer/youtube.svg",
      },
      {
        name: "Instagram",
        link: "https://www.instagram.com/abplivenews/",
        icon: "https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/icons/footer/instagram.svg",
      },
      {
        name: "Pinterest",
        link: "https://in.pinterest.com/abplive_english/",
        icon: "https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/icons/footer/pinterest.svg",
      },
      {
        name: "Telegram",
        link: "https://t.me/officialabplive",
        icon: "https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/icons/footer/telegram.svg",
      },
      {
        name: "WhatsApp",
        link: "https://www.whatsapp.com/channel/0029Va9fHab8aKvGCiJutv3B",
        icon: "https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/icons/footer/whatsapp.svg",
      },
    ],
  };

  return (
    <footer className="mt-48 font-lora">
      <div className="hidden lg:flex w-full bg-[#4B0505] py-10 px-32   flex-col gap-5">
        <div className="flex gap-10">
          {/**Logo */}
          <Link href="https://news.abplive.com/" target="_blank">
            <Image
              src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/ABP.png"
              alt="abp-logo"
              width={100}
              height={100}
            />
          </Link>
          {/*language dropdown */}
          <div>
            <select className="bg-[#F00000] text-white min-w-24 h-8 px-1 rounded-md">
              {langOptions.map((item, index) => (
                <option key={index} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        {/**All the list of services */}
        <div className="flex justify-between">
          {Object.keys(footerLists).map((listKey, index) => (
            <div key={index}>
              <ul>
                {footerLists[listKey].map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className={` font-lora text-md my-5 w-26 ${
                      itemIndex === 0
                        ? "text-[#FBB900] font-semibold uppercase"
                        : "text-white"
                    }`}
                  >
                    <Link href={item.link} target="_blank">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="relative w-full bg-black text-white py-10 pb-28 px-5 text-sm lg:px-32 lg:text-base flex flex-col gap-2">
        {/* Links of the website */}
        <div className="w-full font-semibold">
          <ul className="flex flex-wrap gap-3 uppercase lg:flex-nowrap lg:justify-between">
            {footerLinks.map((item, index) => (
              <li key={index} className="text-white text-sm lg:text-xl">
                <Link href={item.link} target="_blank">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full flex flex-col gap-4 lg:gap-0 lg:flex-row justify-between mt-5 font-lora">
          {/*News websites */}
          <div className="flex flex-col gap-5">
            <h3 className="text-[#FBB900] text-sm lg:text-xl uppercase">
              {footerNewsLinks.title}
            </h3>
            <ul className="flex gap-3 lg:gap-5 flex-wrap lg:flex-nowrap">
              {footerNewsLinks.listOfWebsites.map((item, index) => (
                <li key={index} className="text-white text-xs lg:text-base">
                  <Link href={item.link} target="_blank">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/*Footer social links */}
          <div className="flex flex-col gap-5">
            <h3 className="text-[#FBB900] text-sm lg:text-xl uppercase">
              {footerSocialLinks.title}
            </h3>
            <div className="flex gap-1 lg:gap-3">
              {footerSocialLinks.links.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  target="_blank"
                  className="bg-white w-4 h-4 lg:w-7 lg:h-7 flex justify-center items-center  rounded-[50%]"
                >
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={15}
                    height={15}
                    className="w-2 h-2 lg:w-[15px] lg:h-[15px]"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
        {/*Rights of the website */}
        <div className="w-full mt-3 lg:mt-0">
          <p>
            This website follows the{" "}
            <Link
              href="https://news.abplive.com/code-of-ethics"
              target="_blank"
            >
              <span className="underline">DNPA Code of Ethics.</span>
            </Link>{" "}
            Copyright@2025. All rights reserved.
          </p>
        </div>
        {/*Button to scroll to top */}
        <div className="fixed bottom-40 right-5 lg:bottom-24 lg:right-10 z-[999]">
          <Link href="#top">
            <div className="bg-[#F00000] w-10 h-10 lg:w-12 lg:h-12 flex justify-center items-center  rounded-[50%]">
              <Image
                src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/icons/footer/up-arrow.svg"
                alt="up-arrow"
                width={15}
                height={15}
                className="w-8 h-8 lg:w-8 lg:h-8 rounded-[50%]"
              />
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
