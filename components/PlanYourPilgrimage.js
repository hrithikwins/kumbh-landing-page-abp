import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useIntl } from "react-intl";
import WhereToStay from "./WhereToStay";
const PlanYourPilgrimage = () => {
  const intl = useIntl();

  return (
    <div
      //hiding temporary
      //className="mb-10"
      className=" -mb-5"
    >
      <Image
        src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/image 21.svg"
        alt="image"
        width={100}
        height={100}
        className="w-full"
      />
      <div className="bg-[#FED7CF] pt-10 text-center">
        <div>
          <span>
            {intl.formatMessage(
              { id: "sarvsidhpradhKumbh" },
              { lineBreak: <br /> }
            )}
          </span>
        </div>
        <div></div>
        <div
          id="plan-your-pilgrimage"
          className="text-4xl  text-center text-[#6A302F] mt-4 "
        >
          <span>
            {intl.formatMessage(
              { id: "acknowledgementsHeading" },
              { lineBreak: <br /> }
            )}
          </span>
        </div>

        {/*For mobile  frame section */}

        <div className="flex lg:hidden flex-col items-center mt-10 justify-center gap-20 px-4">
          <div className="relative w-[390px] h-[205px]">
            {/* Frame Image */}
            <Image
              src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/images/big-frame.png"
              alt="frame"
              layout="fill"
              objectFit="contain"
              className="z-10"
            />

            {/* Inner Image */}
            <div className="absolute inset-0 flex justify-center z-0">
              <Image
                src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/images/main-image.svg"
                alt="main-image"
                width={380}
                height={220}
                className="object-cover "
              />
            </div>
          </div>
          <div className="flex  items-center justify-center gap-10">
            <Image
              width={100}
              height={100}
              className="w-40"
              src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/Group 18.svg"
              alt="left-frame"
            />
            <Image
              width={100}
              height={100}
              className="w-40"
              src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/Group 19.svg"
              alt="right-frame"
            />
          </div>
        </div>
        {/**For desktop frame section */}
        <div className="hidden lg:flex flex-row items-center mt-10 justify-center gap-20">
          <Image
            width={100}
            height={100}
            className="w-60"
            src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/Group 18.svg"
            alt="left-frame"
          />
          <div className="relative w-[500px] h-[270px]">
            {/* Frame Image */}
            <Image
              src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/images/big-frame.png"
              alt="frame"
              layout="fill"
              objectFit="contain"
              className="z-10"
            />

            {/* Inner Image */}
            <div className="absolute inset-0 flex justify-center z-0">
              <Image
                src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/images/main-image.svg"
                alt="main-image"
                width={490}
                height={300}
                className="object-cover "
              />
            </div>
          </div>
          <Image
            width={100}
            height={100}
            className="w-60"
            src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/Group 19.svg"
            alt="right-frame"
          />
        </div>

        <div className="h-[350px]">
          <Image
            width={100}
            height={100}
            src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/image 25.svg"
            className="absolute left-0 z-50 w-52 lg:w-auto"
            alt="left-flower"
          />

          <Image
            width={100}
            height={100}
            src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/kalash 1.svg"
            className="absolute mt-40 left-[35%] z-50 w-40 lg:w-60 lg:left-[45%] lg:mt-20"
            alt="kalash"
          />
          <Image
            width={100}
            height={100}
            src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/image 26.svg"
            className="absolute right-0 z-50 w-52 lg:w-auto"
            alt="right-flower"
          />
        </div>

        <div className="flex pt-20 flex-col items-center justify-center mt-5 lg:mt-10 rounded-t-[931px] bg-gradient-to-b from-[#FFF] to-[#FCF2E7] w-full">
          <div className="text-[#6A302F] text-3xl mt-7 lg:mt-0 lg:text-4xl ">
            <span>
              {intl.formatMessage(
                { id: "pilgrimageHeading" },
                { lineBreak: <br /> }
              )}
            </span>
          </div>
          <div className="text-xs mt-4 font-lora lg:text-sm">
            <span>{intl.formatMessage({ id: "pilgrimageDescription" })}</span>
          </div>
          <Link href="#useful-links-section" passHref>
            <button className="bg-[#6A302F] w-60 mt-4 text-sm text-white text-center px-4 py-2 rounded-xl">
              Explore our service offerings
            </button>
          </Link>
          <WhereToStay
            title={
              <span>
                {intl.formatMessage(
                  { id: "howToReach" },
                  { lineBreak: <br /> }
                )}
              </span>
            }
            subTitle={
              <span>
                {intl.formatMessage(
                  { id: "howToReachSubtitle" },
                  { lineBreak: <br /> }
                )}
              </span>
            }
          />
          <WhereToStay
            title={
              <span>
                {intl.formatMessage(
                  { id: "whereToStay" },
                  { lineBreak: <br /> }
                )}
              </span>
            }
            subTitle={
              <span>
                {intl.formatMessage(
                  { id: "whereToStaySubtitle" },
                  { lineBreak: <br /> }
                )}
              </span>
            }
          />
          <WhereToStay
            title={
              <span>
                {intl.formatMessage(
                  { id: "directionToGhats" },
                  { lineBreak: <br /> }
                )}
              </span>
            }
            subTitle={
              <span>
                {intl.formatMessage(
                  { id: "directionToGhatsSubtitle" },
                  { lineBreak: <br /> }
                )}
              </span>
            }
          />
          <div className="hidden lg:flex lg:flex-row lg:justify-between mt-10 lg:gap-0 w-full items-center">
            <img
              src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/sadhu new 1.svg"
              className="w-[25rem] z-50"
              alt="sadhu"
            />
            <img
              src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/sadhu new1 1.svg"
              className="w-[12.5rem] h-[12.5rem] lg:w-[25rem] lg:h-auto z-50 "
              alt="sadhu"
            />
            <img
              src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/sadhu new3 1.svg"
              className="w-[17.5rem] z-50 lg:mr-28"
              alt="sadhu"
            />
            <div className="block lg:hidden relative w-full h-64">
              <Image
                src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/water1 1.svg"
                alt="water"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 w-full h-full"
              />
            </div>
            <img
              src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/water1 1.svg"
              className="hidden lg:block w-full absolute  translate-y-[120px]"
              alt="water"
            />
            {/**hiding temporary */}
            {/* <Image
              src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/mask.svg"
              alt="mask"
              width={500}
              height={500}
              className="absolute w-full z-20 translate-y-[210px]"
            /> */}
          </div>
          <div className="block lg:hidden relative w-full h-[500px] mt-40">
            <div className="absolute inset-0">
              <Image
                src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/water1 1.svg"
                alt="water"
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
            </div>
            <div className="absolute top-1/2 left-20 transform -translate-y-1/2 -translate-x-1/2">
              <Image
                width={100}
                height={100}
                src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/sadhu new 1.svg"
                className="w-[200px] lg:w-[400px] z-50"
                alt="sadhu"
              />
            </div>

            <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 ">
              <Image
                width={100}
                height={100}
                src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/sadhu new1 1.svg"
                className="w-[200px] lg:w-[400px] z-50"
                alt="sadhu"
              />
            </div>
            <div className="absolute top-1/2 right-20 transform -translate-y-1/2 translate-x-1/2">
              <Image
                width={100}
                height={100}
                src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/sadhu new3 1.svg"
                className="w-[150px] lg:w-[280px] z-50"
                alt="sadhu"
              />
            </div>
            <Image
              src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/mask.svg"
              alt="mask"
              width={500}
              height={500}
              className="absolute w-full z-20 translate-y-[470px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanYourPilgrimage;
