import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { HashLink } from "react-router-hash-link";

const CabinDetail = () => {
  let { id } = useParams();
  const [cabin, setCabin] = useState({});

  const url = `http://localhost:8000/api/cabins/getCabins/one/${id}`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCabin(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="mb-4 mt-4 flex flex-col items-center justify-center">
      <div className="container mb-2 flex justify-end">
        <HashLink to="/admin" className="underline">
          Go back
        </HashLink>
      </div>
      <div className="container flex flex-col justify-center md:flex-row">
        <img src={`http://localhost:8000${cabin.image}`} alt="" />
        <div className="flex flex-col gap-[20px] rounded-sm bg-[#2B3030] px-[18px] py-[12px] text-white md:rounded-none">
          <p>82 reviews</p>
          <p>£{cabin.price}pp</p>
          <p>{cabin.description}</p>
          <p>{cabin.placeName}</p>
          <p>{cabin.cabinName}</p>
        </div>
      </div>
    </div>
  );
};

export default CabinDetail;
