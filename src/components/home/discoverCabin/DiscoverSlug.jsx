import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import rootUrl from "../../../url";

const DiscoverSlug = () => {
  const [discoverCabin, setDiscoverCabin] = useState({});
  let params = useParams();

  useEffect(() => {
    axios
      .get(`${rootUrl}/api/cabins/getCabins/one/${params.slug}`)
      .then((res) => {
        setDiscoverCabin(res.data);
      });
  }, []);

  return (
    <div className="mb-4 mt-4 flex flex-col items-center justify-center">
      <div className="container mb-2 flex justify-end">
        <HashLink to="/#ourcabins" className="underline">
          Go back
        </HashLink>
      </div>
      <div className="container flex flex-col justify-center md:flex-row">
        <img src={`${rootUrl}${discoverCabin.image}`} alt="" />
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
