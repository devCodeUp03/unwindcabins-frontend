import React from "react";
import { DiBackbone } from "react-icons/di";

const Aboutus = () => {
  return (
    <div className="container my-4 flex flex-col gap-4 lg:flex-row lg:gap-2">
      <div className="flex-1">
        <div className="flex flex-1 flex-col">
          <div className="font-semi-bold mb-6 text-[24px] lg:mb-10 lg:text-[40px]">
            About Us
          </div>
          <p className="text-[18px] font-thin lg:text-[24px]">
            At UnwindCabins, we help you disconnect and find peace in nature.
            Whether it's a cozy mountain retreat or a serene lakeside escape, we
            offer handpicked cabins that are perfect for unwinding.
            <br /> <br /> Our mission is simple: to provide you with a seamless
            and unforgettable getaway. With easy booking and cabins in the most
            peaceful spots, your next adventure starts here. <br /> <br /> Come
            find your perfect cabin, relax, and create memories that last a
            lifetime.
          </p>
        </div>
      </div>
      <img
        src="/assets/aboutuscabin-2.jpg"
        alt=""
        className="w-full lg:w-1/3"
      />
    </div>
  );
};

export default Aboutus;
