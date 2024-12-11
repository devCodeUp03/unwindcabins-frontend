import React from "react";

const PurpleWoman = () => {
  return (
    <div className="flex h-[260px] items-center bg-[url('/assets/purple-woman.png')] p-10 sm:h-[320px] md:h-[384px] md:p-12 lg:h-[460px] lg:p-14 xl:h-[552px] xl:justify-end xl:p-16 xxl:h-[664px]">
      <div className=" flex flex-col gap-2 md:gap-3 lg:gap-4 xl:gap-5">
        <p className="font-serif text-[18px] font-bold text-white sm:text-[22px] md:text-[26px] lg:text-[32px] xl:text-[36px] xxl:text-[44px]">
          A truly wonderful experience
        </p>
        <p className="font-poppins text-[12px] font-normal text-white md:text-[14px]">
          Brilliant for anyone looking to get away from the hustle and <br />
          bustle of city life or detox from their tech for a few days. <br /> I
          could have stayed another week!
        </p>
        <p className="font-poppins text-[12px] font-normal text-white md:text-[14px]">
          They really have thought about everything here down to the <br />
          finest details.
        </p>
        <p className="md:text-[14px]font-poppins text-[12px] font-normal text-white md:text-[14px]">
          01 Jan 2023
        </p>
      </div>
    </div>
  );
};

export default PurpleWoman;
