import React from "react";
import { useNavigate } from "react-router-dom";
const DiscoverCabin = (props) => {

  let navigate = useNavigate();
  let {image, placeName, cabinName, price, description, _id} = props;
  return (
    <div onClick={() => {
      navigate(`cabins/${_id}`)
    }}>
      <div className="bg-red flex h-[488px] max-w-[339px] flex-col items-center hover:cursor-pointer">
        <img src={image} alt="" />
        <div className="flex flex-col gap-[20px] bg-[#2B3030] px-[18px] py-[12px] text-white rounded-sm">
          <div className="flex flex-col gap-1">
            <p>{placeName}</p>
            <div className="flex justify-between">
              <p>{cabinName}</p>
              <p>£{price}pp</p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p>
              {description}
            </p>
            <p>82 reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverCabin;
