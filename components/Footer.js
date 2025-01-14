import Image from "next/image";
import React from "react";

const Footer = () => {
  const footerLists = {
    list1: [
      {
        name: "Latest Hindi News",
        hindiName: "नवीनतम हिंदी समाचार",
        link: "#",
      },
      {
        name: "State",
        hindiName: "राज्य",
        link: "#",
      },
      {
        name: "India",
        hindiName: "भारत",
        link: "#",
      },
      { name: "Photo Gallery", hindiName: "फोटो गैलरी", link: "#" },
      {
        name: "World",
        hindiName: "दुनिया",
        link: "#",
      },
      {
        name: "Technology",
        hindiName: "तकनीकी",
        link: "#",
      },
      {
        name: "Auto",
        hindiName: "ऑटो",
        link: "#",
      },
      {
        name: "Podcasts",
        hindiName: "पॉडकास्ट",
        link: "#",
      },
    ],
    list2: [
      {
        name: "Entertainment News",
        hindiName: "मनोरंजन समाचार",
        link: "#",
      },
      {
        name: "Visual Stories",
        hindiName: "दृश्य कहानियाँ",
        link: "#",
      },
      {
        name: "Bollywood",
        hindiName: "बॉलीवुड",
        link: "#",
      },
      {
        name: "TV News",
        hindiName: "टी वी समाचार",
        link: "#",
      },
      {
        name: "OTT News",
        hindiName: "ओटीटी समाचार",
        link: "#",
      },
      {
        name: "Bhojpuri Cinema",
        hindiName: "भोजपुरी सिनेमा",
        link: "#",
      },
      {
        name: "Movie Reviews",
        hindiName: "फिल्म समीक्षा",
        link: "#",
      },
      {
        name: "Tamil Cinema",
        hindiName: "तमिल सिनेमा",
        link: "#",
      },
    ],
    list3: [
      {
        name: "Sports News",
        hindiName: "खेल समाचार",
        link: "#",
      },
      {
        name: "T20 World Cup",
        hindiName: "टी20 वर्ल्ड कप",
        link: "#",
      },
      {
        name: "Cricket",
        hindiName: "क्रिकेट",
        link: "#",
      },
      {
        name: "IPL",
        hindiName: "आईपीएल",
        link: "#",
      },
    ],
    list4: [
      {
        name: "Astro",
        hindiName: "एस्ट्रो",
        link: "#",
      },
      {
        name: "Today's horoscope",
        hindiName: "आज का राशिफल",
        link: "#",
      },
      {
        name: "Religion",
        hindiName: "धर्म",
        link: "#",
      },
    ],
    list5: [
      {
        name: "Season",
        hindiName: "मौसम",
        link: "#",
      },
      {
        name: "Mumbai Weather",
        hindiName: "मुंबई का मौसम",
        link: "#",
      },
      {
        name: "Jaipur Weather",
        hindiName: "जयपुर का मौसम",
        link: "#",
      },
      {
        name: "New Delhi Weather",
        hindiName: "नई दिल्ली मौसम",
        link: "#",
      },
      {
        name: "Lucknow Weather",
        hindiName: "लखनऊ का मौसम",
        link: "#",
      },
      {
        name: "Noida Weather",
        hindiName: "नोएडा का मौसम",
        link: "#",
      },
    ],
    list6: [
      {
        name: "Lifestyle",
        hindiName: "जीवन शैली",
        link: "#",
      },
      {
        name: "Utitlity News",
        hindiName: "उपयोगिता समाचार",
        link: "#",
      },
      {
        name: "Travel",
        hindiName: "यात्रा",
        link: "#",
      },
      {
        name: "General Knowledge",
        hindiName: "सामान्य ज्ञान",
        link: "#",
      },
      {
        name: "Fashion",
        hindiName: "पहनावा",
        link: "#",
      },
      {
        name: "Agriculture",
        hindiName: "कृषि",
        link: "#",
      },
      {
        name: "Health",
        hindiName: "स्वास्थ्य",
        link: "#",
      },
    ],
    list7: [
      {
        name: "Gold Price",
        hindiName: "सोने की कीमत",
        link: "#",
      },
    ],
    list8: [{ name: "Silver Price", hindiName: "चाँदी की कीमत", link: "#" }],
  };

  const footerLinks = [
    {
      name: "About Us",
      link: "#",
    },
    {
      name: "Feedback",
      link: "#",
    },
    {
      name: "Careers",
      link: "#",
    },
    {
      name: "Advertise with us",
      link: "#",
    },
    {
      name: "Sitemap",
      link: "#",
    },
    {
      name: "Disclaimer",
      link: "#",
    },
    {
      name: "Privacy Policy",
      link: "#",
    },
    {
      name: "Contact Us",
      link: "#",
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
        link: "#",
      },
      {
        name: "ABP Live",
        link: "#",
      },
      {
        name: "ABP Ganga",
        link: "#",
      },
    ],
  };

  const footerSocialLinks = {
    title: "Follow Us",
    links: [
      {
        name: "Twitter",
        link: "#",
        icon: "/icons/footer/x-twitter.svg",
      },
      {
        name: "Facebook",
        link: "#",
        icon: "/icons/footer/facebook.svg",
      },
      {
        name: "Threads",
        link: "#",
        icon: "/icons/footer/threads.svg",
      },
      {
        name: "YouTube",
        link: "#",
        icon: "/icons/footer/youtube.svg",
      },
      {
        name: "Instagram",
        link: "#",
        icon: "/icons/footer/instagram.svg",
      },
      {
        name: "Pinterest",
        link: "#",
        icon: "/icons/footer/pinterest.svg",
      },
      {
        name: "Telegram",
        link: "#",
        icon: "/icons/footer/telegram.svg",
      },
    ],
  };

  return (
    <footer className="mt-48 font-lora">
      <div className="hidden lg:flex w-full bg-[#4B0505] py-10 px-32   flex-col gap-5">
        <div className="flex gap-10">
          {/**Logo */}
          <Image src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/ABP.png" alt="abp-logo" width={100} height={100} />
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
                    className={`text-white font-lora text-md my-5 w-26 ${
                      itemIndex === 0
                        ? "text-[#FBB900] font-semibold uppercase"
                        : ""
                    }`}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full bg-black text-white py-10 px-5 text-sm lg:px-32 lg:text-base flex flex-col gap-2">
        {/* Links of the website */}
        <div className="w-full font-semibold">
          <ul className="flex flex-wrap gap-2 uppercase lg:flex-nowrap lg:justify-between">
            {footerLinks.map((item, index) => (
              <li key={index} className="text-white text-sm lg:text-xl">
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full flex justify-between mt-5 font-lora">
          {/*News websites */}
          <div className="flex flex-col gap-5">
            <h3 className="text-[#FBB900] text-sm lg:text-xl uppercase">
              {footerNewsLinks.title}
            </h3>
            <ul className="flex gap-5">
              {footerNewsLinks.listOfWebsites.map((item, index) => (
                <li key={index} className="text-white text-xs lg:text-base">
                  <a href={item.link}>{item.name}</a>
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
                <a
                  key={index}
                  href={item.link}
                  className="bg-white w-4 h-4 lg:w-7 lg:h-7 flex justify-center items-center  rounded-[50%]"
                >
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={15}
                    height={15}
                    className="w-2 h-2 lg:w-[15px] lg:h-[15px]"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
        {/*Rights of the website */}
        <div className="w-full">
          <p>
            This website follows the{" "}
            <span className="underline">DNPA Code of Ethics.</span>{" "}
            Copyright@2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
