export default function BookHeadingCard({heading, subHeading}) {
  return (
    <>
      <div className="text-center">
        <div className="uppercase text-[#6A302F] text-[2.5rem]">
{heading}
        </div>
        <div className="text-[0.8rem] text-[#222] mt-2 font-lora max-w-sm">
          {subHeading}
        </div>
      </div>

    </>
  );
}
