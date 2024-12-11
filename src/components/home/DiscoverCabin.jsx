import React from "react";

const DiscoverCabin = () => {
  return (
    <div>
      <div className="bg-red flex h-[488px] max-w-[339px] flex-col items-center rounded-md">
        <img src="/assets/cabin-1.png" alt="" />
        <div className="flex flex-col gap-[20px] bg-[#2B3030] px-[18px] py-[12px] text-white">
          <div className="flex flex-col gap-1">
            <p>Hampshire · England</p>
            <div className="flex justify-between">
              <p>Rustic country retreat</p>
              <p>£210pp</p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p>
              Step outside and take in the stunning views. Our cabin sits on a
              quiet and secluded property, providing the perfect setting for a
              peaceful retreat.
            </p>
            <p>82 reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverCabin;
