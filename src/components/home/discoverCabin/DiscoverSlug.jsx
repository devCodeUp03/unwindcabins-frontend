import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const DiscoverSlug = () => {
  const [discoverCabin, setDiscoverCabin] = useState({});
  let params = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/cabins/getCabins/one/${params.slug}`)
      .then((res) => {
        setDiscoverCabin(res.data);
      });
  }, []);

  return (
    <div className="mb-4 mt-4 flex flex-col items-center justify-center">
      <div className="flex justify-end container mb-2">
        <HashLink to="/#ourcabins" className="underline">
          Go back
        </HashLink>
      </div>
      <div className="container flex flex-col justify-center md:flex-row">
        <img src={`http://localhost:8000${discoverCabin.image}`} alt="" />
        <div className="flex flex-col gap-[20px] rounded-sm bg-[#2B3030] px-[18px] py-[12px] text-white md:rounded-none">
          <p>82 reviews</p>
          <p>£{discoverCabin.price}pp</p>
          <p>{discoverCabin.description}</p>
          <p>{discoverCabin.placeName}</p>
          <p>{discoverCabin.cabinName}</p>
        </div>
      </div>
    </div>
  );
};

export default DiscoverSlug;
