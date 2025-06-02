import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Aboutus = () => {
  // throw new Error("about us error!");
  const [isLoading, setIsLoading] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="container my-4 flex flex-col gap-4 py-10 lg:flex-row lg:gap-2">
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
      {/* {
      <img
        src="/assets/aboutuscabin-2.jp"
        alt=""
        className="w-full lg:w-1/3"
      /> ||  <Skeleton height={100} width={100} />
      } */}
      <div className="w-full lg:w-1/3">
        {!imageLoaded && <Skeleton height={480} />}
        <img
          src="/assets/aboutuscabin-2.jpg"
          alt="about us"
          className={`w-full  duration-300 ${imageLoaded ? "opacity-100" : "absolute opacity-0"}`}
          onLoad={() => setImageLoaded(true)}
        />
      </div>
    </div>
  );
};

export default Aboutus;
