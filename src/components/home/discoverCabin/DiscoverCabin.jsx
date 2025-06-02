import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { setReduxBook, unsetReduxBook } from "../../../redux/slice/bookSlice";
import { toast } from "react-toastify";
import { GiConsoleController } from "react-icons/gi";

const DiscoverCabin = (props) => {
  let navigate = useNavigate();
  let { image, placeName, cabinName, price, description, _id } = props;
  const dispatch = useDispatch();
  const [heart, setHeart] = useState("text-white");
  // function toggleHeart() {

  // useEffect(() => {
  //   const likedCabins = JSON.parse(localStorage.getItem("likedCabins")) || [];
  //   if (likedCabins.includes(_id)) {
  //     setHeart("text-red-500");
  //   }
  // }, [_id]);

  // // Toggle heart state and persist it to local storage
  // function toggleHeart() {
  //   const likedCabins = JSON.parse(localStorage.getItem("likedCabins")) || [];

  //   if (heart === "text-white") {
  //     setHeart("text-red-500");
  //     dispatch(setReduxBook(props));
  //     toast.success("cabin added");
  //     // Add cabin ID to local storage
  //     localStorage.setItem("likedCabins", JSON.stringify([...likedCabins, _id]));
  //   } else {
  //     setHeart("text-white");
  //     dispatch(unsetReduxBook(props));
  //     toast.error('cabin removed')
  //     // Remove cabin ID from local storage
  //     const updatedCabins = likedCabins.filter((id) => id !== _id);
  //     localStorage.setItem("likedCabins", JSON.stringify(updatedCabins));
  //   }
  // }

  useEffect(() => {
    const likedCabins = JSON.parse(localStorage.getItem("likedCabins")) || [];
    if (likedCabins.includes(_id)) {
      setHeart("text-red-500");
    } else {
      setHeart("text-white");
    }
  }, [_id, props]);

  // Toggle heart state and persist to local storage
  const toggleHeart = () => {
    const likedCabins = JSON.parse(localStorage.getItem("likedCabins")) || [];

    if (heart === "text-white") {
      setHeart("text-red-500");
      dispatch(setReduxBook(props));
      toast.success("Cabin added");
      localStorage.setItem(
        "likedCabins",
        JSON.stringify([...likedCabins, _id]),
      );
    } else {
      setHeart("text-white");
      dispatch(unsetReduxBook(props));
      toast.success("Cabin removed");
      const updatedCabins = likedCabins.filter((id) => id !== _id);
      localStorage.setItem("likedCabins", JSON.stringify(updatedCabins));
    }
  };

  const addToCartByHeart = (e) => {
    e.stopPropagation();
    let token = localStorage.getItem("token");
    if (token) {
      toggleHeart();
    } else {
      navigate("/login");
    }
  };

  const addToCart = (e) => {
    const likedCabins = JSON.parse(localStorage.getItem("likedCabins")) || [];

    e.stopPropagation();
    let token = localStorage.getItem("token");
    if (token) {
      if (heart === "text-white") {
        setHeart("text-red-500");
        dispatch(setReduxBook(props));
        toast.success("Cabin added");
        localStorage.setItem(
          "likedCabins",
          JSON.stringify([...likedCabins, _id]),
        );
      }
    } else {
      const updatedCabins = likedCabins.filter((id) => id !== _id);
      localStorage.setItem("likedCabins", JSON.stringify(updatedCabins));
      navigate("/login");
    }
  };

  return (
    <div>
      <div
        onClick={() => {
          navigate(`/cabins/${_id}`);
        }}
        className="bg-red relative flex w-full flex-col items-center rounded-xl hover:cursor-pointer sm:w-[340px]"
      >
        <div className="absolute right-3 top-3 flex w-[339px] justify-end">
          <div
            className="flex w-[40px] items-center justify-center rounded-md bg-[#131311]"
            onClick={(e) => {
              addToCartByHeart(e);
            }}
          >
            <CiHeart className={`text-[36px] ${heart}`} />
          </div>
        </div>
        <img
          className="h-[320px] w-full object-cover object-center"
          src={image}
          alt=""
        />
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
      <button
        className="h-10 w-full bg-[#23b20a] font-bold text-white hover:bg-[#2bc90f]"
        onClick={(e) => addToCart(e)}
      >
        Add to Book
      </button>
    </div>
  );
};

export default DiscoverCabin;
