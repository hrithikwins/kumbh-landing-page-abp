import React from "react";
import Image from "next/image";

const MahaKumbh = () => {
  return (
    <div>
      <div>
        <Image
          src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/image 21.svg"
          alt="Maha Kumbh"
          layout="responsive"
          width={1920}
          height={1080}
          className="w-full"
        />
      </div>
      <div className="bg-[#FED7CF] grid grid-flow-row grid-cols-1 lg:grid-cols-3 gap-20 px-10 py-20">
        <div className="text-center">
          <div className="text-sm text-[#B5441B] font-lora">#सुगम महाकुम्भ</div>
          <div className="uppercase mt-4 text-3xl lg:text-4xl">
            Sugam Maha <br /> Kumbh
          </div>
          <div className="mt-4 text-xs lg:text-sm font-lora">
            Step into the divine aura of Maha Kumbh Mela 2025, where Sugam Kumbh
            enhances your experience with unmatched accessibility and
            convenience. Be part of this blissful journey, where every moment is
            thoughtfully designed to ensure your comfort, ease, and deep
            connections with the sacred traditions of the Maha Kumbh Mela.
          </div>
        </div>

        <div className="text-center">
          <div className="text-sm text-[#B5441B] font-lora">
            #सांस्कृतिक महाकुम्भ
          </div>
          <div className="uppercase mt-4 text-3xl lg:text-4xl">
            Sanskritik <br /> Maha Kumbh
          </div>
          <div className="mt-4 text-xs lg:text-sm font-lora">
            Embark on a pilgrimage of spiritual enlightenment at Maha Kumbh Mela
            2025—where every step leads to Sanskritik Maha Kumbh; it's a
            celebration of India's diverse cultural heritage. Experience the
            soul-stirring rhythms of classical music echoing across the ghats
            and witness traditional dance forms.
          </div>
        </div>

        <div className="text-center">
          <div className="text-sm text-[#B5441B] font-lora">
            #स्वच्छ महाकुम्भ
          </div>
          <div className="uppercase mt-4 text-3xl lg:text-4xl">
            Swachh Maha <br /> Kumbh
          </div>
          <div className="mt-4 text-xs lg:text-sm font-lora">
            Immerse yourself in the spiritual purity of Maha Kumbh Mela 2025,
            where every step is embraced by cleanliness and sanctity. Join us in
            creating a Swachh Maha Kumbh, where the sacred waters flow through a
            pristine environment, enhancing the divine experience.
          </div>
        </div>
      </div>
      <div>
        <Image
          src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/image 21.svg"
          alt="Maha Kumbh"
          layout="responsive"
          width={1920}
          height={1080}
          className="rotate-180 w-full translate-y-[-20px]"
        />
      </div>
    </div>
  );
};

export default MahaKumbh;
