import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setReduxSearch } from "../../redux/slice/searchSlice";
import { useLocation, useNavigate } from "react-router-dom";

const SearchBar = () => {

let navigate = useNavigate();
  const dispatch = useDispatch();
  function handleSearch(e) {

    e.preventDefault();

    let formData = {
      cabinOrPlace: e.target.cabinOrPlace.value,
    };
    let url = "http://localhost:8000/api/cabins/cabins/search";

    axios
      .post(url, formData)
      .then((res) => {
        console.log(res);
        dispatch(setReduxSearch(res.data))  
        navigate("/cabins/searchedcabins")      
      })
      .catch((err) => console.log(err));
  }

  return (
    <form
      onSubmit={handleSearch}
      className="flex flex-col gap-1 rounded-[4px] bg-white p-3 font-poppins font-normal text-[#565656] shadow-[0_12px_20px_0px_rgba(39,45,77,0.2)] md:gap-2 md:p-4 lg:flex-row lg:gap-2 lg:px-[24px] lg:py-[32px]"
    >
      <input
        type="text"
        placeholder="I want to go"
        className="text-box bg-[#EAEAEA]"
        name="cabinOrPlace"
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

      <button className="text-box bg-[#233D2C] text-[14px] text-white hover:bg-[#4f6456] xl:text-[15px] xxl:text-[16px]">
        Find available cabins
      </button>
    </form>
  );
};

export default SearchBar;
