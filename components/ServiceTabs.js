import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { useIntl } from 'react-intl';


const Frame = ({ title, subtitle, icon }) => {
  return (
    <Link href="https://kumbh.gov.in/en/travelplanner" target="_blank">
      <div className="text-center flex justify-center z-50">
        <img
          src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/frame1.png"
          alt="frame"
          className="h-48"
        />
        <div className="absolute translate-y-[40px] text-[#FFF5E3]">
          <div className="flex justify-center">
            <Image src={icon || "/placeholder.svg"} alt={title} width={50} height={50} />
          </div>
          <div className="text-[20px]">{title}</div>
          <div className="text-xs max-w-72 mt-2">{subtitle}</div>
        </div>
      </div>
    </Link>
  );
};
const ServiceTabs = ({ services, travel, food, allThings }) => {
  const intl = useIntl();
  const [active, setActive] = useState(intl.formatMessage({ id: "allServices" }));

  const tabs = [
    { id: "allServices", label: intl.formatMessage({ id: "allServices" }) },
    { id: "travelRest", label: intl.formatMessage({ id: "travelRest" }) },
    { id: "foodAttractions", label: intl.formatMessage({ id: "foodAttractions" }) },
    { id: "allThingsKumbh", label: intl.formatMessage({ id: "allThingsKumbh" }) },
  ];

  const renderContent = () => {
    switch (active) {
      case intl.formatMessage({ id: "allServices" }):
        return services.map((item, index) => (
          <Frame key={index} title={item.title} subtitle={item.subtitle} icon={item.icon} />
        ));
      case intl.formatMessage({ id: "travelRest" }):
        return travel.map((item, index) => (
          <Frame key={index} title={item.title} subtitle={item.subtitle} icon={item.icon} />
        ));
      case intl.formatMessage({ id: "foodAttractions" }):
        return food.map((item, index) => (
          <Frame key={index} title={item.title} subtitle={item.subtitle} icon={item.icon} />
        ));
      case intl.formatMessage({ id: "allThingsKumbh" }):
        return allThings.map((item, index) => (
          <Frame key={index} title={item.title} subtitle={item.subtitle} icon={item.icon} />
        ));
      default:
        return null;
    }
  };

  return (
    <div className="bg-[#FED7CF] pt-0 lg:py-10">
      <div className="w-fit m-auto py-2 px-3 rounded-md text-center bg-[#FFF5E3] grid grid-cols-2 lg:grid-cols-4 gap-2 font-medium">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            onClick={() => setActive(tab.label)}
            className={`cursor-pointer text-xs py-2 rounded-md px-4 ${
              active === tab.label
                ? "bg-[#6A302F] text-white"
                : "bg-white text-[#792D12]"
            }`}
          >
            {tab.label}
          </div>
        ))}
      </div>

      <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-4 mt-10 gap-5 px-10 pb-16 lg:pb-0 z-50">
        {renderContent()}
      </div>
    </div>
  );
};

export default ServiceTabs;
