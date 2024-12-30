import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DiscoverCabin from "./discoverCabin/DiscoverCabin";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const SearchedCabins = () => {
  let searchedCabins = useSelector((store) => store.search.value);

  return (
    <div className="container my-10">
      {
        <div className="mb-10 flex justify-end">
          <Link to="/" className="justify-end underline">
            Go back
          </Link>
        </div>
      }

      {searchedCabins.length === 0 ? (
        <div className="flex items-center justify-center p-10 text-[20px] md:text-[28p]">
          No such cabins found
        </div>
      ) : (
        <>
          <div className="grid place-items-center gap-2 md:grid-cols-2 md:justify-between lg:grid-cols-3">
            {searchedCabins.map((el) => {
              return (
                <DiscoverCabin
                  _id={el._id}
                  image={"http://localhost:8000" + el.image}
                  placeName={el.placeName}
                  cabinName={el.cabinName}
                  price={el.price}
                  description={el.description}
                  key={el._id}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default SearchedCabins;
