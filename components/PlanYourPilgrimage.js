import Image from "next/image";
import Link from "next/link";
import React from "react";

const PlanYourPilgrimage = () => {
  return (
    <div
      //hiding temporary
      //className="mb-10"
      className=" -mb-5"
    >
      <Image
        src="/image 21.svg"
        alt="image"
        width={100}
        height={100}
        className="w-full"
      />
      <div className="bg-[#FED7CF] pt-10 text-center">
        <div>|| Sarvsidhpradh Kumbh ||</div>
        <div></div>
        <div
          id="plane-your-pilgrimage-section"
          className="text-4xl  text-center text-[#6A302F] mt-4 "
        >
          Majestic Acknowledgements & Testimonials
        </div>

        {/*For mobile  frame section */}

        <div className="flex lg:hidden flex-col items-center mt-10 justify-center gap-20 px-4">
          <div className="relative w-[390px] h-[205px]">
            {/* Frame Image */}
            <Image
              src="/images/big-frame.png"
              alt="frame"
              layout="fill"
              objectFit="contain"
              className="z-10"
            />

            {/* Inner Image */}
            <div className="absolute inset-0 flex justify-center z-0">
              <Image
                src="/images/main-image.svg"
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
              src="/Group 18.svg"
              alt="left-frame"
            />
            <Image
              width={100}
              height={100}
              className="w-40"
              src="/Group 19.svg"
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
            src="/Group 18.svg"
            alt="left-frame"
          />
          <div className="relative w-[500px] h-[270px]">
            {/* Frame Image */}
            <Image
              src="/images/big-frame.png"
              alt="frame"
              layout="fill"
              objectFit="contain"
              className="z-10"
            />

            {/* Inner Image */}
            <div className="absolute inset-0 flex justify-center z-0">
              <Image
                src="/images/main-image.svg"
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
            src="/Group 19.svg"
            alt="right-frame"
          />
        </div>

        <div className="h-[350px]">
          <Image
            width={100}
            height={100}
            src="/image 25.svg"
            className="absolute left-0 z-50 w-52 lg:w-auto"
            alt="left-flower"
          />

          <Image
            width={100}
            height={100}
            src="/kalash 1.svg"
            className="absolute mt-40 left-[35%] z-50 w-40 lg:w-60 lg:left-[45%] lg:mt-20"
            alt="kalash"
          />
          <Image
            width={100}
            height={100}
            src="/image 26.svg"
            className="absolute right-0 z-50 w-52 lg:w-auto"
            alt="right-flower"
          />
        </div>

        <div className="flex pt-20 flex-col items-center justify-center mt-5 lg:mt-10 rounded-t-[931px] bg-gradient-to-b from-[#FFF] to-[#FCF2E7] w-full">
          <div className="text-[#6A302F] text-3xl mt-7 lg:mt-0 lg:text-4xl ">
            Plan Your Pilgrimage
          </div>
          <div className="text-xs mt-4 font-lora lg:text-sm">
            Join us in this extraordinary journey and witness the confluence of
            tradition, devotion, and enlightenment.
          </div>
          <Link href="#useful-links-section" passHref>
            <button className="bg-[#6A302F] w-60 mt-4 text-sm text-white text-center px-4 py-2 rounded-xl">
              Explore our service offerings
            </button>
          </Link>

          <div className="mt-20">
            <div className="flex flex-row items-center justify-center gap-5 ">
              <Image
                src="/diamond.svg"
                alt="diamond"
                width={32}
                height={32}
                className="w-8"
              />
              <div
                className="text-[#6A302F] underline text-3xl lg:text-4xl cursor-pointer"
                onClick={() =>
                  window.open("https://kumbh.gov.in/en/howtoreach", "_blank")
                }
              >
                How to reach?
              </div>
              <Image
                src="/diamond.svg"
                alt="diamond"
                width={32}
                height={32}
                className="w-8"
              />
            </div>
            <div className="mt-4 text-xs font-lora lg:text-sm">
              Prayagraj city is well connected to all major Cities in India via
              the Indian <br /> Railways network, Highways and Prayagraj Airport
              located in Bamrauli.
            </div>
          </div>

          <div className="mt-10">
            <div className="flex flex-row items-center justify-center gap-5 ">
              <Image
                src="/diamond.svg"
                alt="diamond"
                width={32}
                height={32}
                className="w-8"
              />
              <div
                className="text-[#6A302F] underline text-3xl lg:text-4xl cursor-pointer"
                onClick={() =>
                  window.open("https://kumbh.gov.in/en/travelplanner", "_blank")
                }
              >
                Tourist guide
              </div>
              <Image
                src="/diamond.svg"
                alt="diamond"
                width={32}
                height={32}
                className="w-8"
              />
            </div>
            <div className="mt-4 text-xs font-lora lg:text-sm">
              The Tourism Department Uttar Pradesh has introduced 4 walks
              <br /> showcasing the various aspects of Prayagraj heritage.
            </div>
          </div>

          <div className="mt-10">
            <div className="flex flex-row items-center justify-center gap-5 ">
              <Image
                src="/diamond.svg"
                alt="diamond"
                width={32}
                height={32}
                className="w-8"
              />
              <div
                className="text-[#6A302F] underline text-3xl lg:text-4xl cursor-pointer"
                onClick={() =>
                  window.open("https://kumbh.gov.in/en/travelplanner", "_blank")
                }
              >
                Where to stay?
              </div>
              <Image
                src="/diamond.svg"
                alt="diamond"
                width={32}
                height={32}
                className="w-8"
              />
            </div>
            <div className="mt-4 text-xs font-lora lg:text-sm">
              Tent city, hotels, public accommodations and home stay- Prayagraj{" "}
              <br /> Mahakumbh 2025 offers all types stays for you and your
              family.
            </div>
          </div>

          <div className="hidden lg:flex lg:flex-row lg:justify-center   mt-10 lg:gap-80 w-full items-center">
            <img src="sadhu new 1.svg" className="w-[400px] z-50" alt="sadhu" />
            <img
              src="sadhu new1 1.svg"
              className="w-[200px] h-[200px] lg:w-[400px] lg:h-auto z-50"
              alt="sadhu"
            />
            <img
              src="sadhu new3 1.svg"
              className="w-[280px] z-50"
              alt="sadhu"
            />
            <div className="block lg:hidden relative w-full h-64">
              <Image
                src="water1 1.svg"
                alt="water"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 w-full h-full"
              />
            </div>
            <img
              src="water1 1.svg"
              className="hidden lg:block w-full absolute  translate-y-[120px]"
              alt="water"
            />
            {/**hiding temporary */}
            {/* <Image
              src="/mask.svg"
              alt="mask"
              width={500}
              height={500}
              className="absolute w-full z-20 translate-y-[210px]"
            /> */}
          </div>
          <div className="block lg:hidden relative w-full h-[500px] mt-40">
            <div className="absolute inset-0">
              <Image
                src="water1 1.svg"
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
                src="/sadhu new 1.svg"
                className="w-[200px] lg:w-[400px] z-50"
                alt="sadhu"
              />
            </div>

            <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 ">
              <Image
                width={100}
                height={100}
                src="/sadhu new1 1.svg"
                className="w-[200px] lg:w-[400px] z-50"
                alt="sadhu"
              />
            </div>
            <div className="absolute top-1/2 right-20 transform -translate-y-1/2 translate-x-1/2">
              <Image
                width={100}
                height={100}
                src="/sadhu new3 1.svg"
                className="w-[150px] lg:w-[280px] z-50"
                alt="sadhu"
              />
            </div>
            <Image
              src="/mask.svg"
              alt="mask"
              width={500}
              height={500}
              className="absolute w-full z-20 translate-y-[470px]"
            />
          </div>
        </div>
      </div>

      {/* <div><img src='/image 21.svg' className='rotate-180 translate-y-[-20px]' /></div> */}
    </div>
  );
};

export default PlanYourPilgrimage;
