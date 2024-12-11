import React from "react";

const SearchBar = () => {
  return (
    <form className="flex flex-col gap-1 rounded-[4px] p-3 bg-white md:p-4 font-poppins font-normal text-[#565656] shadow-[0_12px_20px_0px_rgba(39,45,77,0.2)] md:gap-2 lg:flex-row lg:gap-2 lg:px-[24px] lg:py-[32px]">
      <input
        type="text"
        placeholder="I want to go"
        className="text-box bg-[#EAEAEA]"
      />
      <input type="date" className="text-box bg-[#EAEAEA]" placeholder="" />
      <input type="date" className="text-box bg-[#EAEAEA]" />
      <input
        type="number"
        placeholder="Travellers"
        className="text-box bg-[#EAEAEA]"
      />
      {/* <input
        type="submit"
        value="Find available cabins"
        className="text-box bg-[#EAEAEA]"
      /> */}

      <button className="text-box bg-[#233D2C] text-white hover:bg-[#4f6456] text-[14px] xl:text-[15px] xxl:text-[16px]">Find available cabins</button>
    </form>
  );
};

export default SearchBar;
