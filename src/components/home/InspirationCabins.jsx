import React from "react";
import InspirationCabin from "./InspirationCabin";

const InspirationCabins = () => {
  return (
    <div>
      <div className="mt-[20px] rounded-[4px] bg-[#F2FAF9] py-[18px] sm:py-[22px] md:py-[26px] lg:py-[32px] xl:py-[36px] xxl:py-[44px]">
        <div className="container flex flex-col gap-4">
          <p className="font-serif text-[16px] font-bold">
            Inspiration for your next getaway
          </p>
          <p className="font-poppins text-[12px]">
            We've curated some amazing experiences to help you find your next
            getaway.
          </p>
          <div className="grid place-items-center gap-2 md:grid-cols-2 md:justify-between lg:grid-cols-3">
            {[1, 2, 3].map((el) => {
              return <InspirationCabin />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InspirationCabins;
