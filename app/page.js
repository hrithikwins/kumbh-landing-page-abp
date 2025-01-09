import DosAndDonts from "@/components/DosAndDonts";
import Enquirenow from "@/components/Enquirenow";
import Everythingyouneedtoknow from "@/components/Everythingyouneedtoknow";
import MahaKumbh from "@/components/MahaKumbh";
import MahaKumbhGallery from "@/components/MahaKumbhGallery";
import News from "@/components/News";
import TimingSlider from "@/components/TimingSlider";
import TourPackages from "@/components/TourPackages";
import Image from "next/image";

const Frame = () => {
  return (
    <div className="text-center flex justify-center z-50">
      <img src="/frame1.png" />
      <div className="absolute translate-y-[80px] text-[#FFF5E3]">
        <div className="text-[20px]">PAUSH PURNAMASI</div>
        <div className="font-semibold text-2xl">13 JANUARY 2025</div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <div className="bg-[url('/hero-bg.svg')] bg-cover bg-center h-screen">
        <div className="flex flex-row justify-between px-6 py-5">
          <div>
            <img src="/ABP.png" className="z-10 w-20" />
          </div>

          <div className="text-white text-center text-2xl">
            THE PRESTIGIOUS PRAYAGRAJ <br /> MAHAKUMBH MELA 2025
          </div>

          <div></div>
        </div>

        <div>
          <img src="cloud.svg" className="w-[20%]" />
          <div className="flex flex-row">
            <img src="land 1.svg" className="w-[45%] absolute translate-y-10" />
            <img
              src="image 7.svg"
              className="w-[38%] absolute translate-y-72"
            />
            <img
              src="image 7.svg"
              className="w-[28%] left-[14%] absolute translate-y-72"
            />
            <img
              src="flower left.svg"
              className="w-[30%] absolute translate-y-72"
            />

            <img src="land 2.svg" className="w-[45%] absolute right-0 " />
            <img
              src="image 7.svg"
              className="w-[38%] absolute right-0  translate-y-72"
            />
            <img
              src="saint frame.svg"
              className="w-[52%] absolute left-[25%] top-[10%]"
            />
          </div>
        </div>
      </div>

      {/* dates section */}

      <div className="bg-[#FFF5E3] py-10">
        <img
          src="water-hand 1.svg"
          className="absolute w-[20%] right-0 mt-40 z-40"
        />
        <img src="water-hand 2.svg" className="absolute w-[20%] mt-40 z-40" />

        <div className="flex justify-center items-center flex-col">
          <img src="new kumbh logo 1.svg" className="w-[30%]" />
          <div className="text-[#6A302F] text-center font-normal text-3xl translate-y-[-40px]">
            GET RID OF ALL YOUR SINS-
            <br />
            HOLY SNAN DATES
          </div>
        </div>

        <div className="grid grid-flow-row grid-cols-3 gap-10 px-10 z-50">
          <Frame />
          <Frame />
          <Frame />
          <Frame />
          <Frame />
          <Frame />
        </div>

        <div className="flex flex-row items-center justify-center gap-5 mt-10">
          <img src="diamond.svg" className="w-8" />
          <div className="text-[#6A302F] underline text-2xl">
            BOOK YOUR SNAN DATES
          </div>
          <img src="diamond.svg" className="w-8" />
        </div>

        <div className="border-[#87C0F0] border-t border-r border-l  mx-10 rounded-t-3xl mt-10 border-b-transparent pb-[200px]">
          <div className="flex flex-row items-center px-10 gap-10 justify-center text-center mt-10">
            <div className="text-center">
              <div className="uppercase text-[#6A302F] text-4xl">
                humanity <br /> Gathering
              </div>
              <div className="text-xs text-[#222] mt-2">
                It’s the world’s largest peaceful congregation, attracting
                millions of devotees, saints, and tourists. All coming together
                for a shared spiritual experience.
              </div>
            </div>

            <div className="text-center">
              <div className="uppercase text-[#6A302F] text-4xl">
                humanity <br /> Gathering
              </div>
              <div className="text-xs text-[#222] mt-2">
                It’s the world’s largest peaceful congregation, attracting
                millions of devotees, saints, and tourists. All coming together
                for a shared spiritual experience.
              </div>
            </div>

            <div className="text-center">
              <div className="uppercase text-[#6A302F] text-4xl">
                humanity <br /> Gathering
              </div>
              <div className="text-xs text-[#222] mt-2">
                It’s the world’s largest peaceful congregation, attracting
                millions of devotees, saints, and tourists. All coming together
                for a shared spiritual experience.
              </div>
            </div>
          </div>
        </div>

        <div>
          <img
            src="media room- tv.svg"
            className="absolute w-[450px] left-[38%] m-auto z-50 translate-y-[-150px]"
          />
          <img
            src="sadhu 1.svg"
            className="absolute w-[250px] left-[42%] m-auto z-40 translate-y-[-120px]"
          />
        </div>
        <div>
          <img src="/river.svg" className="translate-y-[-10px]" />
          <img src="/mask.svg" className="absolute translate-y-[-130px]" />
        </div>
      </div>

      {/* */}

      <TimingSlider />

      <News />

      <MahaKumbhGallery />

      <MahaKumbh />

      <DosAndDonts />

      <TourPackages/>

      <Everythingyouneedtoknow />

      <Enquirenow />
    </div>
  );
}
