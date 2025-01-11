import Image from "next/image";
import React from "react";

const PlanYourPilgrimage = () => {
  return (
    <div className=" mb-10">
      <img src="/image 21.svg" className="w-full" />
      <div className="bg-[#FED7CF] pt-10 text-center">
        <div>|| Sarvsidhpradh Kumbh ||</div>
        <div></div>
        <div
          id="plane-your-pilgrimage-section"
          className="text-4xl  text-center text-[#6A302F] mt-4 "
        >
          Majestic Acknowledgements & Testimonials
        </div>

        <div className="flex flex-row items-center mt-10 justify-center gap-20">
          <img className="w-60" src="Group 18.svg" />
          <img className="w-60" src="Group 19.svg" />
        </div>
        <div className="h-[350px]">
          <img src="image 25.svg" className="absolute left-0 z-50" />
          <img
            src="kalash 1.svg"
            className="absolute w-60 mt-20 left-[45%] z-50"
          />
          <img src="image 26.svg" className="absolute right-0 z-50" />
        </div>

        <div className="flex pt-20 flex-col items-center justify-center mt-10 rounded-t-[931px] bg-gradient-to-b from-[#FFF] to-[#FCF2E7] w-full">
          <div className="text-[#6A302F] text-4xl ">Plan Your Pilgrimage</div>
          <div className="text-sm mt-4">
            Join us in this extraordinary journey and witness the confluence of
            tradition, devotion, and enlightenment.
          </div>
          <button className="bg-[#6A302F] w-60 mt-4 text-sm text-white text-center px-4 py-2 rounded-xl">
            Explore our service offerings
          </button>

          <div className="mt-20">
            <div className="uppercase text-4xl text-[#6A302F]  underline">
              How to reach?
            </div>
            <div className="mt-4 text-sm">
              Prayagraj city is well connected to all major Cities in India via
              the Indian <br /> Railways network, Highways and Prayagraj Airport
              located in Bamrauli.
            </div>
          </div>

          <div className="mt-10">
            <div className="uppercase text-4xl text-[#6A302F]  underline">
              Tourist guide
            </div>
            <div className="mt-4 text-sm">
              The Tourism Department Uttar Pradesh has introduced 4 walks
              <br /> showcasing the various aspects of Prayagraj heritage.
            </div>
          </div>

          <div className="mt-10">
            <div className="uppercase text-4xl text-[#6A302F]  underline">
              where to stay?
            </div>
            <div className="mt-4 text-sm">
              Tent city, hotels, public accommodations and home stay- Prayagraj{" "}
              <br /> Mahakumbh 2025 offers all types stays for you and your
              family.
            </div>
          </div>

          <div className="flex flex-row justify-center   mt-10 gap-80 w-full items-center">
            <img src="sadhu new 1.svg" className="w-[400px] z-50" />
            <img src="sadhu new1 1.svg" className="w-[400px] z-50" />
            <img src="sadhu new3 1.svg" className="w-[280px] z-50" />
            <img
              src="water1 1.svg"
              className="w-full absolute  translate-y-[120px]"
            />
            <Image
              src="/mask.svg"
              alt="mask"
              width={500}
              height={500}
              className="absolute w-full z-20 translate-y-[210px]"
            />
          </div>
        </div>
      </div>

      {/* <div><img src='/image 21.svg' className='rotate-180 translate-y-[-20px]' /></div> */}
    </div>
  );
};

export default PlanYourPilgrimage;
