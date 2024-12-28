import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { setReduxBook, unsetReduxBook } from "../../../redux/slice/bookSlice";

const DiscoverCabin = (props) => {
  let navigate = useNavigate();
  let { image, placeName, cabinName, price, description, _id } = props;
  const dispatch = useDispatch();
  const [heart, setHeart] = useState("text-white");
  // function toggleHeart() {
  //   if (heart == "text-white") {
  //     setHeart("text-red-500");
  //     dispatch(setReduxBook(props));
  //   } else {
  //     setHeart("text-white");
  //     dispatch(unsetReduxBook(props));
  //   }
  // }
  useEffect(() => {
    const likedCabins = JSON.parse(localStorage.getItem("likedCabins")) || [];
    if (likedCabins.includes(_id)) {
      setHeart("text-red-500");
    }
  }, [_id]);

  // Toggle heart state and persist it to local storage
  function toggleHeart() {
    const likedCabins = JSON.parse(localStorage.getItem("likedCabins")) || [];

    if (heart === "text-white") {
      setHeart("text-red-500");
      dispatch(setReduxBook(props));
      // Add cabin ID to local storage
      localStorage.setItem("likedCabins", JSON.stringify([...likedCabins, _id]));
    } else {
      setHeart("text-white");
      dispatch(unsetReduxBook(props));
      // Remove cabin ID from local storage
      const updatedCabins = likedCabins.filter((id) => id !== _id);
      localStorage.setItem("likedCabins", JSON.stringify(updatedCabins));
    }
  }
  return (
    <div
      onClick={() => {
        navigate(`cabins/${_id}`);
      }}
    >
      <div className="bg-red flex h-[488px] max-w-[339px] flex-col items-center hover:cursor-pointer">
        <div className="absolute flex w-[339px] justify-end">
          <div
            className="mx-4 my-4 flex h-[40px] w-[40px] items-center justify-center rounded-md bg-[#131311]"
            onClick={(e) => {
              e.stopPropagation();
              let token = localStorage.getItem("token");
              if (token) {
                toggleHeart();
              } else {
                navigate("/login");
              }
            }}
          >
            <CiHeart className={`text-[36px] ${heart}`} />
          </div>
        </div>
        <img src={image} alt="" />
        <div className="flex flex-col gap-[20px] rounded-sm bg-[#2B3030] px-[18px] py-[12px] text-white">
          <div className="flex flex-col gap-1">
            <p>{placeName}</p>
            <div className="flex justify-between">
              <p>{cabinName}</p>
              <p>£{price}pp</p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p>{description}</p>
            <p>82 reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverCabin;
