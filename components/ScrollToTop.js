"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.querySelector(".hero-section")?.clientHeight || 0;
      if (window.scrollY > heroHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showButton && (
        <div className="fixed bottom-40 right-5 lg:bottom-24 lg:right-10 z-[999]">
          <Link href="#top">
            <div className="bg-[#F00000] w-10 h-10 lg:w-12 lg:h-12 flex justify-center items-center rounded-[50%]">
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
      )}
    </>
  );
};

export default ScrollToTopButton;
