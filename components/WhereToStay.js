import Image from 'next/image'
import Link from 'next/link'

const WhereToStay = ({title, subTitle}) => {
  return (
    <div className="mt-10">
      <div className="flex flex-row items-center justify-center gap-5 ">
        <Image
          src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/diamond.svg"
          alt="diamond"
          width={32}
          height={32}
          className="w-8 rotate-90-wait"
        />
        <Link
          href="https://kumbh.gov.in/en/travelplanner"
          target="_blank"
        >
          <div className="text-[#6A302F] underline text-xl lg:text-[32px] cursor-pointer uppercase">
            {title}
          </div>
        </Link>
        <Image
          src="https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/diamond.svg"
          alt="diamond"
          width={32}
          height={32}
          className="w-8 rotate-90-wait"
        />
      </div>
      <div className="mt-4 text-xs font-lora lg:text-sm">
        {subTitle}
      </div>
    </div>
  )
}

export default WhereToStay
