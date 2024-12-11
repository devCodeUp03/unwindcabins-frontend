import React from "react";

const CabinGateway = () => {
  return (
    <div className=" container flex flex-col items-center lg:flex-row">
      <div className=" py-[18px] sm:py-[22px] md:py-[26px] lg:py-[32px] xl:py-[36px] xxl:py-[44px]">
      <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-5">     
        <p className="text-[#22223c] text-[14px] font-serif font-bold sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] xxl:text-[28px]">Get ready to unwind</p>
        <p className="text-[#47475f] text-[12px] md:text-[14px] font-poppins font-normal">
          A cabin getaway can be a wonderful way to relax and reconnect with
          nature. Many cabin rentals are located in beautiful, secluded areas,
          surrounded by trees and other natural beauty.
        </p>
        <p className="text-[#47475f] text-[12px] md:text-[14px] font-poppins font-normal">
          A cabin getaway can be a wonderful way to escape the hustle and bustle
          of daily life and reconnect with nature.
        </p>
        <p className="text-[#47475f] text-[12px] md:text-[14px] font-poppins font-semibold">Learn more icon</p>
      </div>
      </div>
      <img src="/assets/video-card.png" alt="" />
    </div>
  );
};

export default CabinGateway;
