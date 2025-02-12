import React from "react";

const FindCabin = () => {
  return (
    <div className="bg-[#F2FAF9] py-[32px] px-[40px] sm:py-[36px] sm:px-[48px] md:py-[44px] md:px-[56px] lg:py-[52px] lg:px-[68px] xl:py-[64px] xl:px-[82px] xxl:py-[78px] xxl:px-[100px]"> 
      <div className="container h-[260px] bg-[url('/assets/bg-image.png')] bg-cover bg-center bg-no-repeat text-white sm:h-[320px] md:h-[384px] md:p-12 lg:h-[460px] lg:p-14 xl:h-[552px] flex items-center">
        <div className="flex flex-col justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-7">
          <p className="font-serif text-[18px] font-bold sm:text-[22px] md:text-[26px] lg:text-[32px] xl:text-[36px] xxl:text-[44px]">
            Nourish the mind, body, and spirit.
          </p>
          <p className="font-poppins text-[12px] font-normal md:text-[14px] xl:[16px]">
            Many people find that the combination of being in a peaceful natural{" "}
            <br /> setting and engaging in activities that nourish the mind,
            body, and spirit <br /> leave them feeling rejuvenated and
            refreshed.
          </p>

          <button className="w-[180px] sm:w-[192px] md:w-[200px] lg:w-[210px] xl:w-[220px] rounded-[4px] bg-[#F5B963] px-[24px] py-[8px] font-poppins text-[12px] text-black md:text-[14px] xl:text-[16px]">
            Find available cabins
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindCabin;
