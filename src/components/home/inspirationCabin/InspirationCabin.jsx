import React from "react";
import { useNavigate } from "react-router-dom";

const InspirationCabin = (props) => {
  const navigate = useNavigate();

  let { image, wish, action, description, _id } = props;
  return (
    <div
      onClick={() => {
        navigate(`/inspirationCabins/${_id}`);
      }}
      className="flex w-full flex-col items-center hover:cursor-pointer sm:w-[340px]"
    >
      <div className="flex max-w-[334px] flex-col items-center">
        {" "}
        <img src={image} alt="" className="w-full" />
        <div className="flex min-h-[200px] flex-col gap-[20px] bg-[#596363] px-[18px] py-[12px] text-white">
          <div className="flex-gro">
            <div className="flex flex-col gap-1">
              <p>{wish}</p>
              <div className="flex justify-between">
                <p>{action}</p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <p className="flex flex-grow">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InspirationCabin;
