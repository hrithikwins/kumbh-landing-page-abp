"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useLocale } from './contexts/LocaleContext';
import messages from './messages';
import { useIntl } from "react-intl";
import ServiceTabs from "./ServiceTabs"


const Everythingyouneedtoknow = () => {
  const { locale } = useLocale();
  const intl = { formatMessage: (id) => messages[locale][id.id] };
  const [active, setActive] = useState(intl.formatMessage({ id: "allServices" }));


const services = [
  {
    title: intl.formatMessage({ id: "howToReach" }),
    subtitle: intl.formatMessage({ id: "howToReachSubtitle" }),
    icon: "https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/images/useful-links/how-to-reach.svg",
  },
  {
    title: intl.formatMessage({ id: "whereToStay" }),
    subtitle: intl.formatMessage({ id: "whereToStaySubtitle" }),
    icon: "https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/images/useful-links/where-to-stay.svg",
  },
  {
    title: intl.formatMessage({ id: "directionToGhats" }),
    subtitle: intl.formatMessage({ id: "directionToGhatsSubtitle" }),
    icon: "https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/images/useful-links/direction-to-ghat.svg",
  },
  {
    title: intl.formatMessage({ id: "touristGuide" }),
    subtitle: intl.formatMessage({ id: "touristGuideSubtitle" }),
    icon: "https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/images/useful-links/tourist-guide.svg",
  },
  {
    title: intl.formatMessage({ id: "visitorsGuide" }),
    subtitle: intl.formatMessage({ id: "visitorsGuideSubtitle" }),
    icon: "https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/images/useful-links/visitor-guide.svg",
  },
  {
    title: intl.formatMessage({ id: "melaAttractions" }),
    subtitle: intl.formatMessage({ id: "melaAttractionsSubtitle" }),
    icon: "https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/images/useful-links/mela-attraction.svg",
  },
  {
    title: intl.formatMessage({ id: "nearbyAttractions" }),
    subtitle: intl.formatMessage({ id: "nearbyAttractionsSubtitle" }),
    icon: "https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/images/useful-links/nearby-attraction.svg",
  },
  {
    title: intl.formatMessage({ id: "foodAndThings" }),
    subtitle: intl.formatMessage({ id: "foodAndThingsSubtitle" }),
    icon: "https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/images/useful-links/food-and-thing.svg",
  },
];

const travel = [
  {
    title: intl.formatMessage({ id: "howToReach" }),
    subtitle: intl.formatMessage({ id: "howToReachSubtitle" }),
    icon: "https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/images/useful-links/how-to-reach.svg",
  },
  {
    title: intl.formatMessage({ id: "whereToStay" }),
    subtitle: intl.formatMessage({ id: "whereToStaySubtitle" }),
    icon: "https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/images/useful-links/where-to-stay.svg",
  },
  {
    title: intl.formatMessage({ id: "directionToGhats" }),
    subtitle: intl.formatMessage({ id: "directionToGhatsSubtitle" }),
    icon: "https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/images/useful-links/direction-to-ghat.svg",
  },
  {
    title: intl.formatMessage({ id: "touristGuide" }),
    subtitle: intl.formatMessage({ id: "touristGuideSubtitle" }),
    icon: "https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/images/useful-links/tourist-guide.svg",
  },
  {
    title: intl.formatMessage({ id: "visitorsGuide" }),
    subtitle: intl.formatMessage({ id: "visitorsGuideSubtitle" }),
    icon: "https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/images/useful-links/visitor-guide.svg",
  },
];

const food = [
  {
    title: intl.formatMessage({ id: "melaAttractions" }),
    subtitle: intl.formatMessage({ id: "melaAttractionsSubtitle" }),
    icon: "https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/images/useful-links/mela-attraction.svg",
  },
  {
    title: intl.formatMessage({ id: "nearbyAttractions" }),
    subtitle: intl.formatMessage({ id: "nearbyAttractionsSubtitle" }),
    icon: "https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/images/useful-links/nearby-attraction.svg",
  },
  {
    title: intl.formatMessage({ id: "foodAndThings" }),
    subtitle: intl.formatMessage({ id: "foodAndThingsSubtitle" }),
    icon: "https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/images/useful-links/food-and-thing.svg",
  },
];

const allThings = [
  {
    title: intl.formatMessage({ id: "melaAttractions" }),
    subtitle: intl.formatMessage({ id: "melaAttractionsSubtitle" }),
    icon: "https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/images/useful-links/mela-attraction.svg",
  },
  {
    title: intl.formatMessage({ id: "nearbyAttractions" }),
    subtitle: intl.formatMessage({ id: "nearbyAttractionsSubtitle" }),
    icon: "https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/images/useful-links/nearby-attraction.svg",
  },
];

  return (
    <div
      //hiding temporary
      //  className="mt-32 lg:mt-0"
      className="mt-14 lg:mt-0"
    >
      <div>
        <img
          src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/image 21.svg"
          className="w-full"
        />
      </div>

      <div>
        <img
          src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/image 29.svg"
          className="absolute translate-y-[-100px] left-0 w-52 lg:w-auto lg:translate-y-[-300px]"
        />
        <img
          src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/image 30.svg"
          className="absolute translate-y-[-100px] right-0 w-52 lg:w-auto lg:translate-y-[-300px]"
        />
      </div>
      <div className="bg-[#FED7CF] text-center pb-14 pt-36 lg:py-36 lg:pb-12 ">
        <div className="font-semibold text-sm">{intl.formatMessage({ id: "usefulLinks" })}</div>
        <div
          id="useful-links-section"
          className="flex justify-center text-[#6A302F] text-center font-normal text-4xl mt-4"
        >
          <p className="w-[80%] lg:w-auto">{intl.formatMessage({ id: "everythingYouNeed" })}</p>
        </div>

        <div className="mt-4 flex justify-center">
          <p className="w-[80%] lg:w-auto">
            {intl.formatMessage({ id: "exploreServices" })}
          </p>
        </div>
      </div>


       <ServiceTabs
        services={services}
        travel={travel}
        food={food}
        allThings={allThings}
      />

      <div>
        <img
          src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/image 21.svg"
          className="rotate-180 w-full translate-y-[-10px]"
        />
      </div>
    </div>
  );
};


export default Everythingyouneedtoknow;
