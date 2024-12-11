import React from "react";

const InspirationCabin = () => {
  return (
    <div>
      <div className="flex max-w-[334px] flex-col items-center h-[488px]">
        <img src="/assets/xp-3.png" alt="" />
        <div className="flex flex-col gap-[20px] bg-[#596363] px-[18px] py-[12px] text-white">
          <div className="flex flex-col gap-1">
            <p>For those who love</p>
            <div className="flex justify-between">
              <p>To Explore nature</p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p>
            Discover some of the most beautiful scenery - from the wonders of Snowdonia to the famous beauty of the Scottish Highlands.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InspirationCabin;
