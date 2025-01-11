import DosAndDonts from "@/components/DosAndDonts";
import Enquirenow from "@/components/Enquirenow";
import Everythingyouneedtoknow from "@/components/Everythingyouneedtoknow";
import Footer from "@/components/Footer";
import MahaKumbh from "@/components/MahaKumbh";
import MahaKumbhGallery from "@/components/MahaKumbhGallery";
import News from "@/components/News";
import PlanYourPilgrimage from "@/components/PlanYourPilgrimage";
import TimingSlider from "@/components/TimingSlider";
import TourPackages from "@/components/TourPackages";
import Image from "next/image";
import Link from "next/link";

const Frame = () => {
  return (
    <div className="text-center flex justify-center z-50">
      <Image src="/frame1.png" alt="frame1" width={500} height={500} />
      <div className="absolute translate-y-[80px] text-[#FFF5E3]">
        <div className="text-[20px]">PAUSH PURNAMASI</div>
        <div className="font-semibold text-2xl">13 JANUARY 2025</div>
      </div>
    </div>
  );
};

export default function Home() {
  const navBarItems = [
    {
      name: "About",
      link: "#about-section",
    },
    {
      name: "History",
      link: "#",
    },
    {
      name: "Plane Your Pilgrimage",
      link: "#plane-your-pilgrimage-section",
    },
    {
      name: "ABP Coverage",
      link: "#abp-news-coverage-section",
    },
    {
      name: "Do's and Don't",
      link: "#dos-and-donts-section",
    },
    {
      name: "Tour Packages",
      link: "#tour-package-section",
    },
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
  return (
    <>
      {/** nav bar */}
      <div className="fixed bottom-24 right-0 left-0 flex justify-center items-center text-[#6A302F] text-base font-medium z-[999]">
        <div className="bg-[#FFF5E3CC] flex gap-10 w-auto h-auto rounded-2xl py-3 px-4">
          {navBarItems.map((item, index) => (
            <div key={index} className="flex justify-center items-center">
              <Link href={item.link}>{item.name}</Link>
            </div>
          ))}
          <div className="flex justify-center items-center gap-5">
            {langOptions.map((item, index) => (
              <div key={index} className="flex justify-center items-center">
                <Link href={item.link}>{item.name}</Link>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center">
            <button className="rounded-2xl py-2 px-4 bg-[#6A302F] text-white">
              Enter Mahakumbh Mela
            </button>
          </div>
        </div>
        <div className="ml-2 flex">
          <div className="w-16 h-16">
            <Image
              src="/icons/live-yt.svg"
              alt="help-icon"
              width={100}
              height={100}
              className="object-contain w-full h-full"
            />
          </div>
          <div className="w-16 h-16">
            <Image
              src="/icons/help.svg"
              alt="help-icon"
              width={100}
              height={100}
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </div>
      <div className="overflow-x-hidden">
        <div className="bg-[url('/hero-bg.svg')] bg-cover bg-center h-screen">
          <div className="flex flex-row justify-between px-6 py-5">
            <div className="flex flex-row items-center gap-6">
              <Image
                src="/ABP.png"
                alt="ABP logo"
                width={80}
                height={80}
                className="z-10 w-20"
              />
              <Image
                src="/new kumbh logo 1.svg"
                alt="Kumbh logo"
                width={80}
                height={80}
                className="z-10 w-20 hover:scale-125 cursor-pointer"
              />
            </div>

            <div className="text-white text-center text-2xl">
              THE PRESTIGIOUS PRAYAGRAJ <br /> MAHAKUMBH MELA 2025
            </div>

            <div className="relative w-40 h-32">
              <div className="absolute inset-0">
                <Image
                  src="/icons/day-to-go.svg"
                  alt="day-to-go-icon"
                  width={100}
                  height={100}
                  className="object-contain h-full w-full"
                />
              </div>
              <div className="absolute inset-0">
                <Image
                  src="/gifs/stars.gif"
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
              src="/cloud.svg"
              alt="cloud"
              width={500}
              height={500}
              className="w-[20%]"
            />
            <Image
              src="/image 12.svg"
              alt="image 12"
              width={500}
              height={500}
              className="w-[25%] translate-y-[-220px] absolute right-0"
            />
            <div className="flex flex-row">
              <Image
                src="/land 1.svg"
                alt="land 1"
                width={500}
                height={500}
                className="w-[45%] absolute translate-y-10"
              />
              <Image
                src="/image 7.svg"
                alt="image 7"
                width={500}
                height={500}
                className="w-[38%] absolute translate-y-72"
              />
              <Image
                src="/image 7.svg"
                alt="image 7"
                width={500}
                height={500}
                className="w-[32%] left-[14%] absolute translate-y-72"
              />
              <Image
                src="/image 6.svg"
                alt="image 6"
                width={500}
                height={500}
                className="w-[35%] left-[40%] z-40 absolute translate-y-[450px]"
              />
              <Image
                src="/image 8.svg"
                alt="image 8"
                width={500}
                height={500}
                className="w-[32%] left-[30%] z-30 absolute translate-y-[400px]"
              />
              <Image
                src="/flower left.svg"
                alt="flower left"
                width={500}
                height={500}
                className="w-[30%] absolute translate-y-60"
              />
              <Image
                src="/flower right.svg"
                alt="flower right"
                width={500}
                height={500}
                className="w-[30%] absolute translate-y-48 right-0 z-40"
              />
              <Image
                src="/land 2.svg"
                alt="land 2"
                width={500}
                height={500}
                className="w-[45%] absolute right-0"
              />
              <Image
                src="/image 12.svg"
                alt="image 12"
                width={500}
                height={500}
                className="w-[48%] absolute right-0 translate-y-60"
              />
              <div className="w-[52%] absolute left-[25%] top-[10%]">
                <Image
                  src="/saint frame.svg"
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

        <div className="bg-[#FFF5E3] py-10 pt-32">
          <Image
            src="/water-hand 1.svg"
            alt="water hand 1"
            width={500}
            height={500}
            className="absolute w-[20%] right-0 mt-40 z-40"
          />
          <Image
            src="/water-hand 2.svg"
            alt="water hand 2"
            width={500}
            height={500}
            className="absolute w-[20%] mt-40 z-40"
          />

          <div className="flex justify-center items-center flex-col">
            <Image
              src="/new kumbh logo 1.svg"
              alt="new kumbh logo"
              width={500}
              height={500}
              className="w-[30%]"
            />
            <div
              id="about-section"
              className="text-[#6A302F] text-center font-normal text-3xl translate-y-[-40px]"
            >
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
            <Image
              src="/diamond.svg"
              alt="diamond"
              width={32}
              height={32}
              className="w-8"
            />
            <div className="text-[#6A302F] underline text-2xl">
              BOOK YOUR SNAN DATES
            </div>
            <Image
              src="/diamond.svg"
              alt="diamond"
              width={32}
              height={32}
              className="w-8"
            />
          </div>

          <div className="border-[#87C0F0] border-t border-r border-l mx-10 rounded-t-3xl mt-10 border-b-transparent pb-[200px]">
            <div className="flex flex-row items-center px-10 gap-10 justify-center text-center mt-10">
              <div className="text-center">
                <div className="uppercase text-[#6A302F] text-4xl">
                  humanity <br /> Gathering
                </div>
                <div className="text-xs text-[#222] mt-2">
                  It’s the world’s largest peaceful congregation, attracting
                  millions of devotees, saints, and tourists. All coming
                  together for a shared spiritual experience.
                </div>
              </div>

              <div className="text-center">
                <div className="uppercase text-[#6A302F] text-4xl">
                  humanity <br /> Gathering
                </div>
                <div className="text-xs text-[#222] mt-2">
                  It’s the world’s largest peaceful congregation, attracting
                  millions of devotees, saints, and tourists. All coming
                  together for a shared spiritual experience.
                </div>
              </div>

              <div className="text-center">
                <div className="uppercase text-[#6A302F] text-4xl">
                  humanity <br /> Gathering
                </div>
                <div className="text-xs text-[#222] mt-2">
                  It’s the world’s largest peaceful congregation, attracting
                  millions of devotees, saints, and tourists. All coming
                  together for a shared spiritual experience.
                </div>
              </div>
            </div>
          </div>

          <div>
            <Image
              src="/media room- tv.svg"
              alt="media room tv"
              width={420}
              height={420}
              className="absolute w-[420px] left-[38%] m-auto z-50 translate-y-[-150px]"
            />
            <Image
              src="/sadhu 1.svg"
              alt="sadhu"
              width={250}
              height={250}
              className="absolute w-[250px] left-[42%] m-auto z-40 translate-y-[-120px]"
            />
          </div>
        </div>
        <div>
          <Image
            src="/river.svg"
            alt="river"
            width={500}
            height={500}
            className="translate-y-[-10px] w-full"
          />
          <Image
            src="/mask.svg"
            alt="mask"
            width={500}
            height={500}
            className="absolute w-full translate-y-[-130px]"
          />
        </div>

        {/* */}

        <TimingSlider />

        {/* Plane your pilgrimage section */}

        <PlanYourPilgrimage />
        {/**ABP News Coverage section */}
        <News />

        <MahaKumbhGallery />

        <MahaKumbh />

        {/**Do's and Don'ts section */}

        <DosAndDonts />

        {/**Tour Packages section */}

        <TourPackages />

        {/*Useful Links section */}

        <Everythingyouneedtoknow />

        <Enquirenow />

        <Footer />
      </div>
    </>
  );
}
